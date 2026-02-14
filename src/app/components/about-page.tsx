import { motion } from "motion/react";

const skills = [
  "UX Strategy",
  "Product Thinking",
  "Information Architecture",
  "Interaction Design",
  "UI Design",
  "Prototyping",
  "Frontend Handoff",
  "Design Systems",
  "Stakeholder Alignment",
];

const tools = ["Figma", "FigJam", "Notion", "Jira", "HTML/CSS (basic)"];

const workProcess = [
  "Define end-to-end product flows and information architecture",
  "Design UX and UI systems",
  "Translate business requirements into frontend-ready UX specs",
  "Work daily with engineers during delivery",
  "Support QA and validate what gets built",
];

export function AboutPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-16">
            About
          </h1>

          <div className="max-w-4xl space-y-16">
            {/* Bio */}
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl leading-relaxed">
                I am a Product Designer focused on building real, scalable digital
                products.
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                I work at the intersection of UX, product strategy and frontend
                delivery, translating ambiguous business requirements into clear UX
                systems that engineers can realistically build.
              </p>
            </div>

            {/* Positioning */}
            <div className="space-y-8 py-16 border-t border-border">
              <h2 className="text-3xl md:text-4xl tracking-tight">
                My work goes beyond screens
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I define product flows, information architecture and interaction
                logic, and I translate business needs into UX and UI systems ready
                for frontend implementation.
              </p>
            </div>

            {/* How I Work */}
            <div className="space-y-8 py-16 border-t border-border">
              <h2 className="text-3xl md:text-4xl tracking-tight">How I work</h2>
              <ul className="space-y-4">
                {workProcess.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 text-lg text-muted-foreground"
                  >
                    <span className="text-[var(--accent-portfolio)] mt-1">→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Core Skills */}
            <div className="space-y-8 py-16 border-t border-border">
              <h2 className="text-3xl md:text-4xl tracking-tight">Core Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-6 py-3 bg-muted border border-border rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-8 py-16 border-t border-border">
              <h2 className="text-3xl md:text-4xl tracking-tight">Tools</h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-6 py-3 bg-muted border border-border rounded-full text-sm"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
