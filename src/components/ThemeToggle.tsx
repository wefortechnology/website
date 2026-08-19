"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 ${className}`} />
    );
  }

  const isDark = (theme === "dark" || resolvedTheme === "dark");

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative p-2 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AAFF] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0A0F1E] ${
        isDark
          ? "bg-white/10 border-white/15 text-yellow-400 hover:bg-white/20 hover:border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.2)]"
          : "bg-slate-900/10 border-slate-900/15 text-slate-800 hover:bg-slate-900/20 hover:border-slate-800/40 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
      } ${className}`}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.3)]" />
        )}
      </motion.div>
    </motion.button>
  );
}
