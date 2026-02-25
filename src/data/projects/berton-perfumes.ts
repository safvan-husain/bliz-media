import { type Project } from "../projects";

export const bertonPerfumes: Project = {
  name: "BERTON PERFUMES — Fragrance Brand Website",
  image: "/images/projects/berton-perfume.jpeg",
  priority: 2,
  year: "2026",
  service: "web-development",

  serviceSubType: "Web Design & Full-Stack Development",
  slug: "berton-perfumes-fragrance-website",
  externalUrl: "[https://bertonperfumes.com/](https://bertonperfumes.com/)",
  content: {
    summary:
      "Berton Perfumes is a boutique fragrance brand website built with a clean, elegant, and conversion-focused approach. Designed for a growing small-scale perfume business, the platform enables smooth product exploration and WhatsApp-based ordering while being architected for seamless future payment gateway integration.",
    metadata: {
      websiteUrl: "[https://bertonperfumes.com/](https://bertonperfumes.com/)",
      industry: "Fragrance & Perfume Retail",
      projectType: "Small-Scale eCommerce Website",
    },
    sections: [
      {
        key: "overview",
        title: "Project Overview",
        paragraphs: [
          "Berton Perfumes is a boutique fragrance brand website developed for a growing small-scale perfume business aiming to establish a premium online presence.",
          "The objective was to create a clean, elegant, and conversion-focused platform that allows customers to explore products easily and initiate purchases with minimal friction.",
          "Due to budget considerations and the brand’s early growth stage, the purchase flow currently redirects customers to WhatsApp for order confirmation. However, the system architecture was intentionally designed to support full payment gateway integration in the future without structural changes.",
          "This approach enabled a fast launch while maintaining long-term scalability.",
        ],
      },
      {
        key: "positioning",
        title: "Design & Brand Positioning",
        paragraphs: [
          "The design reflects a premium and minimalist fragrance brand identity aligned with luxury perfume aesthetics.",
          "The user interface emphasizes sophistication while maintaining simplicity to build brand trust and encourage engagement.",
        ],
        bullets: [
          "Elegant and clean product presentation",
          "Minimalist layout aligned with luxury branding",
          "High-quality product imagery",
          "Clear pricing and fragrance descriptions",
          "Strong call-to-action placement",
          "Smooth browsing and easy product discovery",
          "Clear communication of scent profiles and pricing",
          "Direct and frictionless purchase initiation",
        ],
      },
      {
        key: "performance",
        title: "Performance & Optimization",
        paragraphs: [
          "Performance efficiency was a core priority during development to ensure stable user experience across devices and varying internet speeds.",
          "The frontend architecture was built to remain lightweight and optimized for fast loading.",
        ],
        bullets: [
          "Fast loading pages",
          "Lightweight frontend architecture",
          "Optimized product imagery",
          "Smooth navigation between product pages",
          "Clean and maintainable code structure",
        ],
      },
      {
        key: "technology",
        title: "Tech Stack & Architecture",
        paragraphs: [
          "The website was developed using a modern full-stack architecture with scalability and SEO performance in mind.",
          "Next.js was chosen to provide server-side rendering capabilities, SEO optimization, and a clean modular codebase.",
        ],
        bullets: [
          "Frontend: Next.js (React Framework)",
          "Backend: Next.js / Node.js architecture",
          "Rendering Strategy: Server-Side Rendering (SSR)",
          "Component-based responsive styling",
          "Cloud-based optimized hosting",
          "Scalable routing system",
          "Future-ready payment system integration",
        ],
      },
      {
        key: "features",
        title: "Core Functional Features",
        bullets: [
          "Elegant product catalog structure",
          "Individual product detail pages",
          "WhatsApp-based order initiation",
          "SEO-optimized page structure",
          "Lightweight and fast frontend performance",
          "Scalable backend architecture",
          "Future-ready payment integration capability",
          "Clean and brand-focused user interface",
        ],
      },
      {
        key: "custom",
        title: "WhatsApp-Based Purchase Flow",
        paragraphs: [
          "Currently, when customers select a product and proceed to purchase, they are redirected to WhatsApp for manual order confirmation.",
          "This model was selected to reduce operational costs and simplify logistics management during the early business stage.",
          "It enables direct communication with customers, flexible payment handling, and personalized service.",
          "The setup is ideal for early-stage or low-volume businesses seeking fast deployment without full eCommerce overhead.",
        ],
      },
      {
        key: "responsive",
        title: "Responsive Development",
        paragraphs: [
          "The website is fully responsive and optimized for desktop, tablet, and mobile devices.",
          "Special attention was given to mobile layout, considering fragrance purchases often originate from social media traffic.",
        ],
        bullets: [
          "Adaptive layout for all screen sizes",
          "Mobile-optimized product browsing",
          "Responsive product detail pages",
          "Seamless interaction across devices",
        ],
      },
      {
        key: "result",
        title: "Result",
        paragraphs: [
          "The final result is a modern, elegant, and cost-efficient fragrance brand website tailored for a small-scale business.",
          "The platform delivers strong brand presentation, smooth browsing experience, direct customer communication, and scalable architecture for future automation.",
          "This project demonstrates the ability to deliver budget-conscious yet technically scalable solutions using modern full-stack development with Next.js.",
        ],
      },
    ],
  },
};
