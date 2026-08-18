"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Star, Layers } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import Button from "@/components/Button";
import { portfolioItems } from "@/lib/portfolio";

const categories = ["All", "Websites", "Apps", "E-commerce", "Software", "UI/UX", "Zoho", "AI"];

const industries = [
  "Fintech", "Healthcare", "Real Estate", "Fashion & Retail",
  "HR & Operations", "Logistics", "EdTech", "Legal",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => {
        if (selectedCategory === "Websites")
          return item.category === "Websites" || item.category === "E-commerce";
        return item.category.toLowerCase() === selectedCategory.toLowerCase();
      });

  return (
    <PageTransition>

      {/* ── Portfolio Hero ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
        {/* Aurora blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-accent-blue/[0.07] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-accent-purple/[0.08] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.13]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_85%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left */}
            <div className="space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-accent-blue"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse flex-shrink-0" />
                Case Studies
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]"
              >
                Products Engineered for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                  High Performance
                </span>{" "}
                <span className="text-slate-400 font-light">&amp; Real Impact.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-lg text-slate-300 font-light max-w-lg leading-relaxed"
              >
                From fintech dashboards and AI assistants to Zoho field apps and luxury storefronts — browse real engineering work we have shipped for real clients.
              </motion.p>

              {/* Stat pills */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
              >
                {[
                  { icon: Layers, value: "9+", label: "Case Studies", color: "text-sky-400", border: "border-sky-500/20", bg: "bg-sky-500/5" },
                  { icon: TrendingUp, value: "30+", label: "Clients", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5" },
                  { icon: Star, value: "4.9", label: "Avg Rating", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/5" },
                  { icon: Clock, value: "3wk", label: "Avg Delivery", color: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/5" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border ${s.border} ${s.bg} backdrop-blur-sm`}>
                      <Icon className={`w-3.5 h-3.5 ${s.color} flex-shrink-0`} />
                      <span className={`text-xs sm:text-sm font-bold font-mono ${s.color}`}>{s.value}</span>
                      <span className="text-[10px] sm:text-xs text-slate-400">{s.label}</span>
                    </div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full"
              >
                <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto justify-center gap-2 shadow-[0_0_28px_rgba(14,165,233,0.2)]">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button href="/services" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                  <span>View Services</span>
                </Button>
              </motion.div>
            </div>

            {/* Right: Live metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative w-full max-w-full"
            >
              <div className="absolute inset-0 bg-accent-purple/8 rounded-3xl blur-3xl scale-105 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#070f1f]/90 backdrop-blur-xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[10px] sm:text-[11px] font-mono text-slate-500 truncate">wft.portfolio — 9 case studies</span>
                </div>

                {/* Metrics grid */}
                <div className="p-4 sm:p-5 space-y-3.5 sm:space-y-4">
                  {[
                    { label: "Avg Performance Gain", value: "+280%", color: "text-emerald-400", bar: "bg-emerald-400", pct: 78 },
                    { label: "Support Tickets Dropped", value: "−62%", color: "text-accent-blue", bar: "bg-accent-blue", pct: 62 },
                    { label: "Mobile Sales Lift", value: "+85%", color: "text-accent-purple", bar: "bg-accent-purple", pct: 45 },
                    { label: "Avg Lead Response Time", value: "4 min", color: "text-yellow-400", bar: "bg-yellow-400", pct: 90 },
                  ].map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] sm:text-xs text-slate-400 font-mono">{metric.label}</span>
                        <span className={`text-xs sm:text-sm font-black font-mono ${metric.color}`}>{metric.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.pct}%` }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${metric.bar}`}
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Recent deliveries */}
                  <div className="pt-2 border-t border-white/5 space-y-2">
                    <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Recent Deliveries</p>
                    {["NexaHR SaaS Portal", "PropertyPro Portal", "SwiftOps Field App"].map((name, i) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="text-xs font-mono text-slate-300">{name}</span>
                        <span className="ml-auto text-[10px] font-mono text-emerald-400">✓ Live</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="px-4 sm:px-5 py-2.5 sm:py-3 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-600">VERIFIED RESULTS</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-mono text-accent-cyan">WE FOR TECHNOLOGY PORTFOLIO</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Filter Categories ── */}
      <section className="py-5 sm:py-6 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2.5 sm:pb-0 scrollbar-none snap-x snap-mandatory">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 whitespace-nowrap snap-start px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest border transition-all duration-300 focus:outline-none select-none cursor-pointer ${isActive
                    ? "bg-accent-blue text-white border-accent-blue shadow-[0_4px_12px_rgba(14,165,233,0.2)] font-semibold"
                    : "bg-white/5 text-slate-400 border-white/5 hover:text-white hover:border-white/10"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="py-10 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 font-mono">No matching case studies found.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                  >
                    <PortfolioCard
                      slug={item.slug}
                      title={item.title}
                      category={item.category}
                      subTitle={item.subTitle}
                      technologies={item.technologies}
                      index={idx}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Industries Served ── */}
      <section className="py-12 sm:py-16 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 space-y-2">
            <p className="text-xs font-mono text-accent-blue uppercase tracking-wider sm:tracking-widest">Domains We Serve</p>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Industries We&apos;ve Built For</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-slate-300 font-medium hover:border-accent-blue/30 hover:text-white transition-colors"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </PageTransition>
  );
}
