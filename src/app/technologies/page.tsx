"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import TechnologyCard from "@/components/TechnologyCard";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { technologies } from "@/lib/technologies";

const divisions = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "Business Solutions",
  "AI"
] as const;

export default function TechnologiesPage() {
  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-hidden bg-gradient-to-b from-[#091122]/50 to-transparent">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
            Our Stack
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Robust Technologies <br />
            <span className="text-gradient-cyan">For Modern Engineering.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            We build using industry-standard framework models, reliable database clusters, automated CRM workflows, and modern intelligence APIs.
          </p>
        </div>
      </section>

      {/* Grid grouping by division */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {divisions.map((div) => {
            const group = technologies.filter((tech) => tech.category === div);
            if (group.length === 0) return null;

            return (
              <div key={div} className="space-y-6">
                {/* Category Header */}
                <div className="border-b border-white/5 pb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">{div}</h2>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    {group.length} {group.length === 1 ? "module" : "modules"}
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.map((tech, idx) => (
                    <TechnologyCard
                      key={tech.name}
                      name={tech.name}
                      category={tech.category}
                      description={tech.description}
                      iconName={tech.iconName}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
