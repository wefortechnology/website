import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo({
  title: "Refund & Cancellation Policy | We For Technology",
  description:
    "Review We For Technology's transparent refund, cancellation, and retainer policies for custom software and ongoing agency retainers.",
  alternates: {
    canonical: "/refund-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
});

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
