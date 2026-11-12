"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

const categories = [
  { id: "all", label: "All Services", count: services.length },
  { id: "engineering", label: "Engineering & Apps", count: 5 },
  { id: "design", label: "Design & Brand", count: 2 },
  { id: "automation", label: "Automation & AI", count: 2 },
  { id: "growth", label: "Growth & QA", count: 3 },
];

export default function ServicesCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = services.filter((service) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "engineering") {
      return ["web-development", "app-development", "software-development", "api-development"].includes(service.slug);
    }
    if (selectedCategory === "design") {
      return ["ui-ux-design", "branding"].includes(service.slug);
    }
    if (selectedCategory === "automation") {
      return ["zoho-solutions", "ai-integration"].includes(service.slug);
    }
    if (selectedCategory === "growth") {
      return ["ecommerce", "software-testing", "cms-development", "maintenance"].includes(service.slug);
    }
    return true;
  });

  return (
    <>
      {/* ── 2. Services Catalogue Section (With Category Filter) ── */}
      <section id="catalogue" className="py-16 sm:py-24 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Complete Services Catalogue"
            subtitle="Our Solutions"
            description="Filter through our specialized engineering, design, CRM automation, and maintenance solutions."
          />

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center sm:justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14 overflow-x-auto py-2 sm:pb-1 scrollbar-none snap-x snap-mandatory">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 whitespace-nowrap snap-start px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2 border ${isActive
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white border-transparent shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                    : "bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                    }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] ${isActive ? "bg-white/25 text-[#0A0F1E]" : "bg-white/5 text-slate-500"
                      }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  title={service.title}
                  shortDesc={service.shortDesc}
                  iconName={service.icon}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
