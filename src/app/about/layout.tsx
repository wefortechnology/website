import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "About Us | Premier Tech Agency in Ghaziabad & Delhi NCR",
  description:
    "Learn about We For Technology: our mission, leadership team, agile engineering methodology, and our track record in delivering scalable digital solutions from Ghaziabad, Uttar Pradesh, India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "https://wefortechnology.in/about",
    title: "About Us | We For Technology",
    description:
      "Our mission, engineering culture, and experienced team building high-performance digital products.",
    images: ["/images/og-image.png"],
  },
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
