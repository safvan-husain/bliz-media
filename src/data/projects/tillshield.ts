import { type Project } from "../projects";

export const tillshield: Project = {
  name: "Tillshield – AI-Driven Retail Loss Prevention System",
  image: "",
  priority: 1,
  year: "2026",
  service: "AI Video Analytics & Retail Intelligence Platform",
  slug: "tillshield-ai-retail-loss-prevention",
  externalUrl: "",
  content: {
    summary:
      "Tillshield is an AI-powered retail loss prevention and shoplifting detection platform that transforms existing CCTV and POS systems into an intelligent real-time monitoring solution. By combining behavioral video analytics with transactional data, Tillshield detects fraud, theft, sweethearting, and billing anomalies before financial loss occurs.",
    metadata: {
      websiteUrl: "",
      industry: "Retail Technology & Loss Prevention",
      projectType: "AI SaaS Platform",
    },
    sections: [
      {
        key: "overview",
        title: "Project Overview",
        paragraphs: [
          "Tillshield is built to address modern retail theft challenges that traditional CCTV systems fail to detect in real time. Retail shrinkage today often involves subtle behavioral manipulation, billing discrepancies, and employee-assisted fraud.",
          "The platform converts passive surveillance systems into proactive, AI-driven intelligence layers that monitor checkout counters, self-checkout stations, and store exits in real time.",
          "Tillshield enhances security without requiring retailers to replace existing CCTV or POS infrastructure.",
        ],
      },
      {
        key: "positioning",
        title: "Why Shoplifting Prevention Matters",
        paragraphs: [
          "Retail theft has evolved into sophisticated behavioral manipulation rather than obvious physical theft.",
          "Loss frequently occurs through sweethearting, barcode swapping, fake returns, partial payments, and employee-assisted fraud.",
          "Most traditional systems only record footage for post-incident review, resulting in delayed discovery and unrecoverable financial losses.",
          "Tillshield introduces real-time behavioral intelligence to close this operational gap.",
        ],
      },
      {
        key: "features",
        title: "Theft & Fraud Patterns Detected",
        bullets: [
          "Sweethearting (intentional scan skipping by cashier)",
          "Self-checkout scan evasion",
          "Price and barcode manipulation",
          "Product swapping before checkout",
          "Partial payment with concealed items",
          "Fake returns and refund abuse",
          "Employee-assisted POS manipulation",
          "Hidden item concealment in bags or carts",
          "Distraction-based scan skipping",
          "Repeated low-value cumulative theft",
        ],
      },
      {
        key: "technology",
        title: "Detection & Prevention Technology",
        paragraphs: [
          "Tillshield combines AI video analytics with POS transaction data correlation to detect mismatches between item movement and billing activity.",
          "The system tracks object motion at checkout and cross-validates it with scanned items in real time.",
          "Behavioral anomaly detection models identify suspicious patterns across customers and staff over time.",
        ],
        bullets: [
          "AI-assisted object tracking",
          "Scan vs movement mismatch alerts",
          "Bag and cart analytics",
          "Real-time behavioral alerts",
          "Employee activity monitoring",
          "Long-term fraud pattern recognition",
        ],
      },
      {
        key: "performance",
        title: "Operational Advantages Over Traditional CCTV",
        bullets: [
          "Real-time alerts instead of passive recording",
          "Automated anomaly detection",
          "Integrated POS transaction intelligence",
          "Reduced need for manual video review",
          "Immediate intervention capability",
        ],
      },
      {
        key: "services",
        title: "Key Benefits for Retailers",
        bullets: [
          "Instant loss prevention notifications",
          "Evidence-ready video linked to transactions",
          "Seamless POS and CCTV integration",
          "Centralized monitoring across multiple outlets",
          "Detailed operational reporting and insights",
          "Improved profit margins through shrink reduction",
        ],
      },
      {
        key: "custom",
        title: "Ideal Use Cases",
        bullets: [
          "Supermarkets and hypermarkets",
          "Electronics retail stores",
          "Fashion and apparel outlets",
          "Pharmacies and FMCG chains",
          "Multi-location retail businesses",
          "Franchise retail operations",
        ],
      },
      {
        key: "result",
        title: "Deployment & Workflow",
        paragraphs: [
          "Tillshield integrates directly with existing CCTV cameras and POS systems, eliminating the need for hardware replacement.",
          "AI engines continuously analyze video feeds in real time while correlating them with transaction data.",
          "Suspicious behaviors are instantly flagged and sent to managers or loss prevention teams.",
          "The system provides actionable alerts supported by synchronized video evidence and transaction logs.",
        ],
      },
    ],
  },
};
