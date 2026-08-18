"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { pricingPackages, pricingDisclaimers } from "@/lib/pricing";
import { AlertCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <PageTransition>
      {/* ── 1. Hero Section ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden w-full max-w-full">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-5%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent-blue/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-accent-purple/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

        {/* Tech Mesh Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_85%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3.5 sm:space-y-4 relative z-10">
          <div>
            <span className="inline-block text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider sm:tracking-widest text-accent-cyan bg-accent-cyan/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-cyan/20 mb-2">
              ✨ Investment Scopes
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.15]">
            Transparent Pricing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Tailored to Your Exact
            </span>{" "}
            <span className="text-slate-400 font-light">Project Scope.</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            We provide clear, fixed-scope deliverables for our engineering sprints. Choose a package baseline or request a custom milestone-based scope quote.
          </p>
        </div>
      </section>

      {/* ── 2. Pricing Cards Grid ── */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {pricingPackages.map((pkg, idx) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                badge={pkg.badge}
                description={pkg.description}
                features={pkg.features}
                ctaText={pkg.ctaText}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Scope Deliverables Comparison Matrix ── */}
      <section className="py-12 sm:py-20 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          <div className="text-center space-y-2 sm:space-y-3">
            <span className="inline-block text-[10px] sm:text-xs font-mono text-accent-blue uppercase tracking-wider sm:tracking-widest bg-accent-blue/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-accent-blue/20 mb-2">
              Scope Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Compare Package Features</h2>
            <p className="text-slate-400 font-light text-xs sm:text-sm">Detailed technical capabilities included per scope tier.</p>
          </div>

          <div className="glow-card rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#070f1f]/90 backdrop-blur-xl shadow-2xl">
            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 sm:p-6 text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">Features</th>
                    <th className="p-4 sm:p-6 text-[10px] sm:text-xs font-mono text-sky-400 uppercase tracking-wider">Basic MVP</th>
                    <th className="p-4 sm:p-6 text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider">Standard Growth</th>
                    <th className="p-4 sm:p-6 text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider">Enterprise Custom</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm text-slate-300">
                  {[
                    { feature: "Included Custom Pages", basic: "Up to 5 Pages", std: "Up to 12 Pages", ent: "Unlimited Scoped Pages" },
                    { feature: "Tech Stack", basic: "Next.js & React", std: "Next.js + Sanity CMS", ent: "Custom Microservices / Deluge" },
                    { feature: "Database & APIs", basic: "Basic Contact API", std: "REST API + PostgreSQL", ent: "Multi-tenant / Real-time WebSockets" },
                    { feature: "Third-Party CRM / AI", basic: "Optional Add-on", std: "Zoho CRM / Google Analytics", ent: "OpenAI RAG / Zoho Deluge Scripts" },
                    { feature: "Average Turnaround", basic: "2 Weeks", std: "3–4 Weeks", ent: "Dedicated Sprint Cycles" },
                    { feature: "Code IP Ownership", basic: "100% IP Transfer", std: "100% IP Transfer", ent: "100% IP Transfer + SLA" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-6 font-medium text-white">{row.feature}</td>
                      <td className="p-4 sm:p-6 text-slate-400 font-mono">{row.basic}</td>
                      <td className="p-4 sm:p-6 text-emerald-400 font-mono font-semibold">{row.std}</td>
                      <td className="p-4 sm:p-6 text-purple-400 font-mono font-semibold">{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Disclaimers & Transparency Section ── */}
      <section className="py-12 sm:py-16 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glow-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/10 space-y-4 sm:space-y-6 bg-gradient-to-b from-[#081224] to-[#040914]">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5 sm:gap-3">
              <AlertCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
              <span>Hosting &amp; Third-Party Service Transparency</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              To guarantee that our clients maintain 100% legal ownership and control over their digital infrastructure, the following services are billed separately and paid directly to their respective providers depending on project requirements:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              {pricingDisclaimers.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-slate-300 font-mono bg-white/[0.02] p-3 sm:p-3.5 rounded-xl border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
