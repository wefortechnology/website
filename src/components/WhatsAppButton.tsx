"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { Phone } from "lucide-react";
import { contact, whatsappUrl } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

/**
 * Floating contact buttons (bottom-right): WhatsApp chat and direct call.
 * Both clicks are reported to GA4 (whatsapp_click / phone_click, location "floating").
 */
export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Call button */}
      <motion.a
        href={contact.phoneTel}
        aria-label={`Call us on ${contact.phoneDisplay}`}
        title={`Call ${contact.phoneDisplay}`}
        onClick={() => trackEvent("phone_click", { location: "floating" })}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0369A1] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_6px_22px_rgba(0,143,229,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-blue/30"
      >
        <Phone className="h-5 w-5" />
      </motion.a>

      <div className="flex items-center gap-3">
        {/* Tooltip Label */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none hidden select-none items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]"></span>
              </span>
              <span className="whitespace-nowrap text-xs font-medium text-slate-800">
                Chat on WhatsApp
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp button */}
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
          onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          <span className="pointer-events-none absolute -inset-1 animate-pulse rounded-full bg-[#25D366] opacity-30" />
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5 -translate-y-0.5 translate-x-0.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-white bg-emerald-300" />
          </span>
          <FaWhatsapp className="relative z-10 h-7 w-7 drop-shadow-sm transition-transform duration-300 group-hover:rotate-6" />
        </motion.a>
      </div>
    </div>
  );
}
