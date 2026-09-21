import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Blog & Engineering Insights | We For Technology",
  description:
    "Explore in-depth technical articles, software tutorials, Zoho automation workflows, Next.js optimization guides, and AI integration best practices written by We For Technology engineers.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "https://wefortechnology.com/blog",
    title: "Tech Blog & Engineering Insights | We For Technology",
    description:
      "Articles, tutorials, and practical engineering guides on modern web development, Zoho CRM, and AI.",
    images: ["/images/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
