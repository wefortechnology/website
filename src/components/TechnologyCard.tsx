"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface TechnologyCardProps {
  name: string;
  category: string;
  description: string;
  iconName: string;
  index: number;
}

export default function TechnologyCard({
  name,
  category,
  description,
  iconName,
  index,
}: TechnologyCardProps) {
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="glow-card rounded-xl p-6 flex items-start gap-4 border border-white/5"
    >
      <div className="flex-shrink-0 p-3 rounded-lg bg-white/5 border border-white/10 text-accent-blue group-hover:text-white transition-colors duration-300">
        <IconComponent className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{name}</h4>
        <span className="text-[10px] uppercase font-mono tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2 py-0.5 rounded">
          {category}
        </span>
        <p className="text-slate-400 font-light text-xs mt-3 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
