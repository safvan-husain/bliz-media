"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { SparklesText } from "@/components/ui/sparkles-text";

interface SparklesHeroProps {
    title: string;
    subtitle?: string;
    buttons?: Array<{
        text: string;
        href: string;
        variant: "primary" | "secondary" | "subtle";
    }>;
}

export function SparklesHero({ title, subtitle, buttons }: SparklesHeroProps) {
    return (
        <section className="h-[80vh] w-full bg-white flex flex-col items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#000000"
                />
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
                <SparklesText
                    text={title}
                    className="text-6xl md:text-9xl font-black tracking-tighter text-black leading-[0.85] mb-8"
                />

                {subtitle && (
                    <p className="max-w-2xl text-zinc-600 text-lg md:text-xl mb-12">
                        {subtitle}
                    </p>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {buttons?.map((button, index) => (
                        <a
                            key={index}
                            href={button.href}
                            className={
                                button.variant === "primary"
                                    ? "w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#FF3D3D] text-white px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_30px_rgba(255,61,61,0.4)] active:scale-95 group"
                                    : button.variant === "secondary"
                                        ? "w-full sm:w-auto inline-flex items-center justify-center gap-4 border-2 border-black/20 text-black px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs transition-all duration-500 hover:border-[#FF3D3D] hover:text-[#FF3D3D] active:scale-95 group"
                                        : "w-full sm:w-auto inline-flex items-center justify-center gap-4 border-2 border-black/5 text-black/40 px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs transition-all duration-500 hover:border-[#FF3D3D] hover:text-[#FF3D3D] active:scale-95"
                            }
                        >
                            {button.text}
                            {button.variant !== "subtle" && (
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
                                    {button.variant === "primary" ? (
                                        <>
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </>
                                    ) : (
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    )}
                                </svg>
                            )}
                        </a>
                    ))}
                </div>
            </div>

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(50%_50%_at_50%_50%,transparent_0%,white_100%)] pointer-events-none"></div>
        </section>
    );
}
