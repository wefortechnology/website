"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems } from "@/lib/portfolio";

const categories = ["All", "Websites", "Apps", "E-commerce", "Software", "UI/UX", "Zoho", "AI"];

export default function PortfolioExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => {
        if (selectedCategory === "Websites")
          return item.category === "Websites" || item.category === "E-commerce";
        return item.category.toLowerCase() === selectedCategory.toLowerCase();
      });

  return (
    <>
      {/* ── Filter Categories ── */}
      <section className="py-5 sm:py-6 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2.5 sm:pb-0 scrollbar-none snap-x snap-mandatory">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 whitespace-nowrap snap-start px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest border transition-all duration-300 focus:outline-none select-none cursor-pointer ${isActive
                    ? "bg-accent-blue text-white border-accent-blue shadow-[0_4px_12px_rgba(14,165,233,0.2)] font-semibold"
                    : "bg-white/5 text-slate-400 border-white/5 hover:text-white hover:border-white/10"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="py-10 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 font-mono">No matching projects found.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                  >
                    <PortfolioCard
                      slug={item.slug}
                      title={item.title}
                      category={item.category}
                      subTitle={item.subTitle}
                      technologies={item.technologies}
                      problem={item.clientProblem}
                      outcome={item.results[0]}
                      index={idx}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
