import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollLockAnimation } from "../hooks/useScrollLockAnimation";

export default function ScrollTeamEXP() {
    const { sectionRef, progress } = useScrollLockAnimation({
        scrollLength: 8000, // Customize duration here: higher = slower animation
    });

    const smoothProgress = progress; // Directly use progress for raw control, or wrap in useSpring if needed

    // Circle calculations
    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    // Calculate stroke-dashoffset from progress (0 = full circle, circumference = empty)
    const strokeDashoffset = useTransform(
        smoothProgress,
        (value: number) => circumference - (value * circumference)
    );

    // Calculate percentage for display
    const [displayPercentage, setDisplayPercentage] = useState(0);

    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (value: number) => {
            setDisplayPercentage(Math.round(value * 100));
        });
        // Set initial value
        setDisplayPercentage(Math.round(smoothProgress.get() * 100));
        return unsubscribe;
    }, [smoothProgress]);

    return (
        <section
            ref={sectionRef}
            className="relative flex h-screen w-full items-center justify-center overflow-clip bg-secondary"
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
                        strokeWidth="8"
                        className="stroke-white/10"
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        className="stroke-primary"
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
