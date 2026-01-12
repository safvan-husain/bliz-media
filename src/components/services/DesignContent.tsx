
import React from 'react';
import {
    Palette,
    Smartphone,
    Monitor,
    Share2,
    Grid,
    Search,
    Layout,
    PenTool,
    MessageSquare,
    Package,
    Rocket,
    RefreshCw,
    UserPlus,
    Megaphone,
    Image,
    User,
    Sparkles,
    MousePointerClick,
    Target,
    Users,
    Zap,
    ShieldCheck,
    TrendingUp,
    Layers,
    Smile
} from 'lucide-react';

const CONTENT = {
    intro: {
        title: "User-focused design crafted to elevate your brand",
        p1: "We create clean, modern, and user-friendly designs that enhance user experience, strengthen brand identity, and support your business goals.",
        p2: "Great design isn’t just about aesthetics — it’s about clarity, usability, and impact. At Bliz, we design digital experiences that are visually compelling, easy to navigate, and built to guide users toward meaningful actions. Every design decision we make is intentional, strategic, and aligned with your brand."
    },
    importance: {
        title: "Why Professional Design Is Important",
        subtitle: "Well-designed experiences help users feel confident interacting with your business.",
        items: [
            { text: "Creates strong first impressions", icon: Zap },
            { text: "Improves user experience and usability", icon: Smile },
            { text: "Builds trust and credibility", icon: ShieldCheck },
            { text: "Increases engagement and conversions", icon: TrendingUp },
            { text: "Ensures brand consistency across platforms", icon: Layers },
        ]
    },
    solutions: {
        title: "Our Design Solutions",
        subtitle: "We offer a wide range of design solutions tailored to digital-first brands.",
        description: "Our designs are clean, modern, and scalable for long-term growth.",
        items: [
            { text: "UI/UX design for websites and applications", icon: Layout },
            { text: "Website and landing page design", icon: Monitor },
            { text: "Mobile-friendly and responsive design", icon: Smartphone },
            { text: "Brand visual design elements", icon: Palette },
            { text: "Social media and marketing creatives", icon: Share2 },
            { text: "Design systems and style guides", icon: Grid },
        ]
    },
    process: {
        title: "Our Design Process",
        subtitle: "From concept to final pixel, our process ensures quality and consistency.",
        steps: [
            { number: "01", title: "Research & Discovery", description: "Understanding your users, goals, and challenges.", icon: Search },
            { number: "02", title: "Wireframing & Structure", description: "Creating intuitive layouts and user flows.", icon: PenTool },
            { number: "03", title: "Visual Design", description: "Applying color, typography, and visual elements.", icon: Palette },
            { number: "04", title: "Feedback & Refinement", description: "Iterating based on feedback and usability testing.", icon: MessageSquare },
            { number: "05", title: "Final Design Delivery", description: "Delivering ready-to-use designs and assets.", icon: Package },
        ]
    },
    targetAudience: {
        title: "Who Our Design Services Are For",
        description: "If usability and aesthetics matter, professional design is essential.",
        items: [
            { text: "Startups launching digital products", icon: Rocket },
            { text: "Businesses redesigning existing platforms", icon: RefreshCw },
            { text: "Brands improving user experience", icon: UserPlus },
            { text: "Marketing teams needing conversion-focused designs", icon: Megaphone },
            { text: "Companies seeking modern, professional visuals", icon: Image },
        ]
    },
    whyChoose: {
        title: "Why Choose Bliz for Design",
        subtitle: "We don’t just design screens, we design experiences.",
        items: [
            { text: "User-first design approach", icon: User },
            { text: "Clean, modern, and timeless aesthetics", icon: Sparkles },
            { text: "Strong focus on usability and accessibility", icon: MousePointerClick },
            { text: "Consistent brand-aligned visuals", icon: Target },
            { text: "Collaborative and transparent process", icon: Users },
        ]
    },
    cta: {
        title: "Let’s Design Something Exceptional",
        description: "From concept to final design, we help bring clarity and creativity to your digital presence.",
        buttonText: "Get a Free Design Consultation"
    }
};

export const DesignContent = () => {
    return (
        <div className="space-y-24 py-12">
            {/* Intro Section */}
            <section className="space-y-6 max-w-6xl">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm">Design That Looks Good and Works Better</span>
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
                            className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm h-20"
                        >
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions Section (Equivalent to Deliverables) */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.solutions.title}</h3>
                    <p className="text-zinc-500 font-medium">{CONTENT.solutions.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.solutions.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm h-20"
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

            {/* Approach Section */}
            <section>
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.process.title}</h3>
                    <p className="text-zinc-600 max-w-2xl">{CONTENT.process.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CONTENT.process.steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-3xl border border-zinc-100 bg-white/50 hover:bg-white hover:border-zinc-200 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300"
                        >
                            <div className="absolute top-6 right-8 text-4xl font-bold text-zinc-100 group-hover:text-primary/10 transition-colors duration-300">
                                {step.number}
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <step.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                                        {step.title}
                                    </h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
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
                        <div key={idx} className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm h-20">
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-zinc-500 italic border-l-4 border-primary/20 pl-4">
                    {CONTENT.targetAudience.description}
                </p>
            </section>

            {/* Why Choose Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.whyChoose.title}</h3>
                    <p className="text-zinc-500 font-medium">{CONTENT.whyChoose.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.whyChoose.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm h-20"
                        >
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
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
                    href="/contact?service=design"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1"
                >
                    {CONTENT.cta.buttonText}
                    <Rocket className="w-5 h-5" />
                </a>
            </section>
        </div>
    );
};
