import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LetsWork() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Scale from 1 to 50 (covers viewport)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 50]);

    // Inverse scale for text to maintain linear visual growth to ~8x (no shrinking)
    const textScale = useTransform(scrollYProgress, (t) => (1 + 7 * t) / (1 + 49 * t));

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale }}
                    className="relative flex h-48 w-48 items-center justify-center rounded-full bg-black"
                >
                    <motion.span
                        style={{ scale: textScale }}
                        className="whitespace-nowrap text-3xl font-bold text-white"
                    >
                        Let's Work
                    </motion.span>
                </motion.div>
            </div>
        </div>
    );
}
