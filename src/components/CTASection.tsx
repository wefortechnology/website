"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import TrackedLink from "./TrackedLink";
import QuickEnquiryForm from "./QuickEnquiryForm";
import { whatsappUrl } from "@/lib/site";
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Clock, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export default function CTASection({
  description = "We design and develop custom websites, high-performance applications, and tailored CRM workflows that scale business brands.",
  primaryCtaText = "Get a Free Consultation",
  secondaryCtaText = "Chat on WhatsApp",
}: CTASectionProps) {
  return (
    <section className="relative py-16 sm:py-28 overflow-hidden">
      {/* Background Orbs & Aurora Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-r from-accent-blue/15 via-accent-purple/15 to-accent-cyan/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="no-hover rounded-3xl p-5 sm:p-12 md:p-16 border border-white/10 bg-gradient-to-br from-[#060c1a]/95 via-[#0b1528]/95 to-[#030712]/95 text-center relative overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
        >
          {/* Subtle top border glowing gradient line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-cyan via-accent-blue via-accent-purple to-transparent opacity-80" />

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[11px] sm:text-xs font-semibold uppercase text-accent-cyan mb-5 sm:mb-6 max-w-full"
          >
            <Zap className="w-3.5 h-3.5 text-accent-cyan animate-pulse flex-shrink-0" />
            <span className="tracking-wide sm:tracking-[0.12em]">Ready To Accelerate Your Growth?</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-tight mb-5 sm:mb-6 leading-tight max-w-4xl mx-auto">
            Have an idea? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Let’s turn it into reality.
            </span>
          </h2>

          <p className="text-xs sm:text-lg text-slate-300 font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            {description}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full">
            <Button
              href="/contact?ref=consultation"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold shadow-[0_6px_20px_-6px_rgba(3,105,161,0.35)] hover:shadow-[0_10px_24px_-8px_rgba(3,105,161,0.4)] transition-all duration-300 justify-center"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Button>
            <TrackedLink
              event="whatsapp_click"
              location="cta-section"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-slate-800 hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{secondaryCtaText}</span>
            </TrackedLink>
          </div>

          {/* Quick enquiry form */}
          <div className="mx-auto mb-8 sm:mb-12 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
            <p className="text-base font-semibold text-slate-900">Prefer a call back?</p>
            <p className="mt-1 mb-4 text-sm text-slate-600">
              Leave your details and we&apos;ll call you within one business day.
            </p>
            <QuickEnquiryForm />
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 max-w-3xl mx-auto text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>24hr Inquiry Response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
              <span>Strict NDA Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple flex-shrink-0" />
              <span>Flexible Agile Sprints</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

