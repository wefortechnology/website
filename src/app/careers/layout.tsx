import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Positions | Join We For Technology",
  description:
    "Explore career opportunities at We For Technology in Ghaziabad & Delhi NCR. We're hiring skilled Full Stack Developers, UI/UX Designers, and Zoho Developers.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    url: "https://wefortechnology.com/careers",
    title: "Careers & Job Openings | We For Technology",
    description:
      "Join our engineering team in Ghaziabad. Work on high-impact web apps, AI tools, and enterprise automation.",
    images: ["/images/og-image.png"],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
