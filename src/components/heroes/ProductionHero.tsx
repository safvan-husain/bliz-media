"use client";
import React from "react";
import { ShaderAnimation } from "@/components/ui/shader-animation";

interface ProductionHeroProps {
    title: string;
}

export function ProductionHero({ title }: ProductionHeroProps) {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
                <ShaderAnimation />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
                <h1 className="pointer-events-none text-5xl md:text-8xl font-bold tracking-tighter text-black drop-shadow-2xl">
                    {title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-zinc-600 font-medium">
                    Pushing the boundaries of visual excellence with cutting-edge production techniques.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="/quote"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-black text-white px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs transition-all duration-500 hover:bg-black/90 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] active:scale-95 group"
                    >
                        START YOUR PROJECT
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-500 group-hover:translate-x-1"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                    <a
                        href={`/projects?filter=${title}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-4 border-2 border-black/20 text-black px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs transition-all duration-500 hover:border-black hover:bg-black/5 active:scale-95 group"
                    >
                        SEE OUR WORK
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-500 group-hover:translate-x-1"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

