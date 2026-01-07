"use client"

import React from "react"
import { ImageCarouselHero } from "../ui/image-carousel-hero"

interface BrandingHeroProps {
    title: string
}

export function BrandingHero({ title }: BrandingHeroProps) {
    const images = [
        {
            id: "1",
            src: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
            alt: "Branding Design 1",
            rotation: -5,
        },
        {
            id: "2",
            src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
            alt: "Branding Design 2",
            rotation: 8,
        },
        {
            id: "3",
            src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop",
            alt: "Branding Design 3",
            rotation: -12,
        },
        {
            id: "4",
            src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
            alt: "Branding Design 4",
            rotation: 6,
        },
        {
            id: "5",
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
            alt: "Branding Design 5",
            rotation: -3,
        },
    ]

    const features = [
        {
            title: "Visual Identity",
            description: "Crafting distinct logos and visual systems that capture your essence.",
        },
        {
            title: "Brand Strategy",
            description: "Building the foundation for your brand's voice and market position.",
        },
        {
            title: "Digital Presence",
            description: "Extending your brand across every touchpoint for a unified experience.",
        },
    ]

    return (
        <ImageCarouselHero
            title={title}
            description="Creating iconic brands that resonate, inspire, and drive meaningful connection with your audience."
            ctaText="BEGIN YOUR JOURNEY"
            images={images}
            features={features}
            onCtaClick={() => (window.location.href = "/quote")}
        />
    )
}
