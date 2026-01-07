"use client";
import React from "react";
import IntroAnimation from "../ui/scroll-morph-hero";

interface ProductionHeroProps {
    title: string;
}

export function ProductionHero({ title }: ProductionHeroProps) {
    return (
        <div className="w-full h-screen pt-22 relative">
            <IntroAnimation />
            {/* We can potentially overlay the title here if needed, 
                but IntroAnimation has its own internal text sequence. */}
        </div>
    );
}
