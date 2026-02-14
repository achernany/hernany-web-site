import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

const featuredProjects = [
  {
    id: "lotobola",
    title: "LotoBola",
    description:
      "End-to-end product design for a betting platform, including UX flows, UI and frontend handoff.",
    role: "Lead Product Designer",
    type: "Platform / Web App",
    image: "https://images.unsplash.com/photo-1718157582118-f04597eaae56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXR0aW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MjE3Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "playzonbet",
    title: "PlayzonBet",
    description:
      "UX systems and UI for a sports betting platform focused on clarity, scalability and delivery.",
    role: "Lead Product Designer",
    type: "Platform / Web App",
    image: "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MTY5OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "inlearning",
    title: "Inlearning",
    description:
      "Design of a corporate e-learning platform focused on usability, content structure and frontend feasibility.",
    role: "Lead Product Designer",
    type: "Platform / Web App",
    image: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVhcm5pbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjkyMTcyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "pacasmayo",
    title: "Pacasmayo",
    description:
      "UX and UI for an internal digital platform to support operations and training.",
    role: "Lead Product Designer",
    type: "Platform / Web App",
    image: "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2OTEyODA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const additionalExperience = [
  {
    title: "Jakala – Marketing Campaigns",
    type: "Marketing / Campaign",
    year: "2023",
    image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Jakala – Brand Activations",
    type: "Branding / Campaign",
    year: "2023",
    image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Corporate Branding Projects",
    type: "Branding / Visual",
    year: "2022",
    image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Visual Identity Systems",
    type: "Branding / Visual",
    year: "2022",
    image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Landing Pages",
    type: "Visual / Web",
    year: "2023",
    image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Marketing Websites",
    type: "Visual / Web",
    year: "2022",
    image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Editorial Design",
    type: "Editorial / Visual",
    year: "2021",
    image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Social Media Campaigns",
    type: "Marketing / Campaign",
    year: "2021",
    image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-20">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1740223544743-2aac7fb644c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTEwNjYxOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="PLACEHOLDER – HERO PHOTO"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32"
        >
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6">
              Hernany Acosta
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12">
              Lead Product Designer
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
              I design and deliver scalable digital products by translating business
              requirements into UX systems and frontend-ready solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Product design · UX systems · UI · Frontend handoff
            </p>
            <button
              onClick={() => onNavigate("projects")}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-portfolio)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>View selected work</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl tracking-tight">Product Thinking</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I focus on solving real business and user problems, not just designing
              interfaces.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl tracking-tight">
              UX → UI → Frontend Delivery
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I design complete UX and UI systems and work closely with engineers to
              ensure what gets built matches the intended experience.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl tracking-tight">
              Systems over Screens
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I prioritize flows, architecture and reusable components over isolated
              UI.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <h2 className="text-4xl md:text-6xl tracking-tight mb-16">
          Core Product Work
        </h2>
        <div className="grid gap-16 lg:gap-24">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => onNavigate("case-study", project.id)}
            >
              <div className="relative overflow-hidden rounded-lg mb-8 aspect-[16/9]">
                <img
                  src={project.image}
                  alt={`PLACEHOLDER – ${project.title.toUpperCase()} PROJECT IMAGE`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-5xl tracking-tight group-hover:text-[var(--accent-portfolio)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>Role: {project.role}</span>
                  <span>·</span>
                  <span>{project.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Experience */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl tracking-tight">
            Additional Design Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Branding, campaigns, visual design and other selected work.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalExperience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img
                  src={item.image}
                  alt={`PLACEHOLDER – ${item.title.toUpperCase()}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-lg mb-2 group-hover:text-[var(--accent-portfolio)] transition-colors">
                {item.title}
              </h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>{item.type}</p>
                <p>{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
