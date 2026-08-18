"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 relative z-10 pt-20 pb-8 overflow-hidden">
      {/* Footer background glow grid lines */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo.svg"
                alt="We For Technology Logo"
                width={180}
                height={45}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-slate-400 font-light max-w-sm leading-relaxed">
              We design and develop high-performance websites, applications, and custom digital solutions that help brands scale and stand out in the marketplace.
            </p>
            
            {/* Newsletter Form */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">
                Subscribe to our newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-all"
                  />
                </div>
                <Button type="submit" variant="accent" size="sm" className="px-4">
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-emerald-400 font-mono">
                  Thank you for subscribing!
                </p>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/wefortechnology" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.762 1.75-1.762s1.75.789 1.75 1.762c0 .974-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/wefortechnology/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300">
                <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://github.com/wefortechnology/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services/zoho-solutions" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Zoho Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services/software-testing" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Software Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Resources & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/blog" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-xs text-slate-400 hover:text-white transition-colors duration-200">
                  Process
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Contact</h4>
            <div className="space-y-1.5 text-xs text-slate-400 font-light leading-relaxed">
              <p className="text-slate-300 font-medium">We For Technology</p>
              <p>Ghaziabad, Uttar Pradesh, India</p>
              <p className="pt-1">
                <a href="tel:+918510070940" className="font-mono text-slate-300 hover:text-white transition-colors">
                  +91 8510070940
                </a>
              </p>
              <p>
                <a href="mailto:wefortechnology.ai@gmail.com" className="font-mono text-slate-300 hover:text-white transition-colors break-all">
                  wefortechnology.ai@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            © 2026 We For Technology. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="text-xs text-slate-500 hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
