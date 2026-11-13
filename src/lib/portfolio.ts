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
    description: "A concept build of a real-time financial dashboard: live transaction streams, multi-currency views and role-based access, designed to stay fast while thousands of data points update every second.",
    clientProblem: "Finance teams often work with dashboards that lag when charts update rapidly, so admins lose track of live pricing and transactions time out. This concept explores how we would build a dashboard that stays responsive under that load.",
    ourSolution: "The concept uses a clean React/Next.js dashboard using canvas-based charting and WebSocket data pipes, coupled with a Node.js API and PostgreSQL database. The backend handles high-concurrency requests with Redis cache layers, delivering updates in milliseconds.",
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
      "Real-time data streaming over WebSockets with smooth chart updates",
      "Secure role-based access control with audit logging",
      "A performance-first React architecture that avoids unnecessary re-renders"
    ],
    imageUrl: "/images/portfolio/fintech.jpg"
  },
  {
    slug: "mindflow-ai-assistant",
    title: "MindFlow AI Assistant",
    category: "AI",
    subTitle: "Intelligent customer service assistant with semantic document retrieval.",
    description: "A concept AI support assistant that answers customer questions from a company's own documentation, using retrieval-augmented generation (RAG) so answers stay grounded and cite their sources.",
    clientProblem: "Growing companies receive many support tickets that repeat questions already answered in their help docs. This concept shows how an AI assistant could find and serve those answers instantly, and hand over to a human when it can't.",
    ourSolution: "The concept is an AI chatbot widget with an admin portal. It embeds a company's knowledge base into a vector database (Pinecone) and queries OpenAI's GPT-4 models. When a user asks a question, the assistant fetches relevant passages first, delivering highly factual responses with citation links.",
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
      "RAG pipeline: document embeddings, vector search and grounded answers",
      "Source citations on every answer to reduce hallucinations",
      "Automatic hand-over to a human agent for complex questions"
    ],
    imageUrl: "/images/portfolio/ai-assistant.jpg"
  },
  {
    slug: "velvet-threads-storefront",
    title: "Velvet Threads Storefront",
    category: "E-commerce",
    subTitle: "Headless e-commerce storefront concept for a fashion brand, with fast mobile checkout.",
    description: "A concept headless e-commerce storefront for a fashion brand: premium product pages, a fast custom cart and secure Stripe checkout, built on Next.js for sub-second page loads.",
    clientProblem: "Many online stores lose customers to slow product pages and checkouts that break on mobile. This concept demonstrates a storefront designed mobile-first, with performance treated as a feature.",
    ourSolution: "The concept is a Next.js headless storefront, utilizing Static Site Generation (SSG) for static product pages that load instantly from a global CDN. The shopping cart, checkout, and inventory details are managed through Stripe APIs and a custom lightweight backend.",
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
      "Headless architecture: Next.js front end with a separate commerce back end",
      "Mobile-first checkout with Stripe payments",
      "Image and page optimisation aimed at top Lighthouse scores"
    ],
    imageUrl: "/images/portfolio/ecommerce.jpg"
  },
  {
    slug: "optima-zoho-crm",
    title: "Optima CRM & Lead Flow",
    category: "Zoho",
    subTitle: "Zoho CRM workflow concept: automated lead capture, routing and follow-up.",
    description: "A concept Zoho CRM setup that collects leads from Facebook, Google Ads and website forms in one place, then uses Deluge workflows to qualify, route and follow up automatically.",
    clientProblem: "Sales teams often copy leads from email alerts into spreadsheets by hand, so replies are slow and leads get lost. This concept shows how Zoho CRM and Creator can capture, assign and follow up on every lead automatically.",
    ourSolution: "All lead sources connect directly into Zoho CRM via webhooks and REST APIs. Using custom Deluge scripts, leads are qualified based on budget/location and automatically assigned to the correct regional sales rep. Follow-up tasks and email templates are triggered instantly.",
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
      "Lead capture from multiple ad and web sources into one CRM",
      "Deluge workflows for qualification, routing and follow-up emails",
      "Custom Zoho Creator modules for the team's own process"
    ],
    imageUrl: "/images/portfolio/zoho.jpg"
  },
  {
    slug: "fitpulse-mobile-app",
    title: "FitPulse Mobile App",
    category: "Apps",
    subTitle: "Cross-platform fitness application with offline workouts and social feeds.",
    description: "A concept cross-platform fitness app with workout tracking, exercise videos, offline playback and community challenges, built once with React Native for both iOS and Android.",
    clientProblem: "Small teams often can't afford separate native iOS and Android apps. This concept demonstrates how one React Native codebase can deliver a smooth, native-feeling app on both platforms.",
    ourSolution: "A React Native cross-platform app sharing about 90% of its code. It uses Reanimated for native-feeling UI transitions, SQLite for complete offline workout tracking, and a lightweight Node.js API to sync user progress whenever they return online.",
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
      "One React Native codebase for iOS and Android",
      "Offline video playback and workout tracking",
      "Community feeds and challenges with push notifications"
    ],
    imageUrl: "/images/portfolio/app.jpg"
  },
  {
    slug: "lumina-brand-guidelines",
    title: "Lumina Brand Identity",
    category: "UI/UX",
    subTitle: "Complete brand visual identity, typography system, and UI/UX design kit.",
    description: "A concept brand identity: logo, colour palette, type pairings and a Figma design library that keeps every future website and app on-brand.",
    clientProblem: "Young companies often have branding that looks generic, which makes it harder to win larger clients. This concept shows the complete identity system we would create to make a brand look established and consistent.",
    ourSolution: "The concept starts from brand strategy and a modern geometric logo that communicates stability and innovation. It continues with a colour palette, clean sans-serif typography, and a comprehensive Figma UI kit containing over 150 reusable design components.",
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
      "Logo suite, colour system and typography guidelines",
      "A reusable Figma component library for designers and developers",
      "Brand rules that keep websites and apps consistent"
    ],
    imageUrl: "/images/portfolio/branding.jpg"
  },
  {
    slug: "nexahr-saas-portal",
    title: "NexaHR SaaS Portal",
    category: "Software",
    subTitle: "Multi-tenant HR management SaaS with payroll, attendance, and appraisal modules.",
    description: "A concept B2B HR platform covering the employee lifecycle, from onboarding to exit: role-based dashboards, attendance, payroll automation and performance reviews.",
    clientProblem: "Founders with an HR software idea often have wireframes but no technical team. This concept shows how we would turn that idea into a multi-tenant SaaS product, ready to demo to buyers.",
    ourSolution: "A multi-tenant Next.js frontend backed by a Node.js API with per-tenant PostgreSQL schemas. Each company gets its own isolated data environment, with a role engine (Admin, Manager, Employee), a payroll engine with tax slabs, and a real-time attendance tracker.",
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
      "Multi-tenant SaaS architecture with role-based dashboards",
      "Payroll and attendance automation",
      "Performance review workflows and reporting"
    ],
    imageUrl: "/images/portfolio/saas.jpg"
  },
  {
    slug: "propertypro-real-estate",
    title: "PropertyPro Real Estate Portal",
    category: "Websites",
    subTitle: "High-performance real estate listing portal with map search and lead capture.",
    description: "A concept real-estate listing portal with map-based property search, advanced filters, a mortgage calculator and one-tap WhatsApp contact with agents, built on Next.js for speed and SEO.",
    clientProblem: "Many property sites are slow and hard to use on phones, so buyers leave before they see listings. This concept demonstrates a fast, mobile-first portal designed to turn visitors into enquiries.",
    ourSolution: "A headless platform using Next.js ISR to pre-render 10,000+ property pages. Mapbox GL integration shows interactive property pins. A custom Node.js API serves filtered search results from a PostgreSQL spatial database in under 200ms.",
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
      "Map-based search with advanced filters",
      "Fast, SEO-friendly pages using static generation",
      "Direct WhatsApp enquiries to agents from every listing"
    ],
    imageUrl: "/images/portfolio/realestate.jpg"
  },
  {
    slug: "swiftops-field-agent",
    title: "SwiftOps Field Agent App",
    category: "Zoho",
    subTitle: "Custom Zoho Creator mobile app for real-time field operations and service tracking.",
    description: "A concept Zoho Creator app for field service teams: technicians receive jobs, log photo and GPS proof of work, collect digital signatures and close tickets, even without internet.",
    clientProblem: "Field teams are often coordinated by phone calls and WhatsApp photos, which is slow, error-prone and leaves no record. This concept shows how a Zoho Creator app could give every job a complete digital trail.",
    ourSolution: "A custom Zoho Creator app with offline-first architecture. Jobs are synced when the device connects to the internet. Deluge automation handles SLA escalations, sends WhatsApp alerts to managers, and pushes a PDF service report to the customer automatically on ticket closure.",
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
      "Job assignment and tracking in Zoho Creator",
      "Photo, GPS and signature capture, with offline support",
      "A complete digital audit trail for every job"
    ],
    imageUrl: "/images/portfolio/fieldapp.jpg"
  }
];
