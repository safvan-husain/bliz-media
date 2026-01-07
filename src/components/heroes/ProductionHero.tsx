"use client";
import React from "react";
import { PremiumHero } from "../ui/hero";

interface ProductionHeroProps {
    title: string;
}

export function ProductionHero({ title }: ProductionHeroProps) {
    const productionTitles = ["Cinematic", "Stunning", "Engaging", "Impactful", "Creative"];
    const productionSubtitle = "Professional media production services that tell your brand story with visual excellence and cinematic impact across all digital platforms.";

    return (
        <PremiumHero
            title={title}
            titles={productionTitles}
            subtitle={productionSubtitle}
        />
    );
}
