export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    color?: string; // Optional accent color
}

export const otherTeamMembers: TeamMember[] = [
    {
        id: "01",
        name: "James Wilson",
        role: "Senior Designer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2544&auto=format&fit=crop",
        bio: "Crafting intuitive and beautiful user interfaces.",
        color: "bg-primary"
    },
    {
        id: "02",
        name: "Lisa Wong",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
        bio: "Keeping projects on track and teams aligned.",
        color: "bg-secondary"
    },
    {
        id: "03",
        name: "Robert Fox",
        role: "Content Strategist",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2544&auto=format&fit=crop",
        bio: "Telling compelling stories that resonate with audiences.",
        color: "bg-team-green"
    },
    {
        id: "04",
        name: "Maria Garcia",
        role: "Social Media Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2544&auto=format&fit=crop",
        bio: "Building communities and driving engagement.",
        color: "bg-team-blue"
    },
    {
        id: "05",
        name: "William Chen",
        role: "Motion Graphics",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2544&auto=format&fit=crop",
        bio: "Bringing brands to life through movement.",
        color: "bg-team-olive"
    }
];
