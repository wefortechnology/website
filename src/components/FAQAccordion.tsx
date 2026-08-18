"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQAccordion({
  question,
  answer,
  index,
}: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glow-card rounded-2xl border border-white/10 bg-gradient-to-b from-[#081224] to-[#040914] p-6 shadow-xl backdrop-blur-xl hover:border-accent-cyan/40 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left gap-4 hover:text-accent-cyan transition-colors focus:outline-none select-none group cursor-pointer"
      >
        <span className="text-base sm:text-lg font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
          {question}
        </span>
        <span className={`flex-shrink-0 p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-all duration-300 transform ${
          isOpen ? "rotate-180 text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10" : ""
        }`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-white/5 text-sm sm:text-base font-light text-slate-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
