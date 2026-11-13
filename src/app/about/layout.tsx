import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "About Us | Web Development Studio in Ghaziabad & Delhi NCR",
  description:
    "Learn about We For Technology: a Ghaziabad-based web development studio with 3+ years of hands-on experience in MERN, Next.js, mobile apps and Zoho automation. Meet the team and see how we work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "https://wefortechnology.in/about",
    title: "About Us | We For Technology",
    description:
      "Our mission, how we work, and the team behind We For Technology: 3+ years of hands-on web development experience.",
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
