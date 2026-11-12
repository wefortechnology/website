import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import BlogExplorer from "./BlogExplorer";

export default function BlogPage() {
  return (
    <PageTransition>
      {/* Banner */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-transparent">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
            Insights
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            We For Technology <br />
            <span className="text-gradient-cyan">Knowledge Base & Articles.</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Read engineering audits, workflow tips, low-code Deluge advice, and guides on optimization from our team.
          </p>
        </div>
      </section>

      <BlogExplorer />

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
