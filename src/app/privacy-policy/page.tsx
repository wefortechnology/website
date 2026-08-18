"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const sections = [
  { id: "introduction",       title: "Introduction" },
  { id: "information",        title: "Information We Collect" },
  { id: "how-we-use",        title: "How We Use Your Information" },
  { id: "sharing",            title: "Sharing Your Information" },
  { id: "cookies",            title: "Cookies & Tracking" },
  { id: "data-retention",     title: "Data Retention" },
  { id: "third-party",        title: "Third-Party Services" },
  { id: "security",           title: "Data Security" },
  { id: "rights",             title: "Your Rights" },
  { id: "children",           title: "Children's Privacy" },
  { id: "changes",            title: "Policy Changes" },
  { id: "contact",            title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageTransition>
      {/* ── Hero banner ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#091122]/60 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-blue/[0.06] rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
              <p className="text-xs font-mono text-accent-blue uppercase tracking-widest">Legal Document</p>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Privacy Policy</h1>
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

      {/* ── Body ── */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">

            {/* ── Sticky TOC sidebar ── */}
            <aside className="hidden lg:block sticky top-28 self-start">
              <div className="rounded-2xl border border-white/[0.07] bg-[#070f1f]/80 backdrop-blur-xl p-5 space-y-1">
                <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Table of Contents</p>
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                      activeSection === s.id
                        ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-semibold"
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

            {/* ── Main content ── */}
            <div className="space-y-12">

              {/* ── 1. Introduction ── */}
              <PolicySection id="introduction" number="01" title="Introduction">
                <p>
                  We For Technology (<strong className="text-white">"we"</strong>, <strong className="text-white">"us"</strong>, or <strong className="text-white">"our"</strong>) is a software and digital solutions agency headquartered in Ghaziabad, Uttar Pradesh, India. We are committed to protecting the privacy and personal data of our clients, website visitors, project collaborators, and anyone who interacts with our digital properties.
                </p>
                <p>
                  This Privacy Policy explains what personal information we collect, why we collect it, how we use and protect it, and what rights you have regarding your data. This policy applies to all services delivered under the We For Technology brand, including our website at <span className="text-accent-blue">wefortechnology.com</span>, client project portals, and any associated digital properties.
                </p>
                <p>
                  By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, please discontinue use of our website and services immediately.
                </p>
              </PolicySection>

              {/* ── 2. Information We Collect ── */}
              <PolicySection id="information" number="02" title="Information We Collect">
                <p>We collect information through multiple channels depending on how you interact with us:</p>

                <PolicySubSection title="2.1 Information You Provide Directly">
                  <ul>
                    <li><strong>Contact & Inquiry Forms:</strong> Name, email address, phone number, company name, project budget range, and message content when you submit a project inquiry or contact form.</li>
                    <li><strong>Client Onboarding:</strong> Business registration details, billing addresses, tax identification numbers (GST/PAN for Indian entities), bank details for invoice processing, and signed agreements.</li>
                    <li><strong>Project Collaboration:</strong> Usernames, credentials for staging environments, file uploads, design assets, and any content you share during project delivery.</li>
                    <li><strong>Newsletter & Communications:</strong> Email address when you subscribe to updates or marketing communications.</li>
                  </ul>
                </PolicySubSection>

                <PolicySubSection title="2.2 Information Collected Automatically">
                  <ul>
                    <li><strong>Usage Data:</strong> Pages visited, time spent on each page, click paths, scroll depth, and features interacted with.</li>
                    <li><strong>Device & Browser Data:</strong> Browser type and version, operating system, screen resolution, device type (mobile, tablet, desktop), and preferred language.</li>
                    <li><strong>Network Data:</strong> IP address, approximate geographic location (city/country level), Internet Service Provider (ISP), and referring URL.</li>
                    <li><strong>Cookies & Session Tokens:</strong> Persistent and session cookies that identify return visits and maintain login states on client portals.</li>
                  </ul>
                </PolicySubSection>

                <PolicySubSection title="2.3 Information from Third Parties">
                  <ul>
                    <li><strong>Analytics Platforms:</strong> Aggregated behavioral data from Google Analytics or Plausible Analytics.</li>
                    <li><strong>CRM Integrations:</strong> Lead information captured via integrated lead forms from Facebook Ads, Google Ads, or partner platforms you authorize.</li>
                    <li><strong>Payment Processors:</strong> Transaction reference IDs and payment confirmation status from Razorpay, Stripe, or bank transfer confirmations. We do not store raw card numbers.</li>
                  </ul>
                </PolicySubSection>
              </PolicySection>

              {/* ── 3. How We Use Your Information ── */}
              <PolicySection id="how-we-use" number="03" title="How We Use Your Information">
                <p>We use collected personal information strictly for legitimate business purposes including:</p>
                <ul>
                  <li><strong>Service Delivery:</strong> To scope, plan, develop, test, and deliver the software products and digital services you commission.</li>
                  <li><strong>Client Communication:</strong> To respond to project inquiries, provide status updates, share deliverables, and conduct sprint review calls.</li>
                  <li><strong>Invoicing & Payments:</strong> To generate GST-compliant invoices, process payments, and maintain financial records as required by Indian accounting law.</li>
                  <li><strong>Platform Improvement:</strong> To understand how visitors interact with our website, identify areas of improvement, and fix bugs.</li>
                  <li><strong>Marketing & Outreach:</strong> To send newsletters, service announcements, and case study updates only to users who have opted in. You may unsubscribe at any time.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable Indian laws including the Information Technology (Amendment) Act, 2008, GST regulations, and any future Digital Personal Data Protection Act (DPDPA) obligations.</li>
                  <li><strong>Security & Fraud Prevention:</strong> To monitor for unauthorized access attempts, abuse of our contact forms, or suspicious activity on client-facing portals.</li>
                </ul>
                <InfoBox>
                  We will never sell your personal information to third-party advertisers, data brokers, or marketing agencies. Your data is used exclusively to deliver and improve our services.
                </InfoBox>
              </PolicySection>

              {/* ── 4. Sharing ── */}
              <PolicySection id="sharing" number="04" title="Sharing Your Information">
                <p>We do not sell, trade, or rent your personal data. We may share your information only in the following strictly controlled circumstances:</p>
                <ul>
                  <li><strong>Sub-contractors & Freelancers:</strong> When a specific project requires specialist expertise, we may engage vetted freelance developers or designers who are bound by confidentiality agreements.</li>
                  <li><strong>Cloud Infrastructure Providers:</strong> Our hosting providers (e.g., AWS, Vercel, Railway) process data in the course of serving our applications. These providers maintain industry-standard data processing agreements.</li>
                  <li><strong>Payment Gateways:</strong> Payment data (invoice amounts, transaction IDs) is processed through PCI-DSS compliant payment processors.</li>
                  <li><strong>Legal Obligations:</strong> We may disclose personal data if required to do so by law, court order, or regulatory authority, including Indian government agencies.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, client data may be transferred to the successor entity, subject to equivalent privacy protections.</li>
                </ul>
              </PolicySection>

              {/* ── 5. Cookies ── */}
              <PolicySection id="cookies" number="05" title="Cookies & Tracking Technologies">
                <p>We use cookies and similar tracking technologies on our website. Here is what we use and why:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse mt-2">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 pr-4 text-slate-300 font-semibold">Cookie Type</th>
                        <th className="text-left py-3 pr-4 text-slate-300 font-semibold">Purpose</th>
                        <th className="text-left py-3 text-slate-300 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {[
                        ["Essential / Session", "Maintain login sessions on client portals, CSRF protection", "Session"],
                        ["Analytics", "Track page views, traffic sources, and user behaviour (anonymised)", "90 days"],
                        ["Preferences", "Remember your language, theme, or form state preferences", "1 year"],
                        ["Marketing", "Only set with explicit consent to measure ad campaign performance", "30 days"],
                      ].map(([type, purpose, duration]) => (
                        <tr key={type}>
                          <td className="py-3 pr-4 text-slate-300 font-mono">{type}</td>
                          <td className="py-3 pr-4 text-slate-400">{purpose}</td>
                          <td className="py-3 text-slate-400 whitespace-nowrap">{duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  You can control or disable cookies through your browser settings. Disabling essential cookies may prevent certain features of client portals from functioning correctly. We do not currently respond to Do Not Track (DNT) signals as there is no universally accepted standard for this mechanism.
                </p>
              </PolicySection>

              {/* ── 6. Data Retention ── */}
              <PolicySection id="data-retention" number="06" title="Data Retention">
                <p>We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by law:</p>
                <ul>
                  <li><strong>Project & Client Records:</strong> Retained for 7 years after project closure to comply with Indian accounting and tax record-keeping requirements.</li>
                  <li><strong>Contact Form Submissions:</strong> Retained for 2 years unless the inquiry converts to a client engagement, in which case the client record retention policy applies.</li>
                  <li><strong>Website Analytics:</strong> Aggregated and anonymised data retained for up to 2 years. Raw IP-level logs are purged after 90 days.</li>
                  <li><strong>Email Communications:</strong> Business email threads are retained for 3 years and then purged unless legal hold obligations require otherwise.</li>
                  <li><strong>Deleted Accounts / Off-boarded Clients:</strong> Upon request or 12 months after the last service interaction, personal data is securely deleted or anonymised from our active systems.</li>
                </ul>
              </PolicySection>

              {/* ── 7. Third-party services ── */}
              <PolicySection id="third-party" number="07" title="Third-Party Services">
                <p>Our website and project portals may integrate with the following third-party platforms. Each provider maintains their own independent privacy policies:</p>
                <ul>
                  <li><strong>Google Analytics:</strong> Used for anonymised website traffic analysis. Data is processed per Google's Privacy Policy and their EU Standard Contractual Clauses.</li>
                  <li><strong>Zoho CRM / Zoho Creator:</strong> Used internally for project management and client relationship tracking. Zoho is compliant with GDPR and Indian IT Act requirements.</li>
                  <li><strong>Razorpay / Stripe:</strong> Payment processing. Card data is tokenized and never stored on We For Technology servers.</li>
                  <li><strong>AWS / Vercel:</strong> Cloud infrastructure and static site hosting. Data centres are located in India (ap-south-1) and the US. Data Transfer Agreements are in place.</li>
                  <li><strong>WhatsApp Business:</strong> Used for project communication at the client's request. Messages are end-to-end encrypted by WhatsApp's protocol.</li>
                </ul>
                <p>
                  We recommend reviewing the privacy policies of any third-party services you interact with through our platforms.
                </p>
              </PolicySection>

              {/* ── 8. Security ── */}
              <PolicySection id="security" number="08" title="Data Security">
                <p>We implement layered technical and organisational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction:</p>
                <ul>
                  <li><strong>Encryption in Transit:</strong> All web traffic is served over HTTPS/TLS 1.3. API endpoints enforce TLS-only connections.</li>
                  <li><strong>Encryption at Rest:</strong> Sensitive data fields (passwords, credentials) are encrypted using AES-256 or bcrypt hashing before storage.</li>
                  <li><strong>Access Controls:</strong> Role-based access control (RBAC) limits internal access to client data on a need-to-know basis. All staff access is logged.</li>
                  <li><strong>Secure Development Practices:</strong> We follow OWASP Top 10 secure coding guidelines in all projects and conduct code reviews before production deployments.</li>
                  <li><strong>Incident Response:</strong> In the event of a confirmed data breach affecting your personal data, we will notify affected parties within 72 hours of discovery, in line with emerging obligations under India's DPDPA.</li>
                </ul>
                <p>
                  While we take all reasonable precautions, no data transmission over the internet can be guaranteed 100% secure. You share data with us at your own risk, and we encourage you to use strong passwords and secure networks when accessing any online portal.
                </p>
              </PolicySection>

              {/* ── 9. Your Rights ── */}
              <PolicySection id="rights" number="09" title="Your Rights">
                <p>Subject to applicable law, you have the following rights regarding your personal data held by We For Technology:</p>
                <ul>
                  <li><strong>Right of Access:</strong> You may request a copy of all personal data we hold about you at any time.</li>
                  <li><strong>Right to Correction:</strong> You may request that inaccurate or incomplete personal data be corrected or updated.</li>
                  <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You may request deletion of your personal data, subject to our legal retention obligations.</li>
                  <li><strong>Right to Restrict Processing:</strong> In certain circumstances, you may request that we temporarily or permanently stop processing your data.</li>
                  <li><strong>Right to Data Portability:</strong> You may request your data in a structured, machine-readable format (e.g., JSON or CSV) for transfer to another service provider.</li>
                  <li><strong>Right to Object:</strong> You may object to processing of your data for direct marketing purposes at any time.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at <span className="text-accent-blue">wefortechnology.ai@gmail.com</span>. We will respond to verified requests within 30 days. We may need to verify your identity before processing a request.
                </p>
                <InfoBox>
                  Indian residents should be aware that additional rights and protections may apply under the Digital Personal Data Protection Act (DPDPA), 2023, once fully notified by the Government of India.
                </InfoBox>
              </PolicySection>

              {/* ── 10. Children ── */}
              <PolicySection id="children" number="10" title="Children's Privacy">
                <p>
                  Our website and services are intended exclusively for business and professional use by individuals aged 18 years or older. We do not knowingly collect personal data from children under the age of 18.
                </p>
                <p>
                  If you believe that we have inadvertently collected personal information from a minor, please contact us immediately at <span className="text-accent-blue">wefortechnology.ai@gmail.com</span> and we will take prompt steps to delete that information from our systems.
                </p>
              </PolicySection>

              {/* ── 11. Policy Changes ── */}
              <PolicySection id="changes" number="11" title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. When we make material changes, we will:
                </p>
                <ul>
                  <li>Update the <strong>"Last Updated"</strong> date at the top of this page.</li>
                  <li>Post a notice on our website homepage for 30 days following any significant change.</li>
                  <li>Where required by law, notify active clients directly via email.</li>
                </ul>
                <p>
                  We encourage you to review this policy periodically. Your continued use of our website or services after the effective date of any changes constitutes your acknowledgment of the updated policy.
                </p>
              </PolicySection>

              {/* ── 12. Contact ── */}
              <PolicySection id="contact" number="12" title="Contact Us">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to our designated privacy contact:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  {[
                    { icon: Mail,    label: "Email",    value: "wefortechnology.ai@gmail.com", href: "mailto:wefortechnology.ai@gmail.com" },
                    { icon: Phone,   label: "Phone",    value: "+91 8510070940",              href: "tel:+918510070940" },
                    { icon: MapPin,  label: "Address",  value: "Ghaziabad, Uttar Pradesh, India", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent-blue" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{label}</p>
                        {href ? (
                          <a href={href} className="text-xs text-slate-300 hover:text-white transition-colors break-all">{value}</a>
                        ) : (
                          <p className="text-xs text-slate-300">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-500">
                  We endeavour to respond to all privacy-related enquiries within <strong className="text-slate-400">5 business days</strong>. For urgent data breach notifications, please mark your email subject line <strong className="text-slate-400">[URGENT] Data Breach</strong>.
                </p>
              </PolicySection>

            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

/* ── Helpers ── */
function PolicySection({
  id, number, title, children,
}: {
  id: string; number: string; title: string; children: React.ReactNode;
}) {
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
        <span className="text-[11px] font-mono text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-2.5 py-1 rounded-md">{number}</span>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="text-sm text-slate-400 font-light leading-relaxed space-y-3 [&_ul]:space-y-2.5 [&_ul]:pl-0 [&_li]:flex [&_li]:gap-2.5 [&_li]:items-start [&_li]:before:content-['▸'] [&_li]:before:text-accent-blue [&_li]:before:shrink-0 [&_li]:before:mt-0.5 [&_strong]:text-slate-200 [&_strong]:font-medium">
        {children}
      </div>
    </motion.div>
  );
}

function PolicySubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
      <div className="pl-1">{children}</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 bg-accent-blue/[0.06] border border-accent-blue/20 rounded-xl p-4 mt-2">
      <Shield className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
      <p className="text-sm text-slate-300">{children}</p>
    </div>
  );
}
