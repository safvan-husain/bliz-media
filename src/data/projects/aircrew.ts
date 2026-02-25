import { type Project } from "../projects";

export const aircrew: Project = {
  name: "Aircrew Tours & Travels",
  image: "/images/projects/aircrew.jpeg",
  priority: 2,
  year: "2024",
  service: "Static Website Development",
  slug: "aircrew-tours-travels",
  externalUrl: "[https://weaircrew.com/](https://weaircrew.com/)",
  content: {
    summary:
      "A professional and performance-optimized static website developed for an internationally recognized IATA-certified travel agency, focused on credibility, clarity, and efficient inquiry handling.",
    metadata: {
      websiteUrl: "[https://weaircrew.com/](https://weaircrew.com/)",
      industry: "Travel & Tourism",
      projectType: "Static Website Development (HTML, CSS)",
    },
    sections: [
      {
        key: "overview",
        title: "Project Overview",
        paragraphs: [
          "Aircrew Tours & Travels is an internationally recognized, IATA-certified travel agency operating in the UAE and India.",
          "The objective of this project was to build a professional and trustworthy digital presence that reflects the brand’s global credibility and service excellence.",
          "The website clearly presents the agency’s core services including flight bookings, visa assistance, hotel reservations, holiday packages, and airport transfers, while enabling customers to submit booking inquiries through a simple and reliable contact form.",
          "The platform emphasizes clarity, performance, and accessibility while maintaining cost efficiency through a static development approach.",
        ],
      },
      {
        key: "positioning",
        title: "Website Design & Brand Positioning",
        paragraphs: [
          "The design approach reflects professionalism, trust, and global travel expertise.",
          "The layout was structured to communicate credibility while guiding users smoothly toward inquiry submission.",
          "The website positions Aircrew Tours & Travels as a reliable and internationally recognized travel partner offering seamless and hassle-free travel experiences.",
        ],
        bullets: [
          "Clean and structured layout",
          "Professional travel-focused visual identity",
          "Clear service presentation sections",
          "Strong call-to-action placements",
          "Informative content blocks",
          "Simple and intuitive navigation",
        ],
      },
      {
        key: "performance",
        title: "Performance & Optimization",
        paragraphs: [
          "The website is built using pure HTML and CSS to ensure extremely fast loading speed and lightweight performance.",
          "The static architecture reduces server complexity while ensuring high reliability and consistent performance.",
          "This approach guarantees smooth navigation across devices and varying network conditions.",
        ],
        bullets: [
          "Extremely fast loading speed",
          "Lightweight page structure",
          "High reliability",
          "Minimal server complexity",
          "Smooth navigation experience",
        ],
      },
      {
        key: "technology",
        title: "Tech Stack & Development",
        bullets: [
          "HTML5",
          "CSS3",
          "Responsive layout structure",
          "Basic JavaScript for UI interactions",
          "Email-based inquiry form system",
        ],
        paragraphs: [
          "The website uses clean and semantic HTML coding practices to maintain structured content and long-term maintainability.",
          "The static implementation ensures cost efficiency while delivering a professional digital experience.",
        ],
      },
      {
        key: "features",
        title: "Inquiry & Booking System",
        paragraphs: [
          "The platform includes a simple booking and inquiry form that sends customer details directly to the company’s email.",
          "This lightweight system allows personalized consultation before confirming bookings without requiring complex backend infrastructure.",
        ],
        bullets: [
          "Collection of customer name, contact details, and service requirements",
          "Direct email notification upon submission",
          "Lightweight processing without complex backend setup",
        ],
      },
      {
        key: "responsive",
        title: "Responsive Development",
        paragraphs: [
          "The website is fully responsive and optimized for desktop, tablet, and mobile devices.",
          "All sections, including service descriptions and inquiry forms, adapt smoothly to different screen sizes to ensure readability and usability.",
        ],
        bullets: [
          "Desktop optimized layout",
          "Tablet responsive adjustments",
          "Mobile-friendly structure",
        ],
      },
      {
        key: "services",
        title: "Core Service Presentation",
        bullets: [
          "International and domestic flight bookings",
          "Visa assistance services",
          "Curated hotel stays",
          "Customized holiday packages",
          "Corporate travel solutions",
          "Airport transfers",
        ],
        paragraphs: [
          "Each service section is clearly structured to help visitors quickly understand available offerings and move toward inquiry submission.",
        ],
      },
      {
        key: "result",
        title: "Result",
        paragraphs: [
          "The final result is a professional, fast, and cost-effective travel agency website that successfully communicates credibility, global presence, and service reliability.",
          "The platform delivers strong brand positioning, smooth user navigation, reliable inquiry handling, and high performance with minimal technical overhead.",
          "This project demonstrates the ability to build clean, efficient, and professionally structured static websites tailored for travel and service-based businesses.",
        ],
      },
    ],
  },
};
