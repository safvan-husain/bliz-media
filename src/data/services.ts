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

export interface Service {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: string;
  color: string;
  tags: string[];
  plans?: Plan[];
  floatingIconSectionContent?: FloatingIconSectionContent;
  heroImages?: string[];
}

export const services: Service[] = [
  {
    id: "01",
    title: "Branding",
    slug: "branding",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Building unique identities that resonate with your target audience.",
    color: "bg-branding",
    tags: ["Deliverables", "Timeline"],
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
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          Your brand is more than just a logo. It's the emotional connection you build with your audience. We help you define your voice, values, and visual identity to stand out in a crowded market.
        </p>
        <h3 class="text-xl font-semibold text-[#0c1b33]">The Branding Process</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-600">
          <li>Market Research & Strategy</li>
          <li>Logo Design & Visual ID</li>
          <li>Brand Voice & Messaging</li>
          <li>Brand Guidelines</li>
        </ul>
      </div>
    `,
  },
  {
    id: "02",
    title: "Digital Marketing",
    slug: "digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    excerpt: "Strategizing for growth and high-impact online presence.",
    color: "bg-secondary",
    tags: ["Strategy", "Growth"],
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          We drive results through data-driven marketing strategies that put your brand in front of the right people at the right time.
        </p>
        <h3 class="text-xl font-semibold text-[#0c1b33]">Our Approach</h3>
        <p class="text-gray-600">
          From SEO and content marketing to paid social and PPC, we use the full spectrum of digital tools to scale your business.
        </p>
      </div>
    `,
  },
  {
    id: "03",
    title: "Design",
    slug: "design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Crafting intuitive and aesthetically pleasing digital products.",
    color: "bg-profile",
    tags: ["Content", "Design"],
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          We believe that great design is invisible. It should feel intuitive, effortless, and delightful while solve complex problems.
        </p>
        <h3 class="text-xl font-semibold text-[#0c1b33]">UI/UX Mastery</h3>
        <p class="text-gray-600">
          Our design process focuses on user research, wireframing, and high-fidelity prototyping to ensure your product delivers real value.
        </p>
      </div>
    `,
  },
  {
    id: "04",
    title: "Development",
    slug: "development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    excerpt: "Building robust, scalable, and high-performance web applications.",
    color: "bg-website",
    tags: ["Structure", "Functionality"],
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          Modern web development requires more than just coding. It requires a deep understanding of architecture, performance, and security.
        </p>
        <h3 class="text-xl font-semibold text-[#0c1b33]">Tech Stack</h3>
        <p class="text-gray-600">
          We specialize in React, Next.js, Astro, and other modern frameworks to build lightning-fast web experiences.
        </p>
      </div>
    `,
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
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
    excerpt: "Professional media production for maximum brand impact.",
    color: "bg-video",
    tags: ["Product Insight", "Brand Story"],
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          High-quality content is the lifeblood of modern brands. We provide professional photography and videography services to tell your story.
        </p>
        <h3 class="text-xl font-semibold text-[#0c1b33]">Media Services</h3>
        <p class="text-gray-600">
          From corporate films to social media snippets, we deliver cinematic quality that captures attention and inspires action.
        </p>
      </div>
    `,
  },
];
