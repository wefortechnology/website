import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = withSeo({
  title: "Frequently Asked Questions (FAQ) | We For Technology",
  description:
    "What is We For Technology? Answers about our Ghaziabad web development studio, services, pricing, timelines, hosting, Zoho CRM, AI integrations and support.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    url: "https://wefortechnology.in/faq",
    title: "Frequently Asked Questions | We For Technology",
    description:
      "Answers regarding software development costs, timelines, hosting, Zoho integrations, and warranties.",
    images: ["/images/og-image.png"],
  },
});

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
