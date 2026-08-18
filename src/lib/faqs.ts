export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: "The cost of a website depends on its complexity, the number of pages, specific integrations, and design requirements. We offer tailor-made quotes based on your project scope. Simple business websites start lower, while complex, database-driven e-commerce portals and enterprise web apps require custom scoping. We route users to our contact page for custom, transparent quotes."
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
