"use client";

import { SparklesCore } from "../ui/sparkles";

interface WebDevelopmentHeroProps {
    title: string;
}

export function WebDevelopmentHero({ title }: WebDevelopmentHeroProps) {
    return (
        <div className="min-h-screen w-full bg-black flex md:pt-22 flex-col items-center justify-center overflow-hidden relative bg-black">
            {/* Mobile Sparkles - Full Screen */}
            <div className="absolute inset-0 w-full h-full md:hidden">
                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center px-4">
                <h1 className="md:text-7xl text-5xl lg:text-9xl font-black text-center text-white tracking-tighter leading-none mb-4">
                    {title}
                </h1>

                <div className="w-[40rem] md:h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="hidden md:block w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>

                {/* Action Buttons */}
                <div className="md:mt-16 mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="/quote"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-red-600/80 text-white px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(255,61,61,0.4)] active:scale-95 group uppercase"
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
                        href="/projects"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-4 border-2 border-white/20 text-white px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs transition-all duration-500 hover:border-red-600 hover:text-red-500 active:scale-95 group uppercase"
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
