export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    color?: string; // Optional accent color
}

export const founders: TeamMember[] = [
    {
        id: "founder-01",
        name: "Anwar Sadiq",
        role: "Founder",
        image: "/images/team/founders/anwar-sadiq.png",
        bio: "Building brands that stand out and scale with confidence.",
        color: "bg-primary",
    },
    {
        id: "founder-02",
        name: "Ajnas",
        role: "VP",
        image: "/images/team/founders/ajnas-vp.png",
        bio: "Leading teams and operations to deliver consistent results.",
        color: "bg-team-blue",
    },
];

export const leaders: TeamMember[] = [
    {
        id: "leader-01",
        name: "Hujjath",
        role: "Regional Manager (Calicut)",
        image: "/images/team/leaders/Hujjath-regional-manager-calicut.webp",
        bio: "Driving growth and partnerships across the region.",
        color: "bg-team-green",
    },
    {
        id: "leader-02",
        name: "Saleel",
        role: "Production Lead",
        image: "/images/team/leaders/Saleel-production-lead.webp",
        bio: "Orchestrating production workflows from concept to delivery.",
        color: "bg-team-olive",
    },
    {
        id: "leader-03",
        name: "Salman",
        role: "Tech Lead",
        image: "/images/team/leaders/Salman-tech-lead.webp",
        bio: "Engineering fast, reliable, and scalable web experiences.",
        color: "bg-secondary",
    },
    {
        id: "leader-04",
        name: "Sinan",
        role: "Performance Marketing Lead",
        image: "/images/team/leaders/Sinan-performance-marketing-lead.webp",
        bio: "Optimizing campaigns with a focus on measurable outcomes.",
        color: "bg-primary",
    },
    {
        id: "leader-05",
        name: "Vaishnav",
        role: "SEO Lead",
        image: "/images/team/leaders/Vaishnav-seo-lead.webp",
        bio: "Improving visibility through technical and content SEO strategy.",
        color: "bg-team-blue",
    },
    {
        id: "leader-06",
        name: "Saheem Ali",
        role: "Regional Manager (Riyad)",
        image: "/images/team/leaders/saheem-ali-regional-manager-riyad.webp",
        bio: "Expanding impact and client success in Riyad.",
        color: "bg-team-green",
    },
];

export const otherTeamMembers: TeamMember[] = [
    {
        id: "other-01",
        name: "Adhil",
        role: "Video Editor",
        image: "/images/team/other-members/adhil-video-editor.webp",
        bio: "Turning raw footage into scroll-stopping stories.",
        color: "bg-primary",
    },
    {
        id: "other-02",
        name: "Arfath",
        role: "Video Editor",
        image: "/images/team/other-members/arfath-video-editor.webp",
        bio: "Editing with pacing, emotion, and a sharp eye for detail.",
        color: "bg-secondary",
    },
    {
        id: "other-03",
        name: "Dilshad",
        role: "Graphic Designer",
        image: "/images/team/other-members/dilshad-graphic-designer.webp",
        bio: "Designing visuals that feel premium, clean, and on-brand.",
        color: "bg-team-green",
    },
    {
        id: "other-04",
        name: "Fahima",
        role: "Content Writer",
        image: "/images/team/other-members/fahima-content-writer.webp",
        bio: "Writing clear, human content that converts and ranks.",
        color: "bg-team-blue",
    },
    {
        id: "other-05",
        name: "Hisham",
        role: "Brand Designer",
        image: "/images/team/other-members/hisham-brand-designer.webp",
        bio: "Shaping brand systems with strong visual storytelling.",
        color: "bg-team-olive",
    },
    {
        id: "other-06",
        name: "Sabari",
        role: "SEO Analyst",
        image: "/images/team/other-members/sabari-seo-analyst.webp",
        bio: "Finding opportunities through audits, keywords, and insights.",
        color: "bg-secondary",
    },
];
