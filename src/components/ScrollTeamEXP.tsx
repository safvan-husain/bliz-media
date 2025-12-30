import { motion, type MotionValue, useSpring, useTransform } from "framer-motion";
import { coreTeam, founders, leaders, type TeamMember } from "../data/team";
import { useScrollLockAnimation } from "../hooks/useScrollLockAnimation";

const TEAM_SEGMENTS = {
    founders: {
        start: 0,
        holdEnd: 0.2,
        outEnd: 0.25,
        label: "Founders",
    },
    marketers: {
        start: 0.25,
        inEnd: 0.33,
        holdEnd: 0.45,
        outEnd: 0.5,
        label: "Marketers",
    },
    technologists: {
        start: 0.5,
        inEnd: 0.58,
        holdEnd: 0.7,
        outEnd: 0.75,
        label: "Technologists",
    },
    team: {
        start: 0.75,
        inEnd: 0.82,
        outEnd: 1,
        label: "Team",
    },
} as const;

// Progress detents (pauses) for each spotlight segment, except the final "Team" segment.
const TEAM_SCROLL_PAUSE_POINTS = [
    { at: TEAM_SEGMENTS.founders.holdEnd },
    { at: TEAM_SEGMENTS.marketers.holdEnd },
    { at: TEAM_SEGMENTS.technologists.holdEnd },
];

function useSpotlightPairMotion({
    progress,
    start,
    inEnd,
    holdEnd,
    outEnd,
    rightStagger = 0.02,
}: {
    progress: MotionValue<number>;
    start: number;
    inEnd: number;
    holdEnd: number;
    outEnd: number;
    rightStagger?: number;
}) {
    const leftY = useTransform(progress, [start, inEnd, holdEnd, outEnd], ["20%", "0%", "0%", "-150%"]);
    const leftOpacity = useTransform(progress, [start, inEnd, holdEnd, outEnd], [0, 1, 1, 0]);

    const rightStart = start + rightStagger;
    const rightInEnd = inEnd + rightStagger;
    const rightY = useTransform(progress, [rightStart, rightInEnd, holdEnd, outEnd], ["20%", "0%", "0%", "-150%"]);
    const rightOpacity = useTransform(progress, [rightStart, rightInEnd, holdEnd, outEnd], [0, 1, 1, 0]);

    return { leftY, leftOpacity, rightY, rightOpacity };
}

