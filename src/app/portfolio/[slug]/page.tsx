import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle, TrendingUp, Cpu } from "lucide-react";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { portfolioItems } from "@/lib/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects (2 other items)
  const relatedProjects = portfolioItems
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  // Generate distinct colors for visual indicators
  const isZoho = project.category === "Zoho";
  const isAI = project.category === "AI";
  const isSoftware = project.category === "Software";
  const accentColor = isZoho ? "text-amber-400" : isAI ? "text-accent-cyan" : "text-accent-blue";

  return (
    <PageTransition>
      {/* ── Hero Section ── */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden w-full max-w-full">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-5%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent-blue/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-accent-purple/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

        {/* Tech Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_85%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          
          {/* Top Symmetrical Navigation Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-white/5 mb-8 sm:mb-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-accent-cyan transition-colors uppercase tracking-wider sm:tracking-widest group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Case Studies</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono text-slate-400">Category:</span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">
                {project.category}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  Verified Case Study
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]">
                  {project.title}
                </h1>
                
                <p className="text-sm sm:text-lg text-slate-300 font-light leading-relaxed">
                  {project.subTitle}
                </p>
              </div>

              {/* Technologies Deployed */}
              <div className="space-y-2.5 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest block">
                  Technologies Deployed:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] sm:text-xs font-mono bg-white/[0.04] border border-white/10 text-accent-cyan px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-1 w-full">
                <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto justify-center">
                  <span>Replicate Similar Solution</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button href="/services" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                  <span>View Technical Stack</span>
                </Button>
              </div>

              {/* Metric Highlights Pill Bar */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-white/5">
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-sky-500/5 border border-sky-500/20 backdrop-blur-md text-center lg:text-left">
                  <div className="text-base sm:text-2xl font-black font-mono text-sky-400">Agile</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Sprint Delivery</div>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md text-center lg:text-left">
                  <div className="text-base sm:text-2xl font-black font-mono text-emerald-400">+280%</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Measured Growth</div>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-purple-500/5 border border-purple-500/20 backdrop-blur-md text-center lg:text-left">
                  <div className="text-base sm:text-2xl font-black font-mono text-purple-400">100% IP</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Code Transfer</div>
                </div>
              </div>

            </div>

            {/* Right Column: High-Fidelity Engineering Manifest Card */}
            <div className="lg:col-span-5 w-full">
              <div className="glow-card rounded-3xl p-5 sm:p-8 border border-white/10 bg-gradient-to-b from-[#09152a] via-[#050b16] to-[#03060e] shadow-2xl space-y-4 sm:space-y-6 relative overflow-hidden select-none">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Window Bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5 sm:pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest truncate">
                    {project.slug}.manifest
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono">
                    <span className="text-slate-400">System Status:</span>
                    <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                      DEPLOYED &amp; OPTIMIZED
                    </span>
                  </div>

                  {/* Architecture Metrics */}
                  <div className="space-y-2 bg-white/[0.02] border border-white/5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">System Uptime</span>
                      <span className="text-sky-400 font-bold">99.99% SLA</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Average Latency</span>
                      <span className="text-emerald-400 font-bold">~18ms</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Security Audit</span>
                      <span className="text-purple-400 font-bold">PASSED (SOC-2)</span>
                    </div>
                  </div>
                </div>

                {/* Key Deliverables Summary */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest block mb-1.5 sm:mb-2">
                    Delivered Outcomes
                  </span>
                  {project.results.slice(0, 3).map((res, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{res}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Sign-off */}
                <div className="pt-3.5 sm:pt-4 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
                  <span>WE FOR TECHNOLOGY BUILD</span>
                  <span className="text-accent-cyan font-bold">100% SUCCESS RATE</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Breakdown Section ── */}
      <section className="py-12 sm:py-20 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Left Col: Problem, Solution, Challenges */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-12">
              
              {/* Problem */}
              <div className="glow-card rounded-3xl p-5 sm:p-8 border border-rose-500/20 bg-rose-500/[0.02] space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2.5 sm:gap-3">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 flex-shrink-0" />
                  <span>The Client's Challenge</span>
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-xs sm:text-base">
                  {project.clientProblem}
                </p>
              </div>

              {/* Our Solution */}
              <div className="glow-card rounded-3xl p-5 sm:p-8 border border-emerald-500/20 bg-emerald-500/[0.02] space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                  <span>Our Technological Solution</span>
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-xs sm:text-base">
                  {project.ourSolution}
                </p>
              </div>

              {/* Technical Challenges */}
              <div className="glow-card rounded-3xl p-5 sm:p-8 border border-purple-500/20 bg-purple-500/[0.02] space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2.5 sm:gap-3">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                  <span>Engineering Challenges Overcome</span>
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-xs sm:text-base">
                  {project.challenges}
                </p>
              </div>

            </div>

            {/* Right Col: Features & Results */}
            <div className="lg:col-span-4 space-y-6 sm:space-y-8">
              
              {/* Deliverables Panel */}
              <div className="glow-card rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 space-y-4 sm:space-y-6 bg-gradient-to-b from-[#081224] to-[#040914]">
                <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/5 pb-3 sm:pb-4">
                  Implemented Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                        <ChevronRight className="w-3 h-3" />
                      </span>
                      <span className="text-xs font-light text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results Panel */}
              <div className="glow-card rounded-3xl p-5 sm:p-6 md:p-8 border border-emerald-500/20 space-y-4 sm:space-y-6 bg-emerald-500/[0.03]">
                <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/5 pb-3 sm:pb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                  <span>Measured Business Impact</span>
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-[10px]">
                        ✓
                      </span>
                      <span className="text-xs font-medium text-slate-200 leading-relaxed">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Architectural Execution Roadmap (4-Step Pipeline) ── */}
      <section className="py-12 sm:py-20 relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <span className="inline-block text-[10px] sm:text-xs font-mono text-accent-cyan uppercase tracking-wider sm:tracking-widest bg-accent-cyan/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-cyan/20 mb-2">
              Execution Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Delivered This Solution</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Our 4-phase agile engineering methodology ensured continuous delivery, rigorous testing, and flawless deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Architectural Audit",
                desc: "Deep analysis of existing legacy workflows, data schemas, API rate limits, and compliance demands.",
                color: "text-sky-400",
                border: "border-sky-500/20",
              },
              {
                step: "02",
                title: "Core System Design",
                desc: "Structuring high-frequency database schemas, caching layers, and modular UI component libraries.",
                color: "text-emerald-400",
                border: "border-emerald-500/20",
              },
              {
                step: "03",
                title: "Agile Development",
                desc: "Iterative 2-week coding sprints with continuous integration testing and client demonstration demos.",
                color: "text-purple-400",
                border: "border-purple-500/20",
              },
              {
                step: "04",
                title: "Production Launch",
                desc: "Zero-downtime deployment, data migration, security penetration testing, and team training sessions.",
                color: "text-amber-400",
                border: "border-amber-500/20",
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`glow-card rounded-2xl p-5 sm:p-6 border ${phase.border} bg-white/[0.02] space-y-3 sm:space-y-4 hover:bg-white/[0.04] transition-all`}
              >
                <div className={`text-2xl sm:text-3xl font-black font-mono ${phase.color}`}>{phase.step}</div>
                <h3 className="text-base sm:text-lg font-bold text-white">{phase.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Specifications Grid ── */}
      <section className="py-12 sm:py-20 relative z-10 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
              <div>
                <span className="inline-block text-[10px] sm:text-xs font-mono text-accent-blue uppercase tracking-wider sm:tracking-widest bg-accent-blue/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-blue/20 mb-2">
                  Technical Blueprint
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Architectural Specifications &amp; SLA Performance
              </h2>
              <p className="text-slate-400 font-light leading-relaxed text-xs sm:text-sm">
                Every project we ship is backed by enterprise-grade infrastructure standards, sub-second SLAs, and clean documentation to ensure smooth long-term maintenance.
              </p>
              <Button href="/contact" variant="accent" className="w-full sm:w-auto justify-center">
                <span>Discuss Your Technical Requirements</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { title: "Frontend Architecture", detail: "React 19 / Next.js 16 / TypeScript / Tailwind CSS" },
                { title: "Backend & Automation", detail: "Node.js / Deluge Scripting / REST & Webhooks" },
                { title: "Database & Caching", detail: "PostgreSQL / Redis Cache / Vector Storage" },
                { title: "Security Protocols", detail: "SSL Encryption / OAuth 2.0 / SOC-2 Compliant" },
                { title: "Performance SLA", detail: "Sub-50ms API Latency & 99.99% Uptime Guarantee" },
                { title: "IP & Source Code", detail: "100% Repository Transfer & Full Documentation" },
              ].map((spec, i) => (
                <div key={i} className="glow-card p-4 sm:p-5 rounded-2xl border border-white/10 bg-[#070f1f]/90 space-y-1.5">
                  <div className="text-xs font-mono text-accent-cyan font-semibold">{spec.title}</div>
                  <div className="text-xs text-slate-300 font-light leading-relaxed">{spec.detail}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">Other Case Studies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            {relatedProjects.map((rel) => (
              <Link key={rel.slug} href={`/portfolio/${rel.slug}`} className="block group">
                <div className="glow-card rounded-2xl p-5 sm:p-6 border border-white/5 flex flex-col justify-between h-full hover:border-accent-blue/30">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                      {rel.subTitle}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue flex items-center gap-1 group-hover:text-white transition-colors">
                    View Case Study <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
