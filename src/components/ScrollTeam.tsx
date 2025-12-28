import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { founders, leaders } from "../data/team";

export default function ScrollTeam() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isLockedRef = useRef(false);
    const [isLocked, setIsLocked] = useState(false);
    const lastScrollY = useRef(0);
    const hasCompletedAnimation = useRef(false);
    
    // Use motion value for progress (0 to 1)
    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Check for reduced motion preference
    const prefersReducedMotion = useRef(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        prefersReducedMotion.current = media.matches;
    }, []);

    // Lock/unlock scroll helpers
    const lockScroll = useCallback(() => {
        if (!isLockedRef.current && !prefersReducedMotion.current) {
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

    // Check unlock conditions - unlock only when both scroll and animation are at extremes
    const checkUnlockConditions = useCallback(() => {
        if (!isLockedRef.current) return;

        const currentProgress = progress.get(); // 0 to 1
        const animationProgress = currentProgress * 100; // Convert to 0-100%

        // Since section is sticky and h-screen, scroll position = animation progress
        // Unlock conditions:
        // 1. Animation at 0% AND user scrolling up (can go above section)
        // 2. Animation at 100% AND user scrolling down (can go below section to footer)
        const canUnlockUp = animationProgress <= 5; // Small threshold (5%)
        const canUnlockDown = animationProgress >= 95; // Small threshold (95%)

        if (canUnlockUp || canUnlockDown) {
            // Check scroll direction
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
            lastScrollY.current = currentScrollY;

            if ((canUnlockUp && scrollDirection === 'up') || (canUnlockDown && scrollDirection === 'down')) {
                unlockScroll();
                if (canUnlockUp) {
                    hasCompletedAnimation.current = false;
                    progress.set(0);
                } else {
                    hasCompletedAnimation.current = true;
                }
            }
        }
    }, [progress, unlockScroll]);

    // Track scroll and check unlock conditions
    useEffect(() => {
        // Initialize last scroll position
        lastScrollY.current = window.scrollY;
        
        const handleScroll = () => {
            checkUnlockConditions();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [checkUnlockConditions]);

    // Check if section is in viewport using IntersectionObserver
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Use intersectionRatio to detect when section is fully visible
                // 0.95 means 95% of section is visible (allowing for small margins)
                const isFullyVisible = entry.intersectionRatio >= 0.95;
                
                // Lock when section is fully visible (works in both directions for reverse animation)
                if (isFullyVisible && !prefersReducedMotion.current) {
                    lockScroll();
                } else {
                    // Only unlock if section is completely out of view AND conditions are met
                    if (entry.intersectionRatio < 0.1) {
                        checkUnlockConditions();
                    }
                }
            },
            { 
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.95, 1],
                rootMargin: "0px"
            }
        );

        observer.observe(el);

        // Also check on initial mount
        const checkInitial = () => {
            requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                // More lenient check: section top is near viewport top and bottom is near viewport bottom
                const isInView = rect.top <= 50 && rect.bottom >= (viewportHeight - 50);
                // Lock if section is in view (works for both directions)
                if (isInView && !prefersReducedMotion.current) {
                    lockScroll();
                }
            });
        };

        // Check after a short delay to ensure DOM is ready
        const timeoutId = setTimeout(checkInitial, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
            unlockScroll();
        };
    }, [lockScroll, unlockScroll, progress]);

    // Handle wheel events (desktop)
    const handleWheel = useCallback((e: WheelEvent) => {
        // Only hijack if scroll is locked
        if (!isLockedRef.current || prefersReducedMotion.current) {
            return;
        }

        const delta = e.deltaY;
        const current = progress.get();
        const animationProgress = current * 100; // 0-100%

        // Check unlock conditions before preventing default
        // Since section is sticky, scroll position = animation progress
        const canUnlockUp = animationProgress <= 5 && delta < 0; // Scrolling up at 0%
        const canUnlockDown = animationProgress >= 95 && delta > 0; // Scrolling down at 100%

        if (canUnlockUp || canUnlockDown) {
            // Allow normal scroll - don't prevent default
            unlockScroll();
            if (canUnlockUp) {
                hasCompletedAnimation.current = false;
                progress.set(0);
            } else {
                hasCompletedAnimation.current = true;
            }
            return;
        }

        // Prevent default scroll and hijack it (works in both directions)
        e.preventDefault();
        e.stopPropagation();
        
        const sensitivity = 0.0015; // Slightly higher sensitivity
        
        // Allow progress to go both up and down (0 to 1)
        const next = Math.min(Math.max(current + delta * sensitivity, 0), 1);
        progress.set(next);
        
        // Mark as completed when reaching 1, but keep locked for reverse
        if (next >= 1) {
            hasCompletedAnimation.current = true;
        } else if (next <= 0) {
            // Reset completion flag when back at start
            hasCompletedAnimation.current = false;
        }
        
        // Check unlock conditions after updating progress
        setTimeout(() => checkUnlockConditions(), 0);
    }, [progress, checkUnlockConditions, unlockScroll]);

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
        
        const currentY = e.touches[0].clientY;
        const delta = touchStartY.current - currentY;
        const current = progress.get();
        const animationProgress = current * 100;

        // Check unlock conditions
        // delta > 0 means scrolling up (touch moving down = scrolling up)
        // delta < 0 means scrolling down (touch moving up = scrolling down)
        const canUnlockUp = animationProgress <= 5 && delta > 0; // At 0% and scrolling up
        const canUnlockDown = animationProgress >= 95 && delta < 0; // At 100% and scrolling down

        if (canUnlockUp || canUnlockDown) {
            unlockScroll();
            if (canUnlockUp) {
                hasCompletedAnimation.current = false;
                progress.set(0);
            } else {
                hasCompletedAnimation.current = true;
            }
            return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        const sensitivity = 0.003; // Higher for touch
        const next = Math.min(Math.max(current + delta * sensitivity, 0), 1);
        progress.set(next);
        
        touchStartY.current = currentY;
        
        // Mark completion status but keep locked for reverse
        if (next >= 1) {
            hasCompletedAnimation.current = true;
        } else if (next <= 0) {
            hasCompletedAnimation.current = false;
        }
        
        // Check unlock conditions after updating
        setTimeout(() => checkUnlockConditions(), 0);
    }, [progress, checkUnlockConditions, unlockScroll]);

    const handleTouchEnd = useCallback(() => {
        isTouching.current = false;
        touchStartY.current = 0;
    }, []);

    // Attach event listeners
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        // Wheel events (non-passive to allow preventDefault)
        el.addEventListener("wheel", handleWheel, { passive: false });
        
        // Touch events
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

    // Reset progress when section is no longer active
    useEffect(() => {
        if (!isLocked) {
            const current = progress.get();
            // Only reset if progress is very low (near start)
            if (current < 0.05) {
                progress.set(0);
                hasCompletedAnimation.current = false;
            }
        }
    }, [isLocked, progress]);

    // Animation transforms based on progress
    // Founders animations - early in scroll (0-40%)
    const foundersY = useTransform(smoothProgress, [0, 0.35], ["0%", "-150%"]);
    const foundersOpacity = useTransform(smoothProgress, [0.15, 0.35], [1, 0]);

    // Leaders arrival - middle section (35-60%)
    const leadersEntryY = useTransform(smoothProgress, [0.35, 0.55], ["40vh", "0vh"]);
    const leadersEntryOpacity = useTransform(smoothProgress, [0.35, 0.5], [0, 1]);

    // Leaders horizontal scroll - later section (55-85%)
    const leadersX = useTransform(smoothProgress, [0.55, 0.85], ["0%", "-70%"]);

    return (
        <section ref={sectionRef} className="relative h-screen bg-[#0c1b33] overflow-clip">
            {/* Main Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                {/* Background Decorative Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="absolute left-[30%] top-0 h-full w-[1px] bg-white" />
                    <div className="absolute left-[50%] top-0 h-full w-[1px] bg-white" />
                    <div className="absolute left-[70%] top-0 h-full w-[1px] bg-white" />
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-6 h-full flex flex-col md:flex-row md:items-center lg:gap-20 pt-20 md:pt-36">
                    {/* Fixed Title */}
                    <div className="md:w-1/3 lg:w-1/4 z-30">
                        <h2 className="text-6xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl text-white">
                            Meet <br /> the Team
                        </h2>
                    </div>

                    <div className="flex-1 relative w-full h-full min-h-0">
                        {/* 1. Founders Frame */}
                        <motion.div
                            style={{ y: foundersY, opacity: foundersOpacity }}
                            className="absolute inset-0 w-full flex items-center justify-center z-20"
                        >
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {founders.map((member) => (
                                    <div key={member.name} className="flex flex-col items-center text-center group">
                                        <div className={`relative aspect-[1/1.6] w-full max-w-[300px] overflow-hidden rounded-b-[150px] ${member.bgColor} border-[6px] border-white/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white`}>
                                            <img
                                                src={member.imagePath}
                                                alt={member.name}
                                                className="h-full w-full object-cover object-top mix-blend-luminosity brightness-110 contrast-110 transition-all duration-700 group-hover:mix-blend-normal group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-3xl font-black tracking-tight text-white">{member.name}</h3>
                                            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/50">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 2. Leaders Frame */}
                        <motion.div
                            style={{
                                y: leadersEntryY,
                                opacity: leadersEntryOpacity,
                            }}
                            className="absolute inset-0 w-full h-full flex flex-col justify-center items-start z-50"
                        >
                            <div className="w-full mb-12">
                                <h3 className="text-4xl font-black md:text-6xl text-white">Leadership</h3>
                                <p className="max-w-2xl text-lg text-white/60 mt-4">
                                    Strategic minds leading our design, engineering, and growth.
                                </p>
                            </div>

                            <div className="relative w-full overflow-visible">
                                <motion.div
                                    style={{ x: leadersX }}
                                    className="flex gap-10 lg:gap-14 w-max pr-[30vw]"
                                >
                                    {leaders.map((member) => (
                                        <LeaderCard key={member.name} member={member} />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Accents (Pinned) */}
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
                <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute -right-[10%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]" />
            </div>
        </section>
    );
}

function LeaderCard({ member }: { member: any }) {
    return (
        <div className="group flex flex-col gap-6 w-[350px] flex-shrink-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/30">
                <img
                    src={member.imagePath}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {member.role}
                </div>
                <h4 className="text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                    {member.name}
                </h4>
            </div>
        </div>
    );
}
