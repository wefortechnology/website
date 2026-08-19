"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fade out after initial load
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      onAnimationComplete={() => setVisible(false)}
      className="fixed inset-0 bg-slate-50/95 dark:bg-[#030712]/95 backdrop-blur-xl z-[9999] flex flex-col items-center justify-center pointer-events-none overflow-hidden transition-colors duration-300"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/15 dark:bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-purple/15 dark:bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Central Glassmorphic Loader Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 p-8 rounded-3xl bg-white/90 dark:bg-gradient-to-b dark:from-[#0a1428]/90 dark:to-[#050b16]/90 border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center gap-6 max-w-xs w-full text-center"
      >
        {/* Brand Logo */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl blur-lg opacity-25 dark:opacity-30 animate-pulse" />
          <Image
            src="/images/logo.svg"
            alt="We For Technology Logo"
            width={160}
            height={40}
            className="h-9 w-auto object-contain relative z-10"
            priority
          />
        </div>

        {/* Dual Orbit Spinner */}
        <div className="relative w-12 h-12 flex items-center justify-center my-1">
          <div className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-white/10 border-t-accent-blue border-r-accent-cyan animate-spin" />
          <div className="absolute inset-1 rounded-full border-2 border-transparent border-b-accent-purple border-l-sky-400 animate-[spin_1.5s_linear_infinite_reverse]" />
        </div>

        {/* Animated Loading Text */}
        <div className="space-y-1.5 w-full">
          <motion.p
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider"
          >
            Initializing Experience...
          </motion.p>
          <div className="w-full h-1 bg-slate-200/80 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

