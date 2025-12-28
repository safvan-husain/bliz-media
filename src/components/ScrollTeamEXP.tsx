import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ScrollTeamEXP() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isLockedRef = useRef(false);
    const [isLocked, setIsLocked] = useState(false);
    const prefersReducedMotion = useRef(false);

    // Progress value (0 to 1, representing 0-100%)
    const progress = useMotionValue(0);
    const smoothProgress = progress; // Removed useSpring as requested to debug timing

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        prefersReducedMotion.current = media.matches;
    }, []);

    // Lock/unlock scroll helpers
    const lockScroll = useCallback(() => {
        if (!isLockedRef.current && !prefersReducedMotion.current) {
            // Snap to top to ensure full coverage
            if (sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: "auto", block: "start" });
            }

            const currentPerc = Math.round(progress.get() * 100);
            console.log(`[ScrollTeamEXP] Scroll Hijacked (Locked) - Progress: ${currentPerc}%`);
            isLockedRef.current = true;
            setIsLocked(true);
            document.body.style.overflow = "hidden";
        }
    }, [progress]);

    const unlockScroll = useCallback(() => {
        if (isLockedRef.current) {
            const currentPerc = Math.round(progress.get() * 100);
            console.log(`[ScrollTeamEXP] Scroll Unhijacked (Unlocked) - Progress: ${currentPerc}%`);
            isLockedRef.current = false;
            setIsLocked(false);
            document.body.style.overflow = "";
        }
    }, [progress]);

    const snapProgressToNearestEdge = useCallback(() => {
        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.bottom <= 0) {
            progress.set(1);
            return;
        }

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
                    // Always lock when section is visible, regardless of progress
                    lockScroll();
                } else if (isOutOfView) {
                    // Section out of view - unlock and snap progress to the edge we left from.
                    // This prevents progress from resetting to 0 when you scroll past the section toward the footer.
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

        // Initial check
        const checkInitial = () => {
            requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
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
        const animationProgress = current * 100; // 0-100%

        // Prevent default and hijack scroll first
        e.preventDefault();
        e.stopPropagation();

        const sensitivity = 0.0015;
        const next = Math.min(Math.max(current + delta * sensitivity, 0), 1);
        progress.set(next);

        // Rigid Scroll Unhijack Rule:
        // Only unlock when progress is EXACTLY 0% (scrolling up) or 100% (scrolling down).

        // Unlock only if we're at exactly 0% and trying to scroll up
        if (next <= 0 && delta < 0) {
            progress.set(0);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Unlock only if we're at exactly 100% and trying to scroll down
        if (next >= 1 && delta > 0) {
            progress.set(1);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Keep locked for everything else (0% to 100%)
    }, [progress, unlockScroll]);

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
        const delta = touchStartY.current - currentY;
        const current = progress.get();

        const sensitivity = 0.003;
        const next = Math.min(Math.max(current + delta * sensitivity, 0), 1);
        progress.set(next);

        touchStartY.current = currentY;

        // Rigid Scroll Unhijack Rule:
        // Only unlock when progress is EXACTLY 0% (scrolling up) or 100% (scrolling down).

        // Unlock only if we're at exactly 0% and trying to scroll up
        // delta < 0 means touch moving DOWN (Scroll UP).
        if (next <= 0 && delta < 0) {
            progress.set(0);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Unlock only if we're at exactly 100% and trying to scroll down
        // delta > 0 means touch moving UP (Scroll DOWN).
        if (next >= 1 && delta > 0) {
            progress.set(1);
            setTimeout(() => {
                unlockScroll();
            }, 50);
            return;
        }

        // Keep locked for everything else (0% to 100%)
    }, [progress, unlockScroll]);

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

    // Circle calculations
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    // Calculate stroke-dashoffset from progress (0 = full circle, circumference = empty)
    const strokeDashoffset = useTransform(
        smoothProgress,
        (value) => circumference - (value * circumference)
    );

    // Calculate percentage for display
    const [displayPercentage, setDisplayPercentage] = useState(0);

    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (value) => {
            setDisplayPercentage(Math.round(value * 100));
        });
        // Set initial value
        setDisplayPercentage(Math.round(smoothProgress.get() * 100));
        return unsubscribe;
    }, [smoothProgress]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full bg-[#0c1b33] overflow-clip flex items-center justify-center"
        >
            {/* Progress Circle */}
            <div className="relative flex items-center justify-center">
                <svg
                    className="transform -rotate-90"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                >
                    {/* Background circle */}
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="#ff3d3d"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        style={{
                            strokeDashoffset: strokeDashoffset,
                        }}
                    />
                </svg>

                {/* Percentage text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        className="text-4xl font-black text-white"
                        style={{
                            opacity: smoothProgress,
                        }}
                    >
                        {displayPercentage}%
                    </motion.span>
                </div>
            </div>
        </section>
    );
}
