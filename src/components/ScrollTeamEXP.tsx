import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { founders, leaders, type TeamMember } from "../data/team";
import { useScrollLockAnimation } from "../hooks/useScrollLockAnimation";

export default function ScrollTeamEXP() {
    const { sectionRef, progress } = useScrollLockAnimation({
        scrollLength: 2000,
    });

    const smoothProgress = useSpring(progress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    // Animation transforms based on progress
    // Founders animations - early in scroll (0-40%)
    const founderLeftY = useTransform(smoothProgress, [0, 0.72], ["0%", "-150%"]);
    const founderLeftOpacity = useTransform(smoothProgress, [0.22, 0.62], [1, 0]);

    const founderRightY = useTransform(smoothProgress, [0.15, 0.75], ["-20%", "-150%"]);
    const founderRightOpacity = useTransform(smoothProgress, [0.27, 0.65], [1, 0]);

    const foundersEndProgress = 0.45;
    const textAnimDuration = 0.4;
    const textAnimStart = foundersEndProgress * 0.6;
    const textAnimEnd = textAnimStart + textAnimDuration;

    // Leaders arrival - middle section (35-70%) - slower
    const leadersEntryY = useTransform(smoothProgress, [0.35, 0.7], ["40vh", "0vh"]);
    const leadersEntryOpacity = useTransform(smoothProgress, [0.35, 0.6], [0, 1]);

    const titleX = useTransform(smoothProgress, [textAnimStart, textAnimEnd], ["0%", "0%"]);
    const titleY = useTransform(smoothProgress, [textAnimStart, textAnimEnd], ["0%", "-30vh"]);
    const titleScale = useTransform(smoothProgress, [textAnimStart, textAnimEnd], [1, 0.8]);

    // Word animations for "Meet the Team" merging to single line
    const word2X = useTransform(smoothProgress, [textAnimStart, textAnimEnd], ["0em", "2.6em"]);
    const word2Y = useTransform(smoothProgress, [textAnimStart, textAnimEnd], ["0em", "-0.9em"]);

    const word3X = useTransform(smoothProgress, [textAnimStart, textAnimEnd], ["0em", "4.2em"]);
    const word3Y = useTransform(smoothProgress, [textAnimStart, textAnimEnd], ["0em", "-1.8em"]);

    // Leaders horizontal scroll - later section (45-100%) - slower
    const leadersX = useTransform(smoothProgress, [0.45, 1], ["0%", "-70%"]);

    const displayedFounders = founders.slice(0, 2);

    return (
        <section ref={sectionRef} className="relative h-screen bg-secondary overflow-clip">
            {/* Main Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                {/* Background Decorative Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="absolute left-[30%] top-0 h-full w-[1px] bg-white" />
                    <div className="absolute left-[50%] top-0 h-full w-[1px] bg-white" />
                    <div className="absolute left-[70%] top-0 h-full w-[1px] bg-white" />
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-6 h-full flex flex-col md:flex-row md:items-center lg:gap-20 pt-0">
                    {/* Fixed Title */}
                    <motion.div
                        style={{
                            x: isDesktop ? titleX : 0,
                            y: isDesktop ? titleY : 0,
                            scale: isDesktop ? titleScale : 1,
                            transformOrigin: "left top",
                        }}
                        className="md:w-1/3 lg:w-1/4 z-30 pt-20 md:pt-36"
                    >
                        <h2 className="text-6xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl text-white flex flex-col">
                            <motion.span className="inline-block origin-left">Meet</motion.span>
                            <motion.span
                                style={{
                                    x: isDesktop ? word2X : 0,
                                    y: isDesktop ? word2Y : 0
                                }}
                                className="inline-block origin-left"
                            >
                                the
                            </motion.span>
                            <motion.span
                                style={{
                                    x: isDesktop ? word3X : 0,
                                    y: isDesktop ? word3Y : 0
                                }}
                                className="inline-block origin-left"
                            >
                                Team
                            </motion.span>
                        </h2>
                    </motion.div>

                    <div className="flex-1 relative w-full h-full min-h-0">
                        {/* 1. Founders Frame */}
                        <div className="absolute top-0 inset-0 w-full flex items-start justify-center z-20">
                            <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 justify-items-stretch items-start">
                                {displayedFounders.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        style={{
                                            y: index === 0 ? founderLeftY : founderRightY,
                                            opacity: index === 0 ? founderLeftOpacity : founderRightOpacity,
                                        }}
                                        className="flex flex-col items-center text-center group w-full"
                                    >
                                        <div
                                            className={`relative aspect-[1/1.2] max-w-[300px] sm:max-w-none overflow-hidden rounded-b-[150px] ${member.bgColor} border-[6px] border-white/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white`}
                                        >
                                            <img
                                                src={member.imagePath}
                                                alt={member.name}
                                                className="h-full w-full object-cover object-top mix-blend-luminosity brightness-110 contrast-110 transition-all duration-700 group-hover:mix-blend-normal group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-3xl font-black tracking-tight text-white">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/50">
                                                {member.role}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Leaders Frame */}
                        <motion.div
                            style={{
                                y: leadersEntryY,
                                opacity: leadersEntryOpacity,
                            }}
                            className="absolute inset-0 w-full h-full flex flex-col justify-center items-start z-50"
                        >
                            <div className="w-full mb-12 hidden">
                                <h3 className="text-4xl font-black md:text-6xl text-white">Leadership</h3>
                                <p className="max-w-2xl text-lg text-white/60 mt-4">
                                    Strategic minds leading our design, engineering, and growth.
                                </p>
                            </div>

                            <div className="relative w-full overflow-visible">
                                <motion.div style={{ x: leadersX }} className="flex gap-10 lg:gap-14 w-max pr-[30vw]">
                                    {leaders.map((member) => (
                                        <LeaderCard key={member.name} member={member} />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Accents (Pinned) */}
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
                <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute -right-[10%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]" />
            </div>
        </section>
    );
}

function LeaderCard({ member }: { member: TeamMember }) {
    return (
        <div className="group flex flex-col gap-6 w-[350px] flex-shrink-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/30">
                <img
                    src={member.imagePath}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {member.role}
                </div>
                <h4 className="text-3xl font-black tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                    {member.name}
                </h4>
            </div>
        </div>
    );
}
