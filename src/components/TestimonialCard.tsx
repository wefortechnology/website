"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating?: number;
  index: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  rating = 5,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-card rounded-2xl p-8 relative flex flex-col justify-between border border-white/5 h-full"
    >
      <div className="absolute top-8 right-8 text-white/5">
        <Quote className="w-12 h-12 transform rotate-180" />
      </div>

      <div>
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent-blue text-accent-blue" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-300 font-light text-base leading-relaxed mb-8 italic relative z-10">
          "{quote}"
        </p>
      </div>

      {/* Author details */}
      <div className="border-t border-white/5 pt-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center font-bold text-white text-sm select-none">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">{name}</h4>
          <p className="text-xs text-slate-400">
            {role}, <span className="text-accent-cyan">{company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
