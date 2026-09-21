import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agile Development Process & Delivery Methodology | We For Technology",
  description:
    "Learn how We For Technology delivers projects on time and on budget through a disciplined 5-stage agile development lifecycle: Discovery, Architecture, Sprints, QA, and Deployment.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    url: "https://wefortechnology.com/process",
    title: "Our Engineering Process | We For Technology",
    description:
      "A structured 5-stage delivery lifecycle providing complete transparency and rapid iteration.",
    images: ["/images/og-image.png"],
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
