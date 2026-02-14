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
    const lastScrollYRef = useRef(0);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let rafId: number | null = null;
        let killTimeoutId: NodeJS.Timeout | null = null;

        // Initialize scroll position
        lastScrollYRef.current = window.scrollY;

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

                // Auto-deactivate after 1 second to prevent permanent lock
                // This gives ScrollTeamEXP time to engage its scroll lock
                if (killTimeoutId) clearTimeout(killTimeoutId);
                killTimeoutId = setTimeout(() => {
                    isKillingRef.current = false;
                }, 1000);
            }, 50);
        };

        const checkPosition = () => {
            if (isKillingRef.current) return;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate scroll direction
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
            lastScrollYRef.current = currentScrollY;

            // Only kill momentum when scrolling DOWN and approaching from ABOVE
            // - distanceFromTop > 0: Section is still below viewport (we haven't reached it yet)
            // - distanceFromTop < triggerOffset: We're close enough to trigger
            const distanceFromTop = rect.top;
            const isApproachingFromAbove = distanceFromTop > 0 && distanceFromTop <= triggerOffset;

            // Don't kill momentum if:
            // 1. Scrolling up (user is leaving/exiting)
            // 2. Section is already behind us (distanceFromTop < 0, we're past it going to footer)
            if (scrollDirection !== 'down' || !isApproachingFromAbove) {
                return;
            }

            // Calculate scroll velocity
            const now = Date.now();
            const timeDelta = now - lastScrollTimeRef.current;
            lastScrollTimeRef.current = now;

            // If scrolling down into the section with recent momentum
            if (timeDelta < 100) {
                killScrollMomentum();
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
