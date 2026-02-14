"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollMomentumKillerProps {
    children: ReactNode;
    /** Offset in pixels before the section to start killing momentum (default: 500) */
    triggerOffset?: number;
}

export default function ScrollMomentumKiller({
    children,
    triggerOffset = 500,
}: ScrollMomentumKillerProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isKillingRef = useRef(false);
    const lastScrollYRef = useRef(0);
    const hasTriggeredRef = useRef(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let killTimeoutId: NodeJS.Timeout | null = null;

        // Initialize scroll position
        lastScrollYRef.current = window.scrollY;

        const killScrollMomentum = () => {
            if (isKillingRef.current) return;

            console.log("🛑 Killing scroll momentum");
            isKillingRef.current = true;
            hasTriggeredRef.current = true;

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
                    console.log("✅ Momentum killer deactivated");
                }, 1000);
            }, 50);
        };

        // Track scroll direction
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
            lastScrollYRef.current = currentScrollY;

            // Reset trigger flag when scrolling up (leaving section)
            if (scrollDirection === 'up') {
                hasTriggeredRef.current = false;
            }
        };

        // IntersectionObserver with rootMargin to detect approach
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const currentScrollY = window.scrollY;
                    const scrollDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';

                    // Only trigger when:
                    // 1. Section is intersecting (entering the detection zone)
                    // 2. Scrolling down
                    // 3. Haven't already triggered (prevent re-triggering)
                    if (entry.isIntersecting && scrollDirection === 'down' && !hasTriggeredRef.current) {
                        console.log("👁️ Section detected approaching while scrolling down");
                        killScrollMomentum();
                    }
                });
            },
            {
                // rootMargin creates a detection zone ABOVE the viewport
                // Format: "top right bottom left"
                // Positive top value = detect when element is still BELOW viewport
                rootMargin: `${triggerOffset}px 0px 0px 0px`,
                threshold: 0,
            }
        );

        observer.observe(section);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            if (killTimeoutId) clearTimeout(killTimeoutId);
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [triggerOffset]);

    return <div ref={sectionRef}>{children}</div>;
}
