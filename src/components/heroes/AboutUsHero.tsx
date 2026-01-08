"use client";

import { SparklesCore } from "../ui/sparkles";

// Data Section - Keeping data separate from UI as per guidelines
const aboutHeroData = {
    title: "About Us",
    subtitle: "WE ARE THE FUTURE OF DIGITAL INNOVATION",
    primaryButton: {
        text: "START YOUR PROJECT",
        link: "/quote"
    },
    secondaryButton: {
        text: "SEE OUR WORK",
        link: "/projects"
    }
};

interface AboutUsHeroProps {
    title?: string; // Optional prop to override default data
}

export function AboutUsHero({ title }: AboutUsHeroProps) {
    const displayTitle = title || aboutHeroData.title;

    return (
        <div className="min-h-[70vh] w-full bg-background flex md:pt-38 flex-col items-center justify-center overflow-hidden relative">
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
                <h1 className="md:text-7xl text-5xl lg:text-9xl font-black text-center text-foreground tracking-tighter leading-none mb-4 uppercase">
                    {displayTitle}
                </h1>

                <div className="w-[40rem] md:h-40 relative">
                    {/* Gradients - Using primary color from theme */}
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
                    <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
        </div>
    );
}
