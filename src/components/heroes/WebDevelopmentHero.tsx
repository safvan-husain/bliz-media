"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Code2, Database, Layout as LayoutIcon } from "lucide-react";

interface WebDevelopmentHeroProps {
    title: string;
}

export function WebDevelopmentHero({ title }: WebDevelopmentHeroProps) {
    return (
        <div className="min-h-screen w-full bg-black flex pt-22 flex-col items-center justify-center overflow-hidden relative bg-black">
            <div className="relative z-20 flex flex-col items-center justify-center px-4">
                <h1 className="md:text-7xl text-4xl lg:text-9xl font-black text-center text-white tracking-tighter leading-none mb-4">
                    {title}
                </h1>

                <div className="w-[40rem] h-40 relative">
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
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
                {/* <p className="text-white/80 text-lg md:text-2xl font-medium mt-12 max-w-3xl text-center italic leading-relaxed">
                    Building high-performance, <span className="text-red-500 font-black">scalable</span> web solutions that drive business growth.
                </p> */}

                {/* Tech Chips */}
                {/* <div className="mt-12 flex flex-wrap justify-center gap-3">
                    <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-2">
                        <LayoutIcon className="w-3 h-3 text-red-500" />
                        Frontend
                    </div>
                    <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-2">
                        <Database className="w-3 h-3 text-red-500" />
                        Backend
                    </div>
                    <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-2">
                        <Code2 className="w-3 h-3 text-red-500" />
                        Architecture
                    </div>
                </div> */}

                {/* Action Buttons */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
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
