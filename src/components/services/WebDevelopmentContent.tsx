
import React from 'react';
import {
    Palette,
    Smartphone,
    Zap,
    Globe,
    ShieldCheck,
    Settings,
    Search,
    Layout,
    Code2,
    TestTube,
    Rocket,
    Store,
    Briefcase,
    TrendingUp,
    Building
} from 'lucide-react';
import { motion } from 'framer-motion';

const CONTENT = {
    intro: {
        title: "High-performance websites built to scale your business",
        p1: "A website is more than just an online presence — it’s your most powerful digital asset. At Bliz, we build websites that are visually impressive, technically strong, and strategically designed to convert visitors into customers.",
        p2: "Whether you need a simple business website or a fully dynamic custom platform, our development approach ensures performance, scalability, and long-term growth."
    },
    deliverables: {
        title: "What We Deliver",
        subtitle: "What You Get With Our Website Development",
        description: "Every project is built with a focus on user experience, business objectives, and technical excellence.",
        items: [
            { text: "Clean, modern UI tailored to your brand", icon: Palette },
            { text: "Mobile-first, fully responsive design", icon: Smartphone },
            { text: "Fast loading speed and optimized performance", icon: Zap },
            { text: "SEO-friendly structure from day one", icon: Globe },
            { text: "Secure, scalable, and future-ready architecture", icon: ShieldCheck },
            { text: "Easy content management and flexibility", icon: Settings },
        ]
    },
    approach: {
        title: "Our Development Approach",
        subtitle: "We follow a clear, transparent workflow to deliver results — without unnecessary complexity.",
        steps: [
            { number: "01", title: "Discovery & Planning", description: "Understanding your business, goals, and target audience.", icon: Search },
            { number: "02", title: "UI/UX & Architecture", description: "Designing intuitive layouts and defining the right technical structure.", icon: Layout },
            { number: "03", title: "Development & Integration", description: "Building fast, secure, and scalable solutions using modern technologies.", icon: Code2 },
            { number: "04", title: "Testing & Optimization", description: "Ensuring performance, responsiveness, and cross-browser compatibility.", icon: TestTube },
            { number: "05", title: "Launch & Support", description: "Smooth deployment with post-launch support when needed.", icon: Rocket },
        ]
    },
    targetAudience: {
        title: "Who We Build Websites For",
        description: "If your business needs a website that looks professional and performs reliably, you’re in the right place.",
        items: [
            { text: "Startups launching their first product", icon: Rocket },
            { text: "Local businesses looking to grow online", icon: Building },
            { text: "Service-based companies generating leads", icon: Briefcase },
            { text: "E-commerce brands scaling sales", icon: Store },
            { text: "Businesses needing custom web solutions", icon: TrendingUp },
        ]
    },
    cta: {
        title: "Let’s Build Your Next Digital Project",
        description: "Whether it’s a simple business site or a complex web application, we have the expertise to bring your vision to life.",
        buttonText: "Start Your Web Project"
    }
};

export const WebDevelopmentContent = () => {
    return (
        <div className="space-y-24 py-12">
            {/* Intro Section */}
            <section className="space-y-6 max-w-6xl">
                <h3 className="text-3xl font-bold text-secondary leading-tight">
                    {CONTENT.intro.title}
                </h3>
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                    <p>{CONTENT.intro.p1}</p>
                    <p>{CONTENT.intro.p2}</p>
                </div>
            </section>

            {/* Deliverables Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.deliverables.title}</h3>
                    <p className="text-zinc-500 font-medium">{CONTENT.deliverables.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.deliverables.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm"
                        >
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-zinc-500 italic border-l-4 border-primary/20 pl-4">
                    {CONTENT.deliverables.description}
                </p>
            </section>

            {/* Approach Section */}
            <section>
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.approach.title}</h3>
                    <p className="text-zinc-600 max-w-2xl">{CONTENT.approach.subtitle}</p>
                </div>

                <div className="flex flex-col">
                    {CONTENT.approach.steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-8 md:gap-16 py-12 border-b border-zinc-100 first:border-t group"
                        >
                            <div className="text-5xl md:text-7xl font-bold text-zinc-200 tabular-nums transition-colors duration-300 group-hover:text-primary/20">
                                {step.number}
                            </div>
                            <div className="space-y-3 pt-2 md:pt-4">
                                <h4 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                                    {step.title}
                                </h4>
                                <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Target Audience Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.targetAudience.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.targetAudience.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm">
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-zinc-500 italic border-l-4 border-primary/20 pl-4">
                    {CONTENT.targetAudience.description}
                </p>
            </section>

            {/* CTA Section */}
            <section className="text-center space-y-8 py-12">
                <div className="space-y-4 max-w-2xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary">
                        {CONTENT.cta.title}
                    </h3>
                    <p className="text-lg text-zinc-600">
                        {CONTENT.cta.description}
                    </p>
                </div>

                <a
                    href="/contact?service=web-development"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1"
                >
                    {CONTENT.cta.buttonText}
                    <Rocket className="w-5 h-5" />
                </a>
            </section>
        </div>
    );
};
