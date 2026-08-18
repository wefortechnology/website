export interface PricingPackage {
  name: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    name: "BASIC",
    description: "Ideal for startups, small businesses, and simple informational sites.",
    features: [
      "Custom responsive website (Next.js/React)",
      "Up to 5 pages designed & developed",
      "Basic contact form integrated",
      "Standard on-page SEO setup",
      "Fully mobile-responsive layout",
      "Deployment assistance to Vercel/Netlify"
    ],
    ctaText: "Get Started"
  },
  {
    name: "STANDARD",
    badge: "Most Popular",
    description: "Perfect for growing businesses requiring dynamic capabilities and integrations.",
    features: [
      "Everything in Basic package",
      "Dynamic pages & CMS integration (Sanity/Strapi)",
      "Admin dashboard functionality",
      "Basic API integrations",
      "Advanced UI/UX with micro-animations",
      "Advanced search and SEO architecture",
      "Google Analytics & pixel tracking integration",
      "Enhanced customization & layouts"
    ],
    ctaText: "Choose Standard"
  },
  {
    name: "ADVANCED",
    description: "Designed for enterprises and organizations needing custom applications and AI/CRM solutions.",
    features: [
      "Everything in Standard package",
      "Custom web application architecture",
      "Advanced Node.js/PostgreSQL backend",
      "Database design and secure authentication",
      "Stripe or custom payment gateway integration",
      "Third-party integrations (Zoho CRM, OpenAI APIs)",
      "Advanced analytical dashboard panels",
      "Priority launch support & code reviews"
    ],
    ctaText: "Talk to an Expert"
  }
];

export const pricingDisclaimers: string[] = [
  "Domain Name registration",
  "Cloud Web Hosting plans (AWS, Vercel Pro, Render, etc.)",
  "Payment gateway merchant fees & transaction rates",
  "Paid third-party APIs (OpenAI tokens, Maps, etc.)",
  "Premium templates, plugins, or software licensing",
  "Cloud compute & file storage servers",
  "SMS gateway and email newsletter dispatch service charges"
];
