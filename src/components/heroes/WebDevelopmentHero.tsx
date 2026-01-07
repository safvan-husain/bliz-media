"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Code2, Database, Layout as LayoutIcon } from "lucide-react";

interface WebDevelopmentHeroProps {
    title: string;
}

export function WebDevelopmentHero({ title }: WebDevelopmentHeroProps) {
    return (
        <div className="min-h-screen w-full bg-[#0c1b33] flex flex-col items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                    speed={1}
                />
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center px-4">
                <h1 className="md:text-7xl text-4xl lg:text-9xl font-black text-center text-white tracking-tighter leading-none mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {title}
                </h1>
                <div className="w-full max-w-[40rem] h-4 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-1/4" />

                    {/* Glow at center */}
                    <div className="absolute inset-x-1/2 -top-10 -translate-x-1/2 w-40 h-40 bg-red-500/20 blur-[80px] rounded-full" />
                </div>
                <p className="text-white/80 text-lg md:text-2xl font-medium mt-12 max-w-3xl text-center italic leading-relaxed">
                    Building high-performance, <span className="text-red-500 font-black">scalable</span> web solutions that drive business growth.
                </p>

                {/* Tech Chips */}
                <div className="mt-12 flex flex-wrap justify-center gap-3">
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
                </div>
            </div>

            {/* Radial Gradient for depth and smooth edges */}
            <div className="absolute inset-0 w-full h-full bg-[#0c1b33] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)] pointer-events-none opacity-60"></div>

            {/* Bottom transition gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c1b33] to-transparent z-10" />
        </div>
    );
}
