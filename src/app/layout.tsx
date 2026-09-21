import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wefortechnology.com"),
  title: {
    default: "We For Technology | Digital Solutions That Build Brands",
    template: "%s | We For Technology",
  },
  description:
    "We For Technology is a premier software development agency in Ghaziabad & Delhi NCR, India. We specialize in custom web applications, mobile apps, Zoho CRM automation, AI integrations, and enterprise software.",
  applicationName: "We For Technology",
  authors: [{ name: "We For Technology", url: "https://wefortechnology.com" }],
  generator: "Next.js",
  keywords: [
    "We For Technology",
    "Software Development Company Ghaziabad",
    "Web Development Agency Delhi NCR",
    "Custom Web Application Development",
    "Mobile App Development India",
    "Zoho Partner India",
    "Zoho CRM Automation",
    "Zoho Creator Developer",
    "Deluge Scripting Experts",
    "AI Integration Agency",
    "Generative AI Solutions",
    "Full Stack Developers India",
    "Next.js Development Agency",
    "UI UX Design Studio",
    "Ghaziabad tech agency",
    "Ecommerce Development India",
    "Custom ERP Development"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wefortechnology.com",
    siteName: "We For Technology",
    title: "We For Technology | Digital Solutions That Build Brands",
    description:
      "Premier software development, modern web applications, mobile apps, Zoho CRM automation, and AI integrations in Ghaziabad & Delhi NCR.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "We For Technology - Digital Solutions That Build Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We For Technology | Digital Solutions That Build Brands",
    description:
      "High-performance software, modern websites, mobile apps, and Zoho automations tailored to build modern brands.",
    images: ["/images/og-image.png"],
    creator: "@wefortechnology",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology & Software Development",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Ghaziabad, Uttar Pradesh, India",
    "geo.position": "28.6692;77.4538",
    ICBM: "28.6692, 77.4538",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://wefortechnology.com/#organization",
    name: "We For Technology",
    alternateName: ["WFT", "We For Technology India"],
    url: "https://wefortechnology.com",
    logo: "https://wefortechnology.com/images/image%206.png",
    image: "https://wefortechnology.com/images/og-image.png",
    description:
      "We For Technology is a full-service software development agency in Ghaziabad, Uttar Pradesh, India, specializing in modern web development, mobile applications, Zoho CRM & Creator automation, and AI integrations.",
    telephone: "+91-8510070940",
    email: "wefortechnology.ai@gmail.com",
    priceRange: "$$",
    currenciesAccepted: "INR, USD, EUR, GBP",
    paymentAccepted: "Bank Transfer, UPI, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ghaziabad Tech Hub",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6692,
      longitude: 77.4538,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Delhi" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/wefortechnology",
      "https://www.instagram.com/wefortechnology/",
      "https://github.com/wefortechnology/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital & Software Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            url: "https://wefortechnology.com/services/web-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            url: "https://wefortechnology.com/services/app-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            url: "https://wefortechnology.com/services/software-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zoho CRM & Creator Solutions",
            url: "https://wefortechnology.com/services/zoho-solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integrations & LLM Systems",
            url: "https://wefortechnology.com/services/ai-integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            url: "https://wefortechnology.com/services/ui-ux-design",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wefortechnology.com/#website",
    url: "https://wefortechnology.com",
    name: "We For Technology",
    publisher: {
      "@id": "https://wefortechnology.com/#organization",
    },
  },
];

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0A0F1E] text-[#0A0F1E] dark:text-slate-100 font-sans selection:bg-[#00AAFF]/30 select-none overflow-x-hidden w-full max-w-full relative transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LoadingScreen />
          <Navbar />
          <main className="flex-grow flex flex-col w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}


