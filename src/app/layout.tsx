import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wefortechnology.in"),
  title: {
    default: "We For Technology | Digital Solutions That Build Brands",
    template: "%s | We For Technology",
  },
  description:
    "We For Technology is a web development studio in Ghaziabad & Delhi NCR, India, with 3+ years of experience building custom websites and web apps with MERN and Next.js, plus mobile apps, Zoho CRM automation and AI integrations.",
  applicationName: "We For Technology",
  authors: [{ name: "We For Technology", url: "https://wefortechnology.in" }],
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wefortechnology.in",
    siteName: "We For Technology",
    title: "We For Technology | Digital Solutions That Build Brands",
    description:
      "Custom websites and web apps built with MERN and Next.js, plus mobile apps, Zoho CRM automation and AI integrations, from Ghaziabad & Delhi NCR.",
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
  // Google Search Console ownership (wefortechnology.in). Also verified by public/google907da9c808403ba7.html.
  verification: {
    google: "W7EksHTzuf7Xa2BsVv44KBZPOubLXwEYrDmH2hdmu4A",
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
    "@id": "https://wefortechnology.in/#organization",
    name: "We For Technology",
    alternateName: ["WFT", "We For Technology India"],
    url: "https://wefortechnology.in",
    logo: "https://wefortechnology.in/images/logo.png",
    image: "https://wefortechnology.in/images/og-image.png",
    description:
      "We For Technology is a full-service software development agency in Ghaziabad, Uttar Pradesh, India, specializing in modern web development, mobile applications, Zoho CRM & Creator automation, and AI integrations.",
    telephone: "+91-8510070940",
    email: "contact@wefortechnology.in",
    priceRange: "$$",
    currenciesAccepted: "INR, USD, EUR, GBP",
    paymentAccepted: "Bank Transfer, UPI, Credit Card",
    address: {
      "@type": "PostalAddress",
      // TODO: add the real street address (streetAddress) once confirmed.
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
        opens: "10:00",
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
      "https://www.facebook.com/wefortechnology",
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
            url: "https://wefortechnology.in/services/web-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            url: "https://wefortechnology.in/services/app-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            url: "https://wefortechnology.in/services/software-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zoho CRM & Creator Solutions",
            url: "https://wefortechnology.in/services/zoho-solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integrations & LLM Systems",
            url: "https://wefortechnology.in/services/ai-integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            url: "https://wefortechnology.in/services/ui-ux-design",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wefortechnology.in/#website",
    url: "https://wefortechnology.in",
    name: "We For Technology",
    publisher: {
      "@id": "https://wefortechnology.in/#organization",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden max-w-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0A0F1E] font-sans selection:bg-[#00AAFF]/30 overflow-x-hidden w-full max-w-full relative">
        <Navbar />
        <main className="flex-grow flex flex-col w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
      {/* GA4 loads only when NEXT_PUBLIC_GA_ID is set (see .env.example). */}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      {/* Google Tag Manager loads only when NEXT_PUBLIC_GTM_ID is set. */}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
    </html>
  );
}


