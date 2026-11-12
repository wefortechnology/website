import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "Software & Digital Services | Web, Mobile, AI & Zoho Solutions",
  description:
    "Explore We For Technology's full spectrum of digital services: custom web development, mobile applications, Zoho CRM automation, AI integrations, UI/UX design, and cloud architectures in Ghaziabad & Delhi NCR.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "https://wefortechnology.in/services",
    title: "Software & Digital Services | We For Technology",
    description:
      "Full-stack digital engineering: Web, Mobile, AI integrations, Zoho automation, and Custom Software.",
    images: ["/images/og-image.png"],
  },
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
