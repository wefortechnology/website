import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "Concept Projects & Portfolio | We For Technology",
  description:
    "Concept projects from We For Technology: web apps, mobile apps, e-commerce stores, AI assistants and Zoho solutions, showing how we design and build.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    url: "https://wefortechnology.in/portfolio",
    title: "Concept Projects & Portfolio | We For Technology",
    description:
      "Explore concept projects showing how We For Technology designs and builds websites, web apps, mobile apps and Zoho solutions.",
    images: ["/images/og-image.png"],
  },
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
