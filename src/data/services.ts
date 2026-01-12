export interface Plan {
  name: string;
  title: string;
  includes: string[];
  deployment: string;
  hosting: string;
  popular?: boolean;
}

export interface FloatingIconSectionContent {
  icons: string[];
  title: string;
  subtitle: string;
}

export type ServiceContentBlock =
  | { type: 'html'; content: string }
  | { type: 'component'; component: 'Technologies' | 'Pricing' | 'WebDevelopmentContent' | 'BrandingContent' | 'DigitalMarketingContent' | 'DesignContent' | 'ProductionContent' };

export interface Service {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  contentBlocks?: ServiceContentBlock[];
  color: string;
  tags: string[];
  plans?: Plan[];
  floatingIconSectionContent?: FloatingIconSectionContent;
  heroImages?: string[];
  cardImage?: string;
  unsplashImage?: string;
}

export const services: Service[] = [
  {
    id: "01",
    title: "Branding",
    slug: "branding",
    image: "/images/service-card-imags/branding.png",
    unsplashImage: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d",
    excerpt: "Branding That Makes Your Business Memorable",
    color: "bg-branding",
    tags: ["Brand Strategy", "Visual Identity"],
    heroImages: [
      'https://images.unsplash.com/photo-1755004609214-c252674df1ca?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1750218537952-0ae056c7f53a?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1755038995605-038a7345658f?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546238232-20216dec9f72?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1753724223372-9a1df8eb5212?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1754079132860-5b37dab49daa?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1754079132962-2f6c62f14d33?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1754764987594-2236e7736115?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1755048796967-75a82d214846?q=80&w=400&auto=format&fit=crop',
    ],
    contentBlocks: [
      {
        type: 'component',
        component: 'BrandingContent'
      }
    ],
  },
  {
    id: "02",
    title: "Digital Marketing",
    slug: "digital-marketing",
    image: "/images/service-card-imags/digital-marketing.png",
    unsplashImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Digital Marketing That Drives Real Growth",
    color: "bg-secondary",
    tags: ["Growth", "Lead Generation"],
    contentBlocks: [
      {
        type: 'component',
        component: 'DigitalMarketingContent'
      }
    ],
  },
  {
    id: "03",
    title: "Design",
    slug: "design",
    image: "/images/service-card-imags/design.png",
    unsplashImage: "https://plus.unsplash.com/premium_photo-1661281412140-dfb328ae967b",
    excerpt: "Design That Looks Good and Works Better",
    color: "bg-profile",
    tags: ["UI/UX", "Creative"],
    cardImage: "/images/service-card-imags/design.png",
    contentBlocks: [
      {
        type: 'component',
        component: 'DesignContent'
      }
    ],
  },
  {
    id: "04",
    title: "Web Development",
    slug: "web-development",
    image: "/images/service-card-imags/development.png",
    unsplashImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    excerpt: "e create fast, secure websites and web apps designed to grow with your business.",
    color: "bg-website",
    tags: ["Custom", "Scalable"],
    contentBlocks: [
      {
        type: 'component',
        component: 'WebDevelopmentContent'
      },
      {
        type: 'component',
        component: 'Technologies'
      },
      {
        type: 'component',
        component: 'Pricing'
      }
    ],
    plans: [
      {
        name: "PLAN 1",
        title: "HTML / Wordpress static website",
        includes: [
          "3 to 7 static pages",
          "HTML or WordPress based website",
          "Fully responsive for mobile tablet and desktop",
          "SEO friendly structure",
          "Contact form integration",
          "WhatsApp chat icon integration",
          "Basic security setup",
          "Fast loading performance",
          ""
        ],
        deployment: "Website deployment included",
        hosting: "1 year FREE hosting included"
      },
      {
        name: "PLAN 3",
        title: "Dynamic custom coded website",
        includes: [
          "Next.js, React, Node.js, Astro.js",
          "Custom front end and back end development",
          "Dynamic pages and database integration",
          "Admin dashboard",
          "Authentication and user roles",
          "API integrations",
          "WhatsApp chat icon integration",
          "Scalable architecture"
        ],
        deployment: "Website deployment included",
        hosting: "Hosting not included",
        popular: true,
      },
      {
        name: "PLAN 2",
        title: "Shopify E-Commerce website",
        includes: [
          "Shopify theme implementation",
          "Product and collection setup",
          "Cart and checkout configuration",
          "Mobile optimized store",
          "Order and customer management",
          "WhatsApp chat icon integration",
          "Secure payment gateway integration Razorpay Stripe PayPal",
          "",
          ""
        ],
        deployment: "Website deployment included",
        hosting: "Hosting not included"
      },
    ],
    floatingIconSectionContent: {
      icons: [
        "/technologies-icons/html5-svgrepo-com.svg",
        "/technologies-icons/wordpress-svgrepo-com.svg",
        "/technologies-icons/astro-svgrepo-com.svg",
        "/technologies-icons/tailwind-svgrepo-com.svg",
        "/technologies-icons/shopify-svgrepo-com.svg",
        "/technologies-icons/next-dot-js-svgrepo-com.svg",
        "/technologies-icons/react-svgrepo-com.svg",
        "/technologies-icons/node-js-svgrepo-com.svg",
      ],
      title: "Technologies",
      subtitle: "We use the latest technologies to build your website",
    }
  },
  {
    id: "05",
    title: "Production",
    slug: "production",
    image: "/images/service-card-imags/production.png",
    unsplashImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    excerpt: "Creative Production That Brings Your Brand to Life",
    color: "bg-video",
    tags: ["Content creation", "Post Production"],
    cardImage: "/images/service-card-imags/production.png",
    contentBlocks: [
      {
        type: 'component',
        component: 'ProductionContent'
      }
    ],
  },
];
