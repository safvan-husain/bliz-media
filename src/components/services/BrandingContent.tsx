
import React from 'react';
import {
    Palette,
    Lightbulb, // Strategy
    PenTool, // Design
    Search, // Discovery
    Layers, // Visual identity
    Monitor, // Digital platforms
    Share2, // Social media
    FileText, // Guidelines
    Printer, // Stationery
    Rocket, // Startups
    RefreshCw, // Rebranding
    Sparkles, // New products
    Briefcase, // Professional
    Layout, // Inconsistent visuals -> Structure
    CheckCircle, // refined/delivery
    Package
} from 'lucide-react';

const CONTENT = {
    intro: {
        title: "Build a strong, consistent brand that connects and converts",
        p1: "We help businesses create powerful brand identities that stand out, build trust, and leave a lasting impression across every digital touchpoint.",
        p2: "Your brand is how people recognize, remember, and trust your business. At Bliz, we craft cohesive brand identities that communicate your values, attract the right audience, and position your business for long-term success. From startups to growing businesses, we build brands that feel professional, authentic, and consistent across all platforms."
    },
    deliverables: {
        title: "Our Branding Solutions",
        subtitle: "We offer end-to-end branding services designed to give your business a clear and confident identity.",
        description: "Every element is carefully designed to align with your brand’s message and audience.",
        items: [
            { text: "Logo design and brand marks", icon: PenTool },
            { text: "Brand color palette and typography", icon: Palette },
            { text: "Brand guidelines and usage rules", icon: FileText },
            { text: "Visual identity for digital platforms", icon: Monitor },
            { text: "Social media branding assets", icon: Share2 },
            { text: "Business stationery and marketing materials", icon: Printer },
        ]
    },
    approach: {
        title: "Our Branding Process",
        subtitle: "We don’t just design brands, we build brand systems that grow with your business.",
        steps: [
            { number: "01", title: "Brand Discovery", description: "Understanding your business, vision, audience, and competitors.", icon: Search },
            { number: "02", title: "Strategy & Direction", description: "Defining brand positioning, tone, and visual direction.", icon: Lightbulb },
            { number: "03", title: "Visual Identity Design", description: "Designing logos, colors, typography, and visual elements.", icon: Palette },
            { number: "04", title: "Brand Refinement", description: "Revisions and fine-tuning for consistency and clarity.", icon: CheckCircle },
            { number: "05", title: "Brand Delivery", description: "Providing final assets and brand guidelines for long-term use.", icon: Package },
        ]
    },
    targetAudience: {
        title: "Who Needs Branding",
        description: "If your brand doesn’t clearly communicate who you are, branding can change that.",
        items: [
            { text: "Startups building their identity from scratch", icon: Rocket },
            { text: "Businesses going through rebranding", icon: RefreshCw },
            { text: "Companies launching new products or services", icon: Sparkles },
            { text: "Brands looking to appear more professional", icon: Briefcase },
            { text: "Businesses struggling with inconsistent visuals", icon: Layout },
        ]
    }
    // "Why Branding Matters" content and "Why Choose Bliz" content are partially integrated or left out to match WebDevelopmentContent structure strictly as requested.
};

export const BrandingContent = () => {
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

                <div className="grid grid-cols-1 gap-8 relative">
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-zinc-100 hidden md:block" />

                    {CONTENT.approach.steps.map((step, idx) => (
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

            {/* Target Audience Section */}
            <section className="bg-secondary text-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
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
