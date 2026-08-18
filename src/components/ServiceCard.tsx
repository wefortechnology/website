"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";

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
  // Resolve Lucide icon dynamically
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="h-full"
    >
      <Link href={`/services/${slug}`} className="block h-full group">
        <div className="glow-card rounded-3xl p-6 sm:p-8 flex flex-col h-full relative overflow-hidden border border-white/10 bg-gradient-to-b from-[#081020]/90 via-[#040814]/90 to-[#02050c]/90 backdrop-blur-xl hover:border-accent-blue/40 transition-all duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)]">
          {/* Ambient Glow Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-blue/15 via-accent-purple/10 to-transparent blur-xl rounded-bl-full group-hover:from-accent-blue/30 group-hover:via-accent-purple/20 transition-all duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 text-accent-cyan flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent-blue group-hover:to-accent-purple group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-inner">
              <IconComponent className="w-7 h-7" />
            </div>

            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 group-hover:border-accent-blue/30 group-hover:text-accent-cyan transition-colors">
              Solutions Stack
            </span>
          </div>
          
          <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-slate-300 font-light text-sm leading-relaxed mb-6 flex-grow">
            {shortDesc}
          </p>
          
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-accent-cyan transition-colors duration-300">
            <span className="font-semibold uppercase tracking-wider">Explore Capabilities</span>
            <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white group-hover:border-transparent transition-all duration-300">
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

