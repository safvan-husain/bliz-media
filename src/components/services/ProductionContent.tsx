
import React from 'react';
import {
    Eye,
    Zap,
    Image,
    Layers,
    TrendingUp,
    Video,
    Smartphone,
    ShoppingBag,
    Activity, // Motion
    Film,
    Megaphone,
    Lightbulb,
    ClipboardList, // Pre-production
    Camera,
    Scissors, // Post-production as editing
    Rocket,
    CheckCircle,
    Building,
    Store,
    Share2,
    Star,
    Heart, // Creative storytelling
    Monitor, // Digital platforms
    Users // Collaboration
} from 'lucide-react';


const CONTENT = {
    intro: {
        title: "High-quality visual content designed to engage and inspire",
        p1: "We produce visually compelling content that helps brands tell their story, connect with audiences, and stand out across digital platforms. In a visual-first digital world, content is what captures attention and builds connection.",
        p2: "At Bliz, we create professional production assets that communicate your brand message clearly, creatively, and consistently. From concept to final delivery, our production process is focused on quality, storytelling, and brand alignment."
    },
    importance: {
        title: "Why Creative Production Is Important",
        subtitle: "High-quality production ensures your brand looks professional everywhere it appears.",
        items: [
            { text: "Grabs attention in crowded digital spaces", icon: Eye },
            { text: "Communicates brand values visually", icon: Image },
            { text: "Improves engagement across platforms", icon: TrendingUp }, // Or Zap
            { text: "Strengthens brand consistency", icon: Layers },
            { text: "Enhances marketing and advertising performance", icon: Megaphone },
        ]
    },
    solutions: {
        title: "Our Production Solutions",
        subtitle: "We offer end-to-end creative production solutions for digital brands.",
        description: "Each piece of content is crafted to align with your brand identity and goals.",
        items: [
            { text: "Brand videos and promotional content", icon: Video },
            { text: "Social media video production", icon: Smartphone },
            { text: "Product and commercial visuals", icon: ShoppingBag },
            { text: "Motion graphics and animations", icon: Activity },
            { text: "Reels, ads, and short-form content", icon: Film },
            { text: "Visual assets for marketing campaigns", icon: Megaphone },
        ]
    },
    process: {
        title: "Our Production Process",
        subtitle: "A seamless workflow from initial concept to final cut.",
        steps: [
            { number: "01", title: "Concept & Planning", description: "Defining objectives, messaging, and creative direction.", icon: Lightbulb },
            { number: "02", title: "Pre-Production", description: "Storyboarding, scripting, and planning visuals.", icon: ClipboardList },
            { number: "03", title: "Production", description: "Capturing and creating high-quality visual content.", icon: Camera },
            { number: "04", title: "Post-Production", description: "Editing, color grading, sound, and motion elements.", icon: Scissors },
            { number: "05", title: "Final Delivery", description: "Optimized formats ready for digital platforms.", icon: Rocket }, // Or CheckCircle
        ]
    },
    targetAudience: {
        title: "Who Production Services Are For",
        description: "If your brand relies on visuals, professional production makes the difference.",
        items: [
            { text: "Brands building a strong visual presence", icon: Building },
            { text: "Businesses promoting products or services", icon: Store },
            { text: "Marketing campaigns needing creative assets", icon: Megaphone },
            { text: "Social media–driven brands", icon: Share2 },
            { text: "Companies seeking premium visual content", icon: Star },
        ]
    },
    whyChoose: {
        title: "Why Choose Bliz for Production",
        subtitle: "We don’t just create content, we create visual experiences.",
        items: [
            { text: "Creative storytelling approach", icon: Heart },
            { text: "High-quality visuals and attention to detail", icon: Eye },
            { text: "Content optimized for digital platforms", icon: Monitor },
            { text: "Brand-aligned creative direction", icon: Star },
            { text: "Smooth collaboration from concept to delivery", icon: Users },
        ]
    },
    cta: {
        title: "Let’s Create Content That Connects",
        description: "Whether it’s video, visuals, or motion content, we’re ready to bring your ideas to life.",
        buttonText: "Get a Free Production Consultation"
    }
};

export const ProductionContent = () => {
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

            {/* Importance Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.importance.title}</h3>
                    <p className="text-zinc-500 font-medium">{CONTENT.importance.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.importance.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm"
                        >
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions Section (Deliverables style) */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.solutions.title}</h3>
                    <p className="text-zinc-500 font-medium">{CONTENT.solutions.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.solutions.items.map((item, idx) => (
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
                    {CONTENT.solutions.description}
                </p>
            </section>

            {/* Process Section (Approach style) */}
            <section>
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.process.title}</h3>
                    <p className="text-zinc-600 max-w-2xl">{CONTENT.process.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 relative">
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-100 hidden md:block" />

                    {CONTENT.process.steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group items-center">
                            <div className="flex-shrink-0 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-white border-4 border-zinc-50 shadow-sm flex items-center justify-center font-black text-lg text-zinc-300 group-hover:text-primary group-hover:border-primary/10 transition-all duration-300">
                                    {step.number}
                                </div>
                            </div>
                            <div className="flex-grow pt-2">
                                <div className="p-6 md:p-8 rounded-3xl bg-secondary/95 border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-xl shadow-black/5 group-hover:-translate-y-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <h4 className="text-xl font-bold text-white">{step.title}</h4>
                                        <step.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Bliz Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.whyChoose.title}</h3>
                    <p className="text-zinc-500 font-medium">{CONTENT.whyChoose.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.whyChoose.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm"
                        >
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
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
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1"
                >
                    {CONTENT.cta.buttonText}
                    <Rocket className="w-5 h-5" />
                </a>
            </section>
        </div>
    );
};
