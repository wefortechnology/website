"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";

interface PricingCardProps {
  name: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  index: number;
}

export default function PricingCard({
  name,
  badge,
  description,
  features,
  ctaText,
  index,
}: PricingCardProps) {
  const isPopular = badge !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`glow-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col h-full relative border ${
          isPopular
            ? "border-accent-blue bg-accent-blue/5 shadow-[0_20px_50px_rgba(14,165,233,0.15)]"
            : "border-white/5"
        }`}
      >
        {isPopular && (
          <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 text-[10px] font-semibold uppercase tracking-wider sm:tracking-widest text-white bg-accent-blue border border-accent-blue px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
            {badge}
          </span>
        )}

        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-wider mb-1.5 sm:mb-2">{name}</h3>
          <p className="text-slate-400 font-light text-xs sm:text-sm min-h-[40px] sm:min-h-[48px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Custom Pricing Section */}
        <div className="mb-6 sm:mb-8 border-b border-white/5 pb-5 sm:pb-6">
          <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Custom Quote
          </span>
          <p className="text-[11px] sm:text-xs text-slate-500 font-mono mt-1.5 sm:mt-2">
            Tailored to requirements
          </p>
        </div>

        {/* Features List */}
        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3">
              <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                <Check className="w-2.5 h-2.5" />
              </span>
              <span className="text-xs sm:text-sm font-light text-slate-300 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <LinkButton href={`/contact?package=${name.toLowerCase()}`} variant={isPopular ? "accent" : "outline"} className="w-full justify-center">
          {ctaText}
        </LinkButton>
      </div>
    </motion.div>
  );
}

// Inline helper for client-side links inside card that doesn't conflict with parent components
function LinkButton({
  href,
  variant,
  children,
  className,
}: {
  href: string;
  variant: "primary" | "secondary" | "accent" | "outline";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button href={href} variant={variant} className={className}>
      {children}
    </Button>
  );
}
