import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We For Technology | Digital Solutions That Build Brands",
  description: "We For Technology builds modern websites, mobile applications, custom business software, e-commerce storefronts, AI integrations, and Zoho CRM automation systems.",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  keywords: [
    "We For Technology",
    "We For Technology",
    "Web Development",
    "App Development",
    "Zoho Partner",
    "Zoho CRM",
    "AI Integration",
    "Custom Software",
    "Software Agency India",
    "Ghaziabad tech agency"
  ],
  authors: [{ name: "We For Technology" }],
  openGraph: {
    title: "We For Technology | Digital Solutions That Build Brands",
    description: "High-performance software and digital solutions that help brands scale and stand out.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden max-w-full`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0A0F1E] text-[#0A0F1E] dark:text-slate-100 font-sans selection:bg-[#00AAFF]/30 select-none overflow-x-hidden w-full max-w-full relative transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <LoadingScreen />
          <Navbar />
          <main className="flex-grow flex flex-col w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


