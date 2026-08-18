export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "Business Solutions" | "AI";
  description: string;
  iconName: string; // The Lucide icon or fallback identifier
}

export const technologies: Technology[] = [
  // Frontend
  { name: "React", category: "Frontend", description: "Interactive user interfaces", iconName: "Code" },
  { name: "Next.js", category: "Frontend", description: "Server-side rendering & static generation", iconName: "Layers" },
  { name: "TypeScript", category: "Frontend", description: "Type-safe JavaScript development", iconName: "Shield" },
  { name: "JavaScript", category: "Frontend", description: "Dynamic client-side scripting", iconName: "Cpu" },
  { name: "Tailwind CSS", category: "Frontend", description: "Modern utility-first styling", iconName: "Palette" },
  { name: "HTML5 / CSS3", category: "Frontend", description: "Semantic markup and layouts", iconName: "FileText" },

  // Backend
  { name: "Node.js", category: "Backend", description: "Scalable backend runtimes", iconName: "Server" },
  { name: "Express.js", category: "Backend", description: "Minimalist server frameworks", iconName: "Server" },

  // Database
  { name: "MongoDB", category: "Database", description: "NoSQL document storage", iconName: "Database" },
  { name: "PostgreSQL", category: "Database", description: "Relational database solutions", iconName: "Database" },
  { name: "MySQL", category: "Database", description: "Robust structured data query system", iconName: "Database" },

  // Cloud & Deployment
  { name: "Vercel", category: "Cloud", description: "Instant serverless global deployments", iconName: "Cloud" },
  { name: "AWS", category: "Cloud", description: "Enterprise cloud hosting and infrastructure", iconName: "Cloud" },
  { name: "Render", category: "Cloud", description: "Continuous hosting for APIs & databases", iconName: "Cloud" },

  // Business Solutions (Zoho)
  { name: "Zoho Creator", category: "Business Solutions", description: "Custom business apps & Deluge scripts", iconName: "Briefcase" },
  { name: "Zoho CRM", category: "Business Solutions", description: "Customer relationships & pipeline automation", iconName: "Users" },

  // AI
  { name: "OpenAI APIs", category: "AI", description: "GPT model integrations and text embeddings", iconName: "Sparkles" },
  { name: "AI Automation", category: "AI", description: "Workflow triggers powered by AI agents", iconName: "Zap" },
  { name: "AI Assistants", category: "AI", description: "Semantic chatbots and search engines", iconName: "MessageSquare" }
];
