"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/lib/leads";
import { contact, whatsappUrl } from "@/lib/site";
import TrackedLink from "./TrackedLink";

/**
 * Three-field enquiry form (name, phone/WhatsApp, requirement) for quick leads.
 * Used inside CTASection at the bottom of most pages. The full form lives in ContactForm.
 */
export default function QuickEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", requirement: "", botcheck: "" });

  const update = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) {
      // Honeypot filled in: almost certainly a bot. Pretend success, send nothing.
      setStatus("success");
      return;
    }
    setStatus("submitting");
    const result = await submitLead(
      { name: form.name, phone: form.phone, message: form.requirement },
      "quick-enquiry"
    );
    if (!result.ok) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", phone: "", requirement: "", botcheck: "" });
  };

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-4 text-sm text-emerald-900">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
        <span>Thanks! We&apos;ll get back to you within one business day.</span>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0369A1] focus:outline-none focus:ring-2 focus:ring-sky-100";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4" aria-label="Quick project enquiry">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={update}
          placeholder="Your name"
          aria-label="Your name"
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={update}
          placeholder="Phone / WhatsApp"
          aria-label="Phone or WhatsApp number"
          className={inputClass}
        />
        <input
          type="text"
          name="requirement"
          required
          value={form.requirement}
          onChange={update}
          placeholder="What do you need?"
          aria-label="What do you need"
          className={inputClass}
        />
      </div>

      {/* Honeypot — hidden from humans, bots tend to fill it. */}
      <input
        type="text"
        name="botcheck"
        value={form.botcheck}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && (
        <p className="text-xs text-amber-900">
          Couldn&apos;t send right now. Please{" "}
          <TrackedLink
            event="whatsapp_click"
            location="quick-enquiry-error"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            message us on WhatsApp
          </TrackedLink>{" "}
          or call{" "}
          <TrackedLink event="phone_click" location="quick-enquiry-error" href={contact.phoneTel} className="underline">
            {contact.phoneDisplay}
          </TrackedLink>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(124,58,237,0.35)] transition-opacity hover:opacity-95 disabled:opacity-50 sm:w-auto sm:min-w-56"
      >
        <span>{status === "submitting" ? "Sending..." : "Request a Callback"}</span>
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
