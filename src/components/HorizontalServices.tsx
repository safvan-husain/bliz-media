import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Service } from "../data/services";

interface HorizontalServicesProps {
    services: Service[];
}

export default function HorizontalServices({ services }: HorizontalServicesProps) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Calculate the horizontal translation.
    // We want to scroll enough to show all cards.
    // If we have 5 cards of ~400px (or larger on various screens), plus gaps.
    // Let's assume the track is notably wider than the viewport.
    // "1%" of scrollY maps to some % of x.
    // "0%" -> "0%"
    // "100%" -> "-70%" (approx, enough to reveal the last card)
    // Adjust "-75%" based on testing or calculate dynamically if needed but fixed % works well for responsive usually if using calc.
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-zinc-50 mt-10">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                {/* Header content that stays or moves? User said "instead of scrolling vertically these carousel should move".
            Usually the header is separate. But let's keep the header outside or separate if it shouldn't scroll away immediately.
            If the whole section pins, the header might be pinned too or scrolled past.
            Let's assuming the header is part of the previous section or static top of this section.
            The user wants the CARDS to move horizontally.
        */}

                <motion.div style={{ x }} className="flex gap-8 pt-10 px-12 md:px-24 w-max will-change-transform">
                    {/* Header Card or Title Block could be the first item if desired, but user kept them separate in previous design. 
               Let's just scroll the services cards. */}
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                    <ViewAllServicesCard />
                </motion.div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: Service }) {
    return (
        <a
            href={`/services/${service.slug}`}
            className="group relative w-[80vw] md:w-[600px] h-[50vh] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.01] flex-shrink-0 cursor-pointer block isolate transform-gpu [backface-visibility:hidden]"
        >
            {/* Background Image */}
            <div className="absolute inset-0 bg-zinc-900">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
            </div>

            {/* Premium Color Overlay */}
            <div
                className={`absolute inset-0 ${service.color || 'bg-black'} opacity-80 mix-blend-multiply transition-all duration-700 group-hover:opacity-90`}
            />

            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-60" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-10">
                <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 transform transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                    {service.title}
                </h3>
                <p className="max-w-xl text-lg md:text-2xl font-medium text-white/90 mb-10 leading-tight transform transition-all duration-700 delay-75 group-hover:-translate-y-2">
                    {/* Show excerpt if available, else standard text */}
                    {service.excerpt}
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-700 delay-100 group-hover:-translate-y-2">
                    {service.tags && service.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-8 py-2.5 rounded-full border border-white/30 backdrop-blur-md text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 bg-white/80 text-black"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div
                    className="bg-[var(--color-foreground)] text-white px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs flex items-center gap-4 border border-white/10 transition-all duration-500 hover:bg-[#ff3d3d] hover:scale-110 hover:shadow-[0_0_30px_rgba(255,61,61,0.4)] active:scale-95 group-hover:-translate-y-2"
                >
                    VIEW MORE
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
                </div>
            </div>

            {/* Inner Border Flare */}
            <div className="absolute inset-0 border-[1px] border-white/0 group-hover:border-white/20 transition-all duration-1000 rounded-[3rem] pointer-events-none scale-95 group-hover:scale-100" />
        </a>
    );
}

function ViewAllServicesCard() {
    return (
        <a
            href="/services"
            className="group relative w-[80vw] md:w-[600px] h-[50vh] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.01] flex-shrink-0 cursor-pointer block isolate transform-gpu [backface-visibility:hidden] bg-[#0c1b33] border border-white/10"
        >
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

            {/* Decorative Circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-10">
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 transform transition-all duration-700 group-hover:scale-105">
                    Ready to see<br /> everything?
                </h3>

                <div
                    className="bg-white text-[#0c1b33] px-12 py-6 rounded-full font-black tracking-[0.2em] text-sm flex items-center gap-4 border border-transparent transition-all duration-500 hover:bg-[#ff3d3d] hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 group-hover:-translate-y-2"
                >
                    VIEW ALL SERVICES
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                </div>
            </div>

            {/* Inner Border Flare */}
            <div className="absolute inset-0 border-[1px] border-white/10 group-hover:border-white/30 transition-all duration-1000 rounded-[3rem] pointer-events-none scale-95 group-hover:scale-100" />
        </a>
    );
}
