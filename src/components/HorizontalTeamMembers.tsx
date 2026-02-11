import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { TeamMember } from "../data/team";

interface HorizontalTeamMembersProps {
  members: TeamMember[];
}

export default function HorizontalTeamMembers({
  members,
}: HorizontalTeamMembersProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-50">
      <div className="max-w-2xl text-center md:text-start mx-auto pt-24">
        <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
          Our People
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#0c1b33] leading-[0.85]">
          MEET THE TEAM
        </h2>
      </div>
      <div className="sticky top-8 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-12 md:px-24 w-max will-change-transform"
        >
          {members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
          <JoinTeamCard />
        </motion.div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative w-[80vw] md:w-[400px] h-[50vh] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.01] flex-shrink-0 cursor-pointer block isolate transform-gpu [backface-visibility:hidden]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-zinc-900 rounded-[2rem] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Premium Color Overlay */}
      <div
        className={`absolute inset-0 ${member.color || "bg-black"} opacity-20 mix-blend-overlay transition-all duration-700 group-hover:opacity-40 rounded-[2rem]`}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 opacity-90 rounded-[2rem]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center text-white z-10 pb-16">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-white/80 border border-white/20 rounded-full uppercase transform transition-all duration-500 group-hover:-translate-y-2">
          {member.role}
        </span>

        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 transform transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2">
          {member.name}
        </h3>

        <p className="text-sm md:text-base font-medium text-white/70 max-w-xs leading-relaxed transform transition-all duration-700 delay-75 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          {member.bio}
        </p>
      </div>

      {/* Inner Border Flare */}
      <div className="absolute inset-0 border-[1px] border-white/10 group-hover:border-white/30 transition-all duration-1000 rounded-[2rem] pointer-events-none scale-95 group-hover:scale-100" />
    </div>
  );
}

function JoinTeamCard() {
  return (
    <a
      href="/contact"
      className="group relative w-[80vw] md:w-[400px] h-[50vh] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.01] flex-shrink-0 cursor-pointer block isolate transform-gpu [backface-visibility:hidden] bg-[#0c1b33] border border-white/10"
    >
      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 rounded-[2rem]" />

      {/* Decorative Circle */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-10">
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 transform transition-all duration-700 group-hover:scale-105">
          Join Our
          <br /> Team
        </h3>

        <div className="bg-white text-[#0c1b33] px-10 py-5 rounded-full font-black tracking-[0.2em] text-xs flex items-center gap-4 border border-transparent transition-all duration-500 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 group-hover:-translate-y-2">
          APPLY NOW
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
      <div className="absolute inset-0 border-[1px] border-white/10 group-hover:border-white/30 transition-all duration-1000 rounded-[2rem] pointer-events-none scale-95 group-hover:scale-100" />
    </a>
  );
}
