"use client";

import { motion } from "framer-motion";
import {
  Compass,
  FileText,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";

interface TimelineStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const steps: TimelineStep[] = [
  {
    step: "Step 1",
    title: "Discover",
    desc: "We analyze your business context, audit target users, define challenges, and formulate solid technological goals.",
    icon: Compass,
  },
  {
    step: "Step 2",
    title: "Plan",
    desc: "We construct a comprehensive software blueprint, roadmap architecture, wireframes, and project timeline logs.",
    icon: FileText,
  },
  {
    step: "Step 3",
    title: "Design",
    desc: "We establish visual guidelines and create high-fidelity UI/UX mockups in Figma, focusing on clarity and conversion.",
    icon: Palette,
  },
  {
    step: "Step 4",
    title: "Develop",
    desc: "We translate specifications into clean codebases utilizing Next.js, APIs, Zoho modules, or custom databases.",
    icon: Code2,
  },
  {
    step: "Step 5",
    title: "Test",
    desc: "We run automated scripts and perform manual audits spanning security, performance, responsive layouts, and cross-browser consistency.",
    icon: ShieldCheck,
  },
  {
    step: "Step 6",
    title: "Launch",
    desc: "We deploy applications on CDNs/cloud systems, configure DNS records, verify SSL setups, and launch database backups.",
    icon: Rocket,
  },
  {
    step: "Step 7",
    title: "Support",
    desc: "We provide active maintenance packages, uptime alerts, security checks, and developer hours for future upgrades.",
    icon: LifeBuoy,
  },
];

const lineGradients = [
  { top: "bg-gradient-to-b from-accent-blue/30 to-accent-blue/30", bottom: "bg-gradient-to-b from-accent-blue/30 to-accent-purple/30" },
  { top: "bg-gradient-to-b from-accent-blue/30 to-accent-purple/30", bottom: "bg-gradient-to-b from-accent-purple/30 to-accent-cyan/30" },
  { top: "bg-gradient-to-b from-accent-purple/30 to-accent-cyan/30", bottom: "bg-gradient-to-b from-accent-cyan/30 to-accent-blue/30" },
  { top: "bg-gradient-to-b from-accent-cyan/30 to-accent-blue/30", bottom: "bg-gradient-to-b from-accent-blue/30 to-accent-purple/30" },
  { top: "bg-gradient-to-b from-accent-blue/30 to-accent-purple/30", bottom: "bg-gradient-to-b from-accent-purple/30 to-accent-cyan/30" },
  { top: "bg-gradient-to-b from-accent-purple/30 to-accent-cyan/30", bottom: "bg-gradient-to-b from-accent-cyan/30 to-accent-blue/30" },
  { top: "bg-gradient-to-b from-accent-cyan/30 to-accent-blue/30", bottom: "bg-gradient-to-b from-accent-blue/30 to-accent-blue/30" },
];

export default function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 overflow-hidden">
      <div className="space-y-16">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={step.step}
              className={`flex flex-col md:flex-row items-start ${
                isEven ? "md:flex-row-reverse" : ""
              } relative`}
            >
              {/* Segmented Timeline Line */}
              {idx > 0 && (
                <div className={`absolute left-8 md:left-1/2 -top-16 bottom-1/2 w-[2px] -translate-x-1/2 ${lineGradients[idx].top} pointer-events-none z-10`} />
              )}
              {idx < steps.length - 1 && (
                <div className={`absolute left-8 md:left-1/2 top-1/2 bottom-0 w-[2px] -translate-x-1/2 ${lineGradients[idx].bottom} pointer-events-none z-10`} />
              )}

              {/* Spacer on desktop */}
              <div className="hidden md:block w-1/2 px-12" />

              {/* Central Glowing Icon Node */}
              <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-dark-bg border-2 border-accent-blue/40 dark:border-accent-blue/30 flex items-center justify-center text-[#008FE5] dark:text-accent-blue shadow-xs dark:shadow-[0_0_15px_rgba(14,165,233,0.15)] z-20 group">
                <div className="absolute inset-0.5 rounded-full bg-accent-blue/10 dark:bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <IconComponent className="w-5 h-5 relative z-10" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`w-full md:w-1/2 pl-16 z-10 ${
                  isEven ? "md:pl-0 md:pr-12" : "md:pl-12 md:pr-0"
                }`}
              >
                <div className="glow-card rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-white/5 bg-white dark:bg-dark-card/60 relative">
                  <span className="text-xs font-mono text-[#008FE5] dark:text-accent-cyan uppercase tracking-widest block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-[#0A0F1E] dark:text-white mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

