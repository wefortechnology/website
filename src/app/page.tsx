"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users2, Zap, Heart, CheckCircle2, TrendingUp, HelpCircle, MapPin, Mail, Clock, Cpu } from "lucide-react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTypescript, 
  SiTailwindcss, 
  SiZoho, 
  SiJavascript 
} from "react-icons/si";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import Timeline from "@/components/Timeline";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PageTransition from "@/components/PageTransition";
import { services } from "@/lib/services";
import { portfolioItems } from "@/lib/portfolio";

const marqueeItems = [
  "Next.js", "React", "Node.js", "MongoDB", "TypeScript", 
  "Tailwind CSS", "Zoho", "AI", "JavaScript",
  "Next.js", "React", "Node.js", "MongoDB", "TypeScript", 
  "Tailwind CSS", "Zoho", "AI", "JavaScript"
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Core Technologies" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const values = [
  {
    name: "Innovation",
    desc: "We continuously explore better technologies and smarter solutions.",
    icon: Zap,
  },
  {
    name: "Quality",
    desc: "We focus on reliable, scalable and maintainable products.",
    icon: Award,
  },
  {
    name: "Transparency",
    desc: "Clear communication and honest project execution.",
    icon: Shield,
  },
  {
    name: "Growth",
    desc: "We build solutions designed to help businesses grow.",
    icon: TrendingUp,
  },
];

const whyChooseUs = [
  {
    title: "Modern Technology",
    desc: "We leverage the latest frameworks and runtime architectures for peak efficiency."
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden maintenance fees or sudden scope changes. Fixed budgets, clear terms."
  },
  {
    title: "Dedicated Support",
    desc: "Get 24/7 priority access to senior developers who know your systems inside out."
  },
  {
    title: "Scalable Architecture",
    desc: "Systems built to handle rapid user growth and high traffic volumes seamlessly."
  },
  {
    title: "Responsive Design",
    desc: "Perfect pixel rendering across all screen viewports, mobiles, and systems."
  },
  {
    title: "Performance Focused",
    desc: "High-speed page loads and clean code execution for optimal conversion rates."
  },
  {
    title: "Security Focused",
    desc: "Vulnerability assessments, secure routing, and end-to-end data encryption."
  },
  {
    title: "Business Solutions",
    desc: "Technology designed around your business KPIs, sales channels, and corporate growth."
  }
];

function getTechIcon(name: string) {
  switch (name) {
    case "Next.js":
      return <SiNextdotjs className="w-5 h-5 text-[#0A0F1E] dark:text-white shrink-0" />;
    case "React":
      return <SiReact className="w-5 h-5 text-[#61dafb] shrink-0 animate-[spin_12s_linear_infinite]" />;
    case "Node.js":
      return <SiNodedotjs className="w-5 h-5 text-[#339933] shrink-0" />;
    case "MongoDB":
      return <SiMongodb className="w-5 h-5 text-[#13aa52] shrink-0" />;
    case "TypeScript":
      return <SiTypescript className="w-5 h-5 text-[#3178c6] shrink-0 bg-white rounded-xs" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="w-5 h-5 text-[#38bdf8] shrink-0" />;
    case "Zoho":
      return <SiZoho className="w-5 h-5 text-[#E11C24] shrink-0" />;
    case "AI":
      return <Cpu className="w-5 h-5 text-accent-purple shrink-0" />;
    case "JavaScript":
      return <SiJavascript className="w-5 h-5 text-[#F7DF1E] shrink-0 bg-black rounded-xs" />;
    default:
      return null;
  }
}

