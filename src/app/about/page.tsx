import { Target, Eye, Zap, Shield, TrendingUp, Clock, ArrowRight, Code2, Sparkles, CheckCircle2, Globe2, Check, Building2 } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { MotionDiv, MotionH1, MotionP } from "@/components/motion";
import PageTransition from "@/components/PageTransition";
import LiveClock from "./LiveClock";
import OfficeStatus from "./OfficeStatus";
import Button from "@/components/Button";
import MethodologyExplorer from "./MethodologyExplorer";

const values = [
  {
    name: "Engineering Precision",
    desc: "We build clean, scalable, and modular software architectures. Every line of code is optimized for long-term maintainability and high speed.",
    icon: Code2,
    gradient: "from-sky-500 to-blue-600",
    badge: "Code Quality"
  },
  {
    name: "Relentless Innovation",
    desc: "We continually explore state-of-the-art frameworks, cloud systems, and AI workflows to give our partners a distinct digital edge.",
    icon: Zap,
    gradient: "from-amber-400 to-orange-500",
    badge: "Future-Ready"
  },
  {
    name: "Radical Transparency",
    desc: "Direct communication with zero noise. From initial architecture diagrams to weekly sprint releases, you retain 100% visibility.",
    icon: Shield,
    gradient: "from-emerald-400 to-teal-500",
    badge: "Trust & NDA"
  },
  {
    name: "Business Impact",
    desc: "Technology is only as good as the revenue and efficiency it generates. We align development directly with your ROI and metrics.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-indigo-600",
    badge: "Growth First"
  },
];

const teamMembers = [
  {
    name: "Shri Krishna",
    role: "Founder & Managing Director",
    bio: "Visionary product strategist dedicated to solving operational bottlenecks. Shri leads client partnerships, system scoping, and global growth strategies.",
    image: "/images/team-founder.jpg",
    linkedin: "https://www.linkedin.com/company/wefortechnology",
    github: "https://github.com/wefortechnology/",
    skills: ["Product Strategy", "Enterprise Architecture", "Business Growth", "Zoho Ecosystem"]
  },
  {
    name: "Mahavir",
    role: "Chief Technology Officer",
    bio: "Ex-FAANG engineer specializing in ultra-fast Next.js applications, serverless cloud platforms, cyber security, and scalable DB schemas.",
    image: "/images/team-cto.jpg",
    linkedin: "https://www.linkedin.com/company/wefortechnology",
    github: "https://github.com/wefortechnology/",
    skills: ["Next.js 15", "TypeScript", "AWS Cloud", "System Design"]
  },
  {
    name: "Priya Patel",
    role: "Lead Zoho Architect",
    bio: "Certified Zoho Specialist with deep mastery over Deluge scripting, CRM automations, custom Creator apps, and cross-platform REST webhooks.",
    image: "/images/team-zoho-lead.jpg",
    linkedin: "https://www.linkedin.com/company/wefortechnology",
    github: "https://github.com/wefortechnology/",
    skills: ["Zoho One", "Deluge Logic", "API Webhooks", "CRM Automation"]
  }
];



