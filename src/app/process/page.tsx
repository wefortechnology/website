"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";

export default function ProcessPage() {
  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-hidden bg-gradient-to-b from-[#091122]/50 to-transparent">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
            Our Flow
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Our Structured Development <br />
            <span className="text-gradient-cyan">Lifecycle Timeline.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            We follow a standardized, agile development method to build software from concept definition, UI blueprints, core development, test audits, to cloud deployments.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative z-10">
        <Timeline />
      </section>

      {/* Extra Details */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glow-card rounded-2xl p-8 md:p-10 border border-white/5 space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">
              Agile Iteration & Client Sync
            </h3>
            <p className="text-slate-400 font-light text-center leading-relaxed max-w-2xl mx-auto">
              Our process is designed for constant progress. We set up weekly milestone checks, maintain interactive boards where clients track tickets, and issue demo releases after each iteration to get your approval before moving to the next module.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
