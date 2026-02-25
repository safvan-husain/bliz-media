import { type Project } from "../projects";

export const yashabab: Project = {
  name: "YASHABAB RESTAURANT — Restaurant Website",
  image: "/images/projects/yashbab.jpeg",
  priority: 2,
  year: "2025",
  service: "web-development",
  serviceSubType: "Static Website Development",
  slug: "yashabab-restaurant-website",
  externalUrl: "https://yashabab.ae/",
  content: {
    summary:
      "A modern, fast-loading static restaurant website developed for Yashabab Restaurant to showcase its Arabic cuisine, brand identity, and corporate/event services through a visually immersive and performance-focused design.",
    metadata: {
      websiteUrl: "https://yashabab.ae/",
      industry: "Restaurant & Hospitality",
      projectType: "Static Website Development (HTML, CSS)",
    },
    sections: [
      {
        key: "overview",
        title: "Project Overview",
        paragraphs: [
          "Yashabab Restaurant is a modern Arabic restaurant website developed to showcase the brand’s legacy, cuisine, and dining experience in a visually engaging format.",
          "The objective of this project was to build a clean, attractive, and fast-loading restaurant website that highlights the restaurant’s identity, menu offerings, and corporate/event booking services while maintaining simplicity and performance.",
          "The website was built using a static HTML structure to ensure reliability, speed, and easy deployment.",
        ],
      },
      {
        key: "positioning",
        title: "Website Design & Visual Identity",
        paragraphs: [
          "The design reflects a bold and premium Arabic dining experience, combining strong typography, immersive visuals, and a dark-themed layout with warm accent colors.",
          "The layout was crafted to create a visually immersive first impression while guiding users toward viewing the menu or making inquiries.",
        ],
        bullets: [
          "Large hero section with high-quality food imagery",
          "Strong typography emphasizing brand identity",
          "Dark-themed layout with warm accent colors",
          "Clear call-to-action buttons (View Menu, Contact, Booking)",
          "Clean navigation structure",
          "Corporate and event booking section integration",
        ],
      },
      {
        key: "features",
        title: "Menu Integration Strategy",
        paragraphs: [
          "Instead of building a complex dynamic menu system, the restaurant menu is accessible via an external Drive link.",
          "This approach allows easy updates without modifying the website structure, ensuring cost-efficient management and quick pricing or item changes while maintaining a lightweight architecture.",
        ],
        bullets: [
          "Easy menu updates without modifying the website",
          "Cost-efficient content management",
          "Quick pricing or item updates",
          "Lightweight and simple architecture",
        ],
      },
      {
        key: "performance",
        title: "Performance & Optimization",
        paragraphs: [
          "Built using pure HTML and CSS, the website delivers extremely fast loading speed with a lightweight structure and minimal server processing.",
          "The static architecture ensures reliable performance across devices while reducing maintenance requirements.",
        ],
        bullets: [
          "Extremely fast loading speed",
          "Minimal server-side processing",
          "Smooth scrolling and navigation",
          "Low maintenance requirements",
        ],
      },
      {
        key: "technology",
        title: "Technology Stack",
        bullets: [
          "HTML5",
          "CSS3",
          "Responsive layout implementation",
          "Basic JavaScript for UI enhancements",
          "External menu integration via Drive link",
        ],
        paragraphs: [
          "The website uses a clean and semantic HTML structure to ensure maintainability, structured content presentation, and long-term scalability.",
        ],
      },
      {
        key: "responsive",
        title: "Responsive Development",
        paragraphs: [
          "The website is fully responsive and optimized for desktop, tablet, and mobile devices.",
          "All sections, including hero banners, navigation menus, and call-to-action buttons, adapt seamlessly across different screen sizes with special attention to mobile usability.",
        ],
        bullets: [
          "Desktop optimization",
          "Tablet-friendly layouts",
          "Mobile-first considerations",
          "Adaptive navigation and hero sections",
        ],
      },
      {
        key: "result",
        title: "Result",
        paragraphs: [
          "The final result is a visually appealing, fast, and cost-effective restaurant website that effectively communicates brand identity and menu offerings.",
          "The platform delivers a strong visual first impression, easy access to the menu, clear service presentation, and reliable performance with minimal technical complexity.",
        ],
      },
    ],
  },
};
