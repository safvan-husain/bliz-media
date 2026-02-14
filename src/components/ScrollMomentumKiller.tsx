"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollMomentumKillerProps {
    children: ReactNode;
    /** Offset in pixels before the section to start killing momentum (default: 200) */
    triggerOffset?: number;
}

export default function ScrollMomentumKiller({
    children,
    triggerOffset = 200,
}: ScrollMomentumKillerProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isKillingRef = useRef(false);
    const lastScrollTimeRef = useRef(0);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let rafId: number | null = null;
        let killTimeoutId: NodeJS.Timeout | null = null;

        const killScrollMomentum = () => {
            if (isKillingRef.current) return;

            isKillingRef.current = true;

            // Override scroll behavior temporarily
            const originalOverflow = document.documentElement.style.overflow;
            const originalScrollBehavior = document.documentElement.style.scrollBehavior;

            document.documentElement.style.scrollBehavior = "auto";
            document.documentElement.style.overflow = "hidden";

            // Kill momentum by forcing current position
            const currentY = window.scrollY;
            window.scrollTo({ top: currentY, behavior: "auto" });

            // Brief pause before re-enabling scroll
            setTimeout(() => {
                document.documentElement.style.overflow = originalOverflow;
                document.documentElement.style.scrollBehavior = originalScrollBehavior;

                // Allow scroll again after a short delay
                if (killTimeoutId) clearTimeout(killTimeoutId);
                killTimeoutId = setTimeout(() => {
                    isKillingRef.current = false;
                }, 100);
            }, 50);
        };

        const checkPosition = () => {
            if (isKillingRef.current) return;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const distanceFromTop = rect.top;

            // Check if we're approaching the section from above
            const isApproaching = distanceFromTop > 0 && distanceFromTop <= viewportHeight + triggerOffset;

            // Calculate scroll velocity
            const now = Date.now();
            const timeDelta = now - lastScrollTimeRef.current;
            lastScrollTimeRef.current = now;

            // If approaching and scrolling (timeDelta indicates recent scroll)
            if (isApproaching && timeDelta < 100) {
                // Check if we're in the trigger zone (close to section)
                if (distanceFromTop <= triggerOffset) {
                    killScrollMomentum();
                }
            }
        };

        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(checkPosition);
        };

        const handleWheel = (e: WheelEvent) => {
            if (isKillingRef.current) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (isKillingRef.current) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        // Add listeners
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (killTimeoutId) clearTimeout(killTimeoutId);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [triggerOffset]);

    return <div ref={sectionRef}>{children}</div>;
}