const milestones = [
  {
    year: "2021",
    title: "We For Technology Established",
    desc: "Started operations in Ghaziabad with a core team of senior engineers focused on bespoke web engineering.",
    metric: "10+ Early Projects"
  },
  {
    year: "2022",
    title: "Zoho Practice Launch",
    desc: "Expanded services into full Zoho CRM, Deluge Scripting, and enterprise ERP workflow automation.",
    metric: "Certified Partnership"
  },
  {
    year: "2023",
    title: "Global Client Expansion",
    desc: "Grew operations to serve business partners across the US, UK, Middle East, and APAC regions.",
    metric: "35+ Global Clients"
  },
  {
    year: "2024+",
    title: "AI Integration & Enterprise Systems",
    desc: "Incorporated custom LLM integrations, automated data pipelines, and next-gen SaaS architectures.",
    metric: "50+ Successful Builds"
  }
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
        {/* Glowing Background Mesh */}
        <div className="absolute top-[-10%] left-[-5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-accent-blue/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-purple/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_85%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 border border-accent-blue/30 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-accent-cyan"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
                <span>About We For Technology</span>
              </MotionDiv>

              <MotionH1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1]"
              >
                We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                  Digital Authority
                </span>{" "}
                <br />
                <span className="text-slate-400 font-light">& Business Systems.</span>
              </MotionH1>

              <MotionP
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed"
              >
                We For Technology is an IT solutions agency based in Ghaziabad, India. We combine modern web engineering, custom application development, and certified Zoho CRM automation to help businesses scale globally.
              </MotionP>

              {/* Key Metrics Row */}
              <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2"
              >
                {[
                  { value: "50+", label: "Projects Delivered", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5" },
                  { value: "30+", label: "Global Clients", color: "text-sky-400", border: "border-sky-500/20", bg: "bg-sky-500/5" },
                  { value: "4+", label: "Years Experience", color: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/5" },
                  { value: "99%", label: "Client Satisfaction", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/5" },
                ].map((s) => (
                  <div key={s.label} className={`p-3 sm:p-3.5 rounded-2xl border ${s.border} ${s.bg} backdrop-blur-md text-center`}>
                    <div className={`text-xl sm:text-2xl font-black font-mono ${s.color}`}>{s.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
              >
                <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto justify-center gap-2 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button href="#team" variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 border-white/15">
                  <span>Meet Our Team</span>
                </Button>
              </MotionDiv>
            </div>

            {/* Right Glass Card Widget */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center w-full max-w-full overflow-hidden pt-4 lg:pt-0"
            >
              {/* Outer Glowing Ring */}
              <div className="absolute w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full border border-accent-blue/15 animate-[spin_90s_linear_infinite]" />
              <div className="absolute w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-accent-purple/20 animate-[spin_60s_linear_infinite_reverse]" />

              {/* Main Card */}
              <div className="dark-surface relative z-10 w-full max-w-md rounded-3xl bg-gradient-to-b from-[#0b1528]/95 to-[#050b14]/95 border border-white/15 backdrop-blur-2xl overflow-hidden">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-semibold" style={{ color: "#94A3B8" }}>wft-agency-status.v2</span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-6">
                  <div className="text-center space-y-1 py-2 bg-white/[0.02] rounded-2xl border border-white/5">
                    <p className="text-xs font-mono uppercase tracking-widest font-semibold" style={{ color: "#CBD5E1" }}>HEADQUARTERS</p>
                    <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight" style={{ color: "#FFFFFF" }}>Ghaziabad, India 🇮🇳</p>
                    <p className="text-xs font-mono font-medium" style={{ color: "#38BDF8" }}>Serving US • EU • APAC • India</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Core Stack", val: "Next.js 15", color: "text-sky-400" },
                      { label: "CRM System", val: "Zoho Certified", color: "text-purple-400" },
                      { label: "Sprint Delivery", val: "100% On-Time", color: "text-emerald-400" },
                      { label: "Support Desk", val: "24/7 Active", color: "text-amber-400" },
                    ].map((item) => (
                      <div key={item.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center">
                        <div className={`text-sm sm:text-base font-bold font-mono whitespace-nowrap ${item.color}`}>{item.val}</div>
                        <div className="text-[11px] font-mono mt-1 font-medium" style={{ color: "#CBD5E1" }}>
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/80 dark:bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                      </span>
                      <div>
                        <div className="text-xs font-bold font-mono text-white">Development Operations</div>
                        <div className="text-[11px] font-mono font-semibold text-emerald-300">All Systems 100% Operational</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  </div>
                </div>
              </div>
            </MotionDiv>

          </div>
        </div>
      </section>

      {/* ── 2. Mission & Vision Grid ── */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
                Strategic Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Merging Technical Mastery with Business Growth
              </h2>
              <p className="text-slate-300 font-light leading-relaxed text-base">
                At We For Technology, we don’t just build code—we design reliable digital workflows that eliminate operational friction and boost conversions. Whether it’s a high-converting web platform or an intricate Zoho CRM automation, our focus is delivering long-term ROI.
              </p>
              <p className="text-slate-400 font-light leading-relaxed text-sm">
                Our multi-disciplinary team brings together senior software engineers, frontend designers, certified Zoho specialists, and strategic project directors to deliver production-grade applications on schedule.
              </p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-6 space-y-6">
              {/* Mission */}
              <div className="glow-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-[#0c1629] to-[#040812] flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0 p-3.5 sm:p-4 rounded-xl bg-accent-blue/10 text-accent-cyan border border-accent-blue/20 h-fit w-fit">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    To construct scalable, secure, and intuitive software solutions that allow businesses to automate repetitive tasks, establish online dominance, and scale revenue effortlessly.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="glow-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-[#120c29] to-[#080412] flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0 p-3.5 sm:p-4 rounded-xl bg-accent-purple/10 text-accent-purple border border-accent-purple/20 h-fit w-fit">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    To be the global IT partner of choice for ambitious companies, recognized for our engineering precision, clean code standards, and transformative Zoho automation expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Engineering Values Section ── */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Pillars That Drive Our Engineering"
            subtitle="Core Values"
            description="Our non-negotiable principles for delivering software excellence across every project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <MotionDiv
                  key={val.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glow-card rounded-2xl p-8 flex flex-col justify-between border border-white/10 bg-gradient-to-b from-[#081020] to-[#030712] relative group hover:border-accent-blue/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {val.name}
                    </h3>
                    <p className="text-slate-300 font-light text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-accent-blue transition-colors">
                    <span>Verified Principle</span>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <MethodologyExplorer />

      {/* ── 5. Team Section ── */}
      <section id="team" className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="The Leadership & Engineers Behind We For Technology"
            subtitle="Our Team"
            description="Meet the core strategists, developers, and architects driving our software solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <MotionDiv
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glow-card rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#081020] dark:to-[#040812] flex flex-col group hover:border-[#008FE5]/40 dark:hover:border-accent-blue/30 transition-all duration-300 shadow-md dark:shadow-2xl"
              >
                {/* Image Frame */}
                <div className="relative h-80 w-full bg-slate-200 dark:bg-slate-900 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at We For Technology`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Social Overlays */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-all duration-300 shadow-sm"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white hover:border-slate-400 dark:hover:border-white/40 transition-all duration-300 shadow-sm"
                      aria-label={`${member.name} GitHub`}
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#0369A1] dark:text-accent-cyan uppercase tracking-widest">
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0A0F1E] dark:text-white">{member.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Milestones Section ── */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Evolution & Milestones"
            subtitle="Company Journey"
            description="How We For Technology grew from a focused developer team into an international IT solutions agency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <MotionDiv
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glow-card rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-[#081020] to-[#030712] relative space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 font-mono">
                      {m.year}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-lg bg-accent-blue/15 border border-accent-blue/30 text-accent-cyan whitespace-nowrap w-fit shadow-sm">
                      {m.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">{m.title}</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Ghaziabad HQ & Global Time Hub ── */}
      <section className="py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glow-card rounded-3xl p-5 sm:p-10 md:p-12 border border-white/10 bg-gradient-to-br from-[#070f1f] via-[#09152b] to-[#040812] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-accent-cyan text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <span>Headquartered in Ghaziabad, India</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Local Engineering Hub, <br className="hidden sm:inline" />Global Project Execution.
                </h2>

                <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base">
                  Operating out of Ghaziabad (NCR), India, our engineering team syncs development sprints to align seamlessly with time zones across North America, Europe, Middle East, and Asia-Pacific.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white">Timezone Sync</div>
                      <div className="text-xs text-slate-400">Overlap hours with US & EU Sprints</div>
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                    <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white">Full-Remote Sync</div>
                      <div className="text-xs text-slate-400">Slack, Teams, Zoom & Deluge Webhooks</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live IST Widget */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-black/50 border border-white/10 rounded-2xl p-5 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-2xl backdrop-blur-md w-full">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">
                    Ghaziabad Operational Time
                  </span>

                  <div className="space-y-1 w-full">
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-normal sm:tracking-wider whitespace-nowrap">
                      <LiveClock />
                    </div>
                    <div className="text-[11px] sm:text-xs text-accent-cyan font-mono">
                      Indian Standard Time (IST) • UTC+5:30
                    </div>
                  </div>

                  <OfficeStatus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Call To Action ── */}
      <CTASection />
    </PageTransition>
  );
}
