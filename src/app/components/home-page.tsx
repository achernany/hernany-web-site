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
      "End-to-end UX architecture and UI for a transactional betting ecosystem: critical flows, operational clarity, and frontend-ready handoff.",
    role: "Lead Product / Service Designer",
    type: "Regulated Platform · Web App",
    image:
      "https://images.unsplash.com/photo-1718157582118-f04597eaae56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXR0aW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MjE3Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "playzonbet",
    title: "PlayzonBet",
    description:
      "Scalable UX systems and UI patterns for sports betting: reusable components, content hierarchy, and delivery alignment with engineering.",
    role: "Lead Product Designer",
    type: "Platform · Design System",
    image:
      "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MTY5OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "inlearning",
    title: "Inlearning",
    description:
      "Information architecture + UI for enterprise learning: usability, content structure, and implementation feasibility across teams.",
    role: "Product Designer",
    type: "Enterprise Platform",
    image:
      "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVhcm5pbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjkyMTcyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "pacasmayo",
    title: "Pacasmayo",
    description:
      "UX and UI for internal operations: workflows, training support, and system consistency across modules and roles.",
    role: "UX / Product Designer",
    type: "Internal Platform",
    image:
      "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2OTEyODA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const additionalExperience = [
  { title: "Jakala – Marketing Campaigns", type: "Marketing / Campaign", year: "2023", image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Jakala – Brand Activations", type: "Branding / Campaign", year: "2023", image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Corporate Branding Projects", type: "Branding / Visual", year: "2022", image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Visual Identity Systems", type: "Branding / Visual", year: "2022", image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Landing Pages", type: "Visual / Web", year: "2023", image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Marketing Websites", type: "Visual / Web", year: "2022", image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Editorial Design", type: "Editorial / Visual", year: "2021", image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { title: "Social Media Campaigns", type: "Marketing / Campaign", year: "2021", image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <main className="pt-20">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        aria-labelledby="home-hero-title"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
         <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-background/60 to-background" />
          <img
              src="/images/hero.webp"
              alt="Hernany Acosta — Service & Product Designer"
              className="w-full h-full object-cover opacity-40"
              loading="eager"
              fetchPriority="high"
            />
        </motion.div>

        <motion.header
          style={{ y: textY, opacity }}
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32"
        >
          <div className="max-w-4xl">
            <h1
              id="home-hero-title"
              className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6"
            >
              Hernany Acosta
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Service &amp; Product Designer for regulated digital ecosystems
            </p>

            <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
              I design scalable UX systems for complex, regulated and transactional
              environments — translating business constraints into architecture-ready,
              frontend-aligned product experiences.
            </p>

            <p className="text-lg text-muted-foreground mb-12">
              UX Architecture · Service Design · Design Systems · Frontend-aware Handoff
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("projects")}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent-portfolio)] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <span>View selected work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border bg-background/40 hover:bg-background/70 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </motion.header>
      </section>

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32" aria-labelledby="value-title">
        <h2 id="value-title" className="sr-only">
          Value proposition
        </h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl tracking-tight">
              Regulated & Transactional UX
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I design flows where correctness matters: validations, strict rules,
              edge cases, operational clarity, and compliance-driven constraints.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl tracking-tight">
              UX → UI → Frontend Delivery
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I ship systems, not mockups: UX architecture, UI specs, reusable patterns,
              and tight collaboration to ensure implementation matches intent.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl tracking-tight">
              Systems over Screens
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I prioritize information architecture, workflows, and component governance
              so products scale across teams, markets and evolving requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32" aria-labelledby="core-work-title">
        <h2 id="core-work-title" className="text-4xl md:text-6xl tracking-tight mb-16">
          Core Product Work
        </h2>

        <div className="grid gap-16 lg:gap-24">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => onNavigate("case-study", project.id)}
              aria-label={`Open case study: ${project.title}`}
            >
              <div className="relative overflow-hidden rounded-lg mb-8 aspect-[16/9]">
                <img
                  src={project.image}
                  alt={`${project.title} project cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
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
            </motion.article>
          ))}
        </div>
      </section>

      {/* Additional Experience */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32" aria-labelledby="additional-title">
        <div className="mb-16 space-y-4">
          <h2 id="additional-title" className="text-4xl md:text-6xl tracking-tight">
            Additional Design Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Branding, campaigns, visual systems and other selected work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalExperience.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
              aria-label={`${item.title} (${item.year})`}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg mb-2 group-hover:text-[var(--accent-portfolio)] transition-colors">
                {item.title}
              </h3>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>{item.type}</p>
                <p>{item.year}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
