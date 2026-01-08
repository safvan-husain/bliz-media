"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn

// Props interface for the component
interface AnimatedMarqueeHeroProps {
    tagline: string;
    title: React.ReactNode;
    description: string;
    ctaText: string;
    images: string[];
    className?: string;
    ctaHref?: string;
}

const WhatsAppIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

// Reusable Button component styled like in the image
const ActionButton = ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <motion.a
        href={href || "#"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-opacity-75 inline-flex items-center gap-2"
    >
        <WhatsAppIcon />
        {children}
    </motion.a>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
    tagline,
    title,
    description,
    ctaText,
    images,
    className,
    ctaHref,
}) => {
    // Animation variants for the text content
    const FADE_IN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
    };

    // Duplicate images for a seamless loop
    const duplicatedImages = [...images, ...images, ...images];

    return (
        <section
            className={cn(
                "relative w-full min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center text-center px-4",
                className
            )}
        >
            <div className="z-10 flex flex-col items-center mb-12">
                {/* Tagline */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
                >
                    {tagline}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground"
                >
                    {typeof title === 'string' ? (
                        title.split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                variants={FADE_IN_ANIMATION_VARIANTS}
                                className="inline-block"
                            >
                                {word}&nbsp;
                            </motion.span>
                        ))
                    ) : (
                        title
                    )}
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.5 }}
                    className="mt-6 max-w-xl text-lg text-muted-foreground"
                >
                    {description}
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.6 }}
                >
                    <ActionButton href={ctaHref}>{ctaText}</ActionButton>
                </motion.div>
            </div>

            {/* Animated Image Marquee */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    className="flex gap-4"
                    animate={{
                        x: ["0%", "-50%"],
                        transition: {
                            ease: "linear",
                            duration: 30,
                            repeat: Infinity,
                        },
                    }}
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                            style={{
                                rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
                            }}
                        >
                            <img
                                src={src}
                                alt={`Showcase image ${index + 1}`}
                                className="w-full h-full object-cover rounded-2xl shadow-md"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