export default function Home() {
  // Grab a subset of services and portfolio items for the homepage showcase
  const featuredServices = services.slice(0, 3);
  const featuredPortfolio = portfolioItems.slice(0, 3);

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* Trust & Stats Section */}
      <section className="py-12 bg-[#F5F7FA] dark:bg-white/5 border-y border-slate-200 dark:border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-1.5 p-4 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xs dark:shadow-inner"
              >
                <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0A0F1E] dark:text-white font-mono">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[11px] sm:text-sm font-light text-slate-600 dark:text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="relative w-full border-t border-slate-200 dark:border-white/5 pt-8 overflow-hidden select-none flex">
          <div className="animate-marquee gap-6 whitespace-nowrap pr-6 flex items-center">
            {marqueeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 px-5 py-2.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-[#008FE5]/40 transition-all duration-300 shadow-xs"
              >
                {getTechIcon(item)}
                <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 font-sans">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-start items-start">
            {/* Left Col: Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xs font-semibold uppercase tracking-widest text-[#008FE5] dark:text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20 w-fit mb-4 inline-block"
                >
                  About We For Technology
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0F1E] dark:text-white leading-tight"
                >
                  We Build Technology With Purpose.
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-400 font-light leading-relaxed"
              >
                At We For Technology, we combine engineering excellence, user experience design, business strategy, and performance audits to deliver premium products. We don't just write code; we architect solutions that grow businesses.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-600 dark:text-slate-400 font-light leading-relaxed"
              >
                Whether you need a high-speed web presence, automated pipelines in Zoho, custom dashboards, or conversational artificial intelligence, our teams deploy secure, production-ready software.
              </motion.p>
              <div className="pt-4">
                <Button href="/about" variant="outline">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </Button>
              </div>
            </div>

            {/* Right Col: Values Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.name}
                    className="glow-card rounded-xl p-6 border border-slate-200 dark:border-white/5 flex flex-col gap-4 bg-white dark:bg-[#131B2E]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/15 border border-accent-blue/20 text-[#008FE5] dark:text-accent-blue flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0F1E] dark:text-white">{val.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-light text-xs leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-24 bg-[#F5F7FA] dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Tailored Solutions For Every Platform"
            subtitle="Core Services"
            description="We build scalable, beautiful applications utilizing robust programming architectures."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDesc={service.shortDesc}
                iconName={service.icon}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button href="/services" variant="outline">
              <span>View All 12 Services</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Engineered to Drive Real Results"
            subtitle="Featured Projects"
            description="Inspect detailed audits, custom tech solutions, and business outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPortfolio.map((project, index) => (
              <PortfolioCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                subTitle={project.subTitle}
                technologies={project.technologies}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button href="/portfolio" variant="outline">
              <span>Explore Full Portfolio</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process / Development Timeline Section */}
      <section className="py-24 bg-[#F5F7FA] dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <SectionHeading
            title="How We Turn Ideas Into Digital Success"
            subtitle="Development Process"
            description="Our structured engineering lifecycle ensures on-time, bug-free, and high-performance product launches."
          />
        </div>
        <Timeline />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-xs font-semibold uppercase tracking-widest text-[#008FE5] dark:text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20 w-fit mb-4 inline-block"
                >
                  Our Commitment
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0F1E] dark:text-white leading-tight"
                >
                  Why Businesses Choose We For Technology
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-400 font-light leading-relaxed"
              >
                We For Technology stands out as a reliable technological partner because we prioritize longevity, clean codebase structures, absolute transparency in budget estimation, and around-the-clock developer support.
              </motion.p>
              <div className="flex flex-col gap-4 border-t border-slate-200 dark:border-white/5 pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#008FE5] dark:text-accent-blue" />
                  <span className="text-sm font-medium text-[#0A0F1E] dark:text-white">Full-Stack Capability</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#008FE5] dark:text-accent-blue" />
                  <span className="text-sm font-medium text-[#0A0F1E] dark:text-white">Zoho Certified Methodologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#008FE5] dark:text-accent-blue" />
                  <span className="text-sm font-medium text-[#0A0F1E] dark:text-white">Enterprise Security Architecture</span>
                </div>
              </div>
            </div>

            {/* Right Column: Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="glow-card rounded-xl p-5 border border-slate-200 dark:border-white/5 flex gap-4 hover:border-accent-blue/30 bg-white dark:bg-[#131B2E]"
                >
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-[#008FE5] dark:text-accent-blue font-mono font-bold text-xs select-none shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0A0F1E] dark:text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust & Guarantee Section */}
      <section className="py-20 relative z-10 border-t border-slate-200 dark:border-white/5 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] dark:from-[#081020] dark:to-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Ironclad Client Guarantee"
            subtitle="Built For Trust"
            description="We eliminate client risk through transparent milestones, guaranteed SLAs, and enterprise-grade security."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glow-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0F1E] dark:text-white">Strict NDA & Code Ownership</h3>
                <p className="text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed">
                  100% intellectual property & source code transfer upon project delivery. We sign non-disclosure agreements before reviewing your proprietary specifications.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>✓ Verified Legal Protection</span>
              </div>
            </div>

            <div className="glow-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-500 flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0F1E] dark:text-white">Milestone Sprint Guarantee</h3>
                <p className="text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed">
                  You approve every stage before payment release. Weekly demo calls and live staging environments ensure complete visibility throughout development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold">
                <span>✓ 100% Milestone Assurance</span>
              </div>
            </div>

            <div className="glow-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0F1E] dark:text-white">99.9% Uptime & 24/7 Support</h3>
                <p className="text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed">
                  Dedicated post-launch bug fixes and monitoring. Our engineering desk in Ghaziabad handles real-time cloud updates and technical maintenance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold">
                <span>✓ Production SLA Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5F7FA] dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Testimonials"
            description="Read reviews and testimonials from business operations that partner with We For Technology."
          />

          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Homepage Contact Form & Details Section */}
      <section className="py-24 relative z-10 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#030712]">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Let’s Build Something Great Together"
            subtitle="Start a Project"
            description="Tell us about your project requirements or system challenges, and let's construct a premium custom solution."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-start mt-12">
            {/* Left Column: Contact details card */}
            <div className="lg:col-span-5 h-full">
              <div className="glow-card rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-white/5 bg-[#F5F7FA] dark:bg-dark-card/30 h-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#008FE5] dark:text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20 w-fit mb-4 inline-block">
                      Contact Channels
                    </span>
                    <h3 className="text-2xl font-bold text-[#0A0F1E] dark:text-white mb-2 tracking-tight">Direct Communication</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      Reach out via our official support desks or visit our regional workspace.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Location Detail */}
                    <div className="flex gap-4 items-start">
                      <div className="p-3 rounded-lg bg-accent-blue/15 text-[#008FE5] dark:text-accent-blue h-fit">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0A0F1E] dark:text-white mb-1">Our Office</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          We For Technology <br />
                          Ghaziabad, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>

                    {/* Email Detail */}
                    <div className="flex gap-4 items-start">
                      <div className="p-3 rounded-lg bg-accent-purple/15 text-accent-purple h-fit">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <a href="mailto:wefortechnology.ai@gmail.com" className="text-xs text-slate-600 dark:text-slate-400 font-light font-mono hover:text-[#0A0F1E] dark:hover:text-white transition-colors">
                          wefortechnology.ai@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Hours Detail */}
                    <div className="flex gap-4 items-start">
                      <div className="p-3 rounded-lg bg-accent-cyan/15 text-[#00A9D6] dark:text-accent-cyan h-fit">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0A0F1E] dark:text-white mb-1">Business Hours</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          Monday – Saturday: 10:00 AM – 7:00 PM (IST)<br />
                          Sunday: Closed Support Channel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Channels Section */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/5 mt-8">
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                    Connect on Social Channels
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/wefortechnology"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-[#008FE5] dark:hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300 shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.762 1.75-1.762s1.75.789 1.75 1.762c0 .974-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/wefortechnology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-[#008FE5] dark:hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300 shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/wefortechnology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-[#008FE5] dark:hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300 shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-[#008FE5] dark:hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300 shadow-xs"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7 w-full">
              <Suspense fallback={<div className="text-center text-xs font-mono text-slate-500">Loading Form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

