export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string; // Lucide icon name
  problemsSolved: string[];
  features: string[];
  technologies: string[];
  process: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Modern, high-performance responsive websites using Next.js, React, and modern technologies.",
    longDesc: "We build blazing-fast, SEO-optimized, and visually stunning websites designed to capture your audience's attention and drive conversions. Utilizing cutting-edge frameworks like Next.js and React, we deliver seamless web experiences that scale with your business.",
    icon: "Globe",
    problemsSolved: [
      "Slow loading speeds and poor web performance",
      "Lack of mobile responsiveness and cross-device compatibility",
      "Low search engine rankings due to poor SEO practices",
      "Difficult content management and maintenance cycles"
    ],
    features: [
      "Custom React & Next.js architectures",
      "Tailwind CSS styling for modern and responsive UI",
      "SEO-friendly server-side rendering (SSR) and static generation",
      "Interactive features and fluid animations with Framer Motion",
      "Web accessibility (WCAG) compliance"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    process: ["Requirements Gathering", "Wireframing & UI Design", "Frontend Development", "Testing & Optimization", "Deployment & Support"],
    benefits: [
      "Higher search engine rankings and traffic",
      "Increased user engagement and lower bounce rates",
      "Easily maintainable and clean codebase",
      "Future-proof technology stack"
    ],
    faqs: [
      {
        question: "Why do you use Next.js for web development?",
        answer: "Next.js offers superior performance through server-side rendering (SSR) and static site generation, which results in faster page loads, better SEO, and a smoother user experience compared to traditional React apps."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. Every website we design and build is fully responsive, looking and performing flawlessly on mobile phones, tablets, and large desktop screens."
      },
      {
        question: "What is your typical delivery timeline for a custom web project?",
        answer: "Standard custom website builds take between 2 to 4 weeks depending on feature complexity. We operate on two-week sprint cycles with continuous demo deployments."
      },
      {
        question: "Do I get 100% ownership of the code and intellectual property?",
        answer: "Yes. Upon final delivery and sign-off, full source code ownership, intellectual property rights, and deployment access are transferred 100% to your organization."
      },
      {
        question: "How do you handle ongoing maintenance and security updates?",
        answer: "We provide dedicated post-launch support packages including automated CI/CD dependency upgrades, Lighthouse speed monitoring, SSL renewals, and 24/7 SLA emergency responses."
      }
    ]
  },
  {
    slug: "app-development",
    title: "App Development",
    shortDesc: "Scalable mobile and web applications designed for iOS, Android, and web platforms.",
    longDesc: "Turn your ideas into powerful mobile applications. We develop cross-platform and native mobile apps that deliver exceptional performance, sleek designs, and intuitive user experiences.",
    icon: "Smartphone",
    problemsSolved: [
      "Ineffective customer engagement on mobile channels",
      "Inconsistent user experiences across iOS and Android",
      "High cost of maintaining separate native codebases",
      "Poor offline capabilities and app store rejections"
    ],
    features: [
      "Cross-platform development (React Native, Flutter)",
      "Native iOS & Android app development",
      "Offline storage and background sync features",
      "Push notification integration",
      "App store submission and optimization support"
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "GraphQL", "AWS"],
    process: ["Product Discovery", "UX/UI Prototyping", "Core App Development", "Beta Testing", "Store Launch & Monitoring"],
    benefits: [
      "Reach users on both iOS and Android with a single codebase",
      "Exceptional native-like performance",
      "Secure backend integration",
      "Scalable app architecture for future upgrades"
    ],
    faqs: [
      {
        question: "Do you build native or hybrid apps?",
        answer: "We primarily build cross-platform apps using React Native and Flutter, which allows us to write one codebase for both iOS and Android. This saves time and budget while maintaining close-to-native performance."
      },
      {
        question: "How do you handle App Store and Play Store approval?",
        answer: "We guide you through the entire deployment process, ensuring the app complies with all guidelines, setting up app store metadata, and submitting the app for review."
      },
      {
        question: "What is the estimated timeline to launch an app?",
        answer: "App development projects typically take 4 to 8 weeks from initial wireframing to store submission, depending on backend integrations and custom feature sets."
      },
      {
        question: "Do you handle backend API development and cloud hosting setup?",
        answer: "Yes, we engineer full-stack mobile applications complete with scalable Node.js microservices, GraphQL/REST APIs, and AWS or Vercel cloud deployment."
      }
    ]
  },
  {
    slug: "software-development",
    title: "Custom Software",
    shortDesc: "Business-specific custom software solutions to streamline complex internal workflows.",
    longDesc: "Generic software doesn't always fit unique business workflows. We engineer tailor-made software solutions designed specifically to address your business challenges, automate tasks, and boost organizational productivity.",
    icon: "Cpu",
    problemsSolved: [
      "Inefficient, manual spreadsheets and legacy software packages",
      "Lack of system integration causing fragmented data silos",
      "Inability to scale off-the-shelf software with business growth",
      "Security vulnerabilities and compliance issues in current systems"
    ],
    features: [
      "Custom database and API integrations",
      "Secure role-based access control (RBAC)",
      "Automated business workflow pipelines",
      "Real-time dashboards and comprehensive reporting tools",
      "Enterprise-grade security and encryption"
    ],
    technologies: ["Node.js", "PostgreSQL", "React", "Docker", "AWS"],
    process: ["Business Analysis", "Software Architecture Design", "Agile Development", "System Integration & QA", "Deployment & Training"],
    benefits: [
      "Software that conforms to your workflow, not vice versa",
      "Ownership of the intellectual property (IP)",
      "Seamless integration with existing enterprise systems",
      "Scalable architecture to grow alongside your organization"
    ],
    faqs: [
      {
        question: "Do we own the source code of the custom software?",
        answer: "Yes, you own 100% of the source code and intellectual property once the project is completed and final payments are processed."
      },
      {
        question: "Can your custom software integrate with our legacy systems?",
        answer: "Yes, we specialize in building custom API connectors and middleware to synchronize data between new platforms and your existing legacy databases or systems."
      },
      {
        question: "How do you ensure data security and compliance?",
        answer: "We build enterprise-grade software adhering to SOC-2 standards, role-based access control (RBAC), end-to-end encryption, and custom database backup policies."
      },
      {
        question: "What architecture pattern do you use for backend enterprise systems?",
        answer: "We typically use microservices or modular monolith architectures built on Node.js/TypeScript and PostgreSQL, containerized with Docker for easy cloud orchestration."
      }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Modern, pixel-perfect user interfaces focused on usability, branding, and conversion.",
    longDesc: "Great products start with great design. We blend aesthetics with user psychology to craft intuitive, modern, and high-fidelity designs that engage your customers and drive meaningful actions.",
    icon: "Palette",
    problemsSolved: [
      "High bounce rates and low visitor conversion rates",
      "Confusing user navigation and complex workflows",
      "Outdated visual presence that fails to represent the brand",
      "Friction in user onboarding and checkout flows"
    ],
    features: [
      "Comprehensive user research & user persona definition",
      "Interactive high-fidelity wireframing and prototyping",
      "Sleek and cohesive visual design systems",
      "Usability testing and analysis",
      "Seamless developer handoff with Figma"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Framer", "CSS Variables"],
    process: ["User Research", "Information Architecture", "Wireframing", "Visual Design", "Prototyping & Testing"],
    benefits: [
      "Significantly improved conversion rates and sales",
      "Enhanced customer satisfaction and brand trust",
      "Reduced development time due to precise design specs",
      "Clear visual hierarchy and intuitive user journeys"
    ],
    faqs: [
      {
        question: "What design tools do you use?",
        answer: "We use Figma as our primary tool for UI/UX design, prototyping, and design systems. This enables real-time collaboration with your team and smooth handoffs to our developer team."
      },
      {
        question: "Do you provide responsive designs?",
        answer: "Yes, we design for desktop, tablet, and mobile breakpoints to ensure your brand's digital presence remains premium across all screen sizes."
      },
      {
        question: "Do I get full ownership of Figma source files?",
        answer: "Yes. You receive full editable Figma files, design tokens, component libraries, and interactive prototype links upon project completion."
      },
      {
        question: "How do you handle developer handoffs?",
        answer: "We deliver structured Figma files with documented auto-layout components, spacing scales, typography variables, and exported SVG icons ready for engineering."
      }
    ]
  },
  {
    slug: "ecommerce",
    title: "E-commerce Development",
    shortDesc: "Complete e-commerce stores with product management, secure checkouts, and custom gateways.",
    longDesc: "Launch a robust online storefront that converts visitors into customers. We build customized e-commerce solutions with secure checkouts, smooth product filtering, inventory tracking, and seamless payment integrations.",
    icon: "ShoppingBag",
    problemsSolved: [
      "Abandoned shopping carts due to complex checkout processes",
      "Slow, sluggish search and loading speeds on product listings",
      "Inefficient inventory management and sync issues",
      "Unsecure payment processing and high transaction fees"
    ],
    features: [
      "Custom storefront developments (headless e-commerce)",
      "Secure integration with Stripe, PayPal, Razorpay, etc.",
      "Sophisticated product filtering and semantic search",
      "Automated tax calculations and shipping integrations",
      "Intuitive vendor and inventory admin dashboards"
    ],
    technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Shopify API"],
    process: ["Store Strategy", "UX/UI Store Design", "Product Database Setup", "Checkout & API Integrations", "Security Testing & Launch"],
    benefits: [
      "Blazing-fast product search and page speeds",
      "Seamless checkout experience reducing cart abandonment",
      "Robust management tools for admin and support staff",
      "Optimized for conversion and mobile shopping"
    ],
    faqs: [
      {
        question: "Can you build custom payment gateway integrations?",
        answer: "Yes, we integrate local and international payment gateways like Stripe, Razorpay, PayPal, and Authorize.Net, conforming strictly to PCI-DSS security standards."
      },
      {
        question: "Can we manage products and inventory ourselves?",
        answer: "Definitely. We build clean, intuitive admin panels allowing you to add products, adjust pricing, manage inventory, and view reports without writing code."
      },
      {
        question: "What is headless e-commerce and why should we consider it?",
        answer: "Headless e-commerce decouples the shop front from backend engines like Shopify. This delivers sub-second page loads, higher Google rankings, and infinite design customization."
      },
      {
        question: "How do you optimize online store checkout speeds?",
        answer: "We utilize one-click checkout flows, address auto-completion, guest checkout options, and instant payment methods (Apple Pay / Google Pay / UPI)."
      }
    ]
  },
  {
    slug: "zoho-solutions",
    title: "Zoho Solutions & CRM",
    shortDesc: "Zoho Creator, Zoho CRM integration, and business automation solutions.",
    longDesc: "Leverage the full power of Zoho to automate your business. We design and implement custom Zoho Creator applications, configure and optimize Zoho CRM, and build automated integrations that bridge your business processes.",
    icon: "Briefcase",
    problemsSolved: [
      "Fragmented customer data and lost sales leads",
      "Manual and repetitive data entry tasks",
      "Lack of visibility into sales pipelines and metrics",
      "Disconnection between CRM, finance, and support departments"
    ],
    features: [
      "Custom Zoho Creator low-code application development",
      "Zoho CRM setup, configuration, and custom fields",
      "Deluge scripting for advanced automation workflows",
      "Bi-directional API integrations with third-party apps",
      "Zoho Analytics custom dashboards and reports"
    ],
    technologies: ["Zoho CRM", "Zoho Creator", "Deluge Scripting", "REST APIs", "Node.js"],
    process: ["Business Process Mapping", "Zoho Environment Setup", "Deluge Workflow Scripting", "Integration & Testing", "User Training & Go-Live"],
    benefits: [
      "Centralized customer data for sales, marketing, and support",
      "Hours of manual work saved through Zoho automations",
      "Data-driven decisions using custom business reports",
      "Smooth integrations with email, SMS, and accounting systems"
    ],
    faqs: [
      {
        question: "What is Deluge scripting in Zoho?",
        answer: "Deluge (Data Enriched Query Language) is Zoho's proprietary scripting language. We write custom Deluge scripts to build advanced automation, workflows, and integrations across different Zoho products."
      },
      {
        question: "Can you connect Zoho CRM with our custom-built website?",
        answer: "Yes, we can connect Zoho CRM to any website using Zoho's REST APIs, webhooks, or embeddable forms, sending leads and visitor info directly to your CRM."
      },
      {
        question: "Can you customize Zoho CRM modules and blueprints?",
        answer: "Yes. Our certified Zoho developers configure custom modules, fields, blueprints, and SLA rules to automate your sales funnel from lead intake to deal closing."
      },
      {
        question: "How do you handle data migration from legacy CRMs to Zoho?",
        answer: "We perform zero-downtime data ETL migrations, cleansing your lead, account, contact, and deal data before mapping it accurately into Zoho."
      }
    ]
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    shortDesc: "AI-powered automation, custom assistants, and intelligent business systems.",
    longDesc: "Equip your business with artificial intelligence. We integrate LLMs, OpenAI APIs, cognitive services, and machine learning models to power smart automation, virtual assistants, and data-driven insights.",
    icon: "Sparkles",
    problemsSolved: [
      "Overloaded customer support desks with repetitive questions",
      "Slow, manual content generation and document analysis",
      "Missed insights in massive volumes of unstructured customer feedback",
      "Lack of personalized experiences for digital store visitors"
    ],
    features: [
      "Custom AI chatbot development (RAG-based assistants)",
      "OpenAI API, Claude, and Gemini model integrations",
      "Natural Language Processing (NLP) for text categorization",
      "Automated document summarization and data extraction",
      "AI-driven personalization and recommendation engines"
    ],
    technologies: ["OpenAI API", "LangChain", "Python", "Pinecone", "Next.js"],
    process: ["AI Use-Case Discovery", "Data Pipeline Setup & Embedding", "Prompt Engineering & RAG Design", "Model Fine-Tuning & Integration", "Testing & Safety Guardrails"],
    benefits: [
      "24/7 automated instant customer service",
      "Drastic reduction in document processing time",
      "Highly personalized and engaging customer journeys",
      "Deep semantic search capabilities on your internal documents"
    ],
    faqs: [
      {
        question: "How do you protect our proprietary data when integrating AI?",
        answer: "We use enterprise-grade API endpoints with zero-data-retention agreements where possible, ensuring your customer and company data is never used to train public LLM models."
      },
      {
        question: "What is RAG (Retrieval-Augmented Generation)?",
        answer: "RAG is a technique that enables AI models to search and query your company's private document library to provide accurate, factual responses tailored to your specific business, avoiding hallucinations."
      },
      {
        question: "Can you integrate custom AI assistants into our existing website or app?",
        answer: "Yes. We build custom autonomous AI chatbots, intelligent search bars, and workflow automation agents that embed seamlessly into Next.js, React, or mobile applications."
      },
      {
        question: "What LLMs and AI providers do you support?",
        answer: "We integrate OpenAI (GPT-4o), Anthropic Claude 3.5, Google Gemini, Meta Llama 3, and self-hosted open-source models via Ollama or HuggingFace."
      }
    ]
  },
  {
    slug: "software-testing",
    title: "Software Testing & QA",
    shortDesc: "Comprehensive QA including functional, UI, API, performance, and cross-browser testing.",
    longDesc: "Deliver digital products with confidence. Our dedicated QA engineers run rigorous manual and automated test suites to ensure your software is bug-free, highly performant, and secure.",
    icon: "ShieldCheck",
    problemsSolved: [
      "Frequent software crashes and regressions in production",
      "Inconsistent layout display across different browsers/devices",
      "API endpoints failing under high user traffic load",
      "Security loopholes that put sensitive data at risk"
    ],
    features: [
      "Automated regression testing (Cypress, Playwright)",
      "Manual functional and exploratory testing",
      "API verification and load testing with Postman & JMeter",
      "Responsive UI testing across 20+ device profiles",
      "Security and vulnerability scans"
    ],
    technologies: ["Playwright", "Jest", "Postman", "Lighthouse", "JMeter"],
    process: ["Test Plan Writing", "Manual Sanity Checks", "Automation Script Writing", "Load & Security Testing", "Bug Reporting & Retesting"],
    benefits: [
      "Drastic reduction of bugs slipping into production",
      "Improved app ratings and customer trust",
      "Faster development cycle via automated tests",
      "Consistent software performance under peak loads"
    ],
    faqs: [
      {
        question: "Do you perform automated or manual testing?",
        answer: "We perform both. Manual testing is ideal for visual inspection, user experience, and exploratory testing. Automated testing is utilized for regressions, API validation, and performance test suites."
      },
      {
        question: "Can you write automated tests for our existing application?",
        answer: "Yes, we can write regression suites using Playwright or Cypress for your existing web apps to ensure future updates don't break current features."
      },
      {
        question: "How do you test application performance under heavy traffic?",
        answer: "We execute load and stress testing using Apache JMeter and k6, simulating thousands of concurrent virtual users to identify database bottlenecks and server response limits."
      }
    ]
  },
  {
    slug: "cms-development",
    title: "CMS Development",
    shortDesc: "Easy-to-manage Content Management Systems built for speed and adaptability.",
    longDesc: "Take complete control of your website's content. We implement headless and traditional CMS solutions (Sanity, Strapi, WordPress, custom panels) that empower marketing teams to publish content instantly without developer intervention.",
    icon: "FileText",
    problemsSolved: [
      "Marketing teams waiting days for developers to change simple texts",
      "Bloated, slow legacy CMS platforms that hurt search rankings",
      "Difficult block editors that break layouts on mobile",
      "Weak multi-language and content localization structures"
    ],
    features: [
      "Headless CMS setups (Sanity.io, Strapi, Contentful)",
      "Structured content modeling for reuse across web & app",
      "Visual page building systems with absolute safety",
      "Localization & multi-lingual content support",
      "Fast API-driven static generation"
    ],
    technologies: ["Sanity.io", "Strapi", "Next.js", "GraphQL", "Node.js"],
    process: ["Content Modeling", "CMS Schema Design", "API Hookup", "UI Integration", "Marketing Team Onboarding"],
    benefits: [
      "Marketing team autonomy to publish texts, blogs, and images",
      "Excellent web speeds because of separate headless design",
      "Structured content that can feed both website and mobile apps",
      "Highly secure CMS architectures preventing hacking attempts"
    ],
    faqs: [
      {
        question: "What is a headless CMS?",
        answer: "A headless CMS separates the content repository (the 'body') from the presentation layer (the 'head' or frontend). This allows us to load content via fast APIs and build a custom high-performance frontend using Next.js."
      },
      {
        question: "Is it easy for non-technical team members to edit pages?",
        answer: "Yes. We create customized fields, clean input forms, and drag-and-drop elements, making it as simple as filling out a web form to publish updates."
      },
      {
        question: "Can we migrate content from WordPress to a Headless CMS?",
        answer: "Yes. We write automated content migration scripts that extract your posts, media, tags, and SEO metadata from WordPress directly into Sanity or Strapi."
      }
    ]
  },
  {
    slug: "api-development",
    title: "API Development & Integration",
    shortDesc: "Secure, highly scalable APIs and third-party integrations to connect your data.",
    longDesc: "Connect your digital ecosystem. We design and deploy high-performance REST and GraphQL APIs that connect frontend systems with databases, third-party software, and internal enterprise architectures.",
    icon: "Link",
    problemsSolved: [
      "Siloed applications unable to communicate or sync data",
      "Slow API endpoints causing lag in user interfaces",
      "Lack of documentation causing long integration cycles",
      "Vulnerable API connections exposed to data leaks"
    ],
    features: [
      "RESTful API & GraphQL schemas",
      "Secure authentication protocols (OAuth, JWT, API Keys)",
      "Rate limiting, request validation, and DDoS protection",
      "Auto-generated OpenAPI/Swagger documentation",
      "High-speed caching layers (Redis)"
    ],
    technologies: ["Node.js", "Express.js", "GraphQL", "Redis", "PostgreSQL"],
    process: ["API Schema Planning", "Route Design & Auth Config", "Database Optimization", "Integration & Mock Testing", "API Docs Publication"],
    benefits: [
      "Smooth, secure connections between web/mobile apps and backend databases",
      "Optimized payload sizes for lightning-fast frontend responses",
      "Documented developer-friendly APIs",
      "Highly secure endpoints that protect backend data assets"
    ],
    faqs: [
      {
        question: "Do you write API documentation?",
        answer: "Yes, we auto-generate and maintain clean Swagger / OpenAPI documentation so internal and external teams can integrate with the APIs easily."
      },
      {
        question: "How do you secure API endpoints?",
        answer: "We implement OAuth2, JSON Web Tokens (JWT), HTTPS-only transmission, CORS rules, rate-limiting, and payload sanitization to guard against injection and abuse."
      },
      {
        question: "How do you handle API rate limiting and webhook security?",
        answer: "We implement Redis rate-limiting algorithms, HMAC cryptographic signature verification on webhooks, and automated retry queues for high reliability."
      }
    ]
  },
  {
    slug: "branding",
    title: "Logo & Branding",
    shortDesc: "Professional visual identities, logos, and guidelines tailored to your brand personality.",
    longDesc: "Establish a remarkable brand presence. We design visual systems—from custom logo designs to full style guides and typography systems—that articulate your company's values and resonate with your audience.",
    icon: "Compass",
    problemsSolved: [
      "Outdated corporate identity that lacks credibility",
      "Inconsistent colors, fonts, and assets across channels",
      "Generic logos that fail to stand out from competitors",
      "Lack of design rules leading to messy presentation templates"
    ],
    features: [
      "Custom vector logo designs (multiple concepts & formats)",
      "Cohesive brand color palette & typography hierarchy",
      "Social media asset kits & letterhead layouts",
      "Comprehensive Brand Guideline PDF booklet",
      "Marketing and collateral design suggestions"
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    process: ["Brand Discovery", "Moodboarding & Visual Direction", "Logo Design & Iterations", "Stationery & Assets Layout", "Guidelines Compilation"],
    benefits: [
      "Instant credibility and trust in your marketplace",
      "Consistent, professional presentation across all digital products",
      "Memorable visual identity that is easy to recognize",
      "Ready-to-use vector assets for digital and print media"
    ],
    faqs: [
      {
        question: "Do we get the vector files of the logo?",
        answer: "Yes. We deliver all final brand assets in scalable vector formats (AI, EPS, SVG) as well as high-resolution PNG and JPG formats suitable for both web and print."
      },
      {
        question: "What is included in the Brand Guidelines?",
        answer: "It includes logo usage rules (spacing, sizes, what to avoid), color palette codes (HEX, RGB, CMYK), font pairings, and examples of corporate templates."
      },
      {
        question: "How many initial logo concepts do you present?",
        answer: "We present 3 to 4 distinct design directions during the initial moodboard review, refining your selected choice through collaborative revision rounds."
      }
    ]
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    shortDesc: "Continuous updates, uptime monitoring, security patches, and support desks.",
    longDesc: "Keep your digital infrastructure running flawlessly. We offer ongoing maintenance packages that cover software updates, security patches, backups, uptime monitoring, and active technical support.",
    icon: "LifeBuoy",
    problemsSolved: [
      "Websites breaking due to outdated server environments or packages",
      "Server crashes and downtime going unnoticed for hours",
      "Loss of critical database records due to lack of backups",
      "Slow response times when urgent fixes or content changes are needed"
    ],
    features: [
      "24/7 server uptime monitoring and alerts",
      "Weekly core, theme, and package updates",
      "Automated daily/weekly cloud database backups",
      "Active security monitoring and firewall configurations",
      "Dedicated developer hours for small adjustments"
    ],
    technologies: ["AWS", "GitHub Actions", "Docker", "Sentry", "New Relic"],
    process: ["Infrastructure Audit", "Monitoring Agent Deployment", "Backup Schedule Configuration", "Monthly Reports Compilation", "Ongoing Ticket Support"],
    benefits: [
      "Peace of mind knowing specialists are watching your site",
      "Instant recovery options in case of critical failures",
      "Continuous optimization keeping the site fast and secure",
      "Fast response times for emergency developer assistance"
    ],
    faqs: [
      {
        question: "What are your support response times?",
        answer: "For critical outages, we respond within 1 to 2 hours. For general requests and non-urgent content changes, our standard turnaround is 24 business hours."
      },
      {
        question: "Do unused developer hours roll over to the next month?",
        answer: "Maintenance support hours are allocated per month to ensure dedicated resources are available and do not roll over to the following month."
      },
      {
        question: "How do you handle emergency site restores?",
        answer: "We maintain automated off-site daily database backups and Git deployment tags, enabling instant one-click rollbacks within 15 minutes."
      }
    ]
  }
];
