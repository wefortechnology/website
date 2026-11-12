import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "Contact Us | Start Your Project | Ghaziabad & Delhi NCR",
  description:
    "Get in touch with We For Technology for a free project consultation, custom software estimation, or Zoho automation audit. Office located in Ghaziabad, Uttar Pradesh, India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "https://wefortechnology.in/contact",
    title: "Contact We For Technology | Start Your Project",
    description:
      "Reach out to our engineering team in Ghaziabad, India for web development, mobile apps, Zoho, and AI consulting.",
    images: ["/images/og-image.png"],
  },
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
