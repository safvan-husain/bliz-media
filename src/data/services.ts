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
  | { type: 'component'; component: 'Technologies' | 'Pricing' };

export interface Service {
  id: string;
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  content: string;
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
    excerpt: "Crafting iconic digital identities that command attention and drive meaningful connections.",
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
    image: "/images/service-card-imags/digital-marketing.png",
    unsplashImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
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
    image: "/images/service-card-imags/design.png",
    unsplashImage: "https://plus.unsplash.com/premium_photo-1661281412140-dfb328ae967b",
    excerpt: "Crafting intuitive and aesthetically pleasing digital products.",
    color: "bg-profile",
    tags: ["Content", "Design"],
    cardImage: "/images/service-card-imags/design.png",
    content: `
      <div class="space-y-6">
        <p class="text-gray-600">
          We believe that great design is invisible. It should feel intuitive, effortless, and delightful while solve complex problems.
        </p>
        <h3 class="text-xl font-semibold text-white">UI/UX Mastery</h3>
        <p class="text-gray-600">
          Our design process focuses on user research, wireframing, and high-fidelity prototyping to ensure your product delivers real value.
        </p>
      </div>
    `,
  },
  {
    id: "04",
    title: "Web Development",
    slug: "web-development",
    image: "/images/service-card-imags/development.png",
    unsplashImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    excerpt: "We design and develop fast, secure, and scalable websites tailored to your business goals — from simple static sites to advanced custom web applications and e-commerce platforms",
    color: "bg-website",
    tags: ["Structure", "Functionality"],
    contentBlocks: [
      {
        type: 'html',
        content: `
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-[#0c1b33]">High-performance websites built to scale your business</h3>
              <p class="text-gray-600 mt-2">
                A website is more than just an online presence — it’s your most powerful digital asset.
                At Bliz, we build websites that are visually impressive, technically strong, and strategically designed to convert visitors into customers.
              </p>
              <p class="text-gray-600 mt-2">
                Whether you need a simple business website or a fully dynamic custom platform, our development approach ensures performance, scalability, and long-term growth.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-[#0c1b33] mb-2">What We Deliver</h3>
              <p class="text-gray-600 mb-2">What You Get With Our Website Development</p>
              <ul class="list-disc pl-5 space-y-2 text-gray-600">
                <li>Clean, modern UI tailored to your brand</li>
                <li>Mobile-first, fully responsive design</li>
                <li>Fast loading speed and optimized performance</li>
                <li>SEO-friendly structure from day one</li>
                <li>Secure, scalable, and future-ready architecture</li>
                <li>Easy content management and flexibility</li>
              </ul>
              <p class="text-gray-600 mt-2">
                Every project is built with a focus on user experience, business objectives, and technical excellence.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-[#0c1b33] mb-2">Our Development Approach</h3>
              <p class="text-gray-600 mb-4">We follow a clear, transparent workflow to deliver results — without unnecessary complexity.</p>
              <div class="space-y-4 text-gray-600">
                <div>
                  <strong class="block text-[#0c1b33]">1. Discovery & Planning</strong>
                  <span>Understanding your business, goals, and target audience.</span>
                </div>
                <div>
                  <strong class="block text-[#0c1b33]">2. UI/UX & Architecture</strong>
                  <span>Designing intuitive layouts and defining the right technical structure.</span>
                </div>
                <div>
                  <strong class="block text-[#0c1b33]">3. Development & Integration</strong>
                  <span>Building fast, secure, and scalable solutions using modern technologies.</span>
                </div>
                <div>
                  <strong class="block text-[#0c1b33]">4. Testing & Optimization</strong>
                  <span>Ensuring performance, responsiveness, and cross-browser compatibility.</span>
                </div>
                <div>
                  <strong class="block text-[#0c1b33]">5. Launch & Support</strong>
                  <span>Smooth deployment with post-launch support when needed.</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-[#0c1b33] mb-2">Who We Build Websites For</h3>
              <ul class="list-disc pl-5 space-y-2 text-gray-600">
                <li>Startups launching their first product</li>
                <li>Local businesses looking to grow online</li>
                <li>Service-based companies generating leads</li>
                <li>E-commerce brands scaling sales</li>
                <li>Businesses needing custom web solutions</li>
              </ul>
              <p class="text-gray-600 mt-4">
                If your business needs a website that looks professional and performs reliably, you’re in the right place.
              </p>
            </div>
          </div>
        `
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
    image: "/images/service-card-imags/production.png",
    unsplashImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    excerpt: "Professional media production for maximum brand impact.",
    color: "bg-video",
    tags: ["Product Insight", "Brand Story"],
    cardImage: "/images/service-card-imags/production.png",
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
