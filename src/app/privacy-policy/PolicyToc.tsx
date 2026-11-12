"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

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

export default function PolicyToc() {
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
    <>
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
    </>
  );
}
