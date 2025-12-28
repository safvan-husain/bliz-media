import { useRef, useEffect, useState, useCallback } from "react";
import { useMotionValue, MotionValue } from "framer-motion";

interface UseScrollLockAnimationConfig {
    /**
     * The virtual height in pixels representing the scroll distance 
     * required to go from 0% to 100% progress.
     * Higher value = Slower animation (longer scroll duration).
     * Default: 1000
     */
    scrollLength?: number;

    /**
     * Multiplier for mobile touch events to adjust feel.
     * Default: 2 (Touch is usually faster/less precise)
     */
    mobileMultiplier?: number;
}

export function useScrollLockAnimation({
    scrollLength = 1000,
    mobileMultiplier = 2
}: UseScrollLockAnimationConfig = {}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isLockedRef = useRef(false);
    const [isLocked, setIsLocked] = useState(false);
    const prefersReducedMotion = useRef(false);

    // Progress value (0 to 1)
    const progress = useMotionValue(0);

    // Derived sensitivity from scrollLength
    // progress = delta * sensitivity
    // 1 = scrollLength * sensitivity => sensitivity = 1 / scrollLength
    const sensitivity = 1 / scrollLength;
    const touchSensitivity = sensitivity * mobileMultiplier;

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        prefersReducedMotion.current = media.matches;
    }, []);

    // Lock/unlock scroll helpers
    const lockScroll = useCallback(() => {
        if (!isLockedRef.current && !prefersReducedMotion.current) {
            // Snap the section to the top of the viewport
            if (sectionRef.current) {
                // We use 'nearest' or 'start' depending on behavior, 
                // but strictly 'start' ensures it covers the screen if it's h-screen.
                sectionRef.current.scrollIntoView({ behavior: "auto", block: "start" });
            }

            isLockedRef.current = true;
            setIsLocked(true);
            document.body.style.overflow = "hidden";
        }
    }, []);

    const unlockScroll = useCallback(() => {
        if (isLockedRef.current) {
            isLockedRef.current = false;
            setIsLocked(false);
            document.body.style.overflow = "";
        }
    }, []);

    const snapProgressToNearestEdge = useCallback(() => {
        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // If element is above viewport, we theoretically passed it -> 100%
        if (rect.bottom <= 0) {
            progress.set(1);
            return;
        }

        // If element is below viewport, we are before it -> 0%
        if (rect.top >= viewportHeight) {
            progress.set(0);
        }
    }, [progress]);

    // Check if section is in viewport using IntersectionObserver
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isFullyVisible = entry.intersectionRatio >= 0.95;
                const isOutOfView = entry.intersectionRatio < 0.1;

                if (isFullyVisible && !prefersReducedMotion.current) {
                    // Lock when section is fully visible
                    lockScroll();
                } else if (isOutOfView) {
                    // Section out of view - unlock and snap progress.
                    unlockScroll();
                    snapProgressToNearestEdge();
                }
            },
            {
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.95, 1],
                rootMargin: "0px"
            }
        );

        observer.observe(el);

        // Initial check mechanism
        const checkInitial = () => {
            requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                // Heuristic: if it looks like it's taking up the screen
                const isInView = rect.top <= 50 && rect.bottom >= (viewportHeight - 50);
                if (isInView && !prefersReducedMotion.current) {
                    lockScroll();
                }
            });
        };

        const timeoutId = setTimeout(checkInitial, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
            // Ensure we unlock on unmount
            unlockScroll();
        };
    }, [lockScroll, snapProgressToNearestEdge, unlockScroll]);


    // Handle wheel events (desktop)
    const handleWheel = useCallback((e: WheelEvent) => {
        if (!isLockedRef.current || prefersReducedMotion.current) {
            return;
        }

        const delta = e.deltaY;
        const current = progress.get();

        // Prevent default and hijack scroll
        e.preventDefault();
        e.stopPropagation();

        const next = Math.min(Math.max(current + delta * sensitivity, 0), 1);
        progress.set(next);

        // Logic found in previous implementation: 
        // Only unlock if at boundaries AND scrolling away from component content

        // Scrolling UP at 0%
        if (next <= 0 && delta < 0) {
            progress.set(0);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Scrolling DOWN at 100%
        if (next >= 1 && delta > 0) {
            progress.set(1);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }
    }, [progress, unlockScroll, sensitivity]);

    // Handle touch events (mobile)
    const touchStartY = useRef(0);
    const isTouching = useRef(false);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (!isLockedRef.current || prefersReducedMotion.current) return;
        isTouching.current = true;
        touchStartY.current = e.touches[0].clientY;
    }, []);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isLockedRef.current || !isTouching.current || prefersReducedMotion.current) return;

        e.preventDefault();
        e.stopPropagation();

        const currentY = e.touches[0].clientY;
        const delta = touchStartY.current - currentY; // Drag up = positive delta = scroll down
        const current = progress.get();

        const next = Math.min(Math.max(current + delta * touchSensitivity, 0), 1);
        progress.set(next);

        touchStartY.current = currentY;

        // Scrolling UP (delta < 0) at 0%
        if (next <= 0 && delta < 0) {
            progress.set(0);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Scrolling DOWN (delta > 0) at 100%
        if (next >= 1 && delta > 0) {
            progress.set(1);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }
    }, [progress, unlockScroll, touchSensitivity]);

    const handleTouchEnd = useCallback(() => {
        isTouching.current = false;
        touchStartY.current = 0;
    }, []);

    // Attach event listeners
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        el.addEventListener("wheel", handleWheel, { passive: false });
        el.addEventListener("touchstart", handleTouchStart, { passive: false });
        el.addEventListener("touchmove", handleTouchMove, { passive: false });
        el.addEventListener("touchend", handleTouchEnd);

        return () => {
            el.removeEventListener("wheel", handleWheel);
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchmove", handleTouchMove);
            el.removeEventListener("touchend", handleTouchEnd);
        };
    }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

    return {
        sectionRef,
        progress,
        isLocked
    };
}
