"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Code2, Database, Layers, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const methodologySteps = [
  {
    id: "scoping",
    number: "01",
    title: "Scoping & Architecture",
    subtitle: "Mapping Requirements to Systems",
    description: "We analyze operational bottlenecks, define tech requirements, create wireframes, and design clean database schemas before writing code.",
    icon: Layers,
    highlights: ["Detailed System Specs", "Database & API Schema", "Agile Roadmap Breakdown"]
  },
  {
    id: "development",
    number: "02",
    title: "Agile Development",
    subtitle: "High-Speed Sprints & Clean Code",
    description: "Using modern Next.js 15, React 19, and Zoho Creator Deluge, we develop modular codebases with weekly client check-ins.",
    icon: Code2,
    highlights: ["Modular React Components", "Optimized Deluge Scripts", "Continuous Integration"]
  },
  {
    id: "quality",
    number: "03",
    title: "Rigorous QA & Security",
    subtitle: "Performance & Security Audits",
    description: "Every build undergoes multi-device responsiveness testing, speed optimization, security checks, and cross-browser verification.",
    icon: Shield,
    highlights: ["95+ Lighthouse Score", "Role-Based Access Security", "Zero-Downtime Migration"]
  },
  {
    id: "deployment",
    number: "04",
    title: "Deployment & Scaling",
    subtitle: "Launch Support & Maintenance",
    description: "We deploy applications on Vercel or AWS, set up analytics, train team members, and deliver 24/7 post-launch technical support.",
    icon: Database,
    highlights: ["Automated CI/CD Deployment", "Team Training & Docs", "24/7 Technical Maintenance"]
  }
];

export default function MethodologyExplorer() {
  const [activeStep, setActiveStep] = useState(methodologySteps[0].id);

  const selectedStepObj = methodologySteps.find((s) => s.id === activeStep) || methodologySteps[0];

  return (
    <>
      {/* ── 4. Interactive Engineering Methodology ── */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="How We Deliver Projects On-Time"
            subtitle="Development Methodology"
            description="A structured 4-phase agile process designed to ensure clarity, quality, and fast execution."
          />

          {/* Steps Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-10">
            {methodologySteps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-3.5 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${isActive
                    ? "bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 border-accent-blue text-[#0A0F1E] dark:text-white shadow-md dark:shadow-[0_0_20px_rgba(14,165,233,0.2)] font-bold"
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                    }`}
                >
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#0369A1] dark:text-accent-cyan mb-0.5 sm:mb-1">{step.number}</div>
                  <div className="text-xs sm:text-base font-bold leading-tight">{step.title}</div>
                </button>
              );
            })}
          </div>

          {/* Tab Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStepObj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glow-card rounded-3xl p-5 sm:p-10 md:p-12 border border-white/10 bg-gradient-to-br from-[#081224] via-[#0b1830] to-[#040914]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                  {/* Clean Mobile Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-accent-blue/15 border border-accent-blue/30 text-xs font-mono font-bold text-accent-cyan">
                      Phase {selectedStepObj.number}
                    </span>
                    <span className="text-xs font-mono text-slate-300">
                      {selectedStepObj.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedStepObj.title}
                  </h3>

                  <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                    {selectedStepObj.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-3 pt-2">
                    {selectedStepObj.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center w-full">
                  <div className="w-full max-w-sm p-5 sm:p-8 rounded-2xl bg-black/40 border border-white/10 text-center space-y-4">
                    <selectedStepObj.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent-cyan mx-auto animate-pulse" />
                    <div className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest">
                      Deliverables Checklist
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-emerald-400">
                      Phase Approved & Verified
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
