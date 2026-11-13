import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { MotionDiv } from "@/components/motion";
import { teamMembers as defaultMembers, type TeamMember } from "@/lib/team";

interface TeamSectionProps {
  members?: TeamMember[];
  title?: string;
  subtitle?: string;
  description?: string;
}

/**
 * "Our Team" section: a heading plus one card per team member (photo, social links, role, bio, skills).
 * Works inside Server Components; the entrance animation comes from the client-side MotionDiv.
 */
export default function TeamSection({
  members = defaultMembers,
  title = "The Leadership & Engineers Behind We For Technology",
  subtitle = "Our Team",
  description = "Meet the core strategists, developers, and architects driving our software solutions.",
}: TeamSectionProps) {
  return (
    <section id="team" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title={title} subtitle={subtitle} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <MotionDiv
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glow-card rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#081020] dark:to-[#040812] flex flex-col group transition-all duration-300 shadow-md dark:shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative h-80 w-full bg-slate-200 dark:bg-slate-900 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at We For Technology`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Social Overlays */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-all duration-300 shadow-sm"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white hover:border-slate-400 dark:hover:border-white/40 transition-all duration-300 shadow-sm"
                    aria-label={`${member.name} GitHub`}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#0369A1] dark:text-accent-cyan uppercase tracking-widest">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0A0F1E] dark:text-white">{member.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">{member.bio}</p>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
