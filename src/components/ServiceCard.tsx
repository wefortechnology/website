"use client";

import { createElement } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icons";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  index: number;
}

export default function ServiceCard({
  slug,
  title,
  shortDesc,
  iconName,
  index,
}: ServiceCardProps) {
  const icon = createElement(getIcon(iconName), { className: "w-7 h-7" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <Link href={`/services/${slug}`} className="block h-full group">
        <div className="glow-card rounded-3xl p-6 sm:p-8 flex flex-col h-full relative overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#081020]/90 dark:via-[#040814]/90 dark:to-[#02050c]/90 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-xl">
          {/* Ambient Glow Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-blue/10 via-accent-purple/5 to-transparent blur-xl rounded-bl-full pointer-events-none" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-[#0369A1] dark:text-accent-cyan flex items-center justify-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors duration-300 shadow-xs">
              {icon}
            </div>

            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 group-hover:border-accent-blue/30 group-hover:text-[#0369A1] dark:group-hover:text-accent-cyan transition-colors">
              Solutions Stack
            </span>
          </div>
          
          <h3 className="text-xl font-extrabold text-[#0A0F1E] dark:text-white mb-3 group-hover:text-[#0369A1] dark:group-hover:text-accent-cyan transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed mb-6 flex-grow">
            {shortDesc}
          </p>
          
          <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 group-hover:text-[#0369A1] dark:group-hover:text-accent-cyan transition-colors duration-300">
            <span className="font-semibold uppercase tracking-wider">Explore Capabilities</span>
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-sky-50 group-hover:border-sky-200 transition-colors duration-300">
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


