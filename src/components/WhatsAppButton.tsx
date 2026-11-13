"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { Phone } from "lucide-react";
import { contact, whatsappUrl } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type Hovered = "call" | "whatsapp" | null;

/** Hover label shown to the left of a floating button (desktop only). */
function Tooltip({ show, dotClass, text }: { show: boolean; dotClass: string; text: string }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none hidden select-none items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md sm:flex"
        >
          <span className="relative flex h-2 w-2">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotClass}`} />
            <span className={`relative inline-flex h-2 w-2 rounded-full ${dotClass}`} />
          </span>
          <span className="whitespace-nowrap text-xs font-medium text-slate-800">{text}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Floating contact buttons (bottom-right): direct call and WhatsApp chat.
 * Both are filled, glowing buttons of the same size so each reads as an obvious, clickable way to reach us.
 * Clicks are reported to GA4 (phone_click / whatsapp_click, location "floating").
 */
export default function WhatsAppButton() {
  const [hovered, setHovered] = useState<Hovered>(null);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      {/* Call button */}
      <div className="flex items-center gap-3">
        <Tooltip show={hovered === "call"} dotClass="bg-sky-500" text={`Call us: ${contact.phoneDisplay}`} />
        <motion.a
          href={contact.phoneTel}
          aria-label={`Call us on ${contact.phoneDisplay}`}
          title={`Call ${contact.phoneDisplay}`}
          onClick={() => trackEvent("phone_click", { location: "floating" })}
          onMouseEnter={() => setHovered("call")}
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#0369A1] to-[#0EA5E9] text-white shadow-[0_4px_20px_rgba(3,105,161,0.45)] transition-shadow duration-300 hover:shadow-[0_6px_28px_rgba(3,105,161,0.6)] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40"
        >
          <span className="pointer-events-none absolute -inset-1 animate-pulse rounded-full bg-sky-500 opacity-25" />
          <Phone className="phone-ring relative z-10 h-6 w-6 fill-white/15" strokeWidth={2.25} />
        </motion.a>
      </div>

      {/* WhatsApp button */}
      <div className="flex items-center gap-3">
        <Tooltip show={hovered === "whatsapp"} dotClass="bg-[#25D366]" text="Chat on WhatsApp" />
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
          onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
          onMouseEnter={() => setHovered("whatsapp")}
          onMouseLeave={() => setHovered(null)}
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
