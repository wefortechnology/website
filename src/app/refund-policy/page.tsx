"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReceiptText, ChevronRight, Mail, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const sections = [
  { id: "overview",        title: "Overview" },
  { id: "milestone",       title: "Milestone Payments" },
  { id: "eligibility",     title: "Refund Eligibility" },
  { id: "retainer",        title: "Retainer & Maintenance" },
  { id: "cancellation",    title: "Project Cancellation" },
  { id: "design-ui",       title: "Design & UI/UX Projects" },
  { id: "zoho",            title: "Zoho & Automation" },
  { id: "disputes",        title: "Dispute Resolution" },
  { id: "process",         title: "How to Request a Refund" },
  { id: "jurisdiction",    title: "Governing Law" },
  { id: "contact",         title: "Contact Us" },
];

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#091122]/60 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-purple/[0.06] rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
              <ReceiptText className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <p className="text-xs font-mono text-accent-purple uppercase tracking-widest">Legal Document</p>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Refund Policy</h1>
            </div>
          </motion.div>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500">
            <span>Last Updated: <span className="text-slate-300">August 18, 2026</span></span>
            <span>·</span>
            <span>Effective: <span className="text-slate-300">August 18, 2026</span></span>
            <span>·</span>
            <span>Version: <span className="text-slate-300">2.0</span></span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">

            {/* Sticky TOC */}
            <aside className="hidden lg:block sticky top-28 self-start">
              <div className="rounded-2xl border border-white/[0.07] bg-[#070f1f]/80 backdrop-blur-xl p-5 space-y-1">
                <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Table of Contents</p>
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                      activeSection === s.id
                        ? "bg-accent-purple/10 text-accent-purple border border-accent-purple/20 font-semibold"
                        : "text-slate-500 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-slate-600 w-4 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                    {activeSection === s.id && <ChevronRight className="w-3 h-3 ml-auto" />}
                  </button>
                ))}
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-12">

              <RS id="overview" number="01" title="Overview">
                <p>
                  We For Technology delivers custom software, web applications, mobile apps, Zoho CRM automation, and UI/UX design services. Because all our work is custom-engineered — not off-the-shelf — and structured in clearly defined milestones, our refund policy reflects the irreversible nature of professional creative and technical labour.
                </p>
                <p>
                  This policy governs all commercial engagements between We For Technology and its clients. By signing a Statement of Work (SOW), Letter of Engagement, or making a payment to We For Technology, you agree to the terms outlined in this Refund Policy. Please read it carefully before committing to a project.
                </p>
                <InfoBox icon="warn">
                  All payments made to We For Technology are subject to this Refund Policy. Making a payment constitutes acceptance of these terms. We strongly recommend reviewing this document before project commencement.
                </InfoBox>
              </RS>

              <RS id="milestone" number="02" title="Milestone-Based Payments">
                <p>
                  All We For Technology projects are structured into clearly scoped milestones defined in the Scope of Work (SOW) document shared prior to project kick-off. Each milestone specifies:
                </p>
                <ul>
                  <li><strong>Deliverables:</strong> Exact features, screens, or integrations to be completed.</li>
                  <li><strong>Timeline:</strong> Expected start and completion dates.</li>
                  <li><strong>Payment Amount:</strong> The fee associated with that milestone.</li>
                  <li><strong>Approval Criteria:</strong> Conditions under which the milestone is considered complete.</li>
                </ul>
                <p>
                  Milestone payments are due <strong>before work begins</strong> on that milestone. Once a milestone deliverable has been submitted for client review and approved — either explicitly in writing or implicitly by proceeding to the next milestone — that payment is considered <strong>earned and non-refundable</strong>.
                </p>
                <InfoBox icon="info">
                  Milestone-based billing protects both parties: you receive incremental, reviewable deliverables before authorising each subsequent payment, and we are compensated fairly for completed work.
                </InfoBox>
              </RS>

              <RS id="eligibility" number="03" title="Refund Eligibility">
                <p>The following table summarises refund eligibility across common scenarios:</p>

                <div className="overflow-x-auto mt-2">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 pr-4 text-slate-300 font-semibold">Scenario</th>
                        <th className="text-left py-3 pr-4 text-slate-300 font-semibold">Refund Eligibility</th>
                        <th className="text-left py-3 text-slate-300 font-semibold">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {[
                        ["We For Technology fails to start work within agreed timeline", "✅ Eligible", "100% of advance"],
                        ["We For Technology cancels project without client fault", "✅ Eligible", "100% of unused milestone payment"],
                        ["Client cancels before any work begins (within 48 hrs)", "✅ Eligible", "100% minus processing fees"],
                        ["Client cancels after work has begun on a milestone", "⚠️ Partial", "Unused portion only, at We For Technology discretion"],
                        ["Milestone delivered & client-approved", "❌ Not Eligible", "Non-refundable"],
                        ["Dissatisfaction after milestone approval", "❌ Not Eligible", "Non-refundable — revision policy applies"],
                        ["Scope creep requests outside SOW", "❌ Not Eligible", "Billed separately as change request"],
                        ["Retainer — current billing month", "❌ Not Eligible", "Non-refundable"],
                        ["Retainer — future months (after cancellation notice)", "✅ Eligible", "Pro-rata refund if pre-paid"],
                      ].map(([scenario, elig, amount]) => (
                        <tr key={scenario}>
                          <td className="py-3 pr-4 text-slate-300 align-top">{scenario}</td>
                          <td className={`py-3 pr-4 font-mono align-top whitespace-nowrap ${elig.includes("✅") ? "text-emerald-400" : elig.includes("⚠️") ? "text-yellow-400" : "text-red-400"}`}>{elig}</td>
                          <td className="py-3 text-slate-400 align-top">{amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </RS>

              <RS id="retainer" number="04" title="Retainer & Maintenance Packages">
                <p>
                  For ongoing monthly maintenance, support packages, server monitoring, or development retainers, the following rules apply:
                </p>
                <ul>
                  <li><strong>Current Month Non-Refundable:</strong> The retainer fee for the active billing month is non-refundable, regardless of how many support hours were consumed. Resources are allocated and reserved at the start of each month.</li>
                  <li><strong>Cancellation Notice:</strong> Clients wishing to cancel a retainer must provide a minimum of <strong>15 calendar days' written notice</strong> via email to <span className="text-accent-blue">wefortechnology.ai@gmail.com</span> before the next billing cycle.</li>
                  <li><strong>Pre-Paid Retainers:</strong> If a client has pre-paid for multiple months upfront and provides the required cancellation notice, We For Technology will issue a pro-rata refund for the unused future months within 10 business days.</li>
                  <li><strong>Unused Hours:</strong> Retainer support hours do not roll over to the following month and hold no cash redemption value.</li>
                </ul>
              </RS>

              <RS id="cancellation" number="05" title="Project Cancellation Policy">
                <p>Either party may cancel a project engagement under the following conditions:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-white">Client-Initiated Cancellation</h4>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-2">
                      <li className="flex gap-2"><span className="text-emerald-400 shrink-0">▸</span>Within 48 hours of SOW signing and before any work starts: full refund minus payment gateway fees.</li>
                      <li className="flex gap-2"><span className="text-emerald-400 shrink-0">▸</span>After work has begun: payment for all completed milestones is retained. Partial milestone work is billed at an hourly rate (₹2,500/hr or as agreed).</li>
                      <li className="flex gap-2"><span className="text-emerald-400 shrink-0">▸</span>Client receives all completed code, assets, and files for milestones paid in full.</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-white">We For Technology-Initiated Cancellation</h4>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-2">
                      <li className="flex gap-2"><span className="text-red-400 shrink-0">▸</span>If We For Technology cancels for reasons not attributable to the client, a full refund of any unused advance will be issued within 7 business days.</li>
                      <li className="flex gap-2"><span className="text-red-400 shrink-0">▸</span>We For Technology may cancel a project without refund obligation if the client is in breach of the SOW, has provided misleading information, or has outstanding unpaid invoices.</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4">
                  <strong>Project Abandonment:</strong> If a client becomes unresponsive for more than <strong>30 consecutive calendar days</strong> without prior written notice, We For Technology reserves the right to archive the project. Resuming an abandoned project may incur a re-engagement fee of up to 20% of the remaining project value.
                </p>
              </RS>

              <RS id="design-ui" number="06" title="Design & UI/UX Projects">
                <p>
                  Design services including UI/UX design, logo creation, and brand identity projects have specific considerations due to the subjective nature of creative work:
                </p>
                <ul>
                  <li><strong>Concept Rounds:</strong> All design projects include a defined number of revision rounds (typically 2–3) as stated in the SOW. Revisions within scope are included at no extra cost.</li>
                  <li><strong>Approved Concepts:</strong> Once a design concept is approved in writing (email or chat confirmation), that stage is closed and non-refundable. The approved concept may be refined but not entirely replaced without additional billing.</li>
                  <li><strong>Stylistic Preference Changes:</strong> If a client changes the overall creative direction after an approved concept (e.g., switching from a minimalist to a maximalist style), this constitutes a new scope of work and will be billed accordingly. No refund applies to prior approved work.</li>
                  <li><strong>File Delivery:</strong> All final source files (Figma, AI, PSD, SVG) are delivered upon final payment. Source files are not provided for incomplete or cancelled projects.</li>
                </ul>
              </RS>

              <RS id="zoho" number="07" title="Zoho CRM & Automation Projects">
                <p>
                  Zoho Creator, Zoho CRM configuration, and Deluge scripting projects follow the standard milestone refund rules with the following additions:
                </p>
                <ul>
                  <li><strong>Zoho Licences:</strong> We For Technology does not resell Zoho licences. Any Zoho subscription fees paid directly to Zoho Corporation are governed by Zoho's own refund policy and are entirely outside We For Technology's control.</li>
                  <li><strong>Environment Access:</strong> Clients must provide timely access to their Zoho environment. Delays exceeding 14 days caused by the client may result in timeline extensions and will not constitute grounds for a refund.</li>
                  <li><strong>Configuration Work:</strong> Completed CRM configurations, workflow automations, and Deluge scripts that have been reviewed and signed off are non-refundable as they represent irreversible intellectual labour.</li>
                  <li><strong>Data Migration:</strong> Data migration services are billed per data set. If a migration is partially completed and the client cancels, payment for completed data sets is retained.</li>
                </ul>
              </RS>

              <RS id="disputes" number="08" title="Dispute Resolution">
                <p>
                  We For Technology is committed to a fair and transparent resolution process. If you are dissatisfied with a deliverable, please follow this escalation path before pursuing formal remedies:
                </p>
                <div className="space-y-3 mt-2">
                  {[
                    { step: "Step 1", title: "Raise a Revision Request", desc: "Email your project manager with specific feedback referencing the SOW deliverables. We For Technology will acknowledge within 1 business day." },
                    { step: "Step 2", title: "Review Meeting", desc: "A video call is scheduled within 3 business days to walk through the deliverable and align on correction actions." },
                    { step: "Step 3", title: "Correction Sprint", desc: "We For Technology commits to a correction sprint of up to 5 business days to address legitimate scope-aligned defects at no additional cost." },
                    { step: "Step 4", title: "Formal Dispute", desc: "If resolution is not reached after Steps 1–3, either party may escalate to formal dispute proceedings under Indian Contract Act, 1872, subject to Ghaziabad jurisdiction." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4 bg-white/[0.025] border border-white/5 rounded-xl p-4">
                      <div className="w-16 shrink-0 text-xs font-mono text-accent-purple font-bold">{step}</div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">{title}</p>
                        <p className="text-xs text-slate-400">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <InfoBox icon="warn">
                  Chargebacks or payment disputes raised directly with a bank or payment processor without first following the above escalation path may result in immediate suspension of all active project work and legal action.
                </InfoBox>
              </RS>

              <RS id="process" number="09" title="How to Request a Refund">
                <p>To formally request a refund, please follow these steps:</p>
                <ul>
                  <li><strong>Email Subject:</strong> Send your request to <span className="text-accent-blue">wefortechnology.ai@gmail.com</span> with the subject line: <span className="font-mono text-slate-200">[REFUND REQUEST] — Project Name — Invoice #</span></li>
                  <li><strong>Include:</strong> Your full name, company name, project name, invoice number(s), the milestone(s) in question, and a clear description of your reason for requesting a refund.</li>
                  <li><strong>Review Period:</strong> We For Technology will review your request and respond within <strong>5 business days</strong> with either an approval, partial approval, or a detailed explanation of why the request does not qualify under this policy.</li>
                  <li><strong>Approved Refund Timeline:</strong> Approved refunds are processed within <strong>10 business days</strong> via the original payment method (bank transfer, Razorpay, or Stripe). International wire transfer fees are deducted from the refund amount.</li>
                  <li><strong>GST / Tax:</strong> Refunds are issued for the base service amount only. GST paid on invoices follows the applicable GST refund procedures under Indian tax law and may require additional processing time.</li>
                </ul>
              </RS>

              <RS id="jurisdiction" number="10" title="Governing Law & Jurisdiction">
                <p>
                  This Refund Policy is governed by and construed in accordance with the laws of India, specifically the <strong>Indian Contract Act, 1872</strong> and the <strong>Consumer Protection Act, 2019</strong> where applicable.
                </p>
                <p>
                  Any disputes arising out of or in connection with this policy that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the courts located in <strong>Ghaziabad, Uttar Pradesh, India</strong>.
                </p>
                <p>
                  We For Technology reserves the right to amend this Refund Policy at any time. Changes will be posted on this page with an updated effective date. Engagements contracted prior to a policy change remain governed by the policy version in effect at the time of signing.
                </p>
              </RS>

              <RS id="contact" number="11" title="Contact Us">
                <p>For any refund-related questions, billing disputes, or cancellation requests, please contact our billing team:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    { icon: Mail,        label: "Billing Email",  value: "wefortechnology.ai@gmail.com", href: "mailto:wefortechnology.ai@gmail.com" },
                    { icon: Mail,        label: "General Email",  value: "wefortechnology.ai@gmail.com", href: "mailto:wefortechnology.ai@gmail.com" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent-purple" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{label}</p>
                        <a href={href} className="text-xs text-slate-300 hover:text-white transition-colors">{value}</a>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-500">
                  Business hours: Monday–Saturday, 10:00 AM – 7:00 PM IST. We aim to respond to all billing enquiries within <strong className="text-slate-400">2 business days</strong>.
                </p>
              </RS>

            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

/* ── Helpers ── */
function RS({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-28 space-y-4"
    >
      <div className="flex items-center gap-3 pb-3 border-b border-white/[0.07]">
        <span className="text-[11px] font-mono text-accent-purple bg-accent-purple/10 border border-accent-purple/20 px-2.5 py-1 rounded-md">{number}</span>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="text-sm text-slate-400 font-light leading-relaxed space-y-3 [&_ul]:space-y-2.5 [&_ul]:pl-0 [&_li]:flex [&_li]:gap-2.5 [&_li]:items-start [&_li]:before:content-['▸'] [&_li]:before:text-accent-purple [&_li]:before:shrink-0 [&_li]:before:mt-0.5 [&_strong]:text-slate-200 [&_strong]:font-medium">
        {children}
      </div>
    </motion.div>
  );
}

function InfoBox({ children, icon }: { children: React.ReactNode; icon: "warn" | "info" }) {
  return (
    <div className={`flex gap-3 rounded-xl p-4 mt-2 ${icon === "warn" ? "bg-yellow-500/[0.06] border border-yellow-500/20" : "bg-accent-purple/[0.06] border border-accent-purple/20"}`}>
      <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${icon === "warn" ? "text-yellow-400" : "text-accent-purple"}`} />
      <p className="text-sm text-slate-300">{children}</p>
    </div>
  );
}
