import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function LetsWork() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Scale from 1 to 50 (covers viewport)
    const scale = useTransform(smoothProgress, [0, 1], [1, 50]);

    // Inverse scale for text to maintain linear visual growth to ~8x (no shrinking)
    const textScale = useTransform(smoothProgress, (t: number) => (1 + 6 * t) / (1 + 49 * t));

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale }}
                    className="relative flex h-56 w-56 items-center justify-center rounded-full bg-black"
                >
                    <motion.span
                        style={{ scale: textScale }}
                        className="whitespace-nowrap text-2xl font-['Anton'] text-white uppercase p-4 tracking-wide"
                    >
                        Let's Work
                    </motion.span>
                </motion.div>
            </div>
        </div>
    );
}
