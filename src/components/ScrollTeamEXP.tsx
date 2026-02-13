"use client";

import {
  motion,
  type MotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  founders,
  leaders,
  otherTeamMembers,
  type TeamMember,
} from "../data/team";
import { useScrollLockAnimation } from "../hooks/useScrollLockAnimation";

const isRegionalManager = (member: TeamMember) =>
  member.role.toLowerCase().includes("regional manager");

const isProductionOrTech = (member: TeamMember) => {
  const role = member.role.toLowerCase();
  return role.includes("production") || role.includes("tech");
};

const isSeoOrPerformanceMarketing = (member: TeamMember) => {
  const role = member.role.toLowerCase();
  return role.includes("seo") || role.includes("performance marketing");
};

const TEAM_SEGMENTS = {
  founders: {
    start: 0,
    inEnd: 0.08,
    holdEnd: 0.16,
    outEnd: 0.2,
    title: "Meet the minds behind the mission",
  },
  globalLeadership: {
    start: 0.2,
    inEnd: 0.28,
    holdEnd: 0.34,
    outEnd: 0.4,
    title: "Meet Our Global Leadership",
  },
  productionTech: {
    start: 0.4,
    inEnd: 0.48,
    holdEnd: 0.54,
    outEnd: 0.6,
    title: "Meet Our Production & Tech Leads",
  },
  seoPerformance: {
    start: 0.6,
    inEnd: 0.68,
    holdEnd: 0.74,
    outEnd: 0.8,
    title: "Meet Our SEO & Performance Marketing Leads",
  },
  team: {
    start: 0.8,
    inEnd: 0.86,
    outEnd: 1,
    title: "", //keep it empty.
  },
} as const;

const TEAM_SCROLL_PAUSE_POINTS = [
  { at: TEAM_SEGMENTS.founders.holdEnd, holdMs: 0, direction: "both" },
  { at: TEAM_SEGMENTS.globalLeadership.holdEnd, holdMs: 0, direction: "both" },
  { at: TEAM_SEGMENTS.productionTech.holdEnd, holdMs: 0, direction: "both" },
  { at: TEAM_SEGMENTS.seoPerformance.holdEnd, holdMs: 0, direction: "both" },
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
  const leftY = useTransform(
    progress,
    [start, inEnd, holdEnd, outEnd],
    ["20%", "0%", "0%", "-150%"],
  );
  const leftOpacity = useTransform(
    progress,
    [start, inEnd, holdEnd, outEnd],
    [0, 1, 1, 0],
  );

  const rightStart = start + rightStagger;
  const rightInEnd = inEnd + rightStagger;
  const rightY = useTransform(
    progress,
    [rightStart, rightInEnd, holdEnd, outEnd],
    ["20%", "0%", "0%", "-150%"],
  );
  const rightOpacity = useTransform(
    progress,
    [rightStart, rightInEnd, holdEnd, outEnd],
    [0, 1, 1, 0],
  );

  return { leftY, leftOpacity, rightY, rightOpacity };
}

function uniqueById(members: TeamMember[]) {
  const seen = new Set<string>();
  const result: TeamMember[] = [];
  for (const member of members) {
    if (seen.has(member.id)) continue;
    seen.add(member.id);
    result.push(member);
  }
  return result;
}

