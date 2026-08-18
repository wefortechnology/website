"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Code2 } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 w-full max-w-full">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-accent-cyan shadow-[0_4px_12px_rgba(34,211,238,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-accent-cyan" />
              <span>We For Technology</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-2xl"
            >
              Digital Solutions <br />
              <span className="text-gradient-cyan">That Build Brands.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-400 font-light max-w-xl leading-relaxed"
            >
              We design and develop high-performance websites, applications, and digital solutions that help businesses grow, scale, and stand out.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full"
            >
              <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto gap-2 justify-center">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                Explore Our Work
              </Button>
            </motion.div>

          </div>

          {/* Right Column: Visual Technology Element */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center py-6 lg:py-8 max-w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[280px] sm:max-w-md aspect-square my-2"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 sm:inset-10 rounded-full border border-double border-accent-blue/15 animate-[spin_40s_linear_infinite_reverse]" />

              {/* Floating UI Elements Mockup */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Center Sphere */}
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.15)] relative z-20 backdrop-blur-md">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-[#050b18]/85 border border-white/5 flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                    <Image
                      src="/images/logo.svg"
                      alt="We For Technology Logo"
                      width={120}
                      height={32}
                      className="h-5 sm:h-7 w-auto object-contain mb-1.5 sm:mb-2.5 animate-pulse"
                    />
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      SYSTEM_OK
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-accent-cyan">
                      PING: 12ms
                    </span>
                  </div>
                </div>

                {/* Floating Card 1: Console */}
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-1 right-0 sm:top-2 bg-[#091122]/95 border border-white/15 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-md z-30 flex items-start gap-2.5 w-44 sm:w-56 select-none"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-accent-blue/10 text-accent-blue shrink-0">
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-bold text-white font-mono">Deploy Pipeline</h4>
                    <p className="text-[9px] sm:text-[10px] text-emerald-400 font-mono mt-0.5">
                      status: success
                    </p>
                  </div>
                </motion.div>

                {/* Floating Card 2: Metrics */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-1 left-0 sm:bottom-2 bg-[#091122]/95 border border-white/15 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-md z-30 flex flex-col gap-1.5 sm:gap-2 w-40 sm:w-48 select-none"
                >
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Live Traffic
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono">99.8%</span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono">uptime</span>
                  </div>
                  {/* Miniature Sparkline */}
                  <div className="flex gap-1 items-end h-5 sm:h-6 pt-1">
                    <div className="w-full bg-accent-blue/20 rounded-t h-2" />
                    <div className="w-full bg-accent-blue/20 rounded-t h-4" />
                    <div className="w-full bg-accent-blue/40 rounded-t h-3" />
                    <div className="w-full bg-accent-blue/60 rounded-t h-5" />
                    <div className="w-full bg-accent-blue rounded-t h-6 animate-pulse" />
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
