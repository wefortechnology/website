"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 sm:py-4 bg-[#050b18]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            : "py-4 sm:py-5 bg-[#050b18]/60 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <Image
              src="/images/logo.svg"
              alt="We For Technology Logo"
              width={160}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full select-none ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button
                href="/contact"
                variant="accent"
                size="sm"
                className="gap-1"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#050b18] border-l border-white/10 flex flex-col z-[100] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Header inside drawer */}
              <div className="flex items-center justify-between p-6 shrink-0 bg-[#050b18] border-b border-white/5 z-10">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                  <Image
                    src="/images/logo.svg"
                    alt="We For Technology Logo"
                    width={140}
                    height={35}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable drawer body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col justify-between">
                {/* Nav Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`text-lg font-medium flex items-center justify-between py-2.5 border-b border-white/5 ${
                            isActive ? "text-accent-blue font-bold" : "text-slate-400"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-50" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Bottom Drawer CTA & Quick Contact */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <Button href="/contact" variant="accent" className="w-full gap-2 py-3.5 justify-center">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </Button>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    <a
                      href="tel:+918510070940"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-accent-cyan/40 transition-all"
                    >
                      📞 Call Us
                    </a>
                    <a
                      href="mailto:wefortechnology.ai@gmail.com"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-accent-purple/40 transition-all truncate"
                    >
                      ✉️ Email Us
                    </a>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] text-slate-500 font-mono">
                      © 2026 We For Technology
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
