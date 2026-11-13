/** Team profiles shown in <TeamSection />. Images live in public/images. */
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  github: string;
  skills: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Shri Krishna",
    role: "Founder & Managing Director",
    bio: "Visionary product strategist dedicated to solving operational bottlenecks. Shri leads client partnerships, system scoping, and global growth strategies.",
    image: "/images/team-founder.jpg",
    linkedin: "https://www.linkedin.com/company/wefortechnology",
    github: "https://github.com/wefortechnology/",
    skills: ["Product Strategy", "Enterprise Architecture", "Business Growth", "Zoho Ecosystem"],
  },
  {
    name: "Mahavir",
    role: "Chief Technology Officer",
    bio: "Full-stack engineer with three years of experience building fast Next.js and MERN applications, REST APIs and scalable databases.",
    image: "/images/team-cto.jpg",
    linkedin: "https://www.linkedin.com/company/wefortechnology",
    github: "https://github.com/wefortechnology/",
    skills: ["Next.js 15", "TypeScript", "AWS Cloud", "System Design"],
  },
  {
    name: "Priya Patel",
    role: "Lead Zoho Architect",
    bio: "Zoho developer with hands-on experience in Deluge scripting, CRM automation, custom Creator apps and REST webhook integrations.",
    image: "/images/team-zoho-lead.jpg",
    linkedin: "https://www.linkedin.com/company/wefortechnology",
    github: "https://github.com/wefortechnology/",
    skills: ["Zoho One", "Deluge Logic", "API Webhooks", "CRM Automation"],
  },
];
