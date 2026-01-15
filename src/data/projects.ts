export interface Project {
  name: string;
  image: string;
  class: string;
  year: string;
  service: string;
  slug: string;
  details: string;
}

export const projects: Project[] = [
  {
    name: "Transking",
    image: "/images/projects/Transking.webp",
    class: "md:col-span-2 md:row-span-2",
    year: "2024",
    service: "Web Development",
    slug: "transking",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Transking</h2>
        <p class="text-gray-600">
          Transking is a comprehensive logistics and transportation management
          system designed to streamline operations and enhance efficiency. Our
          web development team built a robust platform that handles real-time
          tracking, fleet management, and automated scheduling.
        </p>
        <h3 class="text-xl font-semibold">Key Features</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>Real-time vehicle tracking using GPS integration</li>
          <li>Automated route optimization</li>
          <li>Driver performance monitoring</li>
          <li>Customer portal for shipment tracking</li>
        </ul>
      </div>
    `,
  },
  {
    name: "Travel Go",
    image: "/images/projects/TravelGo.webp",
    class: "md:col-span-2 md:row-span-2",
    year: "2023",
    service: "Design",
    slug: "travel-go",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Travel Go</h2>
        <p class="text-gray-600">
          Travel Go is a modern travel booking application that focuses on
          delivering an immersive and seamless user experience. Our UI/UX design
          team created an intuitive interface that simplifies flight and hotel
          bookings.
        </p>
        <h3 class="text-xl font-semibold">Design Highlights</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>Minimalist and clean user interface</li>
          <li>Interactive destination guides</li>
          <li>Smart search with filters</li>
          <li>Mobile-first responsive design</li>
        </ul>
      </div>
    `,
  },
  {
    name: "Berton",
    image: "/images/projects/BertonMockup.webp",
    class: "md:col-span-3 md:row-span-2",
    year: "2023",
    service: "Design",
    slug: "berton",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Berton</h2>
        <p class="text-gray-600">
          Berton represents a breakthrough in ergonomic furniture design. Our
          product design team focused on creating a chair that adapts to the
          human body, providing support and comfort throughout the workday.
        </p>
        <h3 class="text-xl font-semibold">Process</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>Extensive ergonomic research</li>
          <li>3D modeling and prototyping</li>
          <li>Material selection for durability and sustainability</li>
          <li>User testing and iteration</li>
        </ul>
      </div>
    `,
  },
  {
    name: "Transking SEO",
    image: "/images/projects/TranskingSEO.webp",
    class: "md:col-span-1 md:row-span-1",
    year: "2024",
    service: "Digital Marketing",
    slug: "transking-seo",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Transking SEO Campaign</h2>
        <p class="text-gray-600">
          A targeted digital marketing campaign to increase the online visibility
          of Transking's logistics services. We implemented a comprehensive SEO
          strategy that significantly improved organic traffic.
        </p>
        <h3 class="text-xl font-semibold">Results</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>150% increase in organic traffic</li>
          <li>Top 3 ranking for key industry keywords</li>
          <li>Increased lead generation by 40%</li>
        </ul>
      </div>
    `,
  },
  {
    name: "Ainam Perfume",
    image: "/images/projects/Ainam Perfume.webp",
    class: "md:col-span-1 md:row-span-1",
    year: "2024",
    service: "Web Development",
    slug: "ainam-perfume",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Ainam Perfume</h2>
        <p class="text-gray-600">
          An elegant e-commerce platform designed for Ainam Perfume, showcasing
          their luxury fragrance collection. The site features a sophisticated
          design and a smooth shopping experience.
        </p>
        <h3 class="text-xl font-semibold">Platform Features</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>Custom scent profile quiz</li>
          <li>High-resolution product imagery</li>
          <li>Secure checkout process</li>
          <li>Integrated inventory management</li>
        </ul>
      </div>
    `,
  },
  {
    name: "Xense",
    image: "/images/projects/XenseMockup.webp",
    class: "md:col-span-2 md:row-span-1",
    year: "2024",
    service: "Web Development",
    slug: "xense",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Xense</h2>
        <p class="text-gray-600">
          Xense is a cutting-edge analytics dashboard that provides actionable
          insights for businesses. Our development team focused on data
          visualization and performance to handle large datasets.
        </p>
        <h3 class="text-xl font-semibold">Technical Stack</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>React with D3.js for visualizations</li>
          <li>Node.js backend for data processing</li>
          <li>Real-time data updates via WebSockets</li>
        </ul>
      </div>
    `,
  },
  {
    name: "Nicenoir",
    image: "/images/projects/Nicenoir.webp",
    class: "md:col-span-1 md:row-span-1",
    year: "2024",
    service: "Branding",
    slug: "nicenoir",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Nicenoir</h2>
        <p class="text-gray-600">
          A complete branding overhaul for Nicenoir, a fashion lifestyle brand.
          We developed a new visual identity that resonates with their target
          audience of modern urban professionals.
        </p>
        <h3 class="text-xl font-semibold">Deliverables</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>Logo design and usage guidelines</li>
          <li>Brand color palette and typography</li>
          <li>Marketing collateral and packaging design</li>
        </ul>
      </div>
    `,
  },
  {
    name: "Tip Top",
    image: "/images/projects/TIPTOP.webp",
    class: "md:col-span-1 md:row-span-1",
    year: "2023",
    service: "Digital Marketing",
    slug: "tip-top",
    details: `
      <div class="space-y-6">
        <h2 class="text-3xl font-bold">Tip Top</h2>
        <p class="text-gray-600">
          A comprehensive SEO audit and analysis for Tip Top's online presence.
          We identified technical issues and opportunities for content
          optimization to improve search engine rankings.
        </p>
        <h3 class="text-xl font-semibold">Findings & Actions</h3>
        <ul class="list-disc pl-5 text-gray-600 space-y-2">
          <li>Site speed optimization</li>
          <li>Mobile responsiveness improvements</li>
          <li>Content strategy refinement</li>
          <li>Backlink profile cleanup</li>
        </ul>
      </div>
    `,
  },
];
