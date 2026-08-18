"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { faqs } from "@/lib/faqs";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-hidden bg-gradient-to-b from-[#091122]/50 to-transparent">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
            FAQ Helpdesk
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Frequently Asked <br />
            <span className="text-gradient-cyan">Questions & Answers.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Find immediate answers on scoping fees, timelines, deployment, domain setup guidelines, Zoho CRM connectors, and support levels.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-12 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glow-card rounded-2xl p-6 md:p-10 border border-white/5 divide-y divide-white/5">
            {faqs.map((faq, idx) => (
              <FAQAccordion
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
