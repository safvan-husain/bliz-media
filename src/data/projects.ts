export interface Project {
  name: string;
  image: string;
  priority: number;
  year: string;
  service: string;
  slug: string;
  description?: string;
  htmlDescription?: string;
  details: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Trans King Logistic",
    image: "/images/projects/transking.jpeg",
    priority: 20,
    year: "2024",
    service: "Web Development",
    slug: "transking",
    externalUrl: "https://transkinglogistic.com",
    description:
      "Enterprise logistics and heavy transport website for Trans King Logistic, built to present large-scale fleet capability, multi-country operations, and compliance-driven services across the MENA region.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">TRANS KING LOGISTIC - Enterprise Logistics and Heavy Equipment Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://transkinglogistic.com/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Logistics, Heavy Transport and Equipment Rental</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> WordPress Corporate Enterprise Website</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Trans King Logistic is a certified logistics and heavy transport company providing land transportation, oversized cargo handling, heavy and light equipment rental, and energy solutions across the MENA region.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to develop a powerful enterprise-level corporate website that reflects Trans King's operational scale, fleet strength, regional presence, and engineering-driven logistics approach.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was built using WordPress to ensure scalability, structured content management, and long-term flexibility for a growing multi-country operation.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Enterprise Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design emphasizes strength, operational scale, and industry authority.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Bold industrial visuals</li>
          <li class="leading-relaxed">Strong corporate messaging</li>
          <li class="leading-relaxed">Structured service segmentation</li>
          <li class="leading-relaxed">Fleet and capability highlights</li>
          <li class="leading-relaxed">Clear statistics and operational scale presentation</li>
          <li class="leading-relaxed">Professional navigation and layout</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout reinforces credibility and positions Trans King as a major logistics operator in the Middle East.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Services Presented</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website clearly outlines Trans King's comprehensive service portfolio:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Land Transportation Services</li>
          <li class="leading-relaxed">Oversized and Heavy Cargo Handling</li>
          <li class="leading-relaxed">Heavy and Light Equipment Rental</li>
          <li class="leading-relaxed">Energy Solutions</li>
          <li class="leading-relaxed">Engineering and Project Management Approach</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The site also highlights:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Largest fleet of trailers and cranes in the region</li>
          <li class="leading-relaxed">Operations across 4 countries</li>
          <li class="leading-relaxed">Service coverage across the MENA region</li>
          <li class="leading-relaxed">Serving 1000+ enterprises daily</li>
          <li class="leading-relaxed">ADNOC Approved Vendor status</li>
          <li class="leading-relaxed">CICPA and CNIA compliance certifications</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">These elements strengthen trust and demonstrate regulatory compliance and large-scale operational capability.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">WordPress Development and CMS Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was developed using WordPress to allow flexible enterprise-level content management.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Backend capabilities include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Editable service pages</li>
          <li class="leading-relaxed">Fleet and project content updates</li>
          <li class="leading-relaxed">Media and document uploads</li>
          <li class="leading-relaxed">Certification display management</li>
          <li class="leading-relaxed">Multi-page content hierarchy</li>
          <li class="leading-relaxed">Contact and inquiry form management</li>
          <li class="leading-relaxed">SEO-friendly page structure</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The CMS enables internal teams to update operational highlights, certifications, and service expansions without requiring redevelopment.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was optimized to ensure:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speed</li>
          <li class="leading-relaxed">Structured content hierarchy</li>
          <li class="leading-relaxed">Optimized media handling</li>
          <li class="leading-relaxed">Responsive performance</li>
          <li class="leading-relaxed">SEO-friendly configuration</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website maintains performance while presenting large-scale operational content.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All service sections, fleet displays, and corporate information blocks adapt seamlessly across screen sizes while maintaining professional presentation.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Mobile responsiveness ensures accessibility for field operators, partners, and enterprise decision-makers.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Enterprise logistics service presentation</li>
          <li class="leading-relaxed">Fleet and capability showcase</li>
          <li class="leading-relaxed">Certification and compliance highlights</li>
          <li class="leading-relaxed">WordPress CMS integration</li>
          <li class="leading-relaxed">Editable backend content management</li>
          <li class="leading-relaxed">Multi-country operational positioning</li>
          <li class="leading-relaxed">Contact and inquiry integration</li>
          <li class="leading-relaxed">SEO-optimized structure</li>
          <li class="leading-relaxed">Fully responsive design</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a strong, authoritative enterprise logistics website that reflects Trans King Logistic's operational scale and industry credibility.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">High-level corporate positioning</li>
          <li class="leading-relaxed">Clear communication of services and certifications</li>
          <li class="leading-relaxed">Scalable backend management</li>
          <li class="leading-relaxed">Optimized and responsive performance</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our capability to develop enterprise-grade WordPress websites tailored for large-scale logistics, heavy transport, and equipment rental companies.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Trans King Logistic is a certified logistics and heavy transport company operating across the MENA region.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was built as an enterprise-level WordPress platform to communicate fleet strength, engineering-driven delivery, and regional operational scale.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Services</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Land transportation services</li>
          <li class="leading-relaxed">Oversized and heavy cargo handling</li>
          <li class="leading-relaxed">Heavy and light equipment rental</li>
          <li class="leading-relaxed">Energy solutions and project support</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Business Positioning Highlights</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Largest fleet of trailers and cranes in the region</li>
          <li class="leading-relaxed">Operations across 4 countries</li>
          <li class="leading-relaxed">1000+ enterprises served daily</li>
          <li class="leading-relaxed">ADNOC approved vendor with CICPA and CNIA compliance</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Delivery & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website architecture prioritizes clean hierarchy, responsive performance, optimized media handling, and scalable content management through WordPress CMS.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final outcome is an authoritative logistics website that reinforces trust, communicates operational depth clearly, and supports ongoing backend updates without redevelopment.</p>
      </section>
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
          <li class="leading-relaxed">Minimalist and clean user interface</li>
          <li class="leading-relaxed">Interactive destination guides</li>
          <li class="leading-relaxed">Smart search with filters</li>
          <li class="leading-relaxed">Mobile-first responsive design</li>
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
          <li class="leading-relaxed">Extensive ergonomic research</li>
          <li class="leading-relaxed">3D modeling and prototyping</li>
          <li class="leading-relaxed">Material selection for durability and sustainability</li>
          <li class="leading-relaxed">User testing and iteration</li>
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
          <li class="leading-relaxed">150% increase in organic traffic</li>
          <li class="leading-relaxed">Top 3 ranking for key industry keywords</li>
          <li class="leading-relaxed">Increased lead generation by 40%</li>
        </ul>
      </div>
    `,
  },

  {
    name: "Xense Fragrance",
    image: "/images/projects/xense.jpeg",
    priority: 60,
    year: "2024",
    service: "Web Development",
    slug: "xense",
    externalUrl: "https://xensefragrance.com/",
    description:
      "Premium fragrance brand website built with WordPress and WooCommerce, combining luxury storytelling with structured catalog management and WhatsApp-first conversion.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">XENSE FRAGRANCE - Premium Perfume Brand eCommerce Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://xensefragrance.com/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Fragrance and Perfume Retail</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> WordPress WooCommerce Website with WhatsApp Integration</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Xense Fragrance is a premium perfume brand website developed to showcase and promote signature scents crafted with rare ingredients and long-lasting formulations.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to create a luxurious and emotionally engaging digital storefront that reflects the brand philosophy:</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">"Perfume is more than just scent - it's your aura. Your signature."</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was built using WordPress and WooCommerce to support structured product management while integrating WhatsApp-based purchase communication for direct customer engagement.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Brand Positioning and Design Approach</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design emphasizes elegance, sophistication, and sensory appeal.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Luxury-focused hero messaging</li>
          <li class="leading-relaxed">Dark and premium-themed visual styling</li>
          <li class="leading-relaxed">High-quality fragrance imagery</li>
          <li class="leading-relaxed">Emotion-driven content sections</li>
          <li class="leading-relaxed">Clear product showcase grids</li>
          <li class="leading-relaxed">Strong call-to-action buttons</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout was crafted to create an immersive fragrance experience, encouraging visitors to explore scents and connect with the brand identity.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The messaging focuses on:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Rare ingredient craftsmanship</li>
          <li class="leading-relaxed">Long-lasting impressions</li>
          <li class="leading-relaxed">Personal aura and identity</li>
          <li class="leading-relaxed">Everyday luxury elevation</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">WooCommerce Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is powered by WooCommerce for structured product management.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">WooCommerce capabilities include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Product listing management</li>
          <li class="leading-relaxed">Pricing configuration</li>
          <li class="leading-relaxed">Image galleries</li>
          <li class="leading-relaxed">Product description editing</li>
          <li class="leading-relaxed">Inventory tracking (if enabled)</li>
          <li class="leading-relaxed">Category management</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This allows the brand team to manage perfumes and product information easily through the WordPress dashboard.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">WhatsApp-Based Purchase Flow</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Instead of enabling full automated checkout, the purchasing process redirects customers to WhatsApp for order confirmation.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This approach allows:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Direct communication with customers</li>
          <li class="leading-relaxed">Personalized order handling</li>
          <li class="leading-relaxed">Flexible payment coordination</li>
          <li class="leading-relaxed">Reduced payment gateway fees</li>
          <li class="leading-relaxed">Better customer relationship building</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This hybrid model combines WooCommerce product management with direct WhatsApp conversion handling.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack and Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology Stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">WordPress CMS</li>
          <li class="leading-relaxed">WooCommerce plugin</li>
          <li class="leading-relaxed">HTML5 and CSS3</li>
          <li class="leading-relaxed">Responsive theme framework</li>
          <li class="leading-relaxed">WhatsApp integration for order inquiries</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The architecture supports future payment gateway integration if required.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was optimized to ensure:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speeds</li>
          <li class="leading-relaxed">Optimized product images</li>
          <li class="leading-relaxed">Clean page hierarchy</li>
          <li class="leading-relaxed">Mobile-first performance</li>
          <li class="leading-relaxed">SEO-friendly structure</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The configuration ensures smooth browsing across devices and browsers.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All product grids, banners, and WhatsApp buttons adapt seamlessly across screen sizes. Mobile optimization was prioritized due to high fragrance brand traffic from social media.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Luxury perfume brand presentation</li>
          <li class="leading-relaxed">WooCommerce product management system</li>
          <li class="leading-relaxed">WhatsApp order redirection</li>
          <li class="leading-relaxed">Editable backend CMS</li>
          <li class="leading-relaxed">Structured product catalog</li>
          <li class="leading-relaxed">SEO-friendly architecture</li>
          <li class="leading-relaxed">Fully responsive layout</li>
          <li class="leading-relaxed">Scalable checkout integration capability</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a premium, brand-focused perfume website that combines emotional storytelling with structured product presentation.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong luxury brand positioning</li>
          <li class="leading-relaxed">Organized product management</li>
          <li class="leading-relaxed">Direct and personalized sales communication</li>
          <li class="leading-relaxed">Optimized and responsive performance</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our ability to build WooCommerce-powered fragrance brand websites that balance structured eCommerce capability with flexible WhatsApp-based conversion models.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Xense Fragrance is a premium perfume brand storefront designed to blend luxury storytelling with conversion-ready product discovery.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform uses WordPress and WooCommerce for product control while keeping WhatsApp as the active purchase communication flow.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Brand & Experience Direction</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Luxury-focused messaging and visual storytelling</li>
          <li class="leading-relaxed">Premium product showcase grids and fragrance imagery</li>
          <li class="leading-relaxed">Emotion-driven positioning around identity and personal aura</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Commerce Model</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">WooCommerce product catalog and pricing management</li>
          <li class="leading-relaxed">WhatsApp-based order confirmation flow</li>
          <li class="leading-relaxed">Future-ready architecture for direct payment gateway integration</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Responsiveness</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The implementation focuses on clean hierarchy, optimized images, mobile-first behavior, and SEO-friendly structure for better discovery and smooth browsing across devices.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final website delivers a premium fragrance brand experience with structured backend control and flexible high-conversion customer engagement.</p>
      </section>
    `,
  },
  {
    name: "Trans Master Logistics",
    image: "/images/projects/transmaster.jpeg",
    priority: 62,
    year: "2024",
    service: "Web Development",
    slug: "trans-master-logistics",
    externalUrl: "https://transmaster.ae/",
    description:
      "WordPress corporate website for cross-border and specialized transport services with clear focus on oversized cargo, bonded transport, reefer operations, and Jebel Ali freezone logistics.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">TRANS MASTER LOGISTICS - Cross-Border and Specialized Transport Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://transmaster.ae/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Cross-Border Logistics and Specialized Transportation</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> WordPress Corporate Website</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Trans Master Logistics is a specialized logistics company delivering cross-border transportation and advanced cargo solutions across the Middle East.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to build a professional and structured corporate website that highlights the company's expertise in oversized cargo, bonded transportation, and temperature-controlled logistics while reinforcing its operational presence through the Jebel Ali Freezone branch.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was developed using WordPress to provide scalable content management and flexible service expansion capabilities.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Corporate Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design reflects precision, regulatory compliance, and operational strength.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong industrial-themed hero sections</li>
          <li class="leading-relaxed">Structured service segmentation</li>
          <li class="leading-relaxed">Professional corporate color palette</li>
          <li class="leading-relaxed">Clear value-driven messaging</li>
          <li class="leading-relaxed">Organized content hierarchy</li>
          <li class="leading-relaxed">Prominent inquiry and contact sections</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout emphasizes trust and capability while guiding visitors toward service exploration and quotation requests.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Expertise and Specialized Services Presented</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website clearly highlights the company's specialized logistics services, including:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Cross-border transportation for breakbulk cargo</li>
          <li class="leading-relaxed">Oversized cargo logistics management</li>
          <li class="leading-relaxed">Closed-box palletized cargo transport</li>
          <li class="leading-relaxed">Temperature-controlled reefer services</li>
          <li class="leading-relaxed">Bonded transportation services</li>
          <li class="leading-relaxed">TIR (Transports Internationaux Routiers) transport solutions</li>
          <li class="leading-relaxed">Freezone logistics operations via Jebel Ali branch</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The service presentation reinforces compliance, operational reliability, and regional logistics expertise.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">WordPress Development and CMS Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was built using WordPress to ensure long-term scalability and content flexibility.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Backend capabilities include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Editable service pages</li>
          <li class="leading-relaxed">Content updates without coding</li>
          <li class="leading-relaxed">Media and fleet imagery management</li>
          <li class="leading-relaxed">Page hierarchy control</li>
          <li class="leading-relaxed">Contact form management</li>
          <li class="leading-relaxed">SEO-friendly URL structure</li>
          <li class="leading-relaxed">Expandable service architecture</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The CMS allows the internal team to update services, certifications, and operational details independently.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was optimized to ensure:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speeds</li>
          <li class="leading-relaxed">Structured page hierarchy</li>
          <li class="leading-relaxed">Optimized images and media</li>
          <li class="leading-relaxed">Responsive performance</li>
          <li class="leading-relaxed">SEO-friendly configuration</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The configuration ensures reliable performance while presenting detailed operational content.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All service sections, operational highlights, and inquiry forms adapt seamlessly across screen sizes while maintaining professional presentation.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Mobile responsiveness ensures accessibility for logistics coordinators and enterprise clients across the region.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Specialized logistics service segmentation</li>
          <li class="leading-relaxed">Cross-border transport positioning</li>
          <li class="leading-relaxed">Freezone branch highlight</li>
          <li class="leading-relaxed">WordPress CMS integration</li>
          <li class="leading-relaxed">Editable backend content management</li>
          <li class="leading-relaxed">Contact and inquiry system</li>
          <li class="leading-relaxed">SEO-optimized architecture</li>
          <li class="leading-relaxed">Fully responsive design</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a structured, authoritative logistics website that clearly communicates Trans Master's expertise in specialized and cross-border transportation services.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong regional logistics positioning</li>
          <li class="leading-relaxed">Clear service communication</li>
          <li class="leading-relaxed">Scalable backend management</li>
          <li class="leading-relaxed">Optimized and responsive performance</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our capability to develop professional WordPress corporate websites tailored for specialized logistics and international transport companies.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Trans Master Logistics required a structured website to communicate specialized cross-border transportation capabilities across the Middle East.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The build emphasizes compliance, operational strength, and service clarity while enabling scalable WordPress content management.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Specialized Services Highlighted</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Cross-border breakbulk transportation</li>
          <li class="leading-relaxed">Oversized cargo logistics management</li>
          <li class="leading-relaxed">Closed-box palletized cargo transport</li>
          <li class="leading-relaxed">Temperature-controlled reefer logistics</li>
          <li class="leading-relaxed">Bonded and TIR transport solutions</li>
          <li class="leading-relaxed">Jebel Ali freezone branch operations</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Delivery Focus</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is optimized for responsive performance, SEO structure, clean page hierarchy, and editable backend workflows for long-term updates.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The project delivered an authoritative logistics web presence that clearly communicates Trans Master expertise and supports scalable growth.</p>
      </section>
    `,
  },
  {
    name: "Hufi World",
    image: "/images/projects/hufi.jpeg",
    priority: 64,
    year: "2024",
    service: "Web Development",
    slug: "hufi-world",
    externalUrl: "https://www.hufiworld.com/",
    description:
      "Structured corporate website for Hufi World to present dual service lines: marine operations and residential-commercial moving solutions with fast static-site performance.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">HUFI WORLD - Marine and Moving Services Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://www.hufiworld.com/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Marine Services and Relocation Solutions</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> Static Corporate Website (HTML, CSS)</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Hufi World is a multi-service company delivering trusted marine operations and professional moving solutions across the UAE and beyond.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to build a structured and modern corporate website that clearly presents the company's dual-service model - Shipping and Marine services and Residential and Commercial Moving services - while maintaining performance, clarity, and professional branding.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was developed using a static HTML architecture to ensure speed, reliability, and cost-efficient deployment.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Service Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design focuses on trust, efficiency, and operational capability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clean and structured layout</li>
          <li class="leading-relaxed">Strong hero messaging highlighting full-service capabilities</li>
          <li class="leading-relaxed">Clear service segmentation</li>
          <li class="leading-relaxed">Industry-relevant imagery</li>
          <li class="leading-relaxed">Strong call-to-action placement</li>
          <li class="leading-relaxed">Simple and professional navigation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout ensures visitors can quickly understand the company's service divisions and navigate toward relevant information.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Service Divisions</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website clearly presents two primary service categories:</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Shipping and Marine Services</strong></p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Vessel operations support</li>
          <li class="leading-relaxed">Port clearance services</li>
          <li class="leading-relaxed">Sea freight coordination</li>
          <li class="leading-relaxed">Marine logistics management</li>
          <li class="leading-relaxed">UAE and international service coverage</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The marine division focuses on reliability, operational expertise, and regulatory compliance.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Moving Services</strong></p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Residential relocation</li>
          <li class="leading-relaxed">Office relocation</li>
          <li class="leading-relaxed">Packing and transportation</li>
          <li class="leading-relaxed">Safe handling of goods</li>
          <li class="leading-relaxed">Hassle-free and efficient execution</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The moving division emphasizes care, safety, and customer-focused service delivery.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack and Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology Stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout implementation</li>
          <li class="leading-relaxed">Basic JavaScript for UI elements</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The site was built using clean and semantic HTML structure to maintain organized content presentation and long-term maintainability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Being a static site, it ensures high stability and minimal maintenance requirements.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The static architecture delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speed</li>
          <li class="leading-relaxed">Lightweight performance</li>
          <li class="leading-relaxed">Optimized image handling</li>
          <li class="leading-relaxed">Stable hosting environment</li>
          <li class="leading-relaxed">Smooth user navigation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This ensures reliable browsing experience across devices and network conditions.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All service sections, hero banners, and contact areas adapt seamlessly across screen sizes to maintain usability and visual consistency.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Mobile optimization was prioritized to support business inquiries and relocation requests from on-the-go users.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Dual-service corporate structure</li>
          <li class="leading-relaxed">Clear service segmentation</li>
          <li class="leading-relaxed">Professional branding layout</li>
          <li class="leading-relaxed">Contact and inquiry integration</li>
          <li class="leading-relaxed">Lightweight static architecture</li>
          <li class="leading-relaxed">Fast and reliable performance</li>
          <li class="leading-relaxed">Fully responsive design</li>
          <li class="leading-relaxed">Clean and structured codebase</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a professional, structured, and performance-driven corporate website that effectively communicates Hufi World's marine and moving service capabilities.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong industry positioning</li>
          <li class="leading-relaxed">Clear service communication</li>
          <li class="leading-relaxed">Fast and stable performance</li>
          <li class="leading-relaxed">Cost-efficient static deployment</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our ability to build structured multi-service corporate websites tailored for marine operations and relocation service providers.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Hufi World needed a modern corporate website that clearly separates marine operations and moving services within one consistent brand experience.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The static architecture was selected for speed, reliability, and low operational overhead.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Service Divisions</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Shipping and marine services including vessel operations and sea freight coordination</li>
          <li class="leading-relaxed">Residential and commercial moving with packing, transport, and safe handling workflows</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Implementation Notes</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website follows semantic HTML, responsive layouts, and clear service hierarchy to improve usability across desktop and mobile.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final website provides clear service communication, stronger positioning, and dependable performance for inquiry-driven operations.</p>
      </section>
    `,
  },
  {
    name: "Hufi Shipping Line LLC",
    image: "/images/projects/hufi-shipping.jpeg",
    priority: 66,
    year: "2024",
    service: "Web Development",
    slug: "hufi-shipping-line",
    externalUrl: "https://www.hufishipping.ae/",
    description:
      "Corporate maritime logistics website focused on secure shipping positioning, clear service segmentation, and quotation-first conversion journeys.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">HUFI SHIPPING LINE LLC - Shipping and Logistics Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://www.hufishipping.ae/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Shipping and Maritime Logistics</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> Static Corporate Website (HTML, CSS)</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Hufi Shipping Line LLC is a maritime shipping and logistics company delivering fast, secure, and efficient transportation solutions worldwide.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to create a modern, professional, and performance-focused website that clearly communicates the company's logistics capabilities while reinforcing trust and reliability within the shipping industry.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was built using a static HTML structure to ensure speed, stability, and cost-efficient deployment.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Brand Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design emphasizes strength, reliability, and global connectivity.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Large hero section featuring maritime shipping visuals</li>
          <li class="leading-relaxed">Strong headline messaging: "Fast and Secure Shipping and Logistics Solutions"</li>
          <li class="leading-relaxed">Professional color scheme aligned with the logistics industry</li>
          <li class="leading-relaxed">Clear service segmentation</li>
          <li class="leading-relaxed">Prominent call-to-action buttons (Explore Services, Get a Free Quote)</li>
          <li class="leading-relaxed">Clean navigation structure</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout was designed to communicate authority and efficiency while guiding users toward service exploration and quotation requests.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Services Presentation</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website highlights key logistics services such as:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Maritime shipping solutions</li>
          <li class="leading-relaxed">Cargo handling</li>
          <li class="leading-relaxed">Global freight services</li>
          <li class="leading-relaxed">Logistics coordination</li>
          <li class="leading-relaxed">Secure transport management</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Each section is structured to present reliability, operational capability, and worldwide service coverage.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack and Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology Stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout implementation</li>
          <li class="leading-relaxed">Basic JavaScript for UI interactions</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website follows clean semantic coding standards for maintainability and structured content presentation.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Being fully static, the platform ensures minimal server-side dependency and high reliability.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The static HTML architecture delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast page loading speed</li>
          <li class="leading-relaxed">Lightweight structure</li>
          <li class="leading-relaxed">Optimized image rendering</li>
          <li class="leading-relaxed">Stable hosting environment</li>
          <li class="leading-relaxed">Smooth scrolling and transitions</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This ensures consistent performance across different devices and network conditions.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The hero section, service blocks, navigation menu, and call-to-action buttons adapt seamlessly across screen sizes, maintaining clarity and usability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Mobile optimization was prioritized to support decision-makers accessing the site remotely.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Professional logistics-focused layout</li>
          <li class="leading-relaxed">Clear service segmentation</li>
          <li class="leading-relaxed">Quote request call-to-action</li>
          <li class="leading-relaxed">Structured content hierarchy</li>
          <li class="leading-relaxed">Lightweight static architecture</li>
          <li class="leading-relaxed">Fast and reliable performance</li>
          <li class="leading-relaxed">Fully responsive design</li>
          <li class="leading-relaxed">Clean and maintainable codebase</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a modern, authoritative shipping and logistics website that strengthens Hufi Shipping Line LLC's digital presence.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong industry positioning</li>
          <li class="leading-relaxed">Clear communication of services</li>
          <li class="leading-relaxed">Fast and stable performance</li>
          <li class="leading-relaxed">Cost-efficient static deployment</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our capability to build professional, performance-driven corporate websites tailored for logistics and maritime service providers.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Hufi Shipping Line LLC required a professional shipping website to establish trust and communicate global logistics capability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was implemented as a static corporate site for speed, stability, and cost-efficient deployment.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Focus Areas</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Maritime shipping and cargo handling services</li>
          <li class="leading-relaxed">Global freight and transport coordination</li>
          <li class="leading-relaxed">Clear quotation-focused calls to action</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & UX</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website emphasizes fast loading, responsive layout behavior, clean navigation, and accessible content hierarchy for desktop and mobile decision-makers.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The delivered platform strengthens industry positioning while improving service clarity and lead-ready user flow.</p>
      </section>
    `,
  },
  {
    name: "Everest Consultancy Services",
    image: "/images/projects/everest.jpeg",
    priority: 68,
    year: "2024",
    service: "Web Development",
    slug: "everest-consultancy-services",
    externalUrl: "https://everestecs.com/",
    description:
      "Corporate consultancy website for Everest ECS to communicate integrated professional services with clear service segmentation and high-performance static delivery.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">EVEREST Consultancy Services - Integrated Consultancy Services Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://everestecs.com/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Business and Professional Consultancy</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> Static Corporate Website (HTML, CSS)</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Everest ECS is a multi-disciplinary consultancy firm delivering integrated solutions across Real Estate, Business Strategy, Legal Services and Management, Tax and Audit Activities, and Insurance.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to develop a professional, corporate-focused website that clearly communicates the firm's diverse service portfolio while maintaining clarity, credibility, and strong brand positioning.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was built using a static HTML structure to ensure speed, reliability, and cost-efficient deployment.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Corporate Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design approach emphasizes professionalism, trust, and strategic expertise.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clean and structured corporate layout</li>
          <li class="leading-relaxed">Clear service segmentation</li>
          <li class="leading-relaxed">Professional typography and spacing</li>
          <li class="leading-relaxed">Strong headline messaging</li>
          <li class="leading-relaxed">Informative content sections</li>
          <li class="leading-relaxed">Direct contact and inquiry call-to-actions</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout was carefully structured to communicate authority and multi-sector expertise while maintaining a modern business aesthetic.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Services Presented</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website clearly highlights the firm's integrated consultancy services, including:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Real Estate Advisory</li>
          <li class="leading-relaxed">Business Strategy Consulting</li>
          <li class="leading-relaxed">Legal Services and Corporate Management</li>
          <li class="leading-relaxed">Tax and Audit Activities</li>
          <li class="leading-relaxed">Insurance Solutions</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Each service category is presented in a structured format to ensure clarity and easy understanding for potential clients.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The positioning focuses on helping organizations:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Grow sustainably</li>
          <li class="leading-relaxed">Maintain regulatory compliance</li>
          <li class="leading-relaxed">Improve operational performance</li>
          <li class="leading-relaxed">Manage risk effectively</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack and Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology Stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout implementation</li>
          <li class="leading-relaxed">Basic JavaScript for UI enhancements</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website uses clean and semantic HTML structure to maintain organized content hierarchy and long-term maintainability.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Because the website is built using static HTML architecture, it delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speed</li>
          <li class="leading-relaxed">Lightweight structure</li>
          <li class="leading-relaxed">Minimal server dependency</li>
          <li class="leading-relaxed">Reliable performance</li>
          <li class="leading-relaxed">Stable hosting environment</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The static setup ensures consistent performance across browsers and devices.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All service sections, navigation menus, and contact forms adapt seamlessly across screen sizes to maintain readability and usability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Special attention was given to mobile layout to support business decision-makers accessing the site on the go.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Multi-service corporate presentation</li>
          <li class="leading-relaxed">Structured service segmentation</li>
          <li class="leading-relaxed">Professional business-oriented layout</li>
          <li class="leading-relaxed">Contact and inquiry integration</li>
          <li class="leading-relaxed">Lightweight static architecture</li>
          <li class="leading-relaxed">Fast and reliable performance</li>
          <li class="leading-relaxed">Fully responsive design</li>
          <li class="leading-relaxed">Clean semantic code structure</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a professional, structured, and performance-focused consultancy website that effectively communicates Everest ECS's integrated service offerings.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong corporate presence</li>
          <li class="leading-relaxed">Clear service communication</li>
          <li class="leading-relaxed">Reliable and fast performance</li>
          <li class="leading-relaxed">Cost-efficient static deployment</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our ability to develop clean, authoritative corporate websites tailored for consultancy and professional service firms.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Everest ECS is a multi-disciplinary consultancy requiring a credible and structured digital presence for diverse professional services.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The static corporate implementation focuses on authority, readability, and cost-efficient long-term maintenance.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Consultancy Services Presented</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Real estate advisory</li>
          <li class="leading-relaxed">Business strategy consulting</li>
          <li class="leading-relaxed">Legal and corporate management services</li>
          <li class="leading-relaxed">Tax and audit activities</li>
          <li class="leading-relaxed">Insurance solutions</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Delivery Characteristics</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website uses clean semantic structure, responsive layout implementation, and direct inquiry pathways to support conversion and trust.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final platform establishes strong corporate positioning while keeping performance reliable across devices and browsers.</p>
      </section>
    `,
  },
  {
    name: "Liva Business Hub",
    image: "/images/projects/liva.jpeg",
    priority: 70,
    year: "2024",
    service: "Web Development",
    slug: "liva-business-hub",
    externalUrl: "https://livabusiness.com/",
    description:
      "Conversion-focused business setup consultancy website built for Liva Business Hub to simplify complex licensing, visa, and compliance services for Dubai founders.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">LIVA BUSINESS HUB - Dubai Business Setup Consultancy Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://livabusiness.com/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Business Setup and Corporate Services</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> Static Corporate Website (HTML, CSS)</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Liva Business Hub is a Dubai-based business setup consultancy providing end-to-end company formation and corporate support services.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to develop a professional, conversion-focused website that clearly communicates the company's expertise in trade licensing, visa processing, PRO services, and legal documentation support.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was built using a static HTML architecture to ensure high performance, fast loading speed, and reliable deployment.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Brand Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design emphasizes trust, efficiency, and regulatory expertise - essential qualities in the business setup industry.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong headline messaging highlighting Dubai business setup expertise</li>
          <li class="leading-relaxed">Structured service sections for clarity</li>
          <li class="leading-relaxed">Professional corporate color scheme</li>
          <li class="leading-relaxed">Clear call-to-action buttons</li>
          <li class="leading-relaxed">Informative content blocks</li>
          <li class="leading-relaxed">Smooth user navigation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout guides visitors from understanding the company's value proposition to initiating contact or consultation.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Service Presentation</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website clearly outlines the company's primary service offerings:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">End-to-end business formation solutions in Dubai</li>
          <li class="leading-relaxed">Fast and compliant trade licensing</li>
          <li class="leading-relaxed">Visa and immigration assistance</li>
          <li class="leading-relaxed">PRO services and government coordination</li>
          <li class="leading-relaxed">Document attestation and legal support</li>
          <li class="leading-relaxed">Transparent pricing structure</li>
          <li class="leading-relaxed">Dedicated expert guidance throughout the process</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Each section is structured to build credibility and simplify complex regulatory processes for clients.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack and Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology Stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout implementation</li>
          <li class="leading-relaxed">Basic JavaScript for UI enhancements</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website follows clean semantic coding practices to ensure structured content hierarchy and maintainability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">As a static website, it provides stability and minimal server-side complexity.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The static HTML architecture delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading performance</li>
          <li class="leading-relaxed">Lightweight structure</li>
          <li class="leading-relaxed">Optimized asset delivery</li>
          <li class="leading-relaxed">Smooth navigation</li>
          <li class="leading-relaxed">Reliable cross-browser compatibility</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The configuration ensures consistent performance across devices and internet speeds.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All sections, including service highlights and inquiry forms, adapt seamlessly across screen sizes to maintain readability and usability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Mobile responsiveness was prioritized to support entrepreneurs and investors browsing on mobile devices.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Structured business setup service presentation</li>
          <li class="leading-relaxed">Strong value-driven messaging</li>
          <li class="leading-relaxed">Contact and inquiry integration</li>
          <li class="leading-relaxed">Lightweight static architecture</li>
          <li class="leading-relaxed">Fast and reliable performance</li>
          <li class="leading-relaxed">Fully responsive layout</li>
          <li class="leading-relaxed">Clean and professional UI</li>
          <li class="leading-relaxed">SEO-friendly page structure</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a professional, trust-focused corporate website that positions Liva Business Hub as a reliable partner for company formation and compliance services in Dubai.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clear service communication</li>
          <li class="leading-relaxed">Strong corporate credibility</li>
          <li class="leading-relaxed">Optimized performance</li>
          <li class="leading-relaxed">Cost-efficient static deployment</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our capability to develop structured, conversion-oriented corporate websites tailored for business consultancy and company formation services.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Liva Business Hub required a trust-driven digital platform for company formation and compliance services in Dubai.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was developed with static architecture for strong performance and consistent reliability.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Service Communication</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Company formation and trade licensing support</li>
          <li class="leading-relaxed">Visa and immigration assistance</li>
          <li class="leading-relaxed">PRO services and government coordination</li>
          <li class="leading-relaxed">Document attestation and legal support workflows</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Conversion & UX</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The interface structure moves visitors from value proposition to consultation and inquiry with clear call-to-action placement and readable service segmentation.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The project delivered a professional consultancy website with clear messaging, strong credibility, and reliable cross-device performance.</p>
      </section>
    `,
  },
  {
    name: "Modovate",
    image: "/images/projects/modovate.jpeg",
    priority: 72,
    year: "2024",
    service: "Web Development",
    slug: "modovate",
    externalUrl: "https://modovate.ae/",
    description:
      "Premium automotive detailing and customization website built on WordPress to showcase services, regional coverage, and inquiry-driven customer acquisition.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">MODOVATE - Car Care and Customization Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://modovate.ae/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Automotive Detailing and Customization</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> WordPress Service-Based Website</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Modovate is a premium car care and customization company providing professional detailing, paint protection, and interior upgrades across Ajman, Dubai, Sharjah, Umm Al Quwain, and Ras Al Khaimah.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to build a visually impactful and conversion-focused automotive service website that clearly presents the company's premium offerings while strengthening local brand authority across multiple Emirates.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was developed using WordPress to allow easy content updates, service management, and long-term scalability.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Brand Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design reflects premium automotive craftsmanship and high-performance service quality.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Bold automotive-focused hero sections</li>
          <li class="leading-relaxed">High-quality vehicle imagery</li>
          <li class="leading-relaxed">Structured service presentation blocks</li>
          <li class="leading-relaxed">Strong call-to-action buttons</li>
          <li class="leading-relaxed">Clear service coverage locations</li>
          <li class="leading-relaxed">Clean and modern UI layout</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout emphasizes professionalism, expertise, and trust while guiding users toward booking or consultation.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Services Presented</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website clearly highlights Modovate's primary service divisions:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Premium car detailing</li>
          <li class="leading-relaxed">Paint protection solutions</li>
          <li class="leading-relaxed">Interior upgrades</li>
          <li class="leading-relaxed">Vehicle customization</li>
          <li class="leading-relaxed">Professional finishing services</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Each service section is structured to communicate quality workmanship and expert-level execution.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website also reinforces regional service coverage across major UAE cities to improve local customer trust.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">WordPress Development and CMS Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was built using WordPress to provide flexible content management and future expansion capabilities.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Backend features include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Editable service pages</li>
          <li class="leading-relaxed">Media and gallery management</li>
          <li class="leading-relaxed">Content updates without coding</li>
          <li class="leading-relaxed">Contact form management</li>
          <li class="leading-relaxed">SEO-friendly page structure</li>
          <li class="leading-relaxed">Expandable service sections</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The CMS allows the internal team to update services, add new offerings, and manage content independently.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speed</li>
          <li class="leading-relaxed">Optimized automotive imagery</li>
          <li class="leading-relaxed">Clean page hierarchy</li>
          <li class="leading-relaxed">Responsive performance</li>
          <li class="leading-relaxed">SEO-friendly configuration</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The configuration ensures stable performance across devices and browsers.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All service sections, image galleries, and call-to-action buttons adapt seamlessly across screen sizes to maintain visual consistency and usability.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Mobile responsiveness was prioritized due to high customer traffic from local search and social media platforms.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Premium automotive service presentation</li>
          <li class="leading-relaxed">WordPress CMS integration</li>
          <li class="leading-relaxed">Editable backend management</li>
          <li class="leading-relaxed">Multi-location service coverage</li>
          <li class="leading-relaxed">Contact and inquiry system</li>
          <li class="leading-relaxed">Image gallery showcase</li>
          <li class="leading-relaxed">SEO-optimized structure</li>
          <li class="leading-relaxed">Fully responsive design</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a visually engaging, premium, and scalable automotive service website that strengthens Modovate's digital presence across the UAE.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong premium brand positioning</li>
          <li class="leading-relaxed">Clear service communication</li>
          <li class="leading-relaxed">Easy backend management</li>
          <li class="leading-relaxed">Optimized performance across devices</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our capability to build high-impact WordPress service websites tailored for automotive detailing and customization businesses.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Modovate needed a high-impact automotive website to present premium detailing and customization services across multiple Emirates.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The WordPress implementation enables scalable service management, editable content, and media-heavy presentation without developer dependency.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Offerings Presented</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Premium car detailing</li>
          <li class="leading-relaxed">Paint protection services</li>
          <li class="leading-relaxed">Interior upgrades and vehicle customization</li>
          <li class="leading-relaxed">Regional service coverage across UAE locations</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Optimization Focus</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The solution prioritizes fast loads, responsive galleries, strong service hierarchy, and SEO-friendly structure for local discovery and lead generation.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final website strengthens premium brand positioning while supporting efficient backend management and scalable growth.</p>
      </section>
    `,
  },
  {
    name: "Collins Equipment Trading",
    image: "/images/projects/collins.jpeg",
    priority: 74,
    year: "2024",
    service: "Web Development",
    slug: "collins-equipment-trading",
    externalUrl: "https://collinscouae.com/",
    description:
      "Industrial equipment supply website built with WordPress for category-based product presentation, scalable catalog updates, and inquiry-focused customer flow.",
    htmlDescription: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">COLLINS EQUIPMENT TRADING - Industrial Equipment Supply Website</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Website URL:</strong> https://collinscouae.com/</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Industry:</strong> Industrial Equipment and Machinery Supply</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed"><strong>Project Type:</strong> WordPress Corporate Product Website</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Project Overview</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Collins Equipment Trading is an industrial equipment supplier providing reliable and high-quality branded machinery tailored to industry-specific needs across the UAE.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The objective of this project was to develop a structured, product-focused corporate website that clearly presents equipment categories while positioning the company as a trusted industrial supplier.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was built using WordPress to allow easy product management, content updates, and scalable expansion of equipment categories.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design and Structure</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The design emphasizes clarity, industrial strength, and organized product presentation.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key design elements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Category-based equipment display layout</li>
          <li class="leading-relaxed">Clean grid-based product sections</li>
          <li class="leading-relaxed">High-quality equipment imagery</li>
          <li class="leading-relaxed">Clear navigation between equipment divisions</li>
          <li class="leading-relaxed">Professional industrial color scheme</li>
          <li class="leading-relaxed">Direct inquiry and contact options</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The homepage is structured to highlight major equipment categories, allowing visitors to quickly navigate to relevant product types.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Product Categories Presented</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform showcases major industrial equipment divisions, including:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Generators</li>
          <li class="leading-relaxed">Forklifts</li>
          <li class="leading-relaxed">Air Compressors</li>
          <li class="leading-relaxed">Heavy Equipment</li>
          <li class="leading-relaxed">Spare Parts</li>
          <li class="leading-relaxed">Tower Lights</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Each category section is structured for clear browsing and inquiry-based interaction.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The site is designed as a product showcase platform rather than a direct online purchase system.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">WordPress Development and CMS Capabilities</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was developed using WordPress to provide flexibility and easy backend management.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">CMS capabilities include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Add and edit equipment categories</li>
          <li class="leading-relaxed">Upload product images</li>
          <li class="leading-relaxed">Update specifications and descriptions</li>
          <li class="leading-relaxed">Manage content pages</li>
          <li class="leading-relaxed">Contact form management</li>
          <li class="leading-relaxed">SEO-friendly page structure</li>
          <li class="leading-relaxed">Scalable category expansion</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The backend allows the business team to update inventory listings and content without developer assistance.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance and Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speeds</li>
          <li class="leading-relaxed">Clean page structure</li>
          <li class="leading-relaxed">Optimized image delivery</li>
          <li class="leading-relaxed">Responsive layout</li>
          <li class="leading-relaxed">SEO-friendly configuration</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The configuration ensures stable performance across devices and browsers.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">All product categories and equipment sections adapt seamlessly across screen sizes, maintaining clarity and accessibility.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Special attention was given to mobile navigation due to high industry traffic from on-site and field users.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Structured equipment category layout</li>
          <li class="leading-relaxed">Product showcase pages</li>
          <li class="leading-relaxed">WordPress CMS integration</li>
          <li class="leading-relaxed">Editable backend management</li>
          <li class="leading-relaxed">Contact and inquiry system</li>
          <li class="leading-relaxed">SEO-optimized structure</li>
          <li class="leading-relaxed">Responsive grid-based layout</li>
          <li class="leading-relaxed">Scalable architecture for future growth</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The final result is a professional, structured, and easy-to-manage industrial equipment website that strengthens Collins Equipment Trading's digital presence.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clear product segmentation</li>
          <li class="leading-relaxed">Professional industrial branding</li>
          <li class="leading-relaxed">Easy backend content control</li>
          <li class="leading-relaxed">Responsive and optimized performance</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This project demonstrates our ability to build scalable WordPress product showcase websites tailored for industrial and machinery supply businesses.</p>
      </section>
    `,
    details: `
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Collins Equipment Trading required a structured industrial website to present machinery categories clearly and support ongoing catalog growth.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The WordPress CMS setup enables the team to manage products, imagery, and service pages independently.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Equipment Categories Showcased</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Generators</li>
          <li class="leading-relaxed">Forklifts</li>
          <li class="leading-relaxed">Air compressors</li>
          <li class="leading-relaxed">Heavy equipment and tower lights</li>
          <li class="leading-relaxed">Spare parts</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Implementation Focus</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website uses grid-based category presentation, responsive behavior, SEO-friendly structure, and direct inquiry pathways instead of direct checkout.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The delivered platform improves industrial brand credibility, keeps backend updates simple, and supports scalable product communication.</p>
      </section>
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
          <li class="leading-relaxed">Logo design and usage guidelines</li>
          <li class="leading-relaxed">Brand color palette and typography</li>
          <li class="leading-relaxed">Marketing collateral and packaging design</li>
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
          <li class="leading-relaxed">Site speed optimization</li>
          <li class="leading-relaxed">Mobile responsiveness improvements</li>
          <li class="leading-relaxed">Content strategy refinement</li>
          <li class="leading-relaxed">Backlink profile cleanup</li>
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Live Adventure Tours is a visually immersive travel and tourism website
          built to showcase premium adventure experiences including desert safaris,
          quad biking, dune buggy rides, overnight desert stays, and curated UAE
          travel packages.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The objective of this project was to create a high-impact,
          conversion-focused travel platform that inspires visitors while guiding
          them toward inquiries and bookings through a structured and intuitive
          layout.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was developed to combine engaging visuals, strong
          performance, and a scalable technical architecture that allows future
          feature expansion such as automated bookings and integrated payment
          systems.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & User Experience</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design approach focuses on delivering an experience-driven interface
          aligned with the adventure tourism industry.
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Large immersive hero sections with strong visual storytelling</li>
          <li class="leading-relaxed">Clearly structured tour categories</li>
          <li class="leading-relaxed">Organized tour detail pages with highlights and descriptions</li>
          <li class="leading-relaxed">Strong call-to-action placement for booking inquiries</li>
          <li class="leading-relaxed">Clean typography and visual hierarchy</li>
          <li class="leading-relaxed">Easy navigation structure for smooth exploration</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The user journey was carefully crafted to move visitors from discovery
          to inquiry without unnecessary complexity.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Performance was a core priority during development.</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast page loading speeds</li>
          <li class="leading-relaxed">Optimized media and image delivery</li>
          <li class="leading-relaxed">Clean frontend structure</li>
          <li class="leading-relaxed">Smooth navigation between pages</li>
          <li class="leading-relaxed">Lightweight and efficient rendering</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The modern development architecture ensures reliable performance across
          devices and different network conditions.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development Architecture</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The platform was built using modern full-stack technologies with Next.js
          at its core.
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Frontend: Next.js (React framework)</li>
          <li class="leading-relaxed">Backend: Next.js / Node.js architecture</li>
          <li class="leading-relaxed">Rendering strategy: Server-Side Rendering (SSR) for improved SEO</li>
          <li class="leading-relaxed">Styling: Component-based responsive CSS architecture</li>
          <li class="leading-relaxed">Hosting: Cloud-based deployment with optimized asset delivery</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Using Next.js for both frontend and backend enabled:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">SEO-friendly architecture</li>
          <li class="leading-relaxed">Fast server-rendered pages</li>
          <li class="leading-relaxed">Structured routing system</li>
          <li class="leading-relaxed">Scalable and modular development</li>
          <li class="leading-relaxed">Clean and maintainable codebase</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The project is built with scalability in mind, allowing seamless
          addition of dynamic booking and payment features in future phases.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop screens</li>
          <li class="leading-relaxed">Tablets</li>
          <li class="leading-relaxed">Mobile devices</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          All sections, including navigation menus, tour listings, service pages,
          and contact forms, adapt fluidly to different screen sizes. Special
          attention was given to mobile layout structure to ensure easy browsing
          and fast inquiry access.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Booking System & Future Payment Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Currently, the booking flow is designed to redirect users directly to
          WhatsApp for personalized confirmation and manual processing.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This approach allows the business to:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Confirm real-time availability manually</li>
          <li class="leading-relaxed">Handle custom customer requests</li>
          <li class="leading-relaxed">Adjust pricing based on group size</li>
          <li class="leading-relaxed">Provide flexible and personalized communication</li>
          <li class="leading-relaxed">Build stronger customer relationships</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Although payment gateway integration is not yet implemented, the website
          architecture has been developed to support future automation.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Planned future enhancements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Integrated payment gateway (Stripe, Razorpay, PayTabs, or similar)</li>
          <li class="leading-relaxed">Dynamic date and time slot selection</li>
          <li class="leading-relaxed">Member-based pricing calculation</li>
          <li class="leading-relaxed">Automated booking confirmation system</li>
          <li class="leading-relaxed">Real-time availability management</li>
          <li class="leading-relaxed">Complete in-website checkout flow</li>
          <li class="leading-relaxed">Admin booking management dashboard</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Because the platform is built using Next.js with scalable backend
          architecture, integrating these features can be implemented without
          rebuilding the website structure.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Structured tour categorization system</li>
          <li class="leading-relaxed">Detailed service and experience pages</li>
          <li class="leading-relaxed">Inquiry and WhatsApp redirection booking flow</li>
          <li class="leading-relaxed">SEO-optimized page structure</li>
          <li class="leading-relaxed">Performance-focused frontend rendering</li>
          <li class="leading-relaxed">Clean and intuitive navigation</li>
          <li class="leading-relaxed">Fully responsive layout</li>
          <li class="leading-relaxed">Scalable full-stack architecture</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a visually compelling and technically optimized
          travel website that effectively showcases adventure experiences while
          maintaining speed, clarity, and strong user flow.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The platform supports the current business model through manual WhatsApp
          booking while being technically prepared for full automation and payment
          integration in future stages.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Aircrew Tours & Travels is an internationally recognized,
          IATA-certified travel agency with operations in the UAE and India.
          The objective of this project was to develop a professional and
          trustworthy digital presence that reflects the brand's global
          credibility and service excellence.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was built to clearly present the agency's core services,
          including flight bookings, visa assistance, hotel reservations,
          customized holiday packages, and airport transfers, while enabling
          customers to submit booking inquiries through a simple and reliable
          contact form.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The platform emphasizes clarity, performance, and accessibility while
          maintaining cost efficiency through a static development approach.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & Brand Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design approach reflects professionalism, trust, and global travel
          expertise.
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clean and structured layout</li>
          <li class="leading-relaxed">Professional travel-focused visual identity</li>
          <li class="leading-relaxed">Clear service presentation sections</li>
          <li class="leading-relaxed">Strong call-to-action placements</li>
          <li class="leading-relaxed">Informative content blocks</li>
          <li class="leading-relaxed">Simple and intuitive navigation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The layout was carefully structured to communicate credibility while
          guiding users smoothly toward inquiry submission.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website positions Aircrew Tours & Travels as a reliable,
          internationally recognized travel partner offering seamless and
          hassle-free travel experiences.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is built using pure HTML and CSS, ensuring:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Extremely fast loading speed</li>
          <li class="leading-relaxed">Lightweight page structure</li>
          <li class="leading-relaxed">High reliability</li>
          <li class="leading-relaxed">Minimal server complexity</li>
          <li class="leading-relaxed">Smooth navigation experience</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This approach guarantees consistent performance across devices and
          varying network conditions.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout structure</li>
          <li class="leading-relaxed">Basic JavaScript for UI interactions</li>
          <li class="leading-relaxed">Email-based inquiry form system</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website uses clean and semantic HTML coding practices to maintain
          structured content and long-term maintainability.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Inquiry & Booking System</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The platform includes a simple booking and inquiry form that sends
          customer details directly to the company's email.
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Collection of customer name, contact details, and service requirements</li>
          <li class="leading-relaxed">Direct email notification upon submission</li>
          <li class="leading-relaxed">Lightweight processing without complex backend infrastructure</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This system is ideal for travel agencies that require personalized
          consultation before confirming bookings.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          All sections, including service descriptions and inquiry forms, adapt
          smoothly to different screen sizes to ensure readability and usability
          across devices.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Service Presentation</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website highlights the agency's key offerings:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">International and domestic flight bookings</li>
          <li class="leading-relaxed">Visa assistance services</li>
          <li class="leading-relaxed">Curated hotel stays</li>
          <li class="leading-relaxed">Customized holiday packages</li>
          <li class="leading-relaxed">Corporate travel solutions</li>
          <li class="leading-relaxed">Airport transfers</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Each section is clearly structured to help visitors understand available
          services quickly.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a professional, fast, and cost-effective travel
          agency website that successfully communicates credibility, global
          presence, and service reliability.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clear brand positioning</li>
          <li class="leading-relaxed">Smooth user navigation</li>
          <li class="leading-relaxed">Reliable inquiry handling</li>
          <li class="leading-relaxed">High performance with minimal technical overhead</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Al Katheeb Interiors is a professional interior design and fit-out
          company website developed to establish a strong digital presence and
          showcase the company's expertise in residential, commercial, and
          customized interior solutions.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The objective of this project was to create a clean, elegant, and
          corporate-focused website that communicates professionalism, portfolio
          strength, and service capabilities while maintaining fast performance
          and simple maintainability.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was built using a static HTML structure to ensure
          reliability, speed, and cost efficiency.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & Brand Presentation</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design reflects sophistication, precision, and modern interior
          aesthetics.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Design focus areas include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clean and spacious layout</li>
          <li class="leading-relaxed">Professional typography and color palette</li>
          <li class="leading-relaxed">Structured service presentation sections</li>
          <li class="leading-relaxed">Portfolio and project showcase areas</li>
          <li class="leading-relaxed">Strong call-to-action placement</li>
          <li class="leading-relaxed">Clear contact and inquiry sections</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The layout emphasizes visual balance and clarity, allowing visitors to
          understand services and explore project work effortlessly.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The overall design supports the brand's positioning as a reliable and
          detail-oriented interior solutions provider.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website was developed using pure HTML and CSS, ensuring:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading speeds</li>
          <li class="leading-relaxed">Lightweight structure</li>
          <li class="leading-relaxed">Minimal server-side dependency</li>
          <li class="leading-relaxed">Smooth navigation</li>
          <li class="leading-relaxed">Stable performance across devices</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This static architecture provides high reliability with low maintenance
          requirements.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout implementation</li>
          <li class="leading-relaxed">Basic JavaScript (if used for UI interactions)</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The codebase follows clean and semantic HTML practices to maintain
          structure, readability, and long-term maintainability.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Service & Portfolio Structure</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website clearly presents:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Residential interior design services</li>
          <li class="leading-relaxed">Commercial fit-out solutions</li>
          <li class="leading-relaxed">Customized interior projects</li>
          <li class="leading-relaxed">Company profile and expertise</li>
          <li class="leading-relaxed">Contact and inquiry details</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Project and portfolio sections are structured to visually highlight the
          company's completed works and design quality.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          All sections, including image showcases, service descriptions, and
          contact forms, adapt seamlessly to different screen sizes.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Special attention was given to layout consistency and readability on
          mobile devices.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Corporate interior design presentation</li>
          <li class="leading-relaxed">Structured service sections</li>
          <li class="leading-relaxed">Portfolio and project showcase layout</li>
          <li class="leading-relaxed">Contact and inquiry section</li>
          <li class="leading-relaxed">Lightweight static architecture</li>
          <li class="leading-relaxed">Fast and stable performance</li>
          <li class="leading-relaxed">Fully responsive design</li>
          <li class="leading-relaxed">Clean and professional UI</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a professional and visually balanced corporate
          website that strengthens the company's digital presence.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clear communication of services</li>
          <li class="leading-relaxed">Strong brand positioning</li>
          <li class="leading-relaxed">Fast performance</li>
          <li class="leading-relaxed">Easy accessibility across devices</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Al Qadisiah Roads Maintenance Contracting is a Sharjah-based
          infrastructure contractor established in 2006. The company specializes
          in comprehensive civil infrastructure and utilities projects across the
          UAE, delivering works that meet authority standards, safety
          regulations, and long-term performance requirements.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The objective of this project was to develop a strong, authoritative
          corporate website that clearly communicates the company's multi-division
          infrastructure capabilities while maintaining professional credibility
          and structured presentation.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was built using WordPress to ensure scalability, structured
          content management, and easy backend control.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & Corporate Positioning</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design reflects technical strength, reliability, and regulatory
          compliance, essential qualities in the infrastructure and contracting
          sector.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Design focus areas include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clean and structured corporate layout</li>
          <li class="leading-relaxed">Professional industrial color palette</li>
          <li class="leading-relaxed">Clearly segmented service divisions</li>
          <li class="leading-relaxed">Strong typography for authority presence</li>
          <li class="leading-relaxed">Image-supported service descriptions</li>
          <li class="leading-relaxed">Clear contact and inquiry sections</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The layout emphasizes clarity, trust, and engineering precision to
          position the company as a capable infrastructure partner.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">WordPress Development & CMS Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was developed using WordPress to provide flexible content
          management and long-term maintainability.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Backend capabilities include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Editable service pages</li>
          <li class="leading-relaxed">Content management for each infrastructure division</li>
          <li class="leading-relaxed">Media and project image uploads</li>
          <li class="leading-relaxed">Contact form management</li>
          <li class="leading-relaxed">Page editing without coding</li>
          <li class="leading-relaxed">SEO-friendly URL structure</li>
          <li class="leading-relaxed">Expandable page architecture</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This allows the company's internal team to update service descriptions,
          add projects, and manage website content independently.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Core Service Divisions Presented</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website clearly highlights the company's comprehensive
          infrastructure capabilities, including:
        </p>
        <h4>Road Construction</h4>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Complete road construction works including earthworks, sub-base, asphalt
          paving, kerbs, and associated infrastructure executed to approved
          authority standards.
        </p>
        <h4>Drainage Works</h4>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Surface and underground drainage systems designed for effective
          stormwater management and long-term asset protection.
        </p>
        <h4>Street Light Construction</h4>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Complete street lighting infrastructure including foundations, ducting,
          cabling, poles, and luminaire installations.
        </p>
        <h4>Electricity Works</h4>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Electrical infrastructure including ducting, cabling, feeder pillars,
          panels, and compliant installations.
        </p>
        <h4>Telecommunications Works</h4>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Telecom ducting, chambers, cable laying, and associated infrastructure
          in accordance with authority standards.
        </p>
        <h4>Irrigation Works</h4>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Irrigation pipelines, valves, chambers, pump connections, and control
          systems ensuring efficient water distribution.
        </p>
        <h4>Potable Water Works</h4>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Pipeline installation, fittings, chambers, testing, and commissioning
          for hygienic and compliant water supply systems.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This structured service breakdown strengthens the company's positioning
          as a full-scale civil infrastructure contractor.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The WordPress configuration was optimized to ensure:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast page loading</li>
          <li class="leading-relaxed">Clean page hierarchy</li>
          <li class="leading-relaxed">Optimized images</li>
          <li class="leading-relaxed">Responsive layout</li>
          <li class="leading-relaxed">SEO-friendly structure</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The site delivers consistent performance across browsers and devices.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          All service cards, content blocks, and contact forms adapt seamlessly
          across screen sizes while maintaining clarity and professional
          presentation.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Corporate infrastructure presentation</li>
          <li class="leading-relaxed">Multi-division service structure</li>
          <li class="leading-relaxed">WordPress CMS integration</li>
          <li class="leading-relaxed">Editable content management system</li>
          <li class="leading-relaxed">Service segmentation layout</li>
          <li class="leading-relaxed">Contact and inquiry form</li>
          <li class="leading-relaxed">SEO-optimized architecture</li>
          <li class="leading-relaxed">Fully responsive design</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a strong, authoritative corporate website that
          clearly communicates the company's multi-division infrastructure
          capabilities.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Professional digital presence</li>
          <li class="leading-relaxed">Structured service communication</li>
          <li class="leading-relaxed">Easy backend management</li>
          <li class="leading-relaxed">Optimized and responsive performance</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          TOMRICH is a direct-to-consumer watch brand website developed for a
          growing business that designs and sells its own manufactured watches.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The objective of this project was to create a premium-looking,
          product-focused online store that reflects the craftsmanship and
          identity of the brand while keeping the system lightweight and
          cost-efficient.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Currently, the purchase flow redirects customers to WhatsApp for order
          confirmation. However, the platform is architected to support full
          payment gateway integration in future phases without structural
          redevelopment.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This strategy allows the brand to operate efficiently during its early
          growth stage while remaining technically scalable.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & Brand Presentation</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design emphasizes product elegance, minimalism, and brand identity.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Design focus areas include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clean and modern watch-focused layout</li>
          <li class="leading-relaxed">Large product imagery highlighting craftsmanship</li>
          <li class="leading-relaxed">Structured product detail pages</li>
          <li class="leading-relaxed">Clear pricing display</li>
          <li class="leading-relaxed">Strong call-to-action buttons</li>
          <li class="leading-relaxed">Simple and refined typography</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The interface is designed to communicate quality, precision, and
          premium aesthetics while keeping navigation simple and intuitive.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout ensures customers can:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Explore available watch models</li>
          <li class="leading-relaxed">View detailed product information</li>
          <li class="leading-relaxed">Understand pricing clearly</li>
          <li class="leading-relaxed">Initiate purchase quickly</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Performance was optimized to ensure smooth browsing and product viewing.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website includes:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast page load times</li>
          <li class="leading-relaxed">Optimized product images</li>
          <li class="leading-relaxed">Lightweight frontend architecture</li>
          <li class="leading-relaxed">Smooth navigation between pages</li>
          <li class="leading-relaxed">Clean component-based structure</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The result is a stable and responsive experience across all devices.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development Architecture</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was developed using modern full-stack technologies with
          scalability in mind.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Frontend: Next.js (React framework)</li>
          <li class="leading-relaxed">Backend: Node.js architecture</li>
          <li class="leading-relaxed">Rendering strategy: Server-Side Rendering (SSR) for SEO optimization</li>
          <li class="leading-relaxed">Styling: Component-based responsive CSS</li>
          <li class="leading-relaxed">Hosting: Cloud hosting (Firebase environment)</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Using Next.js provides:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">SEO-friendly structure</li>
          <li class="leading-relaxed">Fast page rendering</li>
          <li class="leading-relaxed">Modular and scalable codebase</li>
          <li class="leading-relaxed">Structured routing system</li>
          <li class="leading-relaxed">Easy integration for future automation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The system is intentionally built to allow seamless transition into a
          fully automated eCommerce platform when required.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Current Purchase Flow (WhatsApp-Based Ordering)</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          At present, when a customer proceeds to purchase, they are redirected to
          WhatsApp for order confirmation and payment coordination.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This setup allows the brand to:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Maintain direct communication with customers</li>
          <li class="leading-relaxed">Offer personalized service</li>
          <li class="leading-relaxed">Manage payments manually</li>
          <li class="leading-relaxed">Reduce operational costs during early stages</li>
          <li class="leading-relaxed">Handle logistics flexibly</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This approach is practical for small-scale or emerging brands.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Future Payment Gateway Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Although payments are currently handled manually, the website is built
          to support future automation.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Planned upgrades include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Integration of Stripe or Razorpay payment gateway</li>
          <li class="leading-relaxed">Secure online checkout flow</li>
          <li class="leading-relaxed">Automated order confirmation</li>
          <li class="leading-relaxed">Order management dashboard</li>
          <li class="leading-relaxed">Basic shipping workflow automation</li>
          <li class="leading-relaxed">Payment status tracking</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Because the architecture is built using Next.js full-stack structure,
          these enhancements can be integrated without rebuilding the website.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Product grids, detail sections, and call-to-action buttons adapt
          seamlessly to different screen sizes. The mobile experience was
          prioritized to support traffic from social media and direct brand
          marketing.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Structured watch product catalog</li>
          <li class="leading-relaxed">Individual product detail pages</li>
          <li class="leading-relaxed">Brand-focused presentation layout</li>
          <li class="leading-relaxed">WhatsApp-based purchase initiation</li>
          <li class="leading-relaxed">SEO-optimized architecture</li>
          <li class="leading-relaxed">Lightweight and fast frontend</li>
          <li class="leading-relaxed">Scalable backend-ready system</li>
          <li class="leading-relaxed">Future-ready payment integration capability</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a clean, premium, and cost-efficient direct-to-consumer
          watch brand website tailored for an emerging manufacturer.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform provides:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong product presentation</li>
          <li class="leading-relaxed">Professional brand identity</li>
          <li class="leading-relaxed">Smooth browsing experience</li>
          <li class="leading-relaxed">Direct customer communication</li>
          <li class="leading-relaxed">Technical scalability for future automation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Yashabab Restaurant is a modern Arabic restaurant website developed to
          showcase the brand's legacy, cuisine, and dining experience in a
          visually engaging format.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The objective of this project was to build a clean, attractive, and
          fast-loading restaurant website that highlights the restaurant's
          identity, menu offerings, and corporate and event booking services while
          maintaining simplicity and performance.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was built using a static HTML structure to ensure
          reliability, speed, and easy deployment.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & Visual Identity</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design reflects a bold and premium Arabic dining experience.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Design highlights include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Large hero section with high-quality food imagery</li>
          <li class="leading-relaxed">Strong typography emphasizing brand identity</li>
          <li class="leading-relaxed">Dark-themed layout with warm accent colors</li>
          <li class="leading-relaxed">Clear call-to-action buttons (View Menu, Contact, Booking)</li>
          <li class="leading-relaxed">Clean navigation structure</li>
          <li class="leading-relaxed">Corporate and event booking section integration</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The layout was crafted to create a visually immersive first impression
          while guiding users toward viewing the menu or making inquiries.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Menu Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Instead of building a complex dynamic menu system, the restaurant menu
          is accessible via an external Drive link.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This approach allows:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Easy menu updates without modifying the website structure</li>
          <li class="leading-relaxed">Cost-efficient management</li>
          <li class="leading-relaxed">Quick changes to pricing or items</li>
          <li class="leading-relaxed">Simple content control for the restaurant team</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The integration ensures users can easily access the full menu while
          maintaining a lightweight website architecture.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Since the website is built using pure HTML and CSS, it delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Extremely fast loading speed</li>
          <li class="leading-relaxed">Lightweight structure</li>
          <li class="leading-relaxed">Minimal server processing</li>
          <li class="leading-relaxed">Reliable performance across devices</li>
          <li class="leading-relaxed">Smooth scrolling and navigation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The static architecture ensures high performance and low maintenance
          requirements.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout implementation</li>
          <li class="leading-relaxed">Basic JavaScript for UI enhancements (if applicable)</li>
          <li class="leading-relaxed">External menu integration via Drive link</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website uses clean and semantic HTML structure for maintainability
          and structured content presentation.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          All sections, including hero banners, navigation menus, and
          call-to-action buttons, adapt seamlessly across different screen sizes.
          Special attention was given to mobile viewing, as most restaurant
          traffic comes from smartphones.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Modern Arabic restaurant presentation</li>
          <li class="leading-relaxed">Structured service and booking sections</li>
          <li class="leading-relaxed">External menu access via Drive link</li>
          <li class="leading-relaxed">Corporate and event booking information</li>
          <li class="leading-relaxed">Lightweight static architecture</li>
          <li class="leading-relaxed">Fast loading performance</li>
          <li class="leading-relaxed">Fully responsive layout</li>
          <li class="leading-relaxed">Clean and professional UI</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a visually appealing, fast, and cost-effective
          restaurant website that effectively communicates brand identity and menu
          offerings.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform provides:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong visual first impression</li>
          <li class="leading-relaxed">Easy access to menu</li>
          <li class="leading-relaxed">Clear service presentation</li>
          <li class="leading-relaxed">Reliable performance with minimal technical complexity</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Berton Perfumes is a boutique fragrance brand website developed for a
          growing small-scale perfume business. The objective of this project was
          to create a clean, elegant, and conversion-focused online presence that
          allows customers to explore products and initiate purchases easily.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Due to budget considerations and the brand's early growth stage, the
          purchasing flow currently redirects customers to WhatsApp for order
          confirmation. However, the platform was architected to support full
          payment gateway integration in the future without structural changes.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This approach allowed the client to launch quickly while keeping the
          system scalable.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & Brand Aesthetic</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design reflects a premium and minimal fragrance brand identity.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Design focus areas include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Elegant and clean product presentation</li>
          <li class="leading-relaxed">Minimalist layout aligned with luxury perfume branding</li>
          <li class="leading-relaxed">High-quality product imagery</li>
          <li class="leading-relaxed">Clear pricing and fragrance descriptions</li>
          <li class="leading-relaxed">Strong call-to-action placement</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The overall UI emphasizes sophistication while maintaining simplicity to
          build brand trust and improve customer engagement.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The layout is structured to ensure:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Smooth browsing experience</li>
          <li class="leading-relaxed">Easy product discovery</li>
          <li class="leading-relaxed">Clear communication of scent profiles and pricing</li>
          <li class="leading-relaxed">Direct and frictionless purchase initiation</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform was built with performance efficiency in mind.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Key optimizations include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast loading pages</li>
          <li class="leading-relaxed">Lightweight frontend architecture</li>
          <li class="leading-relaxed">Optimized images for product display</li>
          <li class="leading-relaxed">Smooth navigation between product pages</li>
          <li class="leading-relaxed">Clean code structure for maintainability</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website ensures stable performance across devices and varying
          internet speeds.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development Architecture</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website was developed using modern full-stack architecture with
          scalability in mind.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Frontend: Next.js (React framework)</li>
          <li class="leading-relaxed">Backend: Next.js / Node.js architecture</li>
          <li class="leading-relaxed">Rendering strategy: Server-Side Rendering (SSR) for SEO optimization</li>
          <li class="leading-relaxed">Styling: Component-based responsive design</li>
          <li class="leading-relaxed">Hosting: Cloud-based optimized deployment</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Using Next.js allows:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">SEO-friendly structure</li>
          <li class="leading-relaxed">Fast page rendering</li>
          <li class="leading-relaxed">Scalable routing system</li>
          <li class="leading-relaxed">Clean and modular codebase</li>
          <li class="leading-relaxed">Easy integration of future payment systems</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The system was intentionally built to support seamless expansion into a
          complete automated eCommerce model when the business scales.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Current Purchase Flow (WhatsApp-Based Ordering)</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          At present, when customers select a product and proceed to purchase,
          they are redirected to WhatsApp for manual order confirmation.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This model was chosen because:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">It reduces operational costs for a small business</li>
          <li class="leading-relaxed">It enables direct customer communication</li>
          <li class="leading-relaxed">It allows flexible payment handling</li>
          <li class="leading-relaxed">It simplifies logistics management</li>
          <li class="leading-relaxed">It supports personalized customer service</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This setup is ideal for early-stage or low-volume businesses.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Future Payment Gateway Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Although payment processing is currently handled manually, the website
          architecture is built to support full automation.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Planned future enhancements include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Integration of Stripe or Razorpay payment gateway</li>
          <li class="leading-relaxed">Secure online checkout system</li>
          <li class="leading-relaxed">Automated order confirmation</li>
          <li class="leading-relaxed">Payment status tracking</li>
          <li class="leading-relaxed">Order management dashboard</li>
          <li class="leading-relaxed">Potential shipping automation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Because the system is built using Next.js full-stack architecture,
          payment gateway integration can be implemented without rebuilding the
          platform.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          All components including product listings, detail pages, and purchase
          buttons adapt seamlessly to different screen sizes. Special attention
          was given to mobile layout since fragrance purchases often come from
          social media traffic.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Elegant product catalog structure</li>
          <li class="leading-relaxed">Individual product detail pages</li>
          <li class="leading-relaxed">WhatsApp-based order initiation</li>
          <li class="leading-relaxed">SEO-optimized page structure</li>
          <li class="leading-relaxed">Lightweight and fast frontend performance</li>
          <li class="leading-relaxed">Scalable backend architecture</li>
          <li class="leading-relaxed">Future-ready payment integration capability</li>
          <li class="leading-relaxed">Clean and brand-focused UI</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a modern, elegant, and cost-efficient perfume brand
          website tailored for a small-scale business.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform provides:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong brand presentation</li>
          <li class="leading-relaxed">Smooth browsing experience</li>
          <li class="leading-relaxed">Direct customer communication</li>
          <li class="leading-relaxed">Scalable architecture for future automation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Sheza Star is a high-performance automotive eCommerce platform built to
          sell premium car accessories including Android infotainment systems,
          multimedia units, speakers, lighting products, and interior upgrades.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The objective of this project was to develop a scalable, fast, and
          fully automated online store that allows customers to browse products,
          make secure payments, and receive automated shipping updates.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The platform combines modern UI design, strong backend architecture,
          secure payment integration, and automated logistics handling to create a
          complete digital commerce ecosystem.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & User Experience</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The website features a clean, modern, and conversion-focused eCommerce
          layout tailored specifically for the automotive industry.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Design priorities included:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Clear product visibility and structured category browsing</li>
          <li class="leading-relaxed">Clean product grid layouts</li>
          <li class="leading-relaxed">Detailed product pages with specifications and pricing</li>
          <li class="leading-relaxed">Strong call-to-action placement</li>
          <li class="leading-relaxed">Smooth shopping journey from product selection to checkout</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The UI is designed to maintain a professional automotive aesthetic while
          ensuring intuitive navigation and high conversion potential.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Performance was a key focus during development.</p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform ensures:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast page loading speed</li>
          <li class="leading-relaxed">Optimized image and asset delivery</li>
          <li class="leading-relaxed">Smooth navigation between categories and product pages</li>
          <li class="leading-relaxed">Efficient product filtering system</li>
          <li class="leading-relaxed">Lightweight frontend rendering</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Using Next.js architecture allows server-side rendering and optimized
          performance across devices and network conditions.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development Architecture</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The platform was developed using modern full-stack technologies with
          Next.js powering both frontend and backend systems.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Frontend: Next.js (React framework)</li>
          <li class="leading-relaxed">Backend: Next.js API routes / Node.js</li>
          <li class="leading-relaxed">Rendering strategy: SSR and static generation for SEO</li>
          <li class="leading-relaxed">Database: API-driven product and order management</li>
          <li class="leading-relaxed">Payment integration: Stripe payment gateway</li>
          <li class="leading-relaxed">Shipping integration: Automated shipping configuration system</li>
          <li class="leading-relaxed">Hosting: Cloud deployment with CDN optimization</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Using Next.js enabled:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">SEO-friendly architecture</li>
          <li class="leading-relaxed">Fast server-rendered pages</li>
          <li class="leading-relaxed">Secure API handling</li>
          <li class="leading-relaxed">Clean routing system</li>
          <li class="leading-relaxed">Scalable structure for future feature expansion</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Stripe Payment Gateway Integration</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The platform includes full integration of the Stripe payment gateway to
          enable secure and seamless online transactions.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Payment system capabilities include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Secure card payments</li>
          <li class="leading-relaxed">Encrypted checkout flow</li>
          <li class="leading-relaxed">Real-time payment confirmation</li>
          <li class="leading-relaxed">Automated order creation after successful payment</li>
          <li class="leading-relaxed">Secure transaction handling with Stripe APIs</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          This integration ensures safe and reliable online purchases while
          maintaining high performance during checkout.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Fully Automated Shipping System</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          A fully automated shipping system has been integrated into the platform
          to streamline order fulfillment.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Shipping features include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Automatic shipping cost calculation</li>
          <li class="leading-relaxed">Region-based shipping configuration</li>
          <li class="leading-relaxed">Order processing workflow</li>
          <li class="leading-relaxed">Integration-ready logistics structure</li>
          <li class="leading-relaxed">Automated status updates linked to order management</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The system reduces manual intervention and allows smooth order
          processing from payment confirmation to shipment handling.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          All components including product grids, checkout flow, filters, and
          navigation menus automatically adapt to screen size. The mobile shopping
          experience was optimized to ensure fast browsing and frictionless
          checkout.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Custom Admin Panel & Store Management</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          A comprehensive custom admin dashboard was developed to provide full
          operational control.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Admin capabilities include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Add, edit, and delete products</li>
          <li class="leading-relaxed">Manage product categories</li>
          <li class="leading-relaxed">Update pricing and stock levels</li>
          <li class="leading-relaxed">Upload and manage product images</li>
          <li class="leading-relaxed">Order management system</li>
          <li class="leading-relaxed">Payment tracking via Stripe</li>
          <li class="leading-relaxed">Shipping configuration management</li>
          <li class="leading-relaxed">Inventory tracking</li>
          <li class="leading-relaxed">Content management for website sections</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The admin panel is intuitive and allows the business team to manage the
          entire store independently without developer support.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Advanced product catalog structure</li>
          <li class="leading-relaxed">Category-based navigation</li>
          <li class="leading-relaxed">Dynamic product filtering</li>
          <li class="leading-relaxed">Detailed product pages</li>
          <li class="leading-relaxed">Secure Stripe payment integration</li>
          <li class="leading-relaxed">Fully automated shipping system</li>
          <li class="leading-relaxed">Order management system</li>
          <li class="leading-relaxed">SEO-optimized page architecture</li>
          <li class="leading-relaxed">Performance-focused frontend rendering</li>
          <li class="leading-relaxed">Scalable full-stack structure</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a fully functional, secure, and scalable automotive
          eCommerce platform.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Fast and smooth browsing experience</li>
          <li class="leading-relaxed">Secure online payment processing</li>
          <li class="leading-relaxed">Automated shipping workflow</li>
          <li class="leading-relaxed">Complete backend management control</li>
          <li class="leading-relaxed">Strong foundation for business growth</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
      <section class="space-y-4">
        <h2 class="text-3xl font-bold text-[var(--color-foreground)]">Project Overview</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Berton Golden is a premium fragrance brand showcase website developed as
          a dedicated one-page platform to present the brand's signature perfume
          collection.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Unlike the main Berton Perfumes eCommerce platform, this website was
          intentionally built as a static brand presentation site under a separate
          domain. The client required two independent digital identities: one
          focused on online selling and the other focused purely on brand
          positioning and product showcase.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The objective of this project was to create a visually immersive,
          elegant, and high-end landing experience that communicates
          sophistication and luxury.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Brand Strategy & Dual Website Approach</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The client requested two separate websites under two domains:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Berton Perfumes: eCommerce platform</li>
          <li class="leading-relaxed">Berton Golden: premium brand showcase</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">This separation allows:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Distinct brand positioning</li>
          <li class="leading-relaxed">Independent marketing campaigns</li>
          <li class="leading-relaxed">Different audience targeting</li>
          <li class="leading-relaxed">Focused storytelling for the Golden line</li>
          <li class="leading-relaxed">Clean and distraction-free product presentation</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The Berton Golden site functions as a digital luxury brochure.</p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Website Design & Visual Identity</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The design emphasizes luxury, elegance, and timeless fragrance
          identity.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Design highlights include:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Bold hero section with high-quality product visuals</li>
          <li class="leading-relaxed">Dark luxury-themed background</li>
          <li class="leading-relaxed">Large typography for strong brand impact</li>
          <li class="leading-relaxed">Minimal and focused layout</li>
          <li class="leading-relaxed">Smooth scrolling one-page structure</li>
          <li class="leading-relaxed">Clean call-to-action buttons</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The layout is intentionally minimal to maintain premium aesthetics and
          avoid unnecessary complexity.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website communicates:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Timeless fragrance positioning</li>
          <li class="leading-relaxed">Sophistication and sensuality</li>
          <li class="leading-relaxed">Luxury branding</li>
          <li class="leading-relaxed">Focused product storytelling</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Tech Stack & Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Technology stack:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">HTML5</li>
          <li class="leading-relaxed">CSS3</li>
          <li class="leading-relaxed">Responsive layout implementation</li>
          <li class="leading-relaxed">Basic JavaScript for smooth scrolling or UI interactions</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The site was built as a static one-page architecture to ensure fast
          loading performance, lightweight structure, easy hosting, high
          reliability, and minimal maintenance requirements.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Performance & Optimization</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">Because the website is fully static, it delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Extremely fast load times</li>
          <li class="leading-relaxed">Optimized image handling</li>
          <li class="leading-relaxed">Smooth navigation</li>
          <li class="leading-relaxed">High performance across devices</li>
          <li class="leading-relaxed">Stable hosting environment</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The clean structure ensures optimal user experience without backend
          dependency.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Responsive Development</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The website is fully responsive and optimized for:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Desktop</li>
          <li class="leading-relaxed">Tablet</li>
          <li class="leading-relaxed">Mobile</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The one-page structure adapts seamlessly across screen sizes,
          maintaining visual impact and brand consistency.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          Mobile viewing was prioritized to support social media traffic and
          digital marketing campaigns.
        </p>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Key Functional Features</h3>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Premium one-page brand layout</li>
          <li class="leading-relaxed">High-impact hero section</li>
          <li class="leading-relaxed">Product showcase presentation</li>
          <li class="leading-relaxed">Smooth scrolling navigation</li>
          <li class="leading-relaxed">Lightweight static architecture</li>
          <li class="leading-relaxed">Fast loading performance</li>
          <li class="leading-relaxed">Fully responsive design</li>
          <li class="leading-relaxed">Separate brand domain structure</li>
        </ul>
        <h3 class="text-xl font-semibold text-[var(--color-foreground)] pt-2">Result</h3>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          The final result is a visually immersive, elegant, and
          performance-focused brand showcase website that strengthens the Berton
          Golden identity.
        </p>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">The platform delivers:</p>
        <ul class="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
          <li class="leading-relaxed">Strong luxury positioning</li>
          <li class="leading-relaxed">Clean and distraction-free product presentation</li>
          <li class="leading-relaxed">Fast and reliable performance</li>
          <li class="leading-relaxed">Clear separation from the eCommerce platform</li>
        </ul>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
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
          <li class="leading-relaxed">Custom scent profile quiz</li>
          <li class="leading-relaxed">High-resolution product imagery</li>
          <li class="leading-relaxed">Secure checkout process</li>
          <li class="leading-relaxed">Integrated inventory management</li>
        </ul>
      </div>
    `,
  },
];
