"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Calendar, Clock, ArrowRight, Check, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { jobOpenings } from "@/lib/careers";

export default function CareersPage() {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-hidden bg-gradient-to-b from-[#091122]/50 to-transparent">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
            Join We For Technology
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Build The Future <br />
            <span className="text-gradient-cyan">Of Digital Products.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate engineers, pixel-perfect designers, and customer-oriented business consultants to join our remote/hybrid teams.
          </p>
        </div>
      </section>

      {/* Job Openings List */}
      <section className="py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <SectionHeading
            title="Available Openings"
            subtitle="Careers"
            description="Select a role to inspect detailed specifications and application procedures."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="glow-card rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col justify-between h-full hover:border-accent-blue/25"
              >
                <div>
                  {/* Badge Row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-2.5 py-1 rounded-full">
                      {job.employmentType}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Exp: {job.experience}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{job.position}</h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-light mb-4">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{job.location}</span>
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                    {job.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveJobId(job.id)}
                    className="text-xs font-mono uppercase tracking-widest text-accent-blue hover:text-white transition-colors duration-300 flex items-center gap-1 cursor-pointer"
                  >
                    View Requirements <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Button href={`/contact?apply=${job.id}`} variant="outline" size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Modal */}
      <AnimatePresence>
        {activeJobId && (() => {
          const activeJob = jobOpenings.find((j) => j.id === activeJobId);
          if (!activeJob) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setActiveJobId(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-[#050b18] border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full relative space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveJobId(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-2.5 py-0.5 rounded-full">
                    {activeJob.employmentType}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">{activeJob.position}</h3>
                  <p className="text-xs text-slate-400 font-light mt-1">{activeJob.location}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider">
                    Role Requirements:
                  </h4>
                  <ul className="space-y-2">
                    {activeJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue text-[10px]">
                          ✓
                        </span>
                        <span className="text-xs text-slate-300 font-light leading-relaxed">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex gap-4">
                  <Button href={`/contact?apply=${activeJob.id}`} variant="accent" className="flex-grow py-3 justify-center">
                    Apply for this position
                  </Button>
                  <Button onClick={() => setActiveJobId(null)} variant="secondary">
                    Close
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
