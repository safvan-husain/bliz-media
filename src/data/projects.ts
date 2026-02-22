export interface Project {
  name: string;
  image: string;
  priority: number;
  year: string;
  service: string;
  slug: string;
  details: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Transking",
    image: "/images/projects/Transking.webp",
    priority: 20,
    year: "2024",
    service: "Web Development",
    slug: "transking",
    externalUrl: "https://transkinglogistic.com",
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
    priority: 30,
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
    priority: 40,
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
    priority: 35,
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
    name: "Xense",
    image: "/images/projects/XenseMockup.webp",
    priority: 60,
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
    priority: 35,
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
    priority: 35,
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
  {
    name: "Live Adventure Tours",
    image: "/images/projects/live-adventure.jpeg",
    priority: 80,
    year: "2024",
    service: "Web Development",
    slug: "live-adventure-tours",
    externalUrl: "https://www.liveadventuretours.com/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Live Adventure Tours is a visually immersive travel and tourism website
          built to showcase premium adventure experiences including desert safaris,
          quad biking, dune buggy rides, overnight desert stays, and curated UAE
          travel packages.
        </p>
        <p>
          The objective of this project was to create a high-impact,
          conversion-focused travel platform that inspires visitors while guiding
          them toward inquiries and bookings through a structured and intuitive
          layout.
        </p>
        <p>
          The website was developed to combine engaging visuals, strong
          performance, and a scalable technical architecture that allows future
          feature expansion such as automated bookings and integrated payment
          systems.
        </p>
        <h3>Website Design & User Experience</h3>
        <p>
          The design approach focuses on delivering an experience-driven interface
          aligned with the adventure tourism industry.
        </p>
        <ul>
          <li>Large immersive hero sections with strong visual storytelling</li>
          <li>Clearly structured tour categories</li>
          <li>Organized tour detail pages with highlights and descriptions</li>
          <li>Strong call-to-action placement for booking inquiries</li>
          <li>Clean typography and visual hierarchy</li>
          <li>Easy navigation structure for smooth exploration</li>
        </ul>
        <p>
          The user journey was carefully crafted to move visitors from discovery
          to inquiry without unnecessary complexity.
        </p>
        <h3>Performance & Optimization</h3>
        <p>Performance was a core priority during development.</p>
        <ul>
          <li>Fast page loading speeds</li>
          <li>Optimized media and image delivery</li>
          <li>Clean frontend structure</li>
          <li>Smooth navigation between pages</li>
          <li>Lightweight and efficient rendering</li>
        </ul>
        <p>
          The modern development architecture ensures reliable performance across
          devices and different network conditions.
        </p>
        <h3>Tech Stack & Development Architecture</h3>
        <p>
          The platform was built using modern full-stack technologies with Next.js
          at its core.
        </p>
        <ul>
          <li>Frontend: Next.js (React framework)</li>
          <li>Backend: Next.js / Node.js architecture</li>
          <li>Rendering strategy: Server-Side Rendering (SSR) for improved SEO</li>
          <li>Styling: Component-based responsive CSS architecture</li>
          <li>Hosting: Cloud-based deployment with optimized asset delivery</li>
        </ul>
        <p>Using Next.js for both frontend and backend enabled:</p>
        <ul>
          <li>SEO-friendly architecture</li>
          <li>Fast server-rendered pages</li>
          <li>Structured routing system</li>
          <li>Scalable and modular development</li>
          <li>Clean and maintainable codebase</li>
        </ul>
        <p>
          The project is built with scalability in mind, allowing seamless
          addition of dynamic booking and payment features in future phases.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop screens</li>
          <li>Tablets</li>
          <li>Mobile devices</li>
        </ul>
        <p>
          All sections, including navigation menus, tour listings, service pages,
          and contact forms, adapt fluidly to different screen sizes. Special
          attention was given to mobile layout structure to ensure easy browsing
          and fast inquiry access.
        </p>
        <h3>Booking System & Future Payment Integration</h3>
        <p>
          Currently, the booking flow is designed to redirect users directly to
          WhatsApp for personalized confirmation and manual processing.
        </p>
        <p>This approach allows the business to:</p>
        <ul>
          <li>Confirm real-time availability manually</li>
          <li>Handle custom customer requests</li>
          <li>Adjust pricing based on group size</li>
          <li>Provide flexible and personalized communication</li>
          <li>Build stronger customer relationships</li>
        </ul>
        <p>
          Although payment gateway integration is not yet implemented, the website
          architecture has been developed to support future automation.
        </p>
        <p>Planned future enhancements include:</p>
        <ul>
          <li>Integrated payment gateway (Stripe, Razorpay, PayTabs, or similar)</li>
          <li>Dynamic date and time slot selection</li>
          <li>Member-based pricing calculation</li>
          <li>Automated booking confirmation system</li>
          <li>Real-time availability management</li>
          <li>Complete in-website checkout flow</li>
          <li>Admin booking management dashboard</li>
        </ul>
        <p>
          Because the platform is built using Next.js with scalable backend
          architecture, integrating these features can be implemented without
          rebuilding the website structure.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Structured tour categorization system</li>
          <li>Detailed service and experience pages</li>
          <li>Inquiry and WhatsApp redirection booking flow</li>
          <li>SEO-optimized page structure</li>
          <li>Performance-focused frontend rendering</li>
          <li>Clean and intuitive navigation</li>
          <li>Fully responsive layout</li>
          <li>Scalable full-stack architecture</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a visually compelling and technically optimized
          travel website that effectively showcases adventure experiences while
          maintaining speed, clarity, and strong user flow.
        </p>
        <p>
          The platform supports the current business model through manual WhatsApp
          booking while being technically prepared for full automation and payment
          integration in future stages.
        </p>
        <p>
          This project demonstrates our ability to build scalable,
          performance-driven service platforms using Next.js for both frontend and
          backend systems, tailored specifically for tourism and
          experience-based businesses.
        </p>
      </section>
    `,
  },
  {
    name: "Aircrew Tours & Travels",
    image: "/images/projects/aircrew.jpeg",
    priority: 100,
    year: "2024",
    service: "Web Development",
    slug: "aircrew-tours-travels",
    externalUrl: "https://weaircrew.com/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Aircrew Tours & Travels is an internationally recognized,
          IATA-certified travel agency with operations in the UAE and India.
          The objective of this project was to develop a professional and
          trustworthy digital presence that reflects the brand's global
          credibility and service excellence.
        </p>
        <p>
          The website was built to clearly present the agency's core services,
          including flight bookings, visa assistance, hotel reservations,
          customized holiday packages, and airport transfers, while enabling
          customers to submit booking inquiries through a simple and reliable
          contact form.
        </p>
        <p>
          The platform emphasizes clarity, performance, and accessibility while
          maintaining cost efficiency through a static development approach.
        </p>
        <h3>Website Design & Brand Positioning</h3>
        <p>
          The design approach reflects professionalism, trust, and global travel
          expertise.
        </p>
        <ul>
          <li>Clean and structured layout</li>
          <li>Professional travel-focused visual identity</li>
          <li>Clear service presentation sections</li>
          <li>Strong call-to-action placements</li>
          <li>Informative content blocks</li>
          <li>Simple and intuitive navigation</li>
        </ul>
        <p>
          The layout was carefully structured to communicate credibility while
          guiding users smoothly toward inquiry submission.
        </p>
        <p>
          The website positions Aircrew Tours & Travels as a reliable,
          internationally recognized travel partner offering seamless and
          hassle-free travel experiences.
        </p>
        <h3>Performance & Optimization</h3>
        <p>The website is built using pure HTML and CSS, ensuring:</p>
        <ul>
          <li>Extremely fast loading speed</li>
          <li>Lightweight page structure</li>
          <li>High reliability</li>
          <li>Minimal server complexity</li>
          <li>Smooth navigation experience</li>
        </ul>
        <p>
          This approach guarantees consistent performance across devices and
          varying network conditions.
        </p>
        <h3>Tech Stack & Development</h3>
        <p>Technology stack:</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Responsive layout structure</li>
          <li>Basic JavaScript for UI interactions</li>
          <li>Email-based inquiry form system</li>
        </ul>
        <p>
          The website uses clean and semantic HTML coding practices to maintain
          structured content and long-term maintainability.
        </p>
        <h3>Inquiry & Booking System</h3>
        <p>
          The platform includes a simple booking and inquiry form that sends
          customer details directly to the company's email.
        </p>
        <ul>
          <li>Collection of customer name, contact details, and service requirements</li>
          <li>Direct email notification upon submission</li>
          <li>Lightweight processing without complex backend infrastructure</li>
        </ul>
        <p>
          This system is ideal for travel agencies that require personalized
          consultation before confirming bookings.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          All sections, including service descriptions and inquiry forms, adapt
          smoothly to different screen sizes to ensure readability and usability
          across devices.
        </p>
        <h3>Core Service Presentation</h3>
        <p>The website highlights the agency's key offerings:</p>
        <ul>
          <li>International and domestic flight bookings</li>
          <li>Visa assistance services</li>
          <li>Curated hotel stays</li>
          <li>Customized holiday packages</li>
          <li>Corporate travel solutions</li>
          <li>Airport transfers</li>
        </ul>
        <p>
          Each section is clearly structured to help visitors understand available
          services quickly.
        </p>
        <h3>Result</h3>
        <p>
          The final result is a professional, fast, and cost-effective travel
          agency website that successfully communicates credibility, global
          presence, and service reliability.
        </p>
        <p>The platform delivers:</p>
        <ul>
          <li>Clear brand positioning</li>
          <li>Smooth user navigation</li>
          <li>Reliable inquiry handling</li>
          <li>High performance with minimal technical overhead</li>
        </ul>
        <p>
          This project demonstrates our ability to build clean, efficient, and
          professionally structured static websites tailored for travel and
          service-based businesses.
        </p>
      </section>
    `,
  },
  {
    name: "Al Katheeb Interiors",
    image: "/images/projects/katheeb.jpeg",
    priority: 35,
    year: "2024",
    service: "Web Development",
    slug: "al-katheeb-interiors",
    externalUrl: "https://alkatheebinteriors.com/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Al Katheeb Interiors is a professional interior design and fit-out
          company website developed to establish a strong digital presence and
          showcase the company's expertise in residential, commercial, and
          customized interior solutions.
        </p>
        <p>
          The objective of this project was to create a clean, elegant, and
          corporate-focused website that communicates professionalism, portfolio
          strength, and service capabilities while maintaining fast performance
          and simple maintainability.
        </p>
        <p>
          The website was built using a static HTML structure to ensure
          reliability, speed, and cost efficiency.
        </p>
        <h3>Website Design & Brand Presentation</h3>
        <p>
          The design reflects sophistication, precision, and modern interior
          aesthetics.
        </p>
        <p>Design focus areas include:</p>
        <ul>
          <li>Clean and spacious layout</li>
          <li>Professional typography and color palette</li>
          <li>Structured service presentation sections</li>
          <li>Portfolio and project showcase areas</li>
          <li>Strong call-to-action placement</li>
          <li>Clear contact and inquiry sections</li>
        </ul>
        <p>
          The layout emphasizes visual balance and clarity, allowing visitors to
          understand services and explore project work effortlessly.
        </p>
        <p>
          The overall design supports the brand's positioning as a reliable and
          detail-oriented interior solutions provider.
        </p>
        <h3>Performance & Optimization</h3>
        <p>The website was developed using pure HTML and CSS, ensuring:</p>
        <ul>
          <li>Fast loading speeds</li>
          <li>Lightweight structure</li>
          <li>Minimal server-side dependency</li>
          <li>Smooth navigation</li>
          <li>Stable performance across devices</li>
        </ul>
        <p>
          This static architecture provides high reliability with low maintenance
          requirements.
        </p>
        <h3>Tech Stack & Development</h3>
        <p>Technology stack:</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Responsive layout implementation</li>
          <li>Basic JavaScript (if used for UI interactions)</li>
        </ul>
        <p>
          The codebase follows clean and semantic HTML practices to maintain
          structure, readability, and long-term maintainability.
        </p>
        <h3>Service & Portfolio Structure</h3>
        <p>The website clearly presents:</p>
        <ul>
          <li>Residential interior design services</li>
          <li>Commercial fit-out solutions</li>
          <li>Customized interior projects</li>
          <li>Company profile and expertise</li>
          <li>Contact and inquiry details</li>
        </ul>
        <p>
          Project and portfolio sections are structured to visually highlight the
          company's completed works and design quality.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          All sections, including image showcases, service descriptions, and
          contact forms, adapt seamlessly to different screen sizes.
        </p>
        <p>
          Special attention was given to layout consistency and readability on
          mobile devices.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Corporate interior design presentation</li>
          <li>Structured service sections</li>
          <li>Portfolio and project showcase layout</li>
          <li>Contact and inquiry section</li>
          <li>Lightweight static architecture</li>
          <li>Fast and stable performance</li>
          <li>Fully responsive design</li>
          <li>Clean and professional UI</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a professional and visually balanced corporate
          website that strengthens the company's digital presence.
        </p>
        <p>The platform delivers:</p>
        <ul>
          <li>Clear communication of services</li>
          <li>Strong brand positioning</li>
          <li>Fast performance</li>
          <li>Easy accessibility across devices</li>
        </ul>
        <p>
          This project demonstrates our capability to build clean, elegant, and
          performance-driven static websites tailored for interior design and
          corporate businesses.
        </p>
      </section>
    `,
  },
  {
    name: "Al Qadisiah Roads Maintenance",
    image: "/images/projects/qadisiah.jpeg",
    priority: 100,
    year: "2024",
    service: "Web Development",
    slug: "al-qadisiah-roads-maintenance",
    externalUrl: "https://alqrc.com/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Al Qadisiah Roads Maintenance Contracting is a Sharjah-based
          infrastructure contractor established in 2006. The company specializes
          in comprehensive civil infrastructure and utilities projects across the
          UAE, delivering works that meet authority standards, safety
          regulations, and long-term performance requirements.
        </p>
        <p>
          The objective of this project was to develop a strong, authoritative
          corporate website that clearly communicates the company's multi-division
          infrastructure capabilities while maintaining professional credibility
          and structured presentation.
        </p>
        <p>
          The website was built using WordPress to ensure scalability, structured
          content management, and easy backend control.
        </p>
        <h3>Website Design & Corporate Positioning</h3>
        <p>
          The design reflects technical strength, reliability, and regulatory
          compliance, essential qualities in the infrastructure and contracting
          sector.
        </p>
        <p>Design focus areas include:</p>
        <ul>
          <li>Clean and structured corporate layout</li>
          <li>Professional industrial color palette</li>
          <li>Clearly segmented service divisions</li>
          <li>Strong typography for authority presence</li>
          <li>Image-supported service descriptions</li>
          <li>Clear contact and inquiry sections</li>
        </ul>
        <p>
          The layout emphasizes clarity, trust, and engineering precision to
          position the company as a capable infrastructure partner.
        </p>
        <h3>WordPress Development & CMS Integration</h3>
        <p>
          The website was developed using WordPress to provide flexible content
          management and long-term maintainability.
        </p>
        <p>Backend capabilities include:</p>
        <ul>
          <li>Editable service pages</li>
          <li>Content management for each infrastructure division</li>
          <li>Media and project image uploads</li>
          <li>Contact form management</li>
          <li>Page editing without coding</li>
          <li>SEO-friendly URL structure</li>
          <li>Expandable page architecture</li>
        </ul>
        <p>
          This allows the company's internal team to update service descriptions,
          add projects, and manage website content independently.
        </p>
        <h3>Core Service Divisions Presented</h3>
        <p>
          The website clearly highlights the company's comprehensive
          infrastructure capabilities, including:
        </p>
        <h4>Road Construction</h4>
        <p>
          Complete road construction works including earthworks, sub-base, asphalt
          paving, kerbs, and associated infrastructure executed to approved
          authority standards.
        </p>
        <h4>Drainage Works</h4>
        <p>
          Surface and underground drainage systems designed for effective
          stormwater management and long-term asset protection.
        </p>
        <h4>Street Light Construction</h4>
        <p>
          Complete street lighting infrastructure including foundations, ducting,
          cabling, poles, and luminaire installations.
        </p>
        <h4>Electricity Works</h4>
        <p>
          Electrical infrastructure including ducting, cabling, feeder pillars,
          panels, and compliant installations.
        </p>
        <h4>Telecommunications Works</h4>
        <p>
          Telecom ducting, chambers, cable laying, and associated infrastructure
          in accordance with authority standards.
        </p>
        <h4>Irrigation Works</h4>
        <p>
          Irrigation pipelines, valves, chambers, pump connections, and control
          systems ensuring efficient water distribution.
        </p>
        <h4>Potable Water Works</h4>
        <p>
          Pipeline installation, fittings, chambers, testing, and commissioning
          for hygienic and compliant water supply systems.
        </p>
        <p>
          This structured service breakdown strengthens the company's positioning
          as a full-scale civil infrastructure contractor.
        </p>
        <h3>Performance & Optimization</h3>
        <p>The WordPress configuration was optimized to ensure:</p>
        <ul>
          <li>Fast page loading</li>
          <li>Clean page hierarchy</li>
          <li>Optimized images</li>
          <li>Responsive layout</li>
          <li>SEO-friendly structure</li>
        </ul>
        <p>The site delivers consistent performance across browsers and devices.</p>
        <h3>Responsive Development</h3>
        <p>The platform is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          All service cards, content blocks, and contact forms adapt seamlessly
          across screen sizes while maintaining clarity and professional
          presentation.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Corporate infrastructure presentation</li>
          <li>Multi-division service structure</li>
          <li>WordPress CMS integration</li>
          <li>Editable content management system</li>
          <li>Service segmentation layout</li>
          <li>Contact and inquiry form</li>
          <li>SEO-optimized architecture</li>
          <li>Fully responsive design</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a strong, authoritative corporate website that
          clearly communicates the company's multi-division infrastructure
          capabilities.
        </p>
        <p>The platform delivers:</p>
        <ul>
          <li>Professional digital presence</li>
          <li>Structured service communication</li>
          <li>Easy backend management</li>
          <li>Optimized and responsive performance</li>
        </ul>
        <p>
          This project demonstrates our capability to develop structured, scalable
          WordPress corporate websites for infrastructure and civil contracting
          companies.
        </p>
      </section>
    `,
  },
  {
    name: "Tomrich Watches",
    image: "/images/projects/tomrich-watches.jpeg",
    priority: 35,
    year: "2024",
    service: "Web Development",
    slug: "tomrich-watches",
    externalUrl: "https://ecommerce-tomirich.web.app",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          TOMRICH is a direct-to-consumer watch brand website developed for a
          growing business that designs and sells its own manufactured watches.
        </p>
        <p>
          The objective of this project was to create a premium-looking,
          product-focused online store that reflects the craftsmanship and
          identity of the brand while keeping the system lightweight and
          cost-efficient.
        </p>
        <p>
          Currently, the purchase flow redirects customers to WhatsApp for order
          confirmation. However, the platform is architected to support full
          payment gateway integration in future phases without structural
          redevelopment.
        </p>
        <p>
          This strategy allows the brand to operate efficiently during its early
          growth stage while remaining technically scalable.
        </p>
        <h3>Website Design & Brand Presentation</h3>
        <p>
          The design emphasizes product elegance, minimalism, and brand identity.
        </p>
        <p>Design focus areas include:</p>
        <ul>
          <li>Clean and modern watch-focused layout</li>
          <li>Large product imagery highlighting craftsmanship</li>
          <li>Structured product detail pages</li>
          <li>Clear pricing display</li>
          <li>Strong call-to-action buttons</li>
          <li>Simple and refined typography</li>
        </ul>
        <p>
          The interface is designed to communicate quality, precision, and
          premium aesthetics while keeping navigation simple and intuitive.
        </p>
        <p>The layout ensures customers can:</p>
        <ul>
          <li>Explore available watch models</li>
          <li>View detailed product information</li>
          <li>Understand pricing clearly</li>
          <li>Initiate purchase quickly</li>
        </ul>
        <h3>Performance & Optimization</h3>
        <p>
          Performance was optimized to ensure smooth browsing and product viewing.
        </p>
        <p>The website includes:</p>
        <ul>
          <li>Fast page load times</li>
          <li>Optimized product images</li>
          <li>Lightweight frontend architecture</li>
          <li>Smooth navigation between pages</li>
          <li>Clean component-based structure</li>
        </ul>
        <p>The result is a stable and responsive experience across all devices.</p>
        <h3>Tech Stack & Development Architecture</h3>
        <p>
          The website was developed using modern full-stack technologies with
          scalability in mind.
        </p>
        <p>Technology stack:</p>
        <ul>
          <li>Frontend: Next.js (React framework)</li>
          <li>Backend: Node.js architecture</li>
          <li>Rendering strategy: Server-Side Rendering (SSR) for SEO optimization</li>
          <li>Styling: Component-based responsive CSS</li>
          <li>Hosting: Cloud hosting (Firebase environment)</li>
        </ul>
        <p>Using Next.js provides:</p>
        <ul>
          <li>SEO-friendly structure</li>
          <li>Fast page rendering</li>
          <li>Modular and scalable codebase</li>
          <li>Structured routing system</li>
          <li>Easy integration for future automation</li>
        </ul>
        <p>
          The system is intentionally built to allow seamless transition into a
          fully automated eCommerce platform when required.
        </p>
        <h3>Current Purchase Flow (WhatsApp-Based Ordering)</h3>
        <p>
          At present, when a customer proceeds to purchase, they are redirected to
          WhatsApp for order confirmation and payment coordination.
        </p>
        <p>This setup allows the brand to:</p>
        <ul>
          <li>Maintain direct communication with customers</li>
          <li>Offer personalized service</li>
          <li>Manage payments manually</li>
          <li>Reduce operational costs during early stages</li>
          <li>Handle logistics flexibly</li>
        </ul>
        <p>This approach is practical for small-scale or emerging brands.</p>
        <h3>Future Payment Gateway Integration</h3>
        <p>
          Although payments are currently handled manually, the website is built
          to support future automation.
        </p>
        <p>Planned upgrades include:</p>
        <ul>
          <li>Integration of Stripe or Razorpay payment gateway</li>
          <li>Secure online checkout flow</li>
          <li>Automated order confirmation</li>
          <li>Order management dashboard</li>
          <li>Basic shipping workflow automation</li>
          <li>Payment status tracking</li>
        </ul>
        <p>
          Because the architecture is built using Next.js full-stack structure,
          these enhancements can be integrated without rebuilding the website.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          Product grids, detail sections, and call-to-action buttons adapt
          seamlessly to different screen sizes. The mobile experience was
          prioritized to support traffic from social media and direct brand
          marketing.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Structured watch product catalog</li>
          <li>Individual product detail pages</li>
          <li>Brand-focused presentation layout</li>
          <li>WhatsApp-based purchase initiation</li>
          <li>SEO-optimized architecture</li>
          <li>Lightweight and fast frontend</li>
          <li>Scalable backend-ready system</li>
          <li>Future-ready payment integration capability</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a clean, premium, and cost-efficient direct-to-consumer
          watch brand website tailored for an emerging manufacturer.
        </p>
        <p>The platform provides:</p>
        <ul>
          <li>Strong product presentation</li>
          <li>Professional brand identity</li>
          <li>Smooth browsing experience</li>
          <li>Direct customer communication</li>
          <li>Technical scalability for future automation</li>
        </ul>
        <p>
          This project demonstrates our ability to build modern D2C brand
          websites that balance budget efficiency with long-term scalability using
          Next.js architecture.
        </p>
      </section>
    `,
  },
  {
    name: "Yashabab Restaurant",
    image: "/images/projects/yashbab.jpeg",
    priority: 90,
    year: "2024",
    service: "Web Development",
    slug: "yashabab-restaurant",
    externalUrl: "https://yashabab.ae/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Yashabab Restaurant is a modern Arabic restaurant website developed to
          showcase the brand's legacy, cuisine, and dining experience in a
          visually engaging format.
        </p>
        <p>
          The objective of this project was to build a clean, attractive, and
          fast-loading restaurant website that highlights the restaurant's
          identity, menu offerings, and corporate and event booking services while
          maintaining simplicity and performance.
        </p>
        <p>
          The website was built using a static HTML structure to ensure
          reliability, speed, and easy deployment.
        </p>
        <h3>Website Design & Visual Identity</h3>
        <p>
          The design reflects a bold and premium Arabic dining experience.
        </p>
        <p>Design highlights include:</p>
        <ul>
          <li>Large hero section with high-quality food imagery</li>
          <li>Strong typography emphasizing brand identity</li>
          <li>Dark-themed layout with warm accent colors</li>
          <li>Clear call-to-action buttons (View Menu, Contact, Booking)</li>
          <li>Clean navigation structure</li>
          <li>Corporate and event booking section integration</li>
        </ul>
        <p>
          The layout was crafted to create a visually immersive first impression
          while guiding users toward viewing the menu or making inquiries.
        </p>
        <h3>Menu Integration</h3>
        <p>
          Instead of building a complex dynamic menu system, the restaurant menu
          is accessible via an external Drive link.
        </p>
        <p>This approach allows:</p>
        <ul>
          <li>Easy menu updates without modifying the website structure</li>
          <li>Cost-efficient management</li>
          <li>Quick changes to pricing or items</li>
          <li>Simple content control for the restaurant team</li>
        </ul>
        <p>
          The integration ensures users can easily access the full menu while
          maintaining a lightweight website architecture.
        </p>
        <h3>Performance & Optimization</h3>
        <p>Since the website is built using pure HTML and CSS, it delivers:</p>
        <ul>
          <li>Extremely fast loading speed</li>
          <li>Lightweight structure</li>
          <li>Minimal server processing</li>
          <li>Reliable performance across devices</li>
          <li>Smooth scrolling and navigation</li>
        </ul>
        <p>
          The static architecture ensures high performance and low maintenance
          requirements.
        </p>
        <h3>Tech Stack & Development</h3>
        <p>Technology stack:</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Responsive layout implementation</li>
          <li>Basic JavaScript for UI enhancements (if applicable)</li>
          <li>External menu integration via Drive link</li>
        </ul>
        <p>
          The website uses clean and semantic HTML structure for maintainability
          and structured content presentation.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          All sections, including hero banners, navigation menus, and
          call-to-action buttons, adapt seamlessly across different screen sizes.
          Special attention was given to mobile viewing, as most restaurant
          traffic comes from smartphones.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Modern Arabic restaurant presentation</li>
          <li>Structured service and booking sections</li>
          <li>External menu access via Drive link</li>
          <li>Corporate and event booking information</li>
          <li>Lightweight static architecture</li>
          <li>Fast loading performance</li>
          <li>Fully responsive layout</li>
          <li>Clean and professional UI</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a visually appealing, fast, and cost-effective
          restaurant website that effectively communicates brand identity and menu
          offerings.
        </p>
        <p>The platform provides:</p>
        <ul>
          <li>Strong visual first impression</li>
          <li>Easy access to menu</li>
          <li>Clear service presentation</li>
          <li>Reliable performance with minimal technical complexity</li>
        </ul>
        <p>
          This project demonstrates our ability to deliver attractive and
          performance-focused static restaurant websites tailored for hospitality
          businesses.
        </p>
      </section>
    `,
  },
  {
    name: "Berton Perfumes",
    image: "/images/projects/berton-perfume.jpeg",
    priority: 40,
    year: "2024",
    service: "Web Development",
    slug: "berton-perfumes",
    externalUrl: "https://bertonperfumes.com/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Berton Perfumes is a boutique fragrance brand website developed for a
          growing small-scale perfume business. The objective of this project was
          to create a clean, elegant, and conversion-focused online presence that
          allows customers to explore products and initiate purchases easily.
        </p>
        <p>
          Due to budget considerations and the brand's early growth stage, the
          purchasing flow currently redirects customers to WhatsApp for order
          confirmation. However, the platform was architected to support full
          payment gateway integration in the future without structural changes.
        </p>
        <p>
          This approach allowed the client to launch quickly while keeping the
          system scalable.
        </p>
        <h3>Website Design & Brand Aesthetic</h3>
        <p>
          The design reflects a premium and minimal fragrance brand identity.
        </p>
        <p>Design focus areas include:</p>
        <ul>
          <li>Elegant and clean product presentation</li>
          <li>Minimalist layout aligned with luxury perfume branding</li>
          <li>High-quality product imagery</li>
          <li>Clear pricing and fragrance descriptions</li>
          <li>Strong call-to-action placement</li>
        </ul>
        <p>
          The overall UI emphasizes sophistication while maintaining simplicity to
          build brand trust and improve customer engagement.
        </p>
        <p>The layout is structured to ensure:</p>
        <ul>
          <li>Smooth browsing experience</li>
          <li>Easy product discovery</li>
          <li>Clear communication of scent profiles and pricing</li>
          <li>Direct and frictionless purchase initiation</li>
        </ul>
        <h3>Performance & Optimization</h3>
        <p>The platform was built with performance efficiency in mind.</p>
        <p>Key optimizations include:</p>
        <ul>
          <li>Fast loading pages</li>
          <li>Lightweight frontend architecture</li>
          <li>Optimized images for product display</li>
          <li>Smooth navigation between product pages</li>
          <li>Clean code structure for maintainability</li>
        </ul>
        <p>
          The website ensures stable performance across devices and varying
          internet speeds.
        </p>
        <h3>Tech Stack & Development Architecture</h3>
        <p>
          The website was developed using modern full-stack architecture with
          scalability in mind.
        </p>
        <p>Technology stack:</p>
        <ul>
          <li>Frontend: Next.js (React framework)</li>
          <li>Backend: Next.js / Node.js architecture</li>
          <li>Rendering strategy: Server-Side Rendering (SSR) for SEO optimization</li>
          <li>Styling: Component-based responsive design</li>
          <li>Hosting: Cloud-based optimized deployment</li>
        </ul>
        <p>Using Next.js allows:</p>
        <ul>
          <li>SEO-friendly structure</li>
          <li>Fast page rendering</li>
          <li>Scalable routing system</li>
          <li>Clean and modular codebase</li>
          <li>Easy integration of future payment systems</li>
        </ul>
        <p>
          The system was intentionally built to support seamless expansion into a
          complete automated eCommerce model when the business scales.
        </p>
        <h3>Current Purchase Flow (WhatsApp-Based Ordering)</h3>
        <p>
          At present, when customers select a product and proceed to purchase,
          they are redirected to WhatsApp for manual order confirmation.
        </p>
        <p>This model was chosen because:</p>
        <ul>
          <li>It reduces operational costs for a small business</li>
          <li>It enables direct customer communication</li>
          <li>It allows flexible payment handling</li>
          <li>It simplifies logistics management</li>
          <li>It supports personalized customer service</li>
        </ul>
        <p>This setup is ideal for early-stage or low-volume businesses.</p>
        <h3>Future Payment Gateway Integration</h3>
        <p>
          Although payment processing is currently handled manually, the website
          architecture is built to support full automation.
        </p>
        <p>Planned future enhancements include:</p>
        <ul>
          <li>Integration of Stripe or Razorpay payment gateway</li>
          <li>Secure online checkout system</li>
          <li>Automated order confirmation</li>
          <li>Payment status tracking</li>
          <li>Order management dashboard</li>
          <li>Potential shipping automation</li>
        </ul>
        <p>
          Because the system is built using Next.js full-stack architecture,
          payment gateway integration can be implemented without rebuilding the
          platform.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          All components including product listings, detail pages, and purchase
          buttons adapt seamlessly to different screen sizes. Special attention
          was given to mobile layout since fragrance purchases often come from
          social media traffic.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Elegant product catalog structure</li>
          <li>Individual product detail pages</li>
          <li>WhatsApp-based order initiation</li>
          <li>SEO-optimized page structure</li>
          <li>Lightweight and fast frontend performance</li>
          <li>Scalable backend architecture</li>
          <li>Future-ready payment integration capability</li>
          <li>Clean and brand-focused UI</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a modern, elegant, and cost-efficient perfume brand
          website tailored for a small-scale business.
        </p>
        <p>The platform provides:</p>
        <ul>
          <li>Strong brand presentation</li>
          <li>Smooth browsing experience</li>
          <li>Direct customer communication</li>
          <li>Scalable architecture for future automation</li>
        </ul>
        <p>
          This project demonstrates our ability to deliver budget-conscious yet
          technically scalable solutions for small businesses using modern
          full-stack development with Next.js.
        </p>
      </section>
    `,
  },
  {
    name: "Sheza Star",
    image: "/images/projects/shezastar.jpeg",
    priority: 95,
    year: "2024",
    service: "Web Development",
    slug: "sheza-star",
    externalUrl: "https://shezastar.com/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Sheza Star is a high-performance automotive eCommerce platform built to
          sell premium car accessories including Android infotainment systems,
          multimedia units, speakers, lighting products, and interior upgrades.
        </p>
        <p>
          The objective of this project was to develop a scalable, fast, and
          fully automated online store that allows customers to browse products,
          make secure payments, and receive automated shipping updates.
        </p>
        <p>
          The platform combines modern UI design, strong backend architecture,
          secure payment integration, and automated logistics handling to create a
          complete digital commerce ecosystem.
        </p>
        <h3>Website Design & User Experience</h3>
        <p>
          The website features a clean, modern, and conversion-focused eCommerce
          layout tailored specifically for the automotive industry.
        </p>
        <p>Design priorities included:</p>
        <ul>
          <li>Clear product visibility and structured category browsing</li>
          <li>Clean product grid layouts</li>
          <li>Detailed product pages with specifications and pricing</li>
          <li>Strong call-to-action placement</li>
          <li>Smooth shopping journey from product selection to checkout</li>
        </ul>
        <p>
          The UI is designed to maintain a professional automotive aesthetic while
          ensuring intuitive navigation and high conversion potential.
        </p>
        <h3>Performance & Optimization</h3>
        <p>Performance was a key focus during development.</p>
        <p>The platform ensures:</p>
        <ul>
          <li>Fast page loading speed</li>
          <li>Optimized image and asset delivery</li>
          <li>Smooth navigation between categories and product pages</li>
          <li>Efficient product filtering system</li>
          <li>Lightweight frontend rendering</li>
        </ul>
        <p>
          Using Next.js architecture allows server-side rendering and optimized
          performance across devices and network conditions.
        </p>
        <h3>Tech Stack & Development Architecture</h3>
        <p>
          The platform was developed using modern full-stack technologies with
          Next.js powering both frontend and backend systems.
        </p>
        <p>Technology stack:</p>
        <ul>
          <li>Frontend: Next.js (React framework)</li>
          <li>Backend: Next.js API routes / Node.js</li>
          <li>Rendering strategy: SSR and static generation for SEO</li>
          <li>Database: API-driven product and order management</li>
          <li>Payment integration: Stripe payment gateway</li>
          <li>Shipping integration: Automated shipping configuration system</li>
          <li>Hosting: Cloud deployment with CDN optimization</li>
        </ul>
        <p>Using Next.js enabled:</p>
        <ul>
          <li>SEO-friendly architecture</li>
          <li>Fast server-rendered pages</li>
          <li>Secure API handling</li>
          <li>Clean routing system</li>
          <li>Scalable structure for future feature expansion</li>
        </ul>
        <h3>Stripe Payment Gateway Integration</h3>
        <p>
          The platform includes full integration of the Stripe payment gateway to
          enable secure and seamless online transactions.
        </p>
        <p>Payment system capabilities include:</p>
        <ul>
          <li>Secure card payments</li>
          <li>Encrypted checkout flow</li>
          <li>Real-time payment confirmation</li>
          <li>Automated order creation after successful payment</li>
          <li>Secure transaction handling with Stripe APIs</li>
        </ul>
        <p>
          This integration ensures safe and reliable online purchases while
          maintaining high performance during checkout.
        </p>
        <h3>Fully Automated Shipping System</h3>
        <p>
          A fully automated shipping system has been integrated into the platform
          to streamline order fulfillment.
        </p>
        <p>Shipping features include:</p>
        <ul>
          <li>Automatic shipping cost calculation</li>
          <li>Region-based shipping configuration</li>
          <li>Order processing workflow</li>
          <li>Integration-ready logistics structure</li>
          <li>Automated status updates linked to order management</li>
        </ul>
        <p>
          The system reduces manual intervention and allows smooth order
          processing from payment confirmation to shipment handling.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          All components including product grids, checkout flow, filters, and
          navigation menus automatically adapt to screen size. The mobile shopping
          experience was optimized to ensure fast browsing and frictionless
          checkout.
        </p>
        <h3>Custom Admin Panel & Store Management</h3>
        <p>
          A comprehensive custom admin dashboard was developed to provide full
          operational control.
        </p>
        <p>Admin capabilities include:</p>
        <ul>
          <li>Add, edit, and delete products</li>
          <li>Manage product categories</li>
          <li>Update pricing and stock levels</li>
          <li>Upload and manage product images</li>
          <li>Order management system</li>
          <li>Payment tracking via Stripe</li>
          <li>Shipping configuration management</li>
          <li>Inventory tracking</li>
          <li>Content management for website sections</li>
        </ul>
        <p>
          The admin panel is intuitive and allows the business team to manage the
          entire store independently without developer support.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Advanced product catalog structure</li>
          <li>Category-based navigation</li>
          <li>Dynamic product filtering</li>
          <li>Detailed product pages</li>
          <li>Secure Stripe payment integration</li>
          <li>Fully automated shipping system</li>
          <li>Order management system</li>
          <li>SEO-optimized page architecture</li>
          <li>Performance-focused frontend rendering</li>
          <li>Scalable full-stack structure</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a fully functional, secure, and scalable automotive
          eCommerce platform.
        </p>
        <p>The platform delivers:</p>
        <ul>
          <li>Fast and smooth browsing experience</li>
          <li>Secure online payment processing</li>
          <li>Automated shipping workflow</li>
          <li>Complete backend management control</li>
          <li>Strong foundation for business growth</li>
        </ul>
        <p>
          Sheza Star demonstrates our capability to build end-to-end eCommerce
          ecosystems using Next.js for both frontend and backend, combined with
          secure payment integration and automated operational systems.
        </p>
      </section>
    `,
  },
  {
    name: "Berton Golden",
    image: "/images/projects/berton-golden.jpeg",
    priority: 70,
    year: "2024",
    service: "Branding",
    slug: "berton-golden",
    externalUrl: "https://bertongolden.com/",
    details: `
      <section>
        <h2>Project Overview</h2>
        <p>
          Berton Golden is a premium fragrance brand showcase website developed as
          a dedicated one-page platform to present the brand's signature perfume
          collection.
        </p>
        <p>
          Unlike the main Berton Perfumes eCommerce platform, this website was
          intentionally built as a static brand presentation site under a separate
          domain. The client required two independent digital identities: one
          focused on online selling and the other focused purely on brand
          positioning and product showcase.
        </p>
        <p>
          The objective of this project was to create a visually immersive,
          elegant, and high-end landing experience that communicates
          sophistication and luxury.
        </p>
        <h3>Brand Strategy & Dual Website Approach</h3>
        <p>The client requested two separate websites under two domains:</p>
        <ul>
          <li>Berton Perfumes: eCommerce platform</li>
          <li>Berton Golden: premium brand showcase</li>
        </ul>
        <p>This separation allows:</p>
        <ul>
          <li>Distinct brand positioning</li>
          <li>Independent marketing campaigns</li>
          <li>Different audience targeting</li>
          <li>Focused storytelling for the Golden line</li>
          <li>Clean and distraction-free product presentation</li>
        </ul>
        <p>The Berton Golden site functions as a digital luxury brochure.</p>
        <h3>Website Design & Visual Identity</h3>
        <p>
          The design emphasizes luxury, elegance, and timeless fragrance
          identity.
        </p>
        <p>Design highlights include:</p>
        <ul>
          <li>Bold hero section with high-quality product visuals</li>
          <li>Dark luxury-themed background</li>
          <li>Large typography for strong brand impact</li>
          <li>Minimal and focused layout</li>
          <li>Smooth scrolling one-page structure</li>
          <li>Clean call-to-action buttons</li>
        </ul>
        <p>
          The layout is intentionally minimal to maintain premium aesthetics and
          avoid unnecessary complexity.
        </p>
        <p>The website communicates:</p>
        <ul>
          <li>Timeless fragrance positioning</li>
          <li>Sophistication and sensuality</li>
          <li>Luxury branding</li>
          <li>Focused product storytelling</li>
        </ul>
        <h3>Tech Stack & Development</h3>
        <p>Technology stack:</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Responsive layout implementation</li>
          <li>Basic JavaScript for smooth scrolling or UI interactions</li>
        </ul>
        <p>
          The site was built as a static one-page architecture to ensure fast
          loading performance, lightweight structure, easy hosting, high
          reliability, and minimal maintenance requirements.
        </p>
        <h3>Performance & Optimization</h3>
        <p>Because the website is fully static, it delivers:</p>
        <ul>
          <li>Extremely fast load times</li>
          <li>Optimized image handling</li>
          <li>Smooth navigation</li>
          <li>High performance across devices</li>
          <li>Stable hosting environment</li>
        </ul>
        <p>
          The clean structure ensures optimal user experience without backend
          dependency.
        </p>
        <h3>Responsive Development</h3>
        <p>The website is fully responsive and optimized for:</p>
        <ul>
          <li>Desktop</li>
          <li>Tablet</li>
          <li>Mobile</li>
        </ul>
        <p>
          The one-page structure adapts seamlessly across screen sizes,
          maintaining visual impact and brand consistency.
        </p>
        <p>
          Mobile viewing was prioritized to support social media traffic and
          digital marketing campaigns.
        </p>
        <h3>Key Functional Features</h3>
        <ul>
          <li>Premium one-page brand layout</li>
          <li>High-impact hero section</li>
          <li>Product showcase presentation</li>
          <li>Smooth scrolling navigation</li>
          <li>Lightweight static architecture</li>
          <li>Fast loading performance</li>
          <li>Fully responsive design</li>
          <li>Separate brand domain structure</li>
        </ul>
        <h3>Result</h3>
        <p>
          The final result is a visually immersive, elegant, and
          performance-focused brand showcase website that strengthens the Berton
          Golden identity.
        </p>
        <p>The platform delivers:</p>
        <ul>
          <li>Strong luxury positioning</li>
          <li>Clean and distraction-free product presentation</li>
          <li>Fast and reliable performance</li>
          <li>Clear separation from the eCommerce platform</li>
        </ul>
        <p>
          This project demonstrates our ability to build brand-focused static
          showcase websites that support strategic multi-domain brand expansion.
        </p>
      </section>
    `,
  },
  {
    name: "Ainam Perfume",
    image: "/images/projects/Ainam Perfume.webp",
    priority: 35,
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
];
