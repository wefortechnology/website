import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const title = `${post.title} | We For Technology Blog`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: [
      post.title,
      post.category,
      "We For Technology Blog",
      "Software Development Articles",
      "Tech Insights India",
      "Web & Mobile Architecture",
    ],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: `https://wefortechnology.com/blog/${slug}`,
      siteName: "We For Technology",
      title,
      description,
      authors: [post.author],
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: post.imageUrl.startsWith("http")
            ? post.imageUrl
            : "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${post.title} - We For Technology`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = blogPosts
    .filter((p) => post.relatedSlugs.includes(p.slug))
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://wefortechnology.com/blog/${slug}`,
    image: post.imageUrl.startsWith("http")
      ? post.imageUrl
      : "https://wefortechnology.com/images/og-image.png",
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "We For Technology",
      url: "https://wefortechnology.com",
      logo: "https://wefortechnology.com/images/image%206.png",
    },
    datePublished: new Date(post.date).toISOString(),
    inLanguage: "en-IN",
  };

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>
      </div>

      {/* Main Layout */}
      <article className="pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3 py-1 rounded-full w-fit">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {post.title}
            </h1>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-y border-white/5 py-4">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-accent-blue" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Visual Tech Header Placeholder */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center p-6 select-none">
            <div className="absolute inset-0 tech-grid opacity-20" />
            <span className="text-sm font-mono uppercase tracking-widest text-slate-600">
              [ ARTICLE_IMAGE_PLACEHOLDER ]
            </span>
          </div>

          {/* Content */}
          <div className="text-slate-300 font-light text-base sm:text-lg leading-relaxed space-y-6 pt-4">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("###")) {
                return (
                  <h3 key={i} className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-4">
                    {para.replace("###", "").trim()}
                  </h3>
                );
              }
              if (para.startsWith("-")) {
                return (
                  <ul key={i} className="space-y-2 list-disc pl-6 text-slate-300 text-sm sm:text-base">
                    {para.split("\n").map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item.replace("-", "").trim()}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm sm:text-base">
                  {para}
                </p>
              );
            })}
          </div>

        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white/[0.01] border-y border-white/5 relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-lg font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="block group">
                  <div className="glow-card rounded-xl p-6 border border-white/5 flex flex-col justify-between h-full hover:border-accent-blue/30">
                    <div>
                      <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                        {rel.excerpt}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent-blue flex items-center gap-1 group-hover:text-white transition-colors">
                      Read Article <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