export default function ScrollTeamEXP() {
    const { sectionRef, progress } = useScrollLockAnimation({
        scrollLength: 4000,
        pauseHoldMs: 0,
        pausePoints: TEAM_SCROLL_PAUSE_POINTS,
    });

    const smoothProgress = useSpring(progress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const labelFade = 0.02;
    const foundersLabelOpacity = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.founders.start, TEAM_SEGMENTS.founders.outEnd - labelFade, TEAM_SEGMENTS.founders.outEnd],
        [1, 1, 0]
    );
    const marketersLabelOpacity = useTransform(
        smoothProgress,
        [
            TEAM_SEGMENTS.marketers.start,
            TEAM_SEGMENTS.marketers.start + labelFade,
            TEAM_SEGMENTS.marketers.outEnd - labelFade,
            TEAM_SEGMENTS.marketers.outEnd,
        ],
        [0, 1, 1, 0]
    );
    const technologistsLabelOpacity = useTransform(
        smoothProgress,
        [
            TEAM_SEGMENTS.technologists.start,
            TEAM_SEGMENTS.technologists.start + labelFade,
            TEAM_SEGMENTS.technologists.outEnd - labelFade,
            TEAM_SEGMENTS.technologists.outEnd,
        ],
        [0, 1, 1, 0]
    );
    const teamLabelOpacity = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.team.start, TEAM_SEGMENTS.team.start + labelFade],
        [0, 1]
    );

    // Fade out "Meet The" when team segment starts
    const meetTheOpacity = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.team.start - labelFade, TEAM_SEGMENTS.team.start],
        [1, 0]
    );


    const spotlightFounders = founders.slice(0, 2);
    const spotlightMarketers = leaders.filter((member) => /marketing|strategy/i.test(member.role)).slice(0, 2);
    const spotlightTechnologists = leaders.filter((member) => /development|tech/i.test(member.role)).slice(0, 2);

    const spotlightNames = new Set(
        [...spotlightFounders, ...spotlightMarketers, ...spotlightTechnologists].map((member) => member.name)
    );
    const restOfTeam = [...leaders.filter((member) => !spotlightNames.has(member.name)), ...coreTeam];

    const founderLeftY = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.founders.holdEnd, TEAM_SEGMENTS.founders.outEnd],
        ["0%", "-150%"]
    );
    const founderLeftOpacity = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.founders.holdEnd, TEAM_SEGMENTS.founders.outEnd],
        [1, 0]
    );
    const founderRightY = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.founders.holdEnd, TEAM_SEGMENTS.founders.outEnd],
        ["0%", "-150%"]
    );
    const founderRightOpacity = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.founders.holdEnd, TEAM_SEGMENTS.founders.outEnd],
        [1, 0]
    );

    const marketersMotion = useSpotlightPairMotion({
        progress: smoothProgress,
        start: TEAM_SEGMENTS.marketers.start,
        inEnd: TEAM_SEGMENTS.marketers.inEnd,
        holdEnd: TEAM_SEGMENTS.marketers.holdEnd,
        outEnd: TEAM_SEGMENTS.marketers.outEnd,
    });

    const technologistsMotion = useSpotlightPairMotion({
        progress: smoothProgress,
        start: TEAM_SEGMENTS.technologists.start,
        inEnd: TEAM_SEGMENTS.technologists.inEnd,
        holdEnd: TEAM_SEGMENTS.technologists.holdEnd,
        outEnd: TEAM_SEGMENTS.technologists.outEnd,
    });

    const teamEntryY = useTransform(smoothProgress, [TEAM_SEGMENTS.team.start, TEAM_SEGMENTS.team.inEnd], ["40vh", "0vh"]);
    const teamEntryOpacity = useTransform(
        smoothProgress,
        [TEAM_SEGMENTS.team.start, TEAM_SEGMENTS.team.inEnd],
        [0, 1]
    );
    const teamX = useTransform(smoothProgress, [TEAM_SEGMENTS.team.inEnd, TEAM_SEGMENTS.team.outEnd], ["0%", "-70%"]);

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
                <div className="relative container mx-auto px-6 h-full flex flex-col md:flex-row md:items-center lg:gap-20 pt-0">
                    {/* Fixed Title */}
                    <div className="md:w-1/3 lg:w-1/4 z-30 absolute bottom-20 left-0">
                        <motion.p 
                            style={{ opacity: meetTheOpacity }}
                            className="text-6xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl text-white"
                        >
                            Meet
                        </motion.p>
                        <motion.p 
                            style={{ opacity: meetTheOpacity }}
                            className="text-6xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl text-white"
                        >
                            The
                        </motion.p>
                        <h2 className="relative text-6xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl text-white">

                            <motion.span style={{ opacity: foundersLabelOpacity }} className="absolute inset-0">
                                {TEAM_SEGMENTS.founders.label}
                            </motion.span>
                            <motion.span style={{ opacity: marketersLabelOpacity }} className="absolute inset-0">
                                {TEAM_SEGMENTS.marketers.label}
                            </motion.span>
                            <motion.span style={{ opacity: technologistsLabelOpacity }} className="absolute inset-0">
                                {TEAM_SEGMENTS.technologists.label}
                            </motion.span>
                            {/* Keeps layout stable while swapping keywords */}
                            <span className="opacity-0">{TEAM_SEGMENTS.technologists.label}</span>
                        </h2>
                    </div>

                    <div className="flex-1 relative w-full h-full min-h-0 absolute right-0">
                        {/* 1. Founders Frame */}
                        <div className="absolute right-8 w-auto flex items-start justify-end z-20">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-end items-start">
                                {spotlightFounders.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        style={{
                                            y: index === 0 ? founderLeftY : founderRightY,
                                            opacity: index === 0 ? founderLeftOpacity : founderRightOpacity,
                                        }}
                                    >
                                        <TeamSpotlightCard member={member} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Marketers Frame */}
                        <div className="absolute right-8 w-auto flex items-start justify-end z-30">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-end items-start">
                                {spotlightMarketers.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        style={{
                                            y: index === 0 ? marketersMotion.leftY : marketersMotion.rightY,
                                            opacity: index === 0 ? marketersMotion.leftOpacity : marketersMotion.rightOpacity,
                                        }}
                                    >
                                        <TeamSpotlightCard member={member} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Technologists Frame */}
                        <div className="absolute right-8 w-auto flex items-start justify-end z-40">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-end items-start">
                                {spotlightTechnologists.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        style={{
                                            y: index === 0 ? technologistsMotion.leftY : technologistsMotion.rightY,
                                            opacity: index === 0 ? technologistsMotion.leftOpacity : technologistsMotion.rightOpacity,
                                        }}
                                    >
                                        <TeamSpotlightCard member={member} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Rest Of Team Carousel */}
                        <motion.div
                            style={{
                                y: teamEntryY,
                                opacity: teamEntryOpacity,
                            }}
                            className="absolute inset-0 w-full h-full flex flex-col justify-center items-start z-50"
                        >
                            <div className="relative w-full overflow-visible">
                                <motion.div style={{ x: teamX }} className="flex gap-10 lg:gap-14 w-max pr-[30vw]">
                                    {restOfTeam.map((member) => (
                                        <TeamCarouselCard key={member.name} member={member} />
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

function TeamCarouselCard({ member }: { member: TeamMember }) {
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

function TeamSpotlightCard({ member }: { member: TeamMember }) {
    const backgroundClass = member.bgColor ?? "bg-primary/20";

    return (
        <div className="flex flex-col items-center text-center group w-full max-w-[400px]">
            <div
                className={`relative aspect-[1/1.2] max-w-[300px] sm:max-w-none overflow-hidden rounded-b-[150px] ${backgroundClass} border-[6px] border-white/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white`}
            >
                <img
                    src={member.imagePath}
                    alt={member.name}
                    className="h-full w-full object-cover object-top mix-blend-luminosity brightness-110 contrast-110 transition-all duration-700 group-hover:mix-blend-normal group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="mt-8">
                <h3 className="text-3xl font-black tracking-tight text-white">{member.name}</h3>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/50">{member.role}</p>
            </div>
        </div>
    );
}
