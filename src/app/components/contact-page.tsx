import { motion } from "motion/react";
import { Mail, Linkedin, Download, ArrowUpRight, Clock3 } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
                Let's build your next product experience.
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl">
                Available for Lead Product Designer and Senior Product Designer roles in
                complex, transactional and regulated environments.
              </p>

              <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-7 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock3 size={16} />
                  <span>Usually replies within 24 hours</span>
                </div>

                <a
                  href="mailto:hey@hernanyacosta.com?subject=Portfolio%20Inquiry"
                  className="group inline-flex w-full items-center justify-between rounded-xl bg-[var(--accent-portfolio)] px-4 py-3.5 text-white transition-opacity hover:opacity-90"
                >
                  <span className="inline-flex items-center gap-3 font-semibold">
                    <Mail size={18} />
                    Email me
                  </span>
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="https://linkedin.com/in/hernanyacosta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 transition-colors hover:bg-muted"
                >
                  <span className="inline-flex items-center gap-3 font-semibold">
                    <Linkedin size={18} />
                    Message on LinkedIn
                  </span>
                  <ArrowUpRight size={18} />
                </a>

                <p className="text-sm text-muted-foreground">hey@hernanyacosta.com</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 md:p-7 h-fit">
              <h2 className="text-2xl md:text-3xl tracking-tight mb-3">Quick profile</h2>
              <p className="text-muted-foreground mb-7">
                UX Architecture, Service Design and design systems with frontend-aware
                delivery for teams that need reliable execution.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-7">
                <div className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
                  <p className="text-xs text-muted-foreground">Specialty</p>
                  <p className="text-sm mt-1">Regulated UX</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
                  <p className="text-xs text-muted-foreground">Delivery</p>
                  <p className="text-sm mt-1">End-to-end</p>
                </div>
              </div>

              <a
                href="/Hernany-Acosta-CV.pdf"
                download="Hernany-Acosta-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-border px-4 py-3.5 text-base transition-colors hover:bg-muted"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
