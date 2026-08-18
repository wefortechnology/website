"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import Button from "./Button";
import { useSearchParams } from "next/navigation";

const servicesList = [
  "Website Development",
  "App Development",
  "E-commerce Development",
  "Software Development",
  "UI/UX Design",
  "Zoho Solutions",
  "AI Integration",
  "Software Testing / QA",
  "Other Solutions",
];

const budgetsList = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    details: "",
  });

  const [errors, setErrors] = useState({
    service: false,
    budget: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const serviceRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setServiceOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(event.target as Node)) {
        setBudgetOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Autofill package service if coming from pricing package CTA
  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg) {
      const pkgMap: Record<string, string> = {
        basic: "Website Development",
        standard: "Website Development",
        advanced: "Software Development",
      };
      const serviceVal = pkgMap[pkg] || "";
      const budgetVal = pkg === "basic" ? "Under ₹25,000" : pkg === "standard" ? "₹25,000 – ₹50,000" : "₹1,00,000+";

      setFormData((prev) => ({
        ...prev,
        service: serviceVal,
        budget: budgetVal,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (val: string) => {
    setFormData((prev) => ({ ...prev, service: val }));
    setErrors((prev) => ({ ...prev, service: false }));
    setServiceOpen(false);
  };

  const handleSelectBudget = (val: string) => {
    setFormData((prev) => ({ ...prev, budget: val }));
    setErrors((prev) => ({ ...prev, budget: false }));
    setBudgetOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      service: !formData.service,
      budget: !formData.budget,
    };
    setErrors(newErrors);

    if (newErrors.service || newErrors.budget) {
      return;
    }

    setStatus("submitting");

    // Simulate network submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        details: "",
      });
    }, 1500);
  };

  return (
    <div className="glow-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/5 relative overflow-hidden bg-dark-card/30">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center text-center py-8 sm:py-12"
          >
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 sm:mb-6">
              <CheckCircle2 className="w-8 sm:w-10 h-8 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Request Submitted!</h3>
            <p className="text-slate-400 font-light text-xs sm:text-sm max-w-sm leading-relaxed mb-6 sm:mb-8">
              Thank you for reaching out to We For Technology. Our technology consultants will review your scope and follow up within 24 business hours.
            </p>
            <Button onClick={() => setStatus("idle")} variant="outline" size="sm">
              <span>Send Another Request</span>
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 hover:bg-white/10 hover:border-accent-blue/30 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm transition-all duration-200"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 hover:bg-white/10 hover:border-accent-blue/30 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 hover:bg-white/10 hover:border-accent-blue/30 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 8510070940"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 hover:bg-white/10 hover:border-accent-blue/30 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Service */}
              <div className="flex flex-col gap-2 relative" ref={serviceRef}>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Service Needed *
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setServiceOpen(!serviceOpen);
                    setBudgetOpen(false);
                  }}
                  className={`w-full bg-white/5 border text-left px-4 py-3 rounded-lg text-sm flex items-center justify-between transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 ${
                    errors.service
                      ? "border-red-500/50 text-red-200"
                      : serviceOpen
                      ? "border-accent-blue text-white"
                      : "border-white/10 text-white hover:bg-white/10 hover:border-accent-blue/30"
                  }`}
                >
                  <span className={formData.service ? "text-white" : "text-slate-500"}>
                    {formData.service || "Select a Service"}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${serviceOpen ? "transform rotate-180 text-accent-blue" : ""}`} />
                </button>

                <AnimatePresence>
                  {serviceOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-full mt-2 bg-[#0b0f19] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 py-1.5 max-h-60 overflow-y-auto custom-scrollbar"
                    >
                      {servicesList.map((item) => (
                        <div
                          key={item}
                          onClick={() => handleSelectService(item)}
                          className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                            formData.service === item
                              ? "bg-accent-blue/20 text-white font-medium"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {errors.service && (
                  <span className="text-[10px] text-red-400 font-mono mt-1">Please select a service needed</span>
                )}
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2 relative" ref={budgetRef}>
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Approx Budget (INR) *
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setBudgetOpen(!budgetOpen);
                    setServiceOpen(false);
                  }}
                  className={`w-full bg-white/5 border text-left px-4 py-3 rounded-lg text-sm flex items-center justify-between transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 ${
                    errors.budget
                      ? "border-red-500/50 text-red-200"
                      : budgetOpen
                      ? "border-accent-blue text-white"
                      : "border-white/10 text-white hover:bg-white/10 hover:border-accent-blue/30"
                  }`}
                >
                  <span className={formData.budget ? "text-white" : "text-slate-500"}>
                    {formData.budget || "Select Budget Range"}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${budgetOpen ? "transform rotate-180 text-accent-blue" : ""}`} />
                </button>

                <AnimatePresence>
                  {budgetOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-full mt-2 bg-[#0b0f19] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 py-1.5"
                    >
                      {budgetsList.map((item) => (
                        <div
                          key={item}
                          onClick={() => handleSelectBudget(item)}
                          className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                            formData.budget === item
                              ? "bg-accent-blue/20 text-white font-medium"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {errors.budget && (
                  <span className="text-[10px] text-red-400 font-mono mt-1">Please select a budget range</span>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Project Details *
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={4}
                value={formData.details}
                onChange={handleChange}
                placeholder="Describe your goals, requirements, timeline, etc."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 hover:bg-white/10 hover:border-accent-blue/30 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm transition-all duration-200 resize-y"
              />
            </div>

            <Button
              type="submit"
              variant="accent"
              disabled={status === "submitting"}
              className="w-full justify-center py-3.5 gap-2"
            >
              <span>{status === "submitting" ? "Sending Request..." : "Send Project Request"}</span>
              <Send className="w-4.5 h-4.5" />
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
