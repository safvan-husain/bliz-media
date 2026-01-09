
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
    }
};

export const WebDevelopmentContent = () => {
    return (
        <div className="space-y-24 py-12">
            {/* Intro Section */}
            <section className="space-y-6 max-w-3xl">
                <h3 className="text-3xl font-bold text-[#0c1b33] leading-tight">
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
                    <h3 className="text-2xl font-bold text-[#0c1b33] mb-2">{CONTENT.deliverables.title}</h3>
                    <p className="text-zinc-500 font-medium">{CONTENT.deliverables.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CONTENT.deliverables.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-black/5 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6 text-[#0c1b33]" />
                            </div>
                            <h4 className="text-lg font-semibold text-[#0c1b33]">{item.text}</h4>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-zinc-600 italic border-l-4 border-primary/20 pl-4">
                    {CONTENT.deliverables.description}
                </p>
            </section>

            {/* Approach Section */}
            <section>
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-[#0c1b33] mb-2">{CONTENT.approach.title}</h3>
                    <p className="text-zinc-600 max-w-2xl">{CONTENT.approach.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 relative">
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-100 hidden md:block" />

                    {CONTENT.approach.steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                            <div className="flex-shrink-0 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-white border-4 border-zinc-50 shadow-sm flex items-center justify-center font-black text-lg text-zinc-300 group-hover:text-primary group-hover:border-primary/10 transition-colors duration-300">
                                    {step.number}
                                </div>
                            </div>
                            <div className="flex-grow pt-2">
                                <div className="p-6 md:p-8 rounded-3xl bg-zinc-50 border border-zinc-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-black/5 group-hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-xl font-bold text-[#0c1b33]">{step.title}</h4>
                                        <step.icon className="w-6 h-6 text-zinc-300 group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-zinc-600">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="bg-[#0c1b33] text-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8">{CONTENT.targetAudience.title}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {CONTENT.targetAudience.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="font-medium text-white/90 text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/60 text-lg">
                        {CONTENT.targetAudience.description}
                    </p>
                </div>
            </section>
        </div>
    );
};
