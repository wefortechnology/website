"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Store,
  Building,
  ShoppingBag,
  Zap,
  Sparkles,
  ArrowRight,
  Check,
  ShieldCheck,
  Clock,
  Code2,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";

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

const pillars = [
  {
    icon: Clock,
    title: "High-Speed Sprints",
    desc: "Agile 2-week execution cycles delivering continuous working software.",
    color: "text-sky-400"
  },
  {
    icon: ShieldCheck,
    title: "100% Source Code IP",
    desc: "Full code repositories and intellectual property transferred upon delivery.",
    color: "text-emerald-400"
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    desc: "Next.js 15, React 19, Zoho Creator, and AWS serverless cloud infra.",
    color: "text-purple-400"
  },
  {
    icon: TrendingUp,
    title: "Proven Business ROI",
    desc: "Architectures designed specifically to boost conversions and reduce costs.",
    color: "text-amber-400"
  }
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("startups");
  const selectedSolution = solutions.find((s) => s.id === activeTab) || solutions[0];
  const SelectedIcon = selectedSolution.icon;

  return (
    <PageTransition>
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
        {/* Ambient Radial Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent-blue/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-accent-purple/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

        {/* Tech Mesh Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_85%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">

              {/* Badge Header Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 border border-accent-blue/30 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-accent-cyan"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse flex-shrink-0" />
                  <span>Tailored Solution Scopes</span>
                </motion.div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span>Agile Architecture Ready</span>
                </div>
              </div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]"
              >
                Tailored Industry Scopes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                  Architected for Your Exact
                </span>{" "}
                <span className="text-slate-400 font-light">Growth Phase.</span>
              </motion.h1>

              {/* Subtitle Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                We structure specialized engineering teams and cloud architectures tailored to address the exact scale, security, and automation demands of your organization.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 w-full"
              >
                <Button href="#solutions-matrix" variant="accent" className="w-full sm:w-auto justify-center">
                  <span>Explore Solution Matrix</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/contact" variant="secondary" className="w-full sm:w-auto justify-center">
                  <span>Schedule Tech Discovery</span>
                </Button>
              </motion.div>

              {/* Live Metric Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/5"
              >
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-sky-500/5 border border-sky-500/20 backdrop-blur-md text-center lg:text-left">
                  <div className="text-base sm:text-2xl font-black font-mono text-sky-400">6 Core</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Industry Scopes</div>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md text-center lg:text-left">
                  <div className="text-base sm:text-2xl font-black font-mono text-emerald-400">2–3 Wk</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Sprint Delivery</div>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-purple-500/5 border border-purple-500/20 backdrop-blur-md text-center lg:text-left">
                  <div className="text-base sm:text-2xl font-black font-mono text-purple-400">100% IP</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Code Ownership</div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Solutions Capability Radar Glass Card */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="glow-card rounded-3xl p-5 sm:p-8 border border-white/10 bg-gradient-to-b from-[#09152a] via-[#050b16] to-[#03060e] shadow-2xl space-y-4 sm:space-y-6 relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Status Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5 sm:pb-4">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-accent-cyan uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse flex-shrink-0" />
                    <span>Capabilities Radar</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Active Frameworks</span>
                </div>

                {/* Interactive Solution Scope Badges */}
                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    { title: "Startups & MVPs", desc: "Agile 2-Wk Rapid Prototype", color: "text-sky-400", border: "border-sky-500/20" },
                    { title: "Small Business", desc: "Website & Zoho Lead Pipeline", color: "text-emerald-400", border: "border-emerald-500/20" },
                    { title: "Enterprise Systems", desc: "RBAC & Custom Microservices", color: "text-purple-400", border: "border-purple-500/20" },
                    { title: "Headless E-commerce", desc: "Sub-Second Global Checkout", color: "text-amber-400", border: "border-amber-500/20" },
                    { title: "Zoho & Workflow", desc: "Deluge Automation & Webhooks", color: "text-cyan-400", border: "border-cyan-500/20" },
                    { title: "AI & Assistants", desc: "RAG Docs & LLM Integration", color: "text-pink-400", border: "border-pink-500/20" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border ${item.border} hover:bg-white/[0.06] transition-colors`}
                    >
                      <div>
                        <div className={`text-xs font-bold ${item.color}`}>{item.title}</div>
                        <div className="text-[10px] font-mono text-slate-400">{item.desc}</div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-80 flex-shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Footer Sign-off */}
                <div className="pt-3.5 sm:pt-4 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                  <span>Custom Architecture</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5" /> Tailored ROI Guarantee
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Interactive Solutions Matrix Viewer ── */}
      <section id="solutions-matrix" className="py-16 sm:py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

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
                          : "bg-[#081224]/80 border-white/10 text-slate-400 hover:text-white"
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
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider">
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

      {/* ── 3. Engineering Pillars Grid ── */}
      <section className="py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            subtitle="Engineering Excellence"
            title="Built for Speed, Security & Scalability"
            description="How we structure our solution architecture to guarantee enterprise performance."
            align="center"
            className="mx-auto"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-14">
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glow-card rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-[#081224] to-[#040914] space-y-3 sm:space-y-4 hover:border-accent-cyan/40 transition-all duration-300"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center ${pillar.color}`}>
                    <PillarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Call To Action ── */}
      <CTASection />
    </PageTransition>
  );
}