export default function ScrollTeamEXP() {
  const { sectionRef, progress, isLocked } = useScrollLockAnimation({
    scrollLength: 3200,
    pauseHoldMs: 0,
    pausePoints: TEAM_SCROLL_PAUSE_POINTS,
    wheelDeltaResponse: "saturate",
    wheelDeltaClampPx: 120,
    wheelDeltaCurvePx: 25,
  });

  const smoothProgress = useSpring(progress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.0001,
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.55);
      },
      { threshold: [0, 0.55, 1] },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (!(navbar instanceof HTMLElement)) return;

    const prev = {
      opacity: navbar.style.opacity,
      pointerEvents: navbar.style.pointerEvents,
      transform: navbar.style.transform,
      transition: navbar.style.transition,
    };

    const showNavbar = () => {
      navbar.style.opacity = prev.opacity;
      navbar.style.pointerEvents = prev.pointerEvents;
      navbar.style.transform = prev.transform;
      navbar.style.transition = prev.transition;
    };

    const hideNavbar = () => {
      navbar.style.transition = "opacity 200ms ease, transform 200ms ease";
      navbar.style.opacity = "0";
      navbar.style.pointerEvents = "none";
      navbar.style.transform = "translateY(-16px)";
    };

    if (isLocked || isInView) hideNavbar();
    else showNavbar();

    return () => {
      showNavbar();
    };
  }, [isInView, isLocked]);

  const {
    spotlightFounders,
    spotlightGlobalLeadership,
    spotlightProductionTech,
    spotlightSeoPerformance,
    restOfTeam,
  } = useMemo(() => {
    const regionalManagers = leaders.filter(isRegionalManager);
    const otherLeaders = leaders.filter((member) => !isRegionalManager(member));

    const productionAndTech = otherLeaders.filter(isProductionOrTech);
    const seoAndPerformanceMarketing = otherLeaders.filter(
      isSeoOrPerformanceMarketing,
    );

    const spotlightFoundersMembers = founders.slice(0, 2);
    const spotlightGlobalMembers = regionalManagers.slice(0, 2);
    const spotlightProductionTechMembers = productionAndTech.slice(0, 2);
    const spotlightSeoPerformanceMembers = seoAndPerformanceMarketing.slice(
      0,
      2,
    );

    const spotlightIds = new Set<string>(
      [
        ...spotlightFoundersMembers,
        ...spotlightGlobalMembers,
        ...spotlightProductionTechMembers,
        ...spotlightSeoPerformanceMembers,
      ].map((member) => member.id),
    );

    const restMembers = uniqueById([
      ...founders.filter((member) => !spotlightIds.has(member.id)),
      ...leaders.filter((member) => !spotlightIds.has(member.id)),
      ...otherTeamMembers.filter((member) => !spotlightIds.has(member.id)),
    ]);

    return {
      spotlightFounders: spotlightFoundersMembers,
      spotlightGlobalLeadership: spotlightGlobalMembers,
      spotlightProductionTech: spotlightProductionTechMembers,
      spotlightSeoPerformance: spotlightSeoPerformanceMembers,
      restOfTeam: restMembers,
    };
  }, []);

  const [currentTitle, setCurrentTitle] = useState<string>(
    TEAM_SEGMENTS.founders.title,
  );
  const [isTeamStage, setIsTeamStage] = useState(false);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (value) => {
      const nextIsTeamStage = value >= TEAM_SEGMENTS.team.start;
      setIsTeamStage(nextIsTeamStage);

      if (value >= TEAM_SEGMENTS.team.start) {
        setCurrentTitle(TEAM_SEGMENTS.team.title);
      } else if (value >= TEAM_SEGMENTS.seoPerformance.start) {
        setCurrentTitle(TEAM_SEGMENTS.seoPerformance.title);
      } else if (value >= TEAM_SEGMENTS.productionTech.start) {
        setCurrentTitle(TEAM_SEGMENTS.productionTech.title);
      } else if (value >= TEAM_SEGMENTS.globalLeadership.start) {
        setCurrentTitle(TEAM_SEGMENTS.globalLeadership.title);
      } else {
        setCurrentTitle(TEAM_SEGMENTS.founders.title);
      }
    });

    return unsubscribe;
  }, [smoothProgress]);

  const foundersMotion = useSpotlightPairMotion({
    progress: smoothProgress,
    start: TEAM_SEGMENTS.founders.start,
    inEnd: TEAM_SEGMENTS.founders.inEnd,
    holdEnd: TEAM_SEGMENTS.founders.holdEnd,
    outEnd: TEAM_SEGMENTS.founders.outEnd,
  });

  const globalLeadershipMotion = useSpotlightPairMotion({
    progress: smoothProgress,
    start: TEAM_SEGMENTS.globalLeadership.start,
    inEnd: TEAM_SEGMENTS.globalLeadership.inEnd,
    holdEnd: TEAM_SEGMENTS.globalLeadership.holdEnd,
    outEnd: TEAM_SEGMENTS.globalLeadership.outEnd,
  });

  const productionTechMotion = useSpotlightPairMotion({
    progress: smoothProgress,
    start: TEAM_SEGMENTS.productionTech.start,
    inEnd: TEAM_SEGMENTS.productionTech.inEnd,
    holdEnd: TEAM_SEGMENTS.productionTech.holdEnd,
    outEnd: TEAM_SEGMENTS.productionTech.outEnd,
  });

  const seoPerformanceMotion = useSpotlightPairMotion({
    progress: smoothProgress,
    start: TEAM_SEGMENTS.seoPerformance.start,
    inEnd: TEAM_SEGMENTS.seoPerformance.inEnd,
    holdEnd: TEAM_SEGMENTS.seoPerformance.holdEnd,
    outEnd: TEAM_SEGMENTS.seoPerformance.outEnd,
  });

  const teamEntryY = useTransform(
    smoothProgress,
    [TEAM_SEGMENTS.team.start, TEAM_SEGMENTS.team.inEnd],
    ["40vh", "0vh"],
  );
  const teamEntryOpacity = useTransform(
    smoothProgress,
    [TEAM_SEGMENTS.team.start, TEAM_SEGMENTS.team.inEnd],
    [0, 1],
  );
  const teamX = useTransform(
    smoothProgress,
    [TEAM_SEGMENTS.team.inEnd, TEAM_SEGMENTS.team.outEnd],
    ["0%", "-70%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-gray-900 overflow-clip"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute left-[30%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[50%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[70%] top-0 h-full w-px bg-white" />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -right-[10%] -bottom-[10%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto px-6 h-full w-full flex flex-col md:flex-row md:items-center lg:gap-20">
          <div className="z-30 absolute left-6 md:left-20 bottom-[30%] md:bottom-40 max-w-2xl pointer-events-none">
            <p className="text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl text-white">
              {currentTitle}
            </p>
          </div>

          <div className="flex-1 relative w-full h-full min-h-0">
            <div className="absolute right-6 md:right-10 lg:right-16 top-0 w-auto flex items-start justify-end z-20">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-items-end items-start">
                {spotlightFounders.map((member, index) => (
                  <motion.div
                    key={member.id}
                    style={{
                      y:
                        index === 0
                          ? foundersMotion.leftY
                          : foundersMotion.rightY,
                      opacity:
                        index === 0
                          ? foundersMotion.leftOpacity
                          : foundersMotion.rightOpacity,
                    }}
                  >
                    <TeamSpotlightCard member={member} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute right-6 md:right-10 lg:right-16 top-0 w-auto flex items-start justify-end z-30">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-items-end items-start">
                {spotlightGlobalLeadership.map((member, index) => (
                  <motion.div
                    key={member.id}
                    style={{
                      y:
                        index === 0
                          ? globalLeadershipMotion.leftY
                          : globalLeadershipMotion.rightY,
                      opacity:
                        index === 0
                          ? globalLeadershipMotion.leftOpacity
                          : globalLeadershipMotion.rightOpacity,
                    }}
                  >
                    <TeamSpotlightCard member={member} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute right-6 md:right-10 lg:right-16 top-0 w-auto flex items-start justify-end z-40">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-items-end items-start">
                {spotlightProductionTech.map((member, index) => (
                  <motion.div
                    key={member.id}
                    style={{
                      y:
                        index === 0
                          ? productionTechMotion.leftY
                          : productionTechMotion.rightY,
                      opacity:
                        index === 0
                          ? productionTechMotion.leftOpacity
                          : productionTechMotion.rightOpacity,
                    }}
                  >
                    <TeamSpotlightCard member={member} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute right-6 md:right-10 lg:right-16 top-0 w-auto flex items-start justify-end z-50">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-items-end items-start">
                {spotlightSeoPerformance.map((member, index) => (
                  <motion.div
                    key={member.id}
                    style={{
                      y:
                        index === 0
                          ? seoPerformanceMotion.leftY
                          : seoPerformanceMotion.rightY,
                      opacity:
                        index === 0
                          ? seoPerformanceMotion.leftOpacity
                          : seoPerformanceMotion.rightOpacity,
                    }}
                  >
                    <TeamSpotlightCard member={member} />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              style={{
                y: teamEntryY,
                opacity: teamEntryOpacity,
              }}
              className="hidden md:flex absolute inset-0 w-full h-full flex-col justify-center items-start z-[60]"
            >
              <div className="relative w-full overflow-visible">
                <motion.div
                  style={{ x: teamX }}
                  className="flex gap-10 lg:gap-14 w-max pr-[30vw]"
                >
                  {restOfTeam.map((member) => (
                    <TeamCarouselCard key={member.id} member={member} />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {isTeamStage && (
              <div className="md:hidden absolute inset-0 w-full h-full z-[60] px-6 pt-10">
                <div className="mt-4 max-h-[55vh] overflow-y-auto pr-2">
                  <div className="grid grid-cols-3 gap-3">
                    {restOfTeam.map((member) => (
                      <TeamGridCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCarouselCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col gap-6 w-[320px] lg:w-[350px] flex-shrink-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/30">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
          loading="lazy"
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

function TeamGridCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col gap-2">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
      </div>
      <div className="text-[11px] font-extrabold tracking-tight text-white leading-tight line-clamp-1">
        {member.name}
      </div>
      <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50 line-clamp-1">
        {member.role}
      </div>
    </div>
  );
}

function TeamSpotlightCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center group w-[150px] sm:w-[260px] lg:w-[300px]">
      <div className="relative aspect-[1/1.2] w-full overflow-hidden bg-gray-200 rounded-b-[150px] border-[6px] border-white/30 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top mix-blend-luminosity brightness-110 contrast-110 transition-all duration-700 group-hover:mix-blend-normal group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="mt-8">
        <h3 className="text-xl sm:text-3xl font-black tracking-tight text-white">
          {member.name}
        </h3>
        <p className="text-[10px] sm:text-sm font-extrabold uppercase tracking-[0.2em] text-white/50">
          {member.role}
        </p>
      </div>
    </div>
  );
}
