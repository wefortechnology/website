"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "We For Technology transformed our sales operations. Their custom Zoho integration saved our representatives over 15 hours of manual work every week.",
    name: "Rajesh Kumar",
    role: "Operations Director",
    company: "Apex Retail Solutions",
    rating: 5,
  },
  {
    quote: "The Next.js storefront they designed runs at incredible speeds. Our mobile search conversion rates rose by nearly 85% in the first two months.",
    name: "Sarah Jenkins",
    role: "E-commerce Manager",
    company: "Velvet Apparel Group",
    rating: 5,
  },
  {
    quote: "We For Technology built a robust conversational AI interface. The integration with our existing client databases was flawless, and the response latency is exceptionally low.",
    name: "David Chen",
    role: "Chief Technology Officer",
    company: "MindFlow AI",
    rating: 5,
  },
  {
    quote: "Their data visualization dashboards enabled our leadership team to identify operational leaks in real time. Absolute game changer for our analytics workflow.",
    name: "Elena Rostova",
    role: "Head of Operations",
    company: "Quantum Analytics",
    rating: 5,
  },
  {
    quote: "They redesigned our payment gateways with enterprise-grade security. We For Technology is the most reliable development partner we have partnered with in the last five years.",
    name: "Marcus Thorne",
    role: "SecOps Lead",
    company: "Apex Fintech Dashboard",
    rating: 5,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
  }),
};

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const jumpToSlide = (targetIndex: number) => {
    setDirection(targetIndex > index ? 1 : -1);
    setIndex(targetIndex);
  };

  // Setup auto-play interval
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, index]);

  const test1 = testimonials[index];
  const test2 = testimonials[(index + 1) % testimonials.length];

  return (
    <div 
      className="relative max-w-6xl mx-auto px-4 sm:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards & Controls Container */}
      <div className="relative">
        {/* Carousel Motion Window */}
        <div className="overflow-hidden min-h-[340px] sm:min-h-[280px] py-4 px-1">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full"
            >
              {/* Card 1 */}
              <div className="glow-card rounded-2xl p-6 sm:p-10 relative flex flex-col justify-between border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B132B] h-full shadow-md dark:shadow-2xl">
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-slate-300/40 dark:text-cyan-400/10 select-none pointer-events-none">
                  <Quote className="w-12 h-12 sm:w-16 sm:h-16 transform rotate-180" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: test1.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-[#008FE5] text-[#008FE5] dark:fill-accent-cyan dark:text-accent-cyan" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 dark:text-slate-200 font-light text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 italic relative z-10">
                    "{test1.quote}"
                  </p>
                </div>

                {/* Author details */}
                <div className="border-t border-slate-200 dark:border-white/10 pt-5 flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center font-bold text-white text-base select-none shadow-md shadow-accent-blue/20 flex-shrink-0">
                    {test1.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#0A0F1E] dark:text-white">{test1.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light">
                      {test1.role}, <span className="text-[#008FE5] dark:text-accent-cyan font-medium">{test1.company}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="hidden md:flex glow-card rounded-2xl p-6 sm:p-10 relative flex-col justify-between border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B132B] h-full shadow-md dark:shadow-2xl">
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-slate-300/40 dark:text-cyan-400/10 select-none pointer-events-none">
                  <Quote className="w-12 h-12 sm:w-16 sm:h-16 transform rotate-180" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: test2.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-[#008FE5] text-[#008FE5] dark:fill-accent-cyan dark:text-accent-cyan" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 dark:text-slate-200 font-light text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 italic relative z-10">
                    "{test2.quote}"
                  </p>
                </div>

                {/* Author details */}
                <div className="border-t border-slate-200 dark:border-white/10 pt-5 flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center font-bold text-white text-base select-none shadow-md shadow-accent-blue/20 flex-shrink-0">
                    {test2.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-[#0A0F1E] dark:text-white">{test2.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light">
                      {test2.role}, <span className="text-[#008FE5] dark:text-accent-cyan font-medium">{test2.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Side Arrow Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute -left-3 sm:-left-7 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#0F172A] border-2 border-slate-200 dark:border-accent-cyan/40 text-slate-800 dark:text-white hover:bg-[#008FE5] dark:hover:bg-accent-blue hover:border-[#008FE5] dark:hover:border-accent-blue hover:text-white dark:hover:text-white transition-all duration-300 z-30 flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_rgba(14,165,233,0.3)] cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute -right-3 sm:-right-7 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#0F172A] border-2 border-slate-200 dark:border-accent-cyan/40 text-slate-800 dark:text-white hover:bg-[#008FE5] dark:hover:bg-accent-blue hover:border-[#008FE5] dark:hover:border-accent-blue hover:text-white dark:hover:text-white transition-all duration-300 z-30 flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_rgba(14,165,233,0.3)] cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Navigation Indicators / Dots */}
      <div className="flex justify-center gap-2.5 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => jumpToSlide(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === index 
                ? "w-8 bg-gradient-to-r from-accent-blue to-accent-purple" 
                : "w-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

