import { motion } from "motion/react";
import { Mail, Linkedin, Download } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-12">
            Let's build scalable digital products.
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-24">
            I'm open to Lead Product Designer and Senior Product Designer roles.
          </p>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl tracking-tight">Get in touch</h2>
              <div className="space-y-4">
                <a
                  href="mailto:hernany.acosta@example.com"
                  className="group flex items-center gap-4 text-xl hover:text-[var(--accent-portfolio)] transition-colors"
                >
                  <Mail size={24} />
                  <span>hernany.acosta@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/hernanyacosta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-xl hover:text-[var(--accent-portfolio)] transition-colors"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="pt-12">
              <button className="group inline-flex items-center gap-4 px-8 py-4 bg-[var(--accent-portfolio)] text-white rounded-lg hover:opacity-90 transition-opacity text-lg">
                <Download size={24} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
