"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function DigitalMarketingHero({
    title = "Digital Marketing",
    description,
}: {
    title?: string;
    description?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className={`text-4xl sm:text-6xl lg:text-7xl text-black font-bold tracking-tighter`}>
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <p className={`mt-6 text-xl font-medium text-zinc-600`}>
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <div
                            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                            p-px rounded-full backdrop-blur-lg 
                            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
                        >
                            <Button
                                onClick={() => (window.location.href = "/quote")}
                                variant="ghost"
                                className="w-full sm:w-auto rounded-full px-10 py-7 text-xs font-black tracking-[0.2em] backdrop-blur-md 
                                bg-white/95 hover:bg-white/100 
                                text-black transition-all duration-300 
                                group-hover:-translate-y-0.5 border border-black/10
                                hover:shadow-md uppercase"
                            >
                                START YOUR PROJECT
                                <span
                                    className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                    transition-all duration-300"
                                >
                                    →
                                </span>
                            </Button>
                        </div>

                        <div
                            className="inline-block group relative bg-gradient-to-b from-black/2 via-white/5 to-black/2 
                            p-px rounded-full backdrop-blur-lg overflow-hidden w-full sm:w-auto"
                        >
                            <Button
                                onClick={() => (window.location.href = `/projects?filter=${title}`)}
                                variant="ghost"
                                className="w-full sm:w-auto rounded-full px-10 py-7 text-xs font-black tracking-[0.2em] backdrop-blur-md 
                                bg-black/5 hover:bg-black/10 
                                text-black/60 hover:text-black transition-all duration-300 
                                border border-black/5 uppercase"
                            >
                                SEE OUR WORK
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
