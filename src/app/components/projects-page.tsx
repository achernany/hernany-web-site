import { motion } from "motion/react";

interface ProjectsPageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

const coreProjects = [
  {
    id: "lotobola",
    title: "LotoBola",
    type: "Platform / Web App",
    year: "2024",
    description: "End-to-end product design for a betting platform",
    image: "https://images.unsplash.com/photo-1718157582118-f04597eaae56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXR0aW5nJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MjE3Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "playzonbet",
    title: "PlayzonBet",
    type: "Platform / Web App",
    year: "2024",
    description: "UX systems and UI for a sports betting platform",
    image: "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5MTY5OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "inlearning",
    title: "Inlearning",
    type: "Platform / Web App",
    year: "2023",
    description: "Corporate e-learning platform design",
    image: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVhcm5pbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjkyMTcyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "pacasmayo",
    title: "Pacasmayo",
    type: "Platform / Web App",
    year: "2023",
    description: "Internal digital platform for operations and training",
    image: "https://images.unsplash.com/photo-1698440050363-1697e5f0277c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2OTEyODA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const additionalWork = [
  {
    title: "Jakala – Campaigns",
    type: "Marketing / Campaign",
    year: "2023",
    image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Branding Projects",
    type: "Branding / Visual",
    year: "2023",
    image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Visual Design",
    type: "Visual / Editorial",
    year: "2022",
    image: "https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjkyMTcyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Marketing Assets",
    type: "Marketing / Visual",
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
    title: "Landing Pages",
    type: "Web / Visual",
    year: "2023",
    image: "https://images.unsplash.com/photo-1656164631610-f104326810c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzY5MDk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-24">
            Projects
          </h1>

          {/* Core Product Work */}
          <section className="mb-32">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-12">
              Core Product Work
            </h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {coreProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => onNavigate("case-study", project.id)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={`PLACEHOLDER – ${project.title.toUpperCase()}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-[var(--accent-portfolio)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span>{project.type}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Additional Experience */}
          <section>
            <h2 className="text-3xl md:text-5xl tracking-tight mb-12">
              Additional Experience
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalWork.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
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
        </motion.div>
      </div>
    </div>
  );
}
