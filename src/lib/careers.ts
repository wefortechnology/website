export interface JobOpening {
  id: string;
  position: string;
  location: string;
  experience: string;
  employmentType: "Full-Time" | "Part-Time" | "Contract" | "Remote";
  description: string;
  requirements: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "frontend-dev",
    position: "Frontend Developer",
    location: "Ghaziabad, India (Hybrid)",
    experience: "2–4 Years",
    employmentType: "Full-Time",
    description: "We are seeking a talented Frontend Developer proficient in React, Next.js, and TypeScript to craft premium web applications with fluid animations and responsive designs.",
    requirements: [
      "Strong proficiency in JavaScript, TypeScript, and modern CSS/Tailwind CSS",
      "Proven experience with Next.js (App Router) and state management libraries",
      "Familiarity with Framer Motion or similar React animation systems",
      "Understanding of web accessibilities (WCAG) and SEO optimization best practices"
    ]
  },
  {
    id: "backend-dev",
    position: "Backend Developer",
    location: "Ghaziabad, India (Hybrid)",
    experience: "3+ Years",
    employmentType: "Full-Time",
    description: "Join our team to design, construct, and optimize secure, high-concurrency RESTful and GraphQL APIs alongside database architectures for custom enterprise applications.",
    requirements: [
      "Deep experience with Node.js, Express.js, and backend server routing",
      "Expert knowledge of relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases",
      "Experience setting up secure user authentication (JWT, OAuth) and API rate limiting",
      "Familiarity with AWS services, Docker, and CI/CD pipelines"
    ]
  },
  {
    id: "fullstack-dev",
    position: "Full Stack Developer",
    location: "Remote (India)",
    experience: "3–5 Years",
    employmentType: "Full-Time",
    description: "We are looking for a versatile Full Stack Developer who can bridge client-side experiences in Next.js and backend integrations, managing data pipelines and system reliability.",
    requirements: [
      "Proficient in the MERN/PERN stack (React, Node, Express, MongoDB/PostgreSQL)",
      "Strong understanding of Next.js Server Actions and API Routing",
      "Experience integrating third-party APIs (Stripe, Zoho, OpenAI)",
      "Solid understanding of Git, branching models, and deployment configurations"
    ]
  },
  {
    id: "uiux-designer",
    position: "UI/UX Designer",
    location: "Ghaziabad, India (Hybrid)",
    experience: "2+ Years",
    employmentType: "Full-Time",
    description: "Design the digital blueprints of tomorrow. You will research user flows, create wireframes, and design high-fidelity layouts and interactive prototypes in Figma.",
    requirements: [
      "Strong portfolio of modern, minimalist, and dark-themed web/app designs in Figma",
      "Knowledge of visual principles: grids, typography, spacing, and conversion funnels",
      "Ability to create functional prototypes and design systems for developer handoffs",
      "Understanding of CSS capabilities to ensure designs are buildable"
    ]
  },
  {
    id: "qa-engineer",
    position: "QA Engineer",
    location: "Remote (India)",
    experience: "1–3 Years",
    employmentType: "Full-Time",
    description: "Ensure our digital solutions are bulletproof. You will write automated end-to-end test cases and perform exploratory testing across device viewports.",
    requirements: [
      "Experience writing automated tests using Cypress, Playwright, or Selenium",
      "Solid grasp of API testing tools like Postman and performance testing with JMeter",
      "Ability to draft detailed, clear bug reports and replicate edge-case scenarios",
      "Understanding of responsive display issues and browser cross-compatibility"
    ]
  },
  {
    id: "biz-dev-executive",
    position: "Business Development Executive",
    location: "Ghaziabad, India (On-Site)",
    experience: "1–3 Years",
    employmentType: "Full-Time",
    description: "Drive corporate growth. You will identify business opportunities, draft project proposals, manage client inquiries, and represent We For Technology in corporate channels.",
    requirements: [
      "Outstanding communication, presentation, and sales pitching skills",
      "Basic understanding of modern technology terms (websites, apps, Zoho, AI)",
      "Ability to write formal corporate proposal documents and outline project scopes",
      "Experience with CRM tools (Zoho CRM or HubSpot) to manage leads"
    ]
  }
];
