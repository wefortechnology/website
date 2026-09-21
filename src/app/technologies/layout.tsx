import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Tech Stack & Architecture | React, Next.js, Node, Python & Zoho",
  description:
    "Explore the modern technology stack we utilize to deliver fast, secure, and maintainable digital products: Next.js, React, Node.js, Python, PostgreSQL, AWS, and Zoho Creator.",
  alternates: {
    canonical: "/technologies",
  },
  openGraph: {
    url: "https://wefortechnology.com/technologies",
    title: "Modern Tech Stack & Architecture | We For Technology",
    description:
      "Enterprise-grade tech stacks and modern cloud architecture power every system we build.",
    images: ["/images/og-image.png"],
  },
};

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
