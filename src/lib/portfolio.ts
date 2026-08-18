export interface CaseStudy {
  slug: string;
  title: string;
  category: string; // 'Websites' | 'Apps' | 'E-commerce' | 'Software' | 'UI/UX' | 'Zoho' | 'AI'
  subTitle: string;
  description: string;
  clientProblem: string;
  ourSolution: string;
  features: string[];
  technologies: string[];
  challenges: string;
  results: string[];
  imageUrl: string;
}

export const portfolioItems: CaseStudy[] = [
  {
    slug: "apex-fintech-dashboard",
    title: "Apex Fintech Dashboard",
    category: "Software",
    subTitle: "High-performance financial analytics and multi-currency transaction dashboard.",
    description: "Apex Finance required a real-time transactional dashboard capable of displaying thousands of data updates per second while keeping load times under 1 second. We built a custom React dashboard optimized for minimal rerenders, custom charting layers, and secure role-based access controls.",
    clientProblem: "The client's previous dashboard suffered from extreme lag when rendering high-frequency financial charts, causing transactions to time out and admins to lose track of real-time multi-currency pricing streams.",
    ourSolution: "We created a clean React/Next.js dashboard using canvas-based charting and WebSocket data pipes, coupled with a Node.js API and PostgreSQL database. The backend handles high-concurrency requests with Redis cache layers, delivering updates in milliseconds.",
    features: [
      "Real-time WebSocket data streaming",
      "Interactive Canvas charting (down to 100ms ticks)",
      "Multi-currency conversion engine with instant settlement",
      "Role-Based Access Control (RBAC) and Audit Logs",
      "Biometric-ready MFA authentication"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis", "WebSockets"],
    challenges: "Synchronizing high-frequency exchange rates from external banking APIs and preventing DOM clutter on rapid chart updates.",
    results: [
      "99.99% system uptime maintained during peak trading hours",
      "Dashboard rendering speed improved by 340%",
      "Average session duration increased by 40% due to superior UX"
    ],
    imageUrl: "/images/portfolio/fintech.jpg"
  },
  {
    slug: "mindflow-ai-assistant",
    title: "MindFlow AI Assistant",
    category: "AI",
    subTitle: "Intelligent customer service assistant with semantic document retrieval.",
    description: "MindFlow is an AI-powered customer support and automation platform that retrieves company-specific knowledge to answer user queries. By leveraging RAG (Retrieval-Augmented Generation), the assistant provides context-aware solutions, dropping support tickets by 60%.",
    clientProblem: "A growing SaaS company was overwhelmed by customer support tickets. 75% of these tickets were routine questions already documented in their extensive knowledge base, but users struggled to find the answers manually.",
    ourSolution: "We built a customized AI chatbot widget and admin portal. The system embeds the customer's knowledge base into a vector database (Pinecone) and queries OpenAI's GPT-4 models. When a user asks a question, the assistant fetches relevant passages first, delivering highly factual responses with citation links.",
    features: [
      "Retrieval-Augmented Generation (RAG) architecture",
      "Vector embeddings using OpenAI text-embedding-3",
      "Pinecone vector storage and semantic querying",
      "Auto-escalation to human support agents",
      "Analytics panel tracking query topics and resolution rates"
    ],
    technologies: ["Next.js", "OpenAI API", "Pinecone", "LangChain", "Node.js", "Tailwind CSS"],
    challenges: "Preventing the LLM from hallucinating answers and formatting vector retrieval to return exact matching document links.",
    results: [
      "62% reduction in customer support tickets within 30 days",
      "24/7 instant response time with average chat duration under 2 minutes",
      "92% customer satisfaction score (CSAT) for AI-handled chats"
    ],
    imageUrl: "/images/portfolio/ai-assistant.jpg"
  },
  {
    slug: "velvet-threads-storefront",
    title: "Velvet Threads Storefront",
    category: "E-commerce",
    subTitle: "Headless e-commerce platform for a luxury fashion brand with global checkouts.",
    description: "Velvet Threads is a high-fashion retailer that needed a blazing-fast, visually premium digital storefront. We designed and engineered a headless e-commerce store connected to Stripe and Shopify API, providing sub-second page loads and custom interactive cart systems.",
    clientProblem: "The brand's previous monolithic e-commerce website was slow, taking over 5 seconds to load product pages. This led to high bounce rates (55%) and a checkout process that failed on mobile devices.",
    ourSolution: "We created a Next.js headless storefront, utilizing Static Site Generation (SSG) for static product pages that load instantly from a global CDN. The shopping cart, checkout, and inventory details are managed through Stripe APIs and a custom lightweight backend.",
    features: [
      "Headless Next.js storefront with dynamic SSR updates",
      "Instant multi-currency checkout via Stripe Elements",
      "Algolia semantic product search and instant filtering",
      "Interactive 3D product previews",
      "Automated stock level tracking and notifications"
    ],
    technologies: ["Next.js", "Stripe API", "Tailwind CSS", "GraphQL", "Algolia", "Framer Motion"],
    challenges: "Synchronizing inventory counts across physical boutiques and the online storefront in real-time, especially during limited product drops.",
    results: [
      "Cart abandonment rates dropped from 68% to 41%",
      "Lighthouse performance score boosted to 98/100",
      "Mobile sales increased by 85% in the first quarter post-launch"
    ],
    imageUrl: "/images/portfolio/ecommerce.jpg"
  },
  {
    slug: "optima-zoho-crm",
    title: "Optima CRM & Lead Flow",
    category: "Zoho",
    subTitle: "Custom Zoho CRM workflows and automated sales pipeline for a retail company.",
    description: "Optima Solutions needed to consolidate customer leads from Facebook, Google Ads, and their custom websites. We configured Zoho CRM, implemented custom Zoho Creator modules, and engineered Deluge workflows to automate lead qualification, sales routing, and email follow-ups.",
    clientProblem: "Sales representatives were manually copying leads from email alerts into spreadsheets. This process took hours, leading to a response time of over 24 hours and a high rate of lost leads.",
    ourSolution: "We integrated all lead-generation sources directly into Zoho CRM via webhooks and REST APIs. Using custom Deluge scripts, leads are qualified based on budget/location and automatically assigned to the correct regional sales rep. Follow-up tasks and email templates are triggered instantly.",
    features: [
      "Multi-channel lead ingestion via CRM webhooks",
      "Automated sales routing based on lead scoring rules",
      "Custom Zoho Creator portal for field agents",
      "Automated SMS and email templates using Deluge",
      "Bi-directional sync with QuickBooks for invoice creation"
    ],
    technologies: ["Zoho CRM", "Zoho Creator", "Deluge Scripting", "REST APIs", "Node.js"],
    challenges: "Handling lead deduplication and resolving conflicts when a single user submitted inquiries through multiple marketing channels.",
    results: [
      "Average lead response time dropped from 26 hours to 4 minutes",
      "Sales productivity increased by 45% due to automated scheduling",
      "Lost leads reduced to virtually zero"
    ],
    imageUrl: "/images/portfolio/zoho.jpg"
  },
  {
    slug: "fitpulse-mobile-app",
    title: "FitPulse Mobile App",
    category: "Apps",
    subTitle: "Cross-platform fitness application with offline workouts and social feeds.",
    description: "FitPulse is a mobile app designed for active communities, featuring workout trackers, exercise videos, offline playback, and community challenge feeds. Built with React Native, the app runs smoothly on both iOS and Android platforms.",
    clientProblem: "The client wanted to launch a fitness tracker but had a tight timeline and budget. They could not afford to build and maintain separate native iOS and Android apps, yet they refused to compromise on smooth, fluid UI animations.",
    ourSolution: "We engineered a React Native cross-platform application sharing 90% of code. We used Reanimated for native-feeling UI transitions, configured SQLite for complete offline workout tracking, and built a lightweight Node.js API to sync user progress whenever they return online.",
    features: [
      "Cross-platform iOS and Android builds",
      "Offline workout tracking and local caching",
      "Interactive social challenge feeds",
      "Native device integration (health kits & step counting)",
      "Push notifications for daily reminders"
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Expo", "Redux Toolkit"],
    challenges: "Optimizing video playback buffers and keeping local database records synchronized with the cloud server during spotty network connections.",
    results: [
      "Launched on both stores in under 12 weeks",
      "Over 50,000 active app store downloads in the first month",
      "Average rating of 4.8 stars on Apple App Store"
    ],
    imageUrl: "/images/portfolio/app.jpg"
  },
  {
    slug: "lumina-brand-guidelines",
    title: "Lumina Brand Identity",
    category: "UI/UX",
    subTitle: "Complete brand visual identity, typography system, and UI/UX design kit.",
    description: "Lumina required a full rebrand to target high-end corporate clients. We designed their primary logo, selected a premium color scheme, defined font pairs, and delivered a complete Figma visual library to guide all future digital products.",
    clientProblem: "Lumina's visual branding looked outdated and resembled a generic startup, making it difficult to land contracts with large corporate enterprises that valued security and premium reliability.",
    ourSolution: "We conducted a deep brand strategy analysis and designed a modern geometric logo that communicates stability and innovation. We followed this with a dark-mode-first color palette, clean sans-serif typography, and a comprehensive Figma UI kit containing over 150 reusable design components.",
    features: [
      "Custom geometric vector logo set",
      "Harmonious dark/light mode color systems",
      "Full digital and print guidelines booklet",
      "Complete Figma Design System (components, layouts, variables)",
      "Social media templates and letterhead designs"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    challenges: "Developing a typography system that reads beautifully on screens as small as smartwatches and as large as conference room monitors.",
    results: [
      "Client successfully signed 3 enterprise accounts within 2 months of rebranding",
      "Unified design system reduced developers' time-to-prototype by 50%",
      "Brand recognition increased by 80% among focus group testing"
    ],
    imageUrl: "/images/portfolio/branding.jpg"
  },
  {
    slug: "nexahr-saas-portal",
    title: "NexaHR SaaS Portal",
    category: "Software",
    subTitle: "Multi-tenant HR management SaaS with payroll, attendance, and appraisal modules.",
    description: "NexaHR is a B2B SaaS platform built for mid-sized enterprises to manage employee lifecycle events — from onboarding to exit. The platform features a clean role-based dashboard, payroll automation, attendance tracking, and quarterly performance appraisal workflows.",
    clientProblem: "The startup founders needed a fully functional SaaS product to pitch to enterprise HR buyers. They had wireframes but no technical team, and required a production-ready platform within 10 weeks.",
    ourSolution: "We architected a multi-tenant Next.js frontend backed by a Node.js API with per-tenant PostgreSQL schemas. Each company gets their own isolated data environment. We built a role engine (Admin, Manager, Employee), a payroll engine with tax slabs, and a real-time attendance tracker.",
    features: [
      "Multi-tenant architecture with isolated data schemas",
      "Payroll engine with tax calculation and payslip PDF generation",
      "Biometric and QR attendance tracking",
      "360° quarterly performance appraisal system",
      "In-app notification centre and email digest system"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS S3", "Tailwind CSS"],
    challenges: "Designing a payroll engine that correctly handles variable pay structures, overtime rules, and different tax regimes across Indian states.",
    results: [
      "Platform launched in 9 weeks — 1 week ahead of schedule",
      "Onboarded 4 enterprise pilot clients in the first month",
      "Payroll processing time reduced from 3 days to under 20 minutes per company"
    ],
    imageUrl: "/images/portfolio/saas.jpg"
  },
  {
    slug: "propertypro-real-estate",
    title: "PropertyPro Real Estate Portal",
    category: "Websites",
    subTitle: "High-performance real estate listing portal with map search and lead capture.",
    description: "PropertyPro is a large-scale real estate listing platform connecting buyers, sellers, and agents across three metro cities. We built a Next.js SSG/ISR powered portal with Mapbox property search, advanced filtering, mortgage calculators, and direct agent WhatsApp connect.",
    clientProblem: "The client's old WordPress listing site was painfully slow (8s load) and had no mobile optimisation. Buyers would leave before viewing listings, costing thousands in lost commissions.",
    ourSolution: "We rebuilt the platform headless using Next.js ISR to pre-render 10,000+ property pages. Mapbox GL integration shows interactive property pins. A custom Node.js API serves filtered search results from a PostgreSQL spatial database in under 200ms.",
    features: [
      "Mapbox GL interactive property search with clustering",
      "Advanced filters (price, BHK, locality, amenities)",
      "Static property pages (ISR) loading in under 0.8s",
      "Mortgage EMI calculator with live bank rate feeds",
      "Agent profile pages with direct WhatsApp and call CTAs"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Mapbox GL", "Tailwind CSS", "Vercel"],
    challenges: "Serving accurate real-time inventory while keeping page load under 1 second across 10,000+ listings using ISR revalidation strategies.",
    results: [
      "Page load time reduced from 8.2s to 0.7s (Lighthouse 96)",
      "Lead inquiries increased by 210% in 60 days post-launch",
      "Agent sign-ups grew to 380+ within the first quarter"
    ],
    imageUrl: "/images/portfolio/realestate.jpg"
  },
  {
    slug: "swiftops-field-agent",
    title: "SwiftOps Field Agent App",
    category: "Zoho",
    subTitle: "Custom Zoho Creator mobile app for real-time field operations and service tracking.",
    description: "SwiftOps is a Zoho Creator application built for a facility management company. Field technicians use it to receive jobs, log work evidence (photos + GPS), collect digital signatures, and close service tickets — all without internet connectivity.",
    clientProblem: "Field supervisors were calling technicians manually to assign jobs, then waiting for WhatsApp photos as proof of work completion. The process was error-prone, slow, and provided no audit trail for enterprise clients.",
    ourSolution: "We designed a custom Zoho Creator app with offline-first architecture. Jobs are synced when the device connects to the internet. Deluge automation handles SLA escalations, sends WhatsApp alerts to managers, and pushes a PDF service report to the client automatically on ticket closure.",
    features: [
      "Offline job queue with auto-sync on reconnection",
      "GPS-tagged photo evidence capture",
      "Digital signature collection on mobile",
      "SLA timer with automatic escalation alerts",
      "Auto-generated PDF service reports via Deluge"
    ],
    technologies: ["Zoho Creator", "Deluge Scripting", "Zoho CRM", "Zoho Analytics", "REST APIs"],
    challenges: "Building reliable offline sync logic within Zoho Creator's constraints and ensuring GPS metadata was preserved accurately when photos were uploaded after connectivity resumed.",
    results: [
      "Ticket closure time reduced from 48 hours to 6 hours on average",
      "100% digital audit trail replacing paper-based proof of work",
      "Client satisfaction NPS score rose from 42 to 78 within 3 months"
    ],
    imageUrl: "/images/portfolio/fieldapp.jpg"
  }
];
