import React from 'react';
import {
    Target,
    Eye,
    UserPlus,
    Heart,
    BarChart,
    Search,
    Share2,
    MousePointerClick,
    FileText,
    MapPin,
    TrendingUp,
    Compass,
    Rocket,
    BarChart2,
    Briefcase,
    ShoppingBag,
    Award,
    BrainCircuit,
    Database,
    FileSearch,
    Settings,
    Infinity,
    CheckCircle
} from 'lucide-react';

const CONTENT = {
    intro: {
        title: "Digital Marketing That Drives Real Growth",
        subtitle: "Strategic marketing designed to attract, engage, and convert",
        p1: "We help businesses grow online through data-driven digital marketing strategies that increase visibility, generate quality leads, and deliver measurable results. Digital marketing is not about being everywhere — it’s about being where it matters most.",
        p2: "At Bliz, we focus on building smart, result-oriented marketing strategies that connect your brand with the right audience at the right time. From increasing traffic to improving conversions, our campaigns are designed to support real business growth."
    },
    essential: {
        title: "Why Digital Marketing Is Essential",
        description: "A strong digital presence ensures your business stays competitive in today’s online-first world.",
        items: [
            { text: "Reaches your target audience effectively", icon: Target },
            { text: "Increases brand visibility and awareness", icon: Eye },
            { text: "Generates consistent leads and inquiries", icon: UserPlus },
            { text: "Improves customer engagement and retention", icon: Heart },
            { text: "Delivers measurable and trackable results", icon: BarChart },
        ]
    },
    solutions: {
        title: "Our Digital Marketing Solutions",
        subtitle: "We provide comprehensive digital marketing solutions tailored to your business goals.",
        footer: "Each service is carefully planned and executed to maximize performance and ROI.",
        items: [
            { text: "Search Engine Optimization (SEO)", icon: Search },
            { text: "Social Media Marketing", icon: Share2 },
            { text: "Google Ads & Paid Campaigns", icon: MousePointerClick },
            { text: "Content Marketing", icon: FileText },
            { text: "Local Business Marketing", icon: MapPin },
            { text: "Conversion Rate Optimization", icon: TrendingUp },
        ]
    },
    process: {
        title: "Our Marketing Process",
        steps: [
            { number: "01", title: "Research & Strategy", description: "Analyzing your market, competitors, and audience.", icon: Search },
            { number: "02", title: "Campaign Planning", description: "Defining channels, messaging, and content strategy.", icon: Compass },
            { number: "03", title: "Execution & Optimization", description: "Launching campaigns and continuously improving performance.", icon: Rocket },
            { number: "04", title: "Performance Tracking", description: "Monitoring results through analytics and reporting.", icon: BarChart2 },
            { number: "05", title: "Scaling Growth", description: "Refining strategies to achieve long-term growth.", icon: TrendingUp },
        ]
    },
    audience: {
        title: "Who Digital Marketing Is For",
        description: "If you want measurable results, digital marketing is essential.",
        items: [
            { text: "Businesses looking to increase online visibility", icon: Eye },
            { text: "Service providers generating quality leads", icon: Briefcase },
            { text: "E-commerce brands driving consistent sales", icon: ShoppingBag },
            { text: "Local businesses targeting nearby customers", icon: MapPin },
            { text: "Brands aiming for long-term digital growth", icon: Award },
        ]
    },
    whyChoose: {
        title: "Why Choose Bliz for Digital Marketing",
        description: "We don’t chase vanity metrics — we focus on outcomes that matter.",
        items: [
            { text: "Strategy-first approach, not guesswork", icon: BrainCircuit },
            { text: "Data-driven decisions and optimization", icon: Database },
            { text: "Transparent reporting and insights", icon: FileSearch },
            { text: "Customized campaigns for your business", icon: Settings },
            { text: "Focus on long-term, sustainable growth", icon: Infinity }, // Infinity or calendar for long term
        ]
    },
    cta: {
        title: "Let’s Grow Your Business Online",
        description: "Whether you’re starting from scratch or scaling existing campaigns, we’re here to help you grow with confidence.",
        buttonText: "Get a Free Marketing Consultation"
    }
};

export const DigitalMarketingContent = () => {
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

            {/* Why Essential Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.essential.title}</h3>
                    <p className="text-zinc-500 font-medium max-w-2xl">{CONTENT.essential.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.essential.items.map((item, idx) => (
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

            {/* Solutions Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.solutions.title}</h3>
                    <p className="text-zinc-500 font-medium max-w-2xl">{CONTENT.solutions.subtitle}</p>
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
                    {CONTENT.solutions.footer}
                </p>
            </section>


            {/* Process Section */}
            <section>
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.process.title}</h3>
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

            {/* Why Choose Bliz Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.whyChoose.title}</h3>
                    <p className="text-zinc-500 font-medium max-w-2xl">{CONTENT.whyChoose.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {CONTENT.whyChoose.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center gap-4 bg-secondary/95 p-6 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm h-42"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>
            </section>


            {/* Target Audience Section */}
            <section>
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{CONTENT.audience.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CONTENT.audience.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-secondary/95 p-4 rounded-2xl border border-white/5 hover:bg-secondary-light transition-all duration-300 shadow-sm h-20">
                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white/90 text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-zinc-500 italic border-l-4 border-primary/20 pl-4">
                    {CONTENT.audience.description}
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
                    href="/contact?service=digital-marketing"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1"
                >
                    {CONTENT.cta.buttonText}
                    <Rocket className="w-5 h-5" />
                </a>
            </section>
        </div>
    );
};
