"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

        {/* Background Glowing Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-accent-blue/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-accent-purple/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left Column: Headline & Intro */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3.5 sm:space-y-4">
                <div>
                  <span className="inline-block text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-accent-cyan bg-accent-cyan/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-cyan/20 mb-2">
                    ✨ Get In Touch
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]">
                  Engineer High-Performance{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                    Systems Built to Scale.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  Have a web application scope, website wireframe, database bottleneck, or automated CRM question? Tell us about your goals, and let's construct a solution.
                </p>
              </div>

              {/* Quick Trust Indicators */}
              <div className="pt-2 sm:pt-4 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-lg sm:text-xl font-bold text-accent-cyan font-mono">24 Hours</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-light">Guaranteed SLA Response</div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-lg sm:text-xl font-bold text-accent-purple font-mono">100% IP</div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-light">Complete Code Ownership</div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 w-full">
              <Suspense fallback={<div className="text-center text-xs font-mono text-slate-500 py-8">Loading Form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

          </div>

          {/* ── 4-Column Info Cards Below Form ── */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Phone Support */}
            <div className="glow-card rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 bg-gradient-to-r from-[#081224]/80 to-[#040814]/80 hover:border-accent-blue/40 transition-all duration-300">
              <div className="p-2.5 sm:p-3 rounded-xl bg-accent-blue/15 text-accent-blue h-fit border border-accent-blue/30 flex-shrink-0">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Direct Phone</h4>
                <a href="tel:+918510070940" className="text-xs text-slate-300 font-mono hover:text-white transition-colors">
                  +91 8510070940
                </a>
              </div>
            </div>

            {/* Email Support */}
            <div className="glow-card rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 bg-gradient-to-r from-[#081224]/80 to-[#040814]/80 hover:border-accent-purple/40 transition-all duration-300">
              <div className="p-2.5 sm:p-3 rounded-xl bg-accent-purple/15 text-accent-purple h-fit border border-accent-purple/30 flex-shrink-0">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Engineering Desk</h4>
                <a href="mailto:wefortechnology.ai@gmail.com" className="text-xs text-slate-300 font-mono hover:text-white transition-colors break-all">
                  wefortechnology.ai@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glow-card rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 bg-gradient-to-r from-[#081224]/80 to-[#040814]/80 hover:border-accent-cyan/40 transition-all duration-300">
              <div className="p-2.5 sm:p-3 rounded-xl bg-accent-cyan/15 text-accent-cyan h-fit border border-accent-cyan/30 flex-shrink-0">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Corporate HQ</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  We For Technology <br />
                  Ghaziabad, UP, India
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="glow-card rounded-2xl p-4 sm:p-5 border border-white/10 flex gap-4 bg-gradient-to-r from-[#081224]/80 to-[#040814]/80 hover:border-emerald-500/40 transition-all duration-300">
              <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/15 text-emerald-400 h-fit border border-emerald-500/30 flex-shrink-0">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 flex items-center justify-between gap-1">
                  <span>Business Hours</span>
                  <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    24-HR SLA
                  </span>
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Mon – Sat: 10AM – 7PM (IST)
                </p>
              </div>
            </div>
          </div>

          {/* Social Channels Row */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <h4 className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider text-center sm:text-left">
              Connect on Corporate Channels
            </h4>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://www.linkedin.com/company/wefortechnology" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-white/10 transition-all duration-300">
                <svg className="w-4.5 sm:w-5 h-4.5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.762 1.75-1.762s1.75.789 1.75 1.762c0 .974-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/wefortechnology/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-white/10 transition-all duration-300">
                <svg className="w-4.5 sm:w-5 h-4.5 sm:h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://github.com/wefortechnology/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-white/10 transition-all duration-300">
                <svg className="w-4.5 sm:w-5 h-4.5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-white/10 transition-all duration-300">
                <svg className="w-4.5 sm:w-5 h-4.5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Engineering Service Commitments ── */}
      <section className="py-12 sm:py-20 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-mono text-accent-blue uppercase tracking-wider sm:tracking-widest bg-accent-blue/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-blue/20 mb-2">
                Client Commitments
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What You Can Expect From Us</h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Our engagement standards guarantee project security, clear communication, and rapid engineering execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "24-Hour Tech Response",
                desc: "Every inquiry receives a initial scope review and consultation response within 24 business hours.",
                color: "text-sky-400",
                border: "border-sky-500/20",
                icon: "⚡",
              },
              {
                title: "NDA Protection",
                desc: "We sign formal mutual non-disclosure agreements prior to reviewing proprietary project specifications.",
                color: "text-emerald-400",
                border: "border-emerald-500/20",
                icon: "🛡️",
              },
              {
                title: "Milestone Billing",
                desc: "Transparent sprint milestones linked directly to functional code deliverables and client demo signoffs.",
                color: "text-purple-400",
                border: "border-purple-500/20",
                icon: "🎯",
              },
              {
                title: "100% IP Transfer",
                desc: "Complete legal transfer of source code, repository control, and cloud infrastructure access upon completion.",
                color: "text-amber-400",
                border: "border-amber-500/20",
                icon: "🔑",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className={`glow-card rounded-2xl p-5 sm:p-6 border ${pillar.border} bg-gradient-to-b from-[#081224]/80 to-[#040814]/80 space-y-3 sm:space-y-4 hover:border-white/20 transition-all duration-300`}
              >
                <div className="text-2xl">{pillar.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Specialized Technical Desks ── */}
      <section className="py-12 sm:py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-mono text-accent-cyan uppercase tracking-wider sm:tracking-widest bg-accent-cyan/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-cyan/20 mb-2">
                Specialized Channels
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Direct Engineering Desks</h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              Reach out directly to specialized technical leads depending on your architecture requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                dept: "Web & Mobile Engineering",
                lead: "Full-Stack Development Desk",
                email: "wefortechnology.ai@gmail.com",
                tags: ["Next.js", "React Native", "PostgreSQL", "Node.js"],
              },
              {
                dept: "Zoho & Enterprise CRM Desk",
                lead: "Certified Deluge & Automation Desk",
                email: "wefortechnology.ai@gmail.com",
                tags: ["Zoho CRM", "Creator", "Deluge", "Webhooks"],
              },
              {
                dept: "AI & Cloud Infrastructure Desk",
                lead: "AI Systems & DevOps Desk",
                email: "wefortechnology.ai@gmail.com",
                tags: ["OpenAI API", "Pinecone", "AWS", "Vercel"],
              },
            ].map((desk, idx) => (
              <div
                key={idx}
                className="glow-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-[#081224] to-[#040814] space-y-5 sm:space-y-6 hover:border-accent-cyan/40 transition-all duration-300"
              >
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">{desk.dept}</h3>
                  <p className="text-xs text-slate-400 font-mono">{desk.lead}</p>
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-accent-cyan/20 w-fit break-all">
                  {desk.email}
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-white/5">
                  {desk.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Engagement & Consultation Roadmap ── */}
      <section className="py-12 sm:py-24 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-mono text-accent-purple uppercase tracking-wider sm:tracking-widest bg-accent-purple/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-purple/20 mb-2">
                Engagement Pipeline
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">How Our Engagement Process Works</h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">
              From your initial inquiry to project launch — a seamless 4-step collaborative journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Scope & Tech Audit",
                desc: "Submit your requirements or schedule a tech sync. Our senior architect reviews your wireframes, APIs, or database specs.",
                color: "text-sky-400",
                border: "border-sky-500/20",
              },
              {
                step: "02",
                title: "Architectural Proposal",
                desc: "We deliver a detailed scope manifest containing fixed-cost pricing, milestone deliverables, and exact turnaround timelines.",
                color: "text-emerald-400",
                border: "border-emerald-500/20",
              },
              {
                step: "03",
                title: "NDA & Sprint Kickoff",
                desc: "We sign mutual non-disclosure agreements, set up dedicated Slack/Jira channels, and onboard your dedicated lead engineers.",
                color: "text-purple-400",
                border: "border-purple-500/20",
              },
              {
                step: "04",
                title: "Iterative Launch",
                desc: "Bi-weekly sprint demos, continuous CI/CD deployment on staging URLs, final QA testing, and zero-downtime production deployment.",
                color: "text-amber-400",
                border: "border-amber-500/20",
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`glow-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border ${phase.border} bg-gradient-to-b from-[#081224] via-[#050b16] to-[#03060e] space-y-3 sm:space-y-4 hover:border-white/20 transition-all duration-300 shadow-xl`}
              >
                <div className={`text-2xl sm:text-3xl font-black font-mono ${phase.color}`}>{phase.step}</div>
                <h3 className="text-base sm:text-lg font-bold text-white">{phase.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Frequently Asked Questions (Contact & Engagement) ── */}
      <section className="py-12 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
          <div className="text-center space-y-2.5 sm:space-y-3">
            <div>
              <span className="inline-block text-[10px] sm:text-xs font-mono text-accent-blue uppercase tracking-wider sm:tracking-widest bg-accent-blue/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-blue/20 mb-2">
                Got Questions?
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">Engagement &amp; Inquiry FAQ</h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm max-w-xl mx-auto">
              Everything you need to know before initiating a project request with We For Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                q: "How fast can We For Technology start our project after scope agreement?",
                a: "Once the scope manifest is signed and sprint deposit confirmed, our engineering team kickstarts onboarding within 48 hours.",
              },
              {
                q: "Do you offer fixed-price projects or hourly rate engagements?",
                a: "We offer both! Scoped web/mobile platforms use fixed milestone pricing, while ongoing dev & maintenance use dedicated hourly/monthly sprints.",
              },
              {
                q: "What happens to our intellectual property (IP) and source code?",
                a: "You retain 100% legal ownership of all code, database schemas, and intellectual property. We transfer full git repository admin rights upon final milestone.",
              },
              {
                q: "How do you manage communication and timezone differences?",
                a: "We assign a dedicated English-fluent Technical Project Manager. We use Slack/Teams for daily async updates and schedule weekly live video syncs.",
              },
              {
                q: "Can We For Technology audit and modernize an existing legacy codebase?",
                a: "Yes. Our team specializes in refactoring legacy Next.js, React, Node.js, and Zoho Deluge codebases to improve performance, security, and scalability.",
              },
              {
                q: "Do you provide post-launch maintenance and SLA support?",
                a: "Absolutely. Every project includes 30 days of free post-launch bug fixes. We also offer ongoing monthly SLA maintenance packages for 99.9% uptime.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="glow-card rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-[#081224]/90 to-[#040814]/90 space-y-3 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-base font-bold text-white flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
