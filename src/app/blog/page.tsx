"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/lib/blog";

const categories = [
  "All",
  "Web Development",
  "AI",
  "Business Automation",
  "Technology",
  "E-commerce",
  "Zoho",
  "UI/UX"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-hidden bg-gradient-to-b from-[#091122]/50 to-transparent">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
            Insights
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            We For Technology <br />
            <span className="text-gradient-cyan">Knowledge Base & Articles.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Read engineering audits, workflow tips, low-code Deluge advice, and guides on optimization from our team.
          </p>
        </div>
      </section>

      {/* Categories chips */}
      <section className="py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 whitespace-nowrap snap-start px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-300 focus:outline-none select-none cursor-pointer ${
                  isActive
                    ? "bg-accent-blue text-white border-accent-blue shadow-[0_4px_12px_rgba(14,165,233,0.2)] font-semibold"
                    : "bg-white/5 text-slate-400 border-white/5 hover:text-white hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Posts List */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 font-mono">No articles found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, idx) => (
                  <motion.div
                    layout
                    key={post.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="glow-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5"
                  >
                    {/* Visual Placeholder Header */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/5 flex items-center justify-center p-6 select-none">
                      <div className="absolute inset-0 tech-grid opacity-20" />
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan bg-white/5 border border-white/10 px-3 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400">
                          By: {post.author.split(",")[0]}
                        </span>
                        <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-accent-blue group-hover:text-white flex items-center gap-1 transition-colors">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
