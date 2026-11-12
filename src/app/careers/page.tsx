import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import CareersBoard from "./CareersBoard";

export default function CareersPage() {
  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-transparent">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
            Join We For Technology
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Build The Future <br />
            <span className="text-gradient-cyan">Of Digital Products.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate engineers, pixel-perfect designers, and customer-oriented business consultants to join our remote/hybrid teams.
          </p>
        </div>
      </section>

      <CareersBoard />

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
