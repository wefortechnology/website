import { Sparkles, ArrowRight, Check, ShieldCheck, Clock, TrendingUp, Cpu, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { MotionDiv, MotionH1, MotionP } from "@/components/motion";
import PageTransition from "@/components/PageTransition";
import SolutionsViewer from "./SolutionsViewer";

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
    title: "Built for Business ROI",
    desc: "Architectures designed specifically to boost conversions and reduce costs.",
    color: "text-amber-400"
  }
];

export default function SolutionsPage() {
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

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">

              {/* Badge Header Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <MotionDiv
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 border border-accent-blue/30 text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-accent-cyan"
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse flex-shrink-0" />
                  <span>Tailored Solution Scopes</span>
                </MotionDiv>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span>Agile Architecture Ready</span>
                </div>
              </div>

              {/* Main Headline */}
              <MotionH1
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
              </MotionH1>

              {/* Subtitle Description */}
              <MotionP
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                We structure specialized engineering teams and cloud architectures tailored to address the exact scale, security, and automation demands of your organization.
              </MotionP>

              {/* Action Buttons */}
              <MotionDiv
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
              </MotionDiv>

              {/* Live Metric Stats Bar */}
              <MotionDiv
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
              </MotionDiv>

            </div>

            {/* Right Column: Solutions Capability Radar Glass Card */}
            <div className="lg:col-span-5 w-full">
              <MotionDiv
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
              </MotionDiv>
            </div>

          </div>
        </div>
      </section>

      <SolutionsViewer />

      {/* ── 3. Engineering Pillars Grid ── */}
      <section className="py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
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
