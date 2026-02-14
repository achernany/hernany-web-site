import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface CaseStudyPageProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

const projectData: Record<string, any> = {
  lotobola: {
    title: "LotoBola",
    type: "Betting Platform",
    role: "Lead Product Designer",
    duration: "8 months",
    team: "1 Product Manager, 3 Engineers, 1 QA",
    heroImage: "https://images.unsplash.com/photo-1718157582118-f04597eaae56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXR0aW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MjE3Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  playzonbet: {
    title: "PlayzonBet",
    type: "Sports Betting Platform",
    role: "Lead Product Designer",
    duration: "10 months",
    team: "2 Product Managers, 5 Engineers, 1 Designer, 2 QA",
    heroImage: "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MTY5OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  inlearning: {
    title: "Inlearning",
    type: "E-Learning Platform",
    role: "Lead Product Designer",
    duration: "6 months",
    team: "1 Product Manager, 4 Engineers, 1 QA",
    heroImage: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVhcm5pbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjkyMTcyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  pacasmayo: {
    title: "Pacasmayo",
    type: "Internal Operations Platform",
    role: "Lead Product Designer",
    duration: "9 months",
    team: "1 Product Owner, 6 Engineers, 1 Designer, 2 QA",
    heroImage: "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2OTEyODA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
};

const processSteps = [
  {
    title: "Requirements & Product Definition",
    description:
      "Collaborated with stakeholders to define product goals, user needs, and technical constraints.",
    image: "https://images.unsplash.com/photo-1646617747609-45b466ace9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZmxvdyUyMGRpYWdyYW18ZW58MXx8fHwxNzY5MTI4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "UX Definition",
    description:
      "Created user flows, information architecture, and wireframes to structure the product experience.",
    image: "https://images.unsplash.com/photo-1646617747609-45b466ace9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZmxvdyUyMGRpYWdyYW18ZW58MXx8fHwxNzY5MTI4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "UI & Prototyping",
    description:
      "Designed high-fidelity UI, built interactive prototypes, and established design system components.",
    image: "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2OTEyODA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Frontend Handoff & Delivery",
    description:
      "Worked closely with engineers to ensure accurate implementation, supported QA, and validated the final product.",
    image: "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MTY5OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function CaseStudyPage({ projectId, onNavigate }: CaseStudyPageProps) {
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-2xl">Project not found</p>
          <button
            onClick={() => onNavigate("projects")}
            className="mt-8 text-[var(--accent-portfolio)] hover:opacity-70"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <button
            onClick={() => onNavigate("projects")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>

          {/* Hero */}
          <div className="mb-16 space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-lg text-muted-foreground">
              <span>Type: {project.type}</span>
              <span>·</span>
              <span>Role: {project.role}</span>
              <span>·</span>
              <span>Duration: {project.duration}</span>
            </div>
            <p className="text-lg text-muted-foreground">Team: {project.team}</p>
          </div>

          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-lg mb-24 aspect-[16/9]">
            <img
              src={project.heroImage}
              alt={`PLACEHOLDER – ${project.title.toUpperCase()} HERO IMAGE`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Business Context */}
          <section className="mb-24 max-w-4xl">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-8">
              Business Context
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This project involved designing a real digital product to solve
              concrete business problems and deliver a usable, scalable UX and UI
              system ready for frontend implementation.
            </p>
          </section>

          {/* Problem */}
          <section className="mb-24 max-w-4xl">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-8">Problem</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The main challenge was translating complex and often ambiguous
              business requirements into clear user flows, information architecture
              and UI that could be realistically built by frontend engineers.
            </p>
          </section>

          {/* My Role */}
          <section className="mb-24 max-w-4xl">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-8">My Role</h2>
            <ul className="space-y-4">
              {[
                "Defined end-to-end product flows",
                "Designed information architecture",
                "Created wireframes and UI",
                "Translated business requirements into UX specifications",
                "Led frontend handoff",
                "Defined reusable components",
                "Supported delivery and QA",
              ].map((item, index) => (
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
          </section>

          {/* Process */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-16">Process</h2>
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="text-sm text-[var(--accent-portfolio)] mb-4">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl tracking-tight mb-6">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={step.image}
                        alt={`PLACEHOLDER – ${step.title.toUpperCase()}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section className="mb-24 max-w-4xl">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-8">Solution</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-16">
              The solution was a coherent UX and UI system that balanced business
              needs, user experience and frontend feasibility.
            </p>
            <div className="grid gap-8">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                <img
                  src={project.heroImage}
                  alt="PLACEHOLDER – MAIN UI SCREEN"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1646617747609-45b466ace9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZmxvdyUyMGRpYWdyYW18ZW58MXx8fHwxNzY5MTI4MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="PLACEHOLDER – FLOW DIAGRAM"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2OTEyODA1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="PLACEHOLDER – UI DETAIL"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-24 max-w-4xl">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-8">Impact</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The result was a clearer, more scalable product experience and better
              alignment between business and engineering.
            </p>
          </section>

          {/* Reflection */}
          <section className="mb-24 max-w-4xl py-16 border-t border-border">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-8">
              Reflection
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This project reinforced the importance of systems thinking, clear
              handoff and close collaboration with frontend teams.
            </p>
          </section>

          {/* Next Project */}
          <div className="pt-16 border-t border-border">
            <button
              onClick={() => onNavigate("projects")}
              className="group inline-flex items-center gap-3 text-xl hover:text-[var(--accent-portfolio)] transition-colors"
            >
              <ArrowLeft
                size={24}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>View all projects</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
