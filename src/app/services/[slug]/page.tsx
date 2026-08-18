import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Check,
  Zap,
  Clock,
  Code2,
  Cpu,
  TrendingUp,
  FileCheck,
  Award,
  Terminal,
  Activity,
  Calendar
} from "lucide-react";
import Button from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { services } from "@/lib/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// Service specific metric highlights for visual punch
const serviceMetrics: Record<string, { label: string; value: string; color: string }[]> = {
  "web-development": [
    { label: "Lighthouse Score", value: "95+", color: "text-emerald-400" },
    { label: "Core Web Vitals", value: "100%", color: "text-sky-400" },
    { label: "Avg Sprint Cycle", value: "2–3 Wks", color: "text-purple-400" },
  ],
  "app-development": [
    { label: "Cross-Platform", value: "iOS + Android", color: "text-sky-400" },
    { label: "FPS Performance", value: "60 FPS", color: "text-emerald-400" },
    { label: "Store Approval", value: "100%", color: "text-amber-400" },
  ],
  "software-development": [
    { label: "IP Ownership", value: "100%", color: "text-emerald-400" },
    { label: "Uptime SLA", value: "99.9%", color: "text-sky-400" },
    { label: "Security Encryption", value: "AES-256", color: "text-purple-400" },
  ],
  "ui-ux-design": [
    { label: "Figma Handoff", value: "100%", color: "text-purple-400" },
    { label: "User Satisfaction", value: "98%", color: "text-emerald-400" },
    { label: "Design Iterations", value: "Unlimited", color: "text-sky-400" },
  ],
  "ecommerce": [
    { label: "Conversion Lift", value: "+35%", color: "text-emerald-400" },
    { label: "Page Load Time", value: "< 1.2s", color: "text-sky-400" },
    { label: "Payment Gateways", value: "10+ Supported", color: "text-purple-400" },
  ],
  "zoho-solutions": [
    { label: "Hours Saved/mo", value: "120+ Hrs", color: "text-emerald-400" },
    { label: "Deluge Custom Scripts", value: "Certified", color: "text-sky-400" },
    { label: "Data Accuracy", value: "100%", color: "text-purple-400" },
  ],
  "ai-integration": [
    { label: "Response Latency", value: "< 300ms", color: "text-sky-400" },
    { label: "Model Accuracy", value: "99.2%", color: "text-emerald-400" },
    { label: "Support Automation", value: "24/7 Active", color: "text-purple-400" },
  ],
  "software-testing": [
    { label: "Bug Catch Rate", value: "99.5%", color: "text-emerald-400" },
    { label: "Test Coverage", value: "95% E2E", color: "text-sky-400" },
    { label: "Regression Time", value: "-70%", color: "text-purple-400" },
  ],
  "cms-development": [
    { label: "Publish Speed", value: "Instant", color: "text-emerald-400" },
    { label: "Headless Speed", value: "Sub-second", color: "text-sky-400" },
    { label: "Editor Ease", value: "100% No-Code", color: "text-amber-400" },
  ],
  "api-development": [
    { label: "API Response Time", value: "< 50ms", color: "text-emerald-400" },
    { label: "Swagger Docs", value: "Auto-Generated", color: "text-sky-400" },
    { label: "DDoS Protection", value: "Enterprise", color: "text-purple-400" },
  ],
  "branding": [
    { label: "Vector Assets", value: "SVG / AI", color: "text-sky-400" },
    { label: "Brand Guidelines", value: "Full PDF Book", color: "text-purple-400" },
    { label: "Design Concepts", value: "3 Concepts", color: "text-emerald-400" },
  ],
  "maintenance": [
    { label: "Response SLA", value: "< 2 Hours", color: "text-emerald-400" },
    { label: "Cloud Backups", value: "Daily Sync", color: "text-sky-400" },
    { label: "Uptime Monitor", value: "99.99%", color: "text-purple-400" },
  ],
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const metrics = serviceMetrics[slug] || [
    { label: "Quality Rating", value: "99%", color: "text-emerald-400" },
    { label: "Delivery Speed", value: "Agile Sprints", color: "text-sky-400" },
    { label: "Support SLA", value: "24/7 Active", color: "text-purple-400" },
  ];

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <PageTransition>
      {/* ── 1. Premium Glassmorphic Hero ── */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden min-h-[80vh] sm:min-h-[85vh] flex items-center w-full max-w-full">
        {/* Layered Aurora Light Halos */}
        <div className="absolute top-[-10%] left-[-10%] w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-accent-blue/15 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-accent-purple/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[30%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-accent-cyan/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />

        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#030712_85%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          {/* Top Symmetrical Alignment Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20 border border-accent-blue/30 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-accent-cyan shadow-[0_0_20px_rgba(14,165,233,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse flex-shrink-0" />
              <span>Enterprise Service Blueprint</span>
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Accepting New Sprints
            </span>
          </div>

          {/* Hero Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  {service.title}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {service.longDesc}
              </p>

              {/* Dynamic Performance Metrics */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                {metrics.map((m) => (
                  <div key={m.label} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
                    <div className={`text-lg sm:text-3xl font-black font-mono ${m.color}`}>{m.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Illuminated Tech Stack Pills */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                  <span>Tech Stack & Tools</span>
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] sm:text-xs font-mono bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/15 text-slate-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_45px_rgba(14,165,233,0.5)] transition-all duration-300"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  href="/contact?ref=consultation"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold border-white/15 hover:border-white/30 bg-white/[0.04]"
                >
                  <Calendar className="w-4 h-4 text-accent-cyan" />
                  <span>Book Tech Sync</span>
                </Button>
              </div>
            </div>

            {/* Right Interactive Control Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 w-full max-w-full">
              <div className="glow-card rounded-3xl p-5 sm:p-8 border border-white/15 bg-gradient-to-b from-[#0b162b]/95 via-[#081122]/95 to-[#040814]/95 space-y-5 sm:space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative overflow-hidden">
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-bl from-accent-cyan/20 to-transparent blur-2xl rounded-bl-full pointer-events-none" />

                {/* Window Chrome */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-cyan shadow-inner flex-shrink-0">
                      <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">Challenges Resolved</h3>
                      <p className="text-[11px] sm:text-xs text-slate-400 font-mono">Targeted Pain-Point Elimination</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    VERIFIED
                  </span>
                </div>

                {/* Problem Items */}
                <ul className="space-y-3 sm:space-y-4">
                  {service.problemsSolved.map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <span className="leading-relaxed font-light">{problem}</span>
                    </li>
                  ))}
                </ul>

                {/* Operational Guarantee Footer */}
                <div className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 gap-2 sm:gap-3 text-xs font-mono">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-slate-400 text-[11px] sm:text-xs">Code Guarantee</div>
                    <div className="text-accent-cyan font-bold mt-0.5 text-xs sm:text-sm">100% IP Transfer</div>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-slate-400 text-[11px] sm:text-xs">SLA Response</div>
                    <div className="text-emerald-400 font-bold mt-0.5 text-xs sm:text-sm">&lt; 2 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Capabilities & Business Impact Grid ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Features */}
            <div className="space-y-4">
              <div>
                <span className="inline-block text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-accent-cyan bg-accent-cyan/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-cyan/20 mb-3 sm:mb-4">
                  Architectural Capabilities
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Core Features &amp; Deliverables
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex gap-3 sm:gap-4 items-center bg-gradient-to-r from-[#081224]/90 to-[#040814]/90 border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-accent-cyan/40 transition-all duration-300 shadow-md group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 text-accent-cyan font-mono font-bold text-xs sm:text-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div>
                <span className="inline-block text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-emerald-400 bg-emerald-500/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-emerald-500/20 mb-3 sm:mb-4">
                  Business Outcomes
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Tangible ROI &amp; Performance Impact
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex gap-3 sm:gap-4 items-center bg-gradient-to-r from-[#081224]/90 to-[#040814]/90 border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-emerald-500/40 transition-all duration-300 shadow-md group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Implementation Workflow Roadmap ── */}
      <section className="py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16 space-y-3">
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-accent-purple bg-accent-purple/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-purple/20 mb-3 sm:mb-4">
                Execution Process
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              5-Step Implementation Workflow
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Our proven agile development workflow from initial scoping through to deployment.
            </p>
          </div>

          {/* Sleek Integrated Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="glow-card rounded-3xl p-5 sm:p-6 border border-white/10 bg-gradient-to-b from-[#081224] via-[#050b16] to-[#03060e] flex flex-col justify-between h-full hover:border-accent-cyan/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                {/* Subtle Top Accent Gradient Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Step Number & Sequence Connector */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-sky-400 to-accent-blue">
                      0{idx + 1}
                    </span>
                    {idx < service.process.length - 1 ? (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-accent-cyan/40 group-hover:text-accent-cyan transition-colors">
                        <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Step Title */}
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-accent-cyan transition-colors mb-2 sm:mb-3 leading-snug min-h-0 sm:min-h-[2.75rem] flex items-center">
                    {step}
                  </h4>

                  {/* Step Description */}
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Structured milestone deliverable with client review.
                  </p>
                </div>

                {/* Bottom Milestone Footer */}
                <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-accent-cyan transition-colors mt-auto">
                  <span>Sprint 0{idx + 1}</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Frequently Asked Questions ── */}
      <section className="py-16 sm:py-24 bg-white/[0.01] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Heading + Sticky Support Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest">
                  <HelpCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  Technical Clarifications
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Frequently Asked Questions
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Everything you need to know about our {service.title.toLowerCase()} execution, IP ownership, delivery timelines, and SLAs.
                </p>
              </div>

              {/* Direct Technical Support Help Card */}
              <div className="glow-card rounded-3xl p-5 sm:p-8 border border-white/10 bg-gradient-to-b from-[#09152a] via-[#050b16] to-[#03060e] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      Have a specific question?
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      Can’t find what you’re looking for? Speak directly with our technical engineering leads for immediate answers.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="accent"
                      className="w-full justify-center text-xs py-3"
                    >
                      <span>Book Technical Sync</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Spaced Accordion Cards */}
            <div className="lg:col-span-7 space-y-4">
              {service.faqs.map((faq, idx) => (
                <FAQAccordion
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  index={idx}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Related Services ── */}
      <section className="py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest">Synergistic Capabilities</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Explore Related Solutions</h3>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono text-slate-400 hover:text-accent-cyan transition-colors uppercase tracking-wider sm:tracking-widest flex items-center gap-1.5"
            >
              <span>Full Catalogue</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {relatedServices.map((rel) => (
              <Link key={rel.slug} href={`/services/${rel.slug}`} className="block h-full group">
                <div className="glow-card rounded-3xl p-5 sm:p-8 border border-white/10 bg-gradient-to-b from-[#081020] to-[#040812] h-full flex flex-col justify-between hover:border-accent-cyan/40 transition-all duration-300 shadow-lg">
                  <div className="space-y-3 flex-grow flex flex-col justify-start mb-4 sm:mb-6">
                    <span className="text-[11px] font-mono text-accent-blue uppercase tracking-wider">
                      Related Service
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-cyan transition-colors min-h-0 sm:min-h-[2.5rem] flex items-center">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-accent-cyan group-hover:text-white transition-colors mt-auto">
                    <span>View Service Blueprint</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Call To Action ── */}
      <CTASection />
    </PageTransition>
  );
}
