import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "Industry Digital Solutions | FinTech, E-Commerce & Healthcare",
  description:
    "Tailored digital solutions built for specific industry challenges: FinTech platforms, E-Commerce stores, Healthcare apps, SaaS products, and Logistics automation systems.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    url: "https://wefortechnology.in/solutions",
    title: "Industry Digital Solutions | We For Technology",
    description:
      "Engineered software solutions solving real-world challenges across Fintech, E-Commerce, Logistics, and Healthcare.",
    images: ["/images/og-image.png"],
  },
});

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
