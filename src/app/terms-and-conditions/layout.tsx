import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | We For Technology",
  description:
    "Read the terms of service, engagement agreements, and conditions governing digital projects delivered by We For Technology.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
