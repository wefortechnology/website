"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

interface PortfolioCardProps {
  slug: string;
  title: string;
  category: string;
  subTitle: string;
  technologies: string[];
  index: number;
}

export default function PortfolioCard({
  slug,
  title,
  category,
  subTitle,
  technologies,
  index,
}: PortfolioCardProps) {
  // Generate a distinct premium gradient background for each card
  const gradients = [
    "from-cyan-950 via-slate-900 to-indigo-950",
    "from-violet-950 via-slate-900 to-fuchsia-950",
    "from-blue-950 via-slate-900 to-teal-950",
    "from-emerald-950 via-slate-900 to-indigo-950",
    "from-purple-950 via-slate-900 to-slate-950",
    "from-rose-950 via-slate-900 to-indigo-950",
  ];
  
  const selectedGradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="glow-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 bg-gradient-to-b from-[#081224] to-[#040914]">
        {/* Geometric Technical Mockup instead of generic stock image */}
        <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${selectedGradient} border-b border-white/5 flex items-center justify-center p-6 select-none`}>
          {/* Tech lines grid overlay */}
          <div className="absolute inset-0 tech-grid opacity-20" />
          
          {/* Abstract glowing shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent-blue/15 blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-accent-purple/15 blur-2xl group-hover:scale-125 transition-transform duration-500" />

          {/* Centered technical graphic */}
          <div className="relative z-10 w-full flex flex-col items-center gap-2 text-center">
            <div className="text-xs uppercase tracking-widest text-accent-cyan/80 bg-white/5 border border-white/10 px-3 py-1 rounded">
              {category}
            </div>
            <div className="text-2xl font-bold tracking-tight text-white group-hover:text-accent-cyan transition-colors duration-300">
              {title}
            </div>
            <div className="text-[10px] font-mono text-slate-500 mt-2">
              {"< SYSTEM_INIT: SUCCESS_CHECK />"}
            </div>
          </div>

          {/* Interactive cursor tracking grid line effect */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-cyan to-accent-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Card Body */}
        <div className="p-8 flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="text-[10px] font-mono bg-white/5 text-slate-400 px-2 py-0.5 rounded">
                +{technologies.length - 3} more
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300 min-h-[2.75rem]">
            {title}
          </h3>

          <p className="text-slate-400 font-light text-sm leading-relaxed mb-6 flex-grow">
            {subTitle}
          </p>

          <div className="mt-auto">
            <Link href={`/portfolio/${slug}`}>
              <Button variant="outline" size="sm" className="w-full">
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
