"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Store, Building, ShoppingBag, Zap, Sparkles, ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/Button";

const solutions = [
  {
    id: "startups",
    name: "Startups & MVPs",
    category: "High-Speed Validation",
    icon: Rocket,
    tagline: "Build fast, launch smart, and validate your product with minimum risk.",
    description: "For early-stage and funded startups, time-to-market is everything. We help you define your Minimum Viable Product (MVP), design high-fidelity interactive prototypes, build a premium brand identity, and construct scalable cloud architectures that grow with your user base.",
    metrics: [
      { label: "Target Speed", value: "2–3 Weeks", color: "text-sky-400" },
      { label: "Code IP", value: "100% Client", color: "text-emerald-400" },
      { label: "Architecture", value: "Cloud Native", color: "text-purple-400" }
    ],
    challengesSolved: [
      "Slow product validation cycles",
      "Limited initial engineering budget",
      "Uncertain investor deck prototypes"
    ],
    techStack: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "MVP scoping & rapid two-week agile development cycles",
      "Interactive high-fidelity Figma prototype design",
      "Logo, branding assets, & identity style guides",
      "Scalable Serverless database architectures (AWS, Vercel)",
      "Quick REST/GraphQL API setups & payment connectors"
    ],
    ctaUrl: "/contact?solution=startups"
  },
  {
    id: "small-businesses",
    name: "Small & Growing Businesses",
    category: "Digital Growth & Operations",
    icon: Store,
    tagline: "Establish market authority and automate manual daily tasks.",
    description: "Take your business online with a premium web presence. We build responsive company websites, set up Zoho Creator modules to replace manual logs, link email marketing flows, and construct secure e-commerce channels.",
    metrics: [
      { label: "Lead Growth", value: "+300%", color: "text-emerald-400" },
      { label: "Time Saved", value: "15+ Hrs/Wk", color: "text-sky-400" },
      { label: "SEO Rating", value: "Top Tier", color: "text-amber-400" }
    ],
    challengesSolved: [
      "Outdated website losing local clients",
      "Manual spreadsheet data entry drag",
      "Inconsistent lead follow-up flows"
    ],
    techStack: ["Next.js", "Zoho CRM", "Stripe", "Tailwind CSS", "Google SEO"],
    features: [
      "Responsive business websites built with Next.js",
      "Zoho CRM setup & automatic lead routing",
      "Automated email marketing & notification triggers",
      "Stripe and local payment gateway integrations",
      "Google Business Profile & SEO ranking optimizations"
    ],
    ctaUrl: "/contact?solution=small-business"
  },
  {
    id: "enterprises",
    name: "Enterprises & Portals",
    category: "High-Performance Systems",
    icon: Building,
    tagline: "Custom internal software, role-based security, and zero operational drag.",
    description: "For established organizations, custom software removes operational friction. We design custom portal panels, build high-concurrency backend databases, create analytical dashboards showing real-time metrics, and integrate CRM platforms with legacy APIs.",
    metrics: [
      { label: "Uptime SLA", value: "99.99%", color: "text-emerald-400" },
      { label: "Compliance", value: "SOC-2 / RBAC", color: "text-purple-400" },
      { label: "Concurrency", value: "10k+ Users", color: "text-sky-400" }
    ],
    challengesSolved: [
      "Fragmented data silos across departments",
      "Legacy software performance lag",
      "Security & access control risks"
    ],
    techStack: ["Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
    features: [
      "Custom role-based dashboard portals (RBAC)",
      "High-speed microservice APIs & enterprise integrations",
      "Secure user management & MFA authentication",
      "Audit trail logs & strict data security standards",
      "Continuous server monitoring & cloud optimization"
    ],
    ctaUrl: "/contact?solution=enterprise"
  },
  {
    id: "ecommerce",
    name: "E-commerce Brands",
    category: "Global Conversion Engine",
    icon: ShoppingBag,
    tagline: "Frictionless global checkout and conversion optimization.",
    description: "Launch an online store designed to convert visitors into loyal customers. We build headless storefronts that load in milliseconds, design intuitive cart sliders, connect Stripe/PayPal/Razorpay payment gateways, and construct vendor management boards.",
    metrics: [
      { label: "Cart Abandonment", value: "-40%", color: "text-emerald-400" },
      { label: "Page Load", value: "< 1.0s", color: "text-sky-400" },
      { label: "Gateways", value: "Global", color: "text-purple-400" }
    ],
    challengesSolved: [
      "Sluggish product search & listings",
      "Complex multi-step checkout drop-offs",
      "Inventory sync errors across channels"
    ],
    techStack: ["Next.js Commerce", "Shopify API", "Stripe", "PostgreSQL", "Tailwind"],
    features: [
      "Next.js headless shopping templates with instant search",
      "PCI-compliant payment integrations (Stripe, Razorpay)",
      "Advanced product filter queries & semantic search",
      "Automated tax, courier fees & shipping calculators",
      "Inventory alerts & order history logs"
    ],
    ctaUrl: "/contact?solution=ecommerce"
  },
  {
    id: "automation",
    name: "Zoho & Workflow Automation",
    category: "Process Efficiency",
    icon: Zap,
    tagline: "Connect your software stack and eliminate manual data copying.",
    description: "Stop spending hours updating spreadsheets. We design automated lead routes, build custom Deluge scripts in Zoho Creator, synchronize sales logs with financial software, and hook up triggers that alert regional sales reps instantly.",
    metrics: [
      { label: "Manual Effort", value: "-80%", color: "text-emerald-400" },
      { label: "Sync Speed", value: "Real-Time", color: "text-sky-400" },
      { label: "Error Rate", value: "0.0%", color: "text-purple-400" }
    ],
    challengesSolved: [
      "Manual copy-pasting between platforms",
      "Delayed lead response times",
      "Disjointed sales & invoicing records"
    ],
    techStack: ["Zoho Creator", "Zoho CRM", "Deluge Scripting", "REST APIs", "Webhooks"],
    features: [
      "Zoho Creator custom Low-Code app designs",
      "Zoho CRM automated workflow pipelines",
      "Deluge automation scripting & API webhooks",
      "QuickBooks & Finance database integrations",
      "Slack / MS Teams instant chat alerts and reports"
    ],
    ctaUrl: "/contact?solution=automation"
  },
  {
    id: "ai-solutions",
    name: "AI & Smart Assistants",
    category: "Cognitive Intelligence",
    icon: Sparkles,
    tagline: "Equip your digital systems with semantic artificial intelligence.",
    description: "Leverage AI to serve customers 24/7. We integrate OpenAI API, design context-aware chatbots using RAG architectures on your private manuals, auto-summarize customer support tickets, and personalize visitor shopping layouts.",
    metrics: [
      { label: "Support Coverage", value: "24/7", color: "text-emerald-400" },
      { label: "Ticket Auto-Resolve", value: "65%", color: "text-sky-400" },
      { label: "Accuracy", value: "99%", color: "text-purple-400" }
    ],
    challengesSolved: [
      "Overwhelmed customer support desks",
      "Unstructured internal PDF knowledge",
      "Generic non-personalized user flows"
    ],
    techStack: ["OpenAI GPT-4o", "LangChain", "Pinecone", "Python", "Next.js"],
    features: [
      "RAG-based support chatbot widgets tailored to your docs",
      "OpenAI API, Claude, & Gemini model connectors",
      "Automated PDF document parser & summarization scripts",
      "AI semantic search modules on web pages",
      "Smart product and layout personalization filters"
    ],
    ctaUrl: "/contact?solution=ai"
  }
];

