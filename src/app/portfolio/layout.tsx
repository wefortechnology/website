import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "Client Case Studies & Software Portfolio | We For Technology",
  description:
    "Discover how We For Technology builds high-impact web apps, mobile solutions, Zoho systems, and fintech dashboards for modern enterprises and startups across India and worldwide.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    url: "https://wefortechnology.in/portfolio",
    title: "Client Case Studies & Software Portfolio | We For Technology",
    description:
      "Explore real-world software, web, and mobile app case studies delivered by We For Technology.",
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
