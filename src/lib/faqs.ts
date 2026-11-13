import { contact } from "./site";

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Brand questions come first: short, direct definitions that search engines
 * and AI answers can quote when people search for "We For Technology".
 * Keep these consistent with the About page, site metadata and JSON-LD.
 */
export const faqs: FAQItem[] = [
  {
    question: "What is We For Technology?",
    answer: "We For Technology is a web development studio based in Ghaziabad, Uttar Pradesh, India. We build custom websites, web applications and mobile apps with the MERN stack and Next.js, and we also offer Zoho CRM automation, AI integrations and UI/UX design for businesses in India and worldwide."
  },
  {
    question: "Where is We For Technology located?",
    answer: "We For Technology is based in Ghaziabad, Uttar Pradesh, and serves clients across Delhi NCR (including Delhi and Noida), the rest of India, and international clients remotely. Our office hours are Monday to Saturday, 10 AM to 7 PM IST."
  },
  {
    question: "When was We For Technology founded?",
    answer: "We For Technology was founded in July 2026 in Ghaziabad. Our founders bring three years of hands-on experience building web applications with the MERN stack and Next.js, and we have already delivered projects for our first clients."
  },
  {
    question: "What services does We For Technology offer?",
    answer: "We For Technology offers website development, custom web application development, mobile app development, custom software, e-commerce development, Zoho CRM and Creator solutions, AI integrations, UI/UX design, and post-launch maintenance and support."
  },
  {
    question: "How can I contact We For Technology?",
    answer: `You can reach We For Technology by phone or WhatsApp at ${contact.phoneDisplay}, by email at ${contact.email}, or by booking a free 30-minute call through the contact page at wefortechnology.in/contact. We reply to every enquiry within 24 hours.`
  },
  {
    question: "How much does a website cost?",
    answer: "The cost of a website depends on its complexity, the number of pages, specific integrations, and design requirements. We offer tailor-made quotes based on your project scope. Simple business websites start lower, while complex, database-driven e-commerce portals and enterprise web apps require custom scoping. Contact us with your requirements and we will send you a clear, itemised quote."
  },
  {
    question: "How long does development take?",
    answer: "A standard landing page or simple website can take 2 to 4 weeks. Custom e-commerce platforms and moderate web applications typically require 6 to 10 weeks, while large-scale custom enterprise systems can span several months. We establish clear timelines and weekly checkpoints at the start of every project."
  },
  {
    question: "Do you provide hosting?",
    answer: "We do not sell proprietary hosting, but we help configure, secure, and deploy your project on leading cloud platforms such as AWS, Vercel, Netlify, and Render. Hosting charges are paid directly to the providers, ensuring you maintain full control and ownership of your infrastructure."
  },
  {
    question: "Do you provide domain registration?",
    answer: "We assist with domain procurement and DNS settings, but the domain ownership itself is registered under your business name using your preferred payment method. This guarantees that you are the sole legal owner of your domain names."
  },
  {
    question: "Can you build custom software?",
    answer: "Yes, custom software development is one of our primary services. We build custom ERP modules, dashboards, internal databases, client portals, and custom API systems matching your exact organizational workflows using modern technologies like React, Node.js, and PostgreSQL."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes. We offer monthly maintenance and support packages that include active uptime monitoring, routine library/security updates, daily cloud backups, database tuning, and dedicated developer hours for quick adjustments or content changes."
  },
  {
    question: "Can you integrate payment gateways?",
    answer: "Certainly. We integrate secure, PCI-compliant payment gateways like Stripe, PayPal, Razorpay, Authorize.Net, and others. We set up shopping carts, custom checkout pages, invoice generation, and refund webhooks."
  },
  {
    question: "Can you integrate Zoho CRM?",
    answer: "Yes, we specialize in Zoho Creator applications and Zoho CRM integrations. We can connect your website or custom software to Zoho, automate lead captures, setup Deluge workflows, and establish sync routes across your departments."
  },
  {
    question: "Can you integrate AI?",
    answer: "Yes, we integrate OpenAI APIs, Claude, Gemini, custom vector databases (Pinecone), and LLM frameworks to build intelligent search systems, semantic document search (RAG), customer chatbots, and automated text categorization systems."
  },
  {
    question: "Do you provide mobile app development?",
    answer: "Yes, we develop cross-platform mobile apps using React Native and Flutter for iOS and Android. This allows you to launch on both stores from a single, high-performance codebase, reducing build times and maintenance costs."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. We can transition your old, slow, or outdated website to a high-speed, modern Next.js/Tailwind CSS stack, retaining your brand identity while modernizing the UI/UX and improving conversion optimization."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we provide 30 days of complimentary support after launch to resolve any unforeseen bugs, configure server settings, and ensure your team is trained on using CMS features or admin panels."
  }
];