export default function SolutionsViewer() {
  const [activeTab, setActiveTab] = useState("startups");
  const selectedSolution = solutions.find((s) => s.id === activeTab) || solutions[0];
  const SelectedIcon = selectedSolution.icon;

  return (
    <>
      {/* ── 2. Interactive Solutions Matrix Viewer ── */}
      <section id="solutions-matrix" className="py-16 sm:py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

            {/* Left Tabs Column */}
            <div className="lg:col-span-4 space-y-2 sm:space-y-3">
              <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest block px-1 mb-1 sm:mb-2">
                Select Your Business Type
              </span>

              {/* Mobile Horizontal Pill Scroll Bar */}
              <div className="lg:hidden flex items-center gap-2 overflow-x-auto scrollbar-none snap-x pb-2 pt-1">
                {solutions.map((sol) => {
                  const TabIcon = sol.icon;
                  const isActive = activeTab === sol.id;
                  return (
                    <button
                      key={sol.id}
                      onClick={() => setActiveTab(sol.id)}
                      className={`shrink-0 snap-start px-4 py-2.5 rounded-full text-xs font-medium flex items-center gap-2 transition-all cursor-pointer border ${isActive
                          ? "bg-gradient-to-r from-accent-blue/40 to-accent-cyan/30 border-accent-cyan text-white shadow-[0_0_15px_rgba(14,165,233,0.3)] font-semibold"
                          : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-accent-blue"
                        }`}
                    >
                      <TabIcon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? "text-accent-cyan" : "text-slate-400"}`} />
                      <span className="whitespace-nowrap">{sol.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Desktop Vertical Tabs Sidebar */}
              <div className="hidden lg:flex flex-col gap-2.5 bg-gradient-to-b from-[#081224] to-[#040914] border border-white/10 p-3 rounded-3xl shadow-xl backdrop-blur-xl">
                {solutions.map((sol) => {
                  const TabIcon = sol.icon;
                  const isActive = activeTab === sol.id;
                  return (
                    <button
                      key={sol.id}
                      onClick={() => setActiveTab(sol.id)}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left transition-all duration-300 focus:outline-none select-none cursor-pointer group ${isActive
                          ? "bg-gradient-to-r from-accent-blue/30 to-accent-cyan/20 border border-accent-cyan/50 text-white shadow-[0_0_20px_rgba(14,165,233,0.2)] font-semibold"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                        }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2 rounded-xl border transition-colors flex-shrink-0 ${isActive
                            ? "bg-accent-cyan/20 border-accent-cyan/40 text-accent-cyan"
                            : "bg-white/[0.04] border-white/10 text-slate-400 group-hover:text-white"
                          }`}>
                          <TabIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold leading-none mb-1">{sol.name}</div>
                          <div className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400">{sol.category}</div>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 ml-3 transition-transform ${isActive ? "text-accent-cyan translate-x-1" : "text-slate-600 opacity-0 group-hover:opacity-100"
                        }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Interactive Solution Display Panel */}
            <div className="lg:col-span-8 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSolution.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="glow-card rounded-3xl p-5 sm:p-8 md:p-10 border border-white/10 bg-gradient-to-b from-[#081224] via-[#050b16] to-[#03060e] space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-b border-white/5 pb-6 sm:pb-8 relative z-10">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                        {selectedSolution.category}
                      </div>
                      <h2 className="text-xl sm:text-3xl font-black text-white flex items-center gap-2.5 sm:gap-3">
                        <SelectedIcon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-cyan flex-shrink-0" />
                        <span>{selectedSolution.name}</span>
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-slate-300">
                        {selectedSolution.tagline}
                      </p>
                    </div>

                    <Button href={selectedSolution.ctaUrl} variant="accent" size="sm" className="w-full sm:w-auto justify-center flex-shrink-0">
                      <span>Get Solution Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Key Metrics Grid - Horizontal Rows on Mobile, 3 Columns on Desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-1">
                    {selectedSolution.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2"
                      >
                        <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">{m.label}</div>
                        <div className={`text-sm sm:text-2xl font-black font-mono ${m.color}`}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Body Description */}
                  <p className="text-slate-300 font-light text-xs sm:text-base leading-relaxed">
                    {selectedSolution.description}
                  </p>

                  {/* Pain Points Solved */}
                  <div className="space-y-2.5 sm:space-y-3 pt-1">
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest">
                      Key Challenges Resolved:
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedSolution.challengesSolved.map((challenge, idx) => (
                        <span key={idx} className="text-[11px] sm:text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 sm:space-y-4 pt-1">
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest">
                      Included Modules & Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                      {selectedSolution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 sm:gap-3 bg-[#050b18]/60 border border-white/5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl">
                          <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="text-xs font-light text-slate-300 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Tech Stack Badges */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-slate-400">Target Tech Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSolution.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-accent-cyan text-[10px] sm:text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
