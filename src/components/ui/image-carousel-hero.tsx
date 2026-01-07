"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
    id: string
    src: string
    alt: string
    rotation: number
}

interface ImageCarouselHeroProps {
    title: string
    subtitle?: string
    description: string
    ctaText: string
    onCtaClick?: () => void
    images: ImageCard[]
    features?: Array<{
        title: string
        description: string
    }>
}

export function ImageCarouselHero({
    title,
    subtitle,
    description,
    ctaText,
    onCtaClick,
    images,
    features = [
        {
            title: "Realistic Results",
            description: "Realistic Results Photos that look professionally crafted",
        },
        {
            title: "Fast Generation",
            description: "Turn ideas into images in seconds.",
        },
        {
            title: "Diverse Styles",
            description: "Choose from a wide range of artistic options.",
        },
    ],
}: ImageCarouselHeroProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [rotatingCards, setRotatingCards] = useState<number[]>([])

    // Continuous rotation animation
    useEffect(() => {
        const interval = setInterval(() => {
            setRotatingCards((prev) => prev.map((val) => (val + 0.5) % 360))
        }, 50)

        return () => clearInterval(interval)
    }, [])

    // Initialize rotating cards
    useEffect(() => {
        setRotatingCards(images.map((_, i) => i * (360 / images.length)))
    }, [images.length])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
        })
    }

    return (
        <div className="relative w-full min-h-screen bg-stone-50 overflow-hidden pt-32 pb-20">
            {/* Animated background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Carousel Container */}
                <div
                    className="relative w-full max-w-6xl h-96 sm:h-[500px] mb-12 sm:mb-16"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{ perspective: "1000px" }}
                >
                    {/* Rotating Image Cards */}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                        {images.map((image, index) => {
                            const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
                            const radius = 220 // Increased radius for better spread
                            const x = Math.cos(angle) * radius
                            const y = Math.sin(angle) * radius

                            // 3D perspective effect based on mouse position
                            const perspectiveX = (mousePosition.x - 0.5) * 30
                            const perspectiveY = (mousePosition.y - 0.5) * 30

                            return (
                                <div
                                    key={image.id}
                                    className="absolute w-40 h-52 sm:w-52 sm:h-64 transition-all duration-300"
                                    style={{
                                        transform: `
                      translate(${x}px, ${y}px)
                      rotateX(${perspectiveY}deg)
                      rotateY(${perspectiveX}deg)
                      rotateZ(${image.rotation}deg)
                    `,
                                        transformStyle: "preserve-3d",
                                        zIndex: Math.round(y + radius), // Depth sorting
                                    }}
                                >
                                    <div
                                        className={cn(
                                            "relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10",
                                            "transition-all duration-500 hover:shadow-3xl hover:scale-110",
                                            "cursor-pointer group border-4 border-white",
                                        )}
                                        style={{
                                            transformStyle: "preserve-3d",
                                        }}
                                    >
                                        <img
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Glass Overlay */}
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative z-20 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0c1b33] mb-6 tracking-tighter leading-[0.9] uppercase">
                        {title}
                    </h1>

                    <p className="text-xl sm:text-2xl text-[#0c1b33]/60 mb-10 font-medium italic leading-relaxed">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={onCtaClick}
                        className={cn(
                            "inline-flex items-center gap-4 px-12 py-5 rounded-full",
                            "bg-[#0c1b33] text-white font-black tracking-[0.2em] text-xs uppercase",
                            "hover:bg-primary hover:shadow-2xl hover:scale-110 transition-all duration-500",
                            "active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                            "group",
                        )}
                    >
                        {ctaText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                    </button>
                </div>

                {/* Features Section */}
                <div className="relative z-20 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 sm:mt-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "text-center p-8 rounded-[2.5rem]",
                                "bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5",
                                "hover:bg-white hover:border-primary/20 transition-all duration-500",
                                "group",
                            )}
                        >
                            <h3 className="text-xl font-black text-[#0c1b33] mb-3 tracking-tight group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-sm font-medium text-[#0c1b33]/60 leading-relaxed italic">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
