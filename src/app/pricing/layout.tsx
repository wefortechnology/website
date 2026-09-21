import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Software & Retainer Pricing | We For Technology",
  description:
    "Review transparent development pricing and monthly retainer plans for startups and enterprises. Fixed-scope projects, dedicated developer pods, and Zoho maintenance retainers.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    url: "https://wefortechnology.com/pricing",
    title: "Transparent Software & Retainer Pricing | We For Technology",
    description:
      "Predictable, flexible software engineering pricing tailored for high-growth businesses and scaling brands.",
    images: ["/images/og-image.png"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
