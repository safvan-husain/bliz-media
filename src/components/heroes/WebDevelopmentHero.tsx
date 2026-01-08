"use client";

import * as React from 'react';
import { FloatingIconsHero } from '../ui/floating-icons-hero-section';
import { services } from '../../data/services';



const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" fill="#2C2C2C" />
        <path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5V7z" fill="#0ACF83" />
        <path d="M12 12a5 5 0 0 1-5-5 5 5 0 0 1 5-5v10z" fill="#A259FF" />
        <path d="M12 17a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5z" fill="#F24E1E" />
        <path d="M7 12a5 5 0 0 1 5 5v-5H7z" fill="#FF7262" />
    </svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/80" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);


const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#635BFF" /><path d="M6 7H18V9H6V7Z" fill="white" /><path d="M6 11H18V13H6V11Z" fill="white" /><path d="M6 15H14V17H6V15Z" fill="white" />
    </svg>
);

const IconVercel = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-foreground/90" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2z" />
    </svg>
);


interface WebDevelopmentHeroProps {
    title: string;
}

export function WebDevelopmentHero({ title }: WebDevelopmentHeroProps) {
    const developmentService = services.find(s => s.slug === "development");
    const techIcons = developmentService?.floatingIconSectionContent?.icons || [];

    // Combine tech icons from data with some system icons from demo
    const combinedIcons = [
        ...techIcons.map((icon, index) => ({
            id: index + 1,
            icon: icon,
            white: index === 5 || index === 1 || index === 0, // Next.js, WordPress, Html.
            className: [
                'top-[25%] left-[12%]',
                'top-[35%] right-[10%]',
                'top-[75%] left-[15%]',
                'bottom-[15%] right-[12%]',
                'top-[18%] left-[32%]',
                'top-[18%] right-[32%]',
                'bottom-[12%] left-[28%]',
                'top-[45%] left-[18%]',
            ][index] || 'top-[50%] left-[50%]'
        })),
        { id: 101, icon: IconGitHub, white: true, className: 'top-[85%] left-[72%]' },
        { id: 102, icon: IconFigma, className: 'top-[50%] right-[8%]' },
        { id: 103, icon: IconVercel, white: true, className: 'top-[60%] left-[8%]' },
        { id: 106, icon: IconStripe, className: 'top-[28%] right-[22%]' },
    ];

    return (
        <FloatingIconsHero
            title={title}
            subtitle="Building robust, scalable, and high-performance web applications with the latest technologies."
            ctaText="START YOUR PROJECT"
            ctaHref="/quote"
            secondaryCtaText="SEE OUR WORK"
            secondaryCtaHref="/projects"
            icons={combinedIcons}
        />
    );
}
