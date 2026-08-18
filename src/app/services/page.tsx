"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Clock,
  Layers,
  Code2,
  Filter,
  Check,
  X,
  HelpCircle,
  MessageSquare
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import Button from "@/components/Button";
import { services } from "@/lib/services";

const categories = [
  { id: "all", label: "All Services", count: services.length },
  { id: "engineering", label: "Engineering & Apps", count: 5 },
  { id: "design", label: "Design & Brand", count: 2 },
  { id: "automation", label: "Automation & AI", count: 2 },
  { id: "growth", label: "Growth & QA", count: 3 },
];

const serviceGroups = [
  {
    label: "Engineering Stack",
    color: "text-accent-blue",
    dot: "bg-accent-blue",
    items: ["Web Development", "App Development", "Custom Software", "API Development"],
  },
  {
    label: "Design & Identity",
    color: "text-accent-purple",
    dot: "bg-accent-purple",
    items: ["UI/UX Design", "Logo & Branding"],
  },
  {
    label: "Automation & AI",
    color: "text-accent-cyan",
    dot: "bg-accent-cyan",
    items: ["Zoho CRM & Creator", "AI Integration"],
  },
  {
    label: "Quality & Scaling",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
    items: ["E-commerce", "CMS Development", "QA & Testing", "Maintenance"],
  },
];

const comparisonData = [
  { feature: "Avg. Delivery Speed", wft: "2–4 Weeks (Agile)", traditional: "2–4 Months", freelancers: "Unpredictable" },
  { feature: "Technology Stack", wft: "Next.js 15, React 19, Zoho, AWS", traditional: "Legacy PHP / WordPress", freelancers: "Varies Widely" },
  { feature: "Code & IP Ownership", wft: "100% Client Ownership", traditional: "Vendor Lock-In", freelancers: "Partial / Disputed" },
  { feature: "Dedicated Project Manager", wft: "Included on All Projects", traditional: "Extra Charge", freelancers: "No" },
  { feature: "Zoho Certified Integration", wft: "Native Deluge Experts", traditional: "Third-Party Plug", freelancers: "Rare" },
  { feature: "Post-Launch Support Desk", wft: "24/7 SLA Guarantee", traditional: "Retainer Ticket Only", freelancers: "No SLA" },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = services.filter((service) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "engineering") {
      return ["web-development", "app-development", "software-development", "api-development"].includes(service.slug);
    }
    if (selectedCategory === "design") {
      return ["ui-ux-design", "branding"].includes(service.slug);
    }
    if (selectedCategory === "automation") {
      return ["zoho-solutions", "ai-integration"].includes(service.slug);
    }
    if (selectedCategory === "growth") {
      return ["ecommerce", "software-testing", "cms-development", "maintenance"].includes(service.slug);
    }
    return true;
  });

  return (
    <PageTransition>
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
        {/* Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-accent-blue/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-purple/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        {/* Tech Grid */}
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

            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 border border-accent-blue/30 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-widest text-accent-cyan"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
                <span>Our Digital Capabilities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]"
              >
                End-to-End Digital Services{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                  Built for Scale
                </span>{" "}
                <span className="text-slate-400 font-light">&amp; Business Growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed"
              >
                From custom Next.js web applications and mobile platforms to certified Zoho CRM automation and AI integrations — we provide end-to-end engineering tailored for business ROI.
              </motion.p>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2"
              >
                {[
                  { value: "12", label: "Core Services", color: "text-sky-400", border: "border-sky-500/20", bg: "bg-sky-500/5" },
                  { value: "50+", label: "Projects Completed", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5" },
                  { value: "2–4wk", label: "Avg Sprint Cycle", color: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/5" },
                  { value: "100%", label: "Source Code IP", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/5" },
                ].map((s) => (
                  <div key={s.label} className={`p-3 sm:p-3.5 rounded-2xl border ${s.border} ${s.bg} backdrop-blur-md text-center`}>
                    <div className={`text-xl sm:text-2xl font-black font-mono ${s.color}`}>{s.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 font-medium">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
              >
                <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto justify-center gap-2 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button href="#catalogue" variant="secondary" size="lg" className="w-full sm:w-auto justify-center gap-2 border-white/15">
                  <span>Explore All Services</span>
                </Button>
              </motion.div>
            </div>

            {/* Right Interactive Group Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5 relative w-full max-w-full"
            >
              <div className="absolute inset-0 bg-accent-blue/10 rounded-3xl blur-3xl scale-105 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0b1528]/95 to-[#040812]/95 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-white/[0.03]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-slate-400">wft-solutions-matrix.v2</span>
                </div>

                {/* Groups */}
                <div className="p-4 sm:p-6 space-y-4">
                  {serviceGroups.map((group) => (
                    <div key={group.label} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                        <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest font-bold ${group.color}`}>
                          {group.label}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 sm:pl-4">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 font-mono hover:bg-white/[0.06] transition-colors"
                          >
                            <span className="truncate">{item}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 ml-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer bar */}
                <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-mono text-slate-400">Full IP Transfer Included</span>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Ready for Scope
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. Services Catalogue Section (With Category Filter) ── */}
      <section id="catalogue" className="py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Complete Services Catalogue"
            subtitle="Our Solutions"
            description="Filter through our specialized engineering, design, CRM automation, and maintenance solutions."
          />

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center sm:justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14 overflow-x-auto py-2 sm:pb-1 scrollbar-none snap-x snap-mandatory">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 whitespace-nowrap snap-start px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2 border ${isActive
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white border-transparent shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                    : "bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                    }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-500"
                      }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  title={service.title}
                  shortDesc={service.shortDesc}
                  iconName={service.icon}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Why Choose We For Technology (Comparison Matrix) ── */}
      <section className="py-16 sm:py-24 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            title="Why Leading Brands Choose We For Technology"
            subtitle="The Agency Difference"
            description="See how our modern engineering approach compares to traditional agencies and freelancers."
          />

          <div className="glow-card rounded-3xl border border-white/10 bg-gradient-to-br from-[#070f1f] via-[#09152b] to-[#040812] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto w-full max-w-full">
              <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-[650px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 sm:p-6 text-xs font-mono uppercase tracking-wider sm:tracking-widest text-slate-400">
                      Feature / Metric
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-mono uppercase tracking-wider sm:tracking-widest text-accent-cyan bg-accent-blue/10 border-x border-accent-blue/20">
                      ✨ We For Technology
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-mono uppercase tracking-wider sm:tracking-widest text-slate-400">
                      Traditional Agencies
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-mono uppercase tracking-wider sm:tracking-widest text-slate-400">
                      Freelancers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {comparisonData.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-white">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-6 font-mono text-emerald-400 bg-accent-blue/5 border-x border-accent-blue/20 font-semibold">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{row.wft}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-6 text-slate-400 font-light">
                        {row.traditional}
                      </td>
                      <td className="p-4 sm:p-6 text-slate-500 font-light">
                        {row.freelancers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA Section ── */}
      <CTASection />
    </PageTransition>
  );
}
