import { Mail, Linkedin, Download, ArrowUpRight } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-24 md:pt-28 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl min-h-[calc(100svh-7.5rem)]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-4">
            Let's build your next product experience.
          </h1>

          <p className="text-[16px] md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-2xl">
            Available for Lead Product Designer and Senior Product Designer roles in
            complex, transactional and regulated environments.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:hey@hernanyacosta.com?subject=Portfolio%20Inquiry"
              className="group inline-flex w-full items-center justify-between rounded-full bg-[var(--accent-portfolio)] px-5 py-3.5 text-white transition-opacity hover:opacity-90"
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
              className="group inline-flex w-full items-center justify-between rounded-full border border-white/20 bg-white/[0.03] px-5 py-3.5 transition-colors hover:bg-white/[0.08]"
            >
              <span className="inline-flex items-center gap-3 font-semibold">
                <Linkedin size={18} />
                Message on LinkedIn
              </span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-5 h-px bg-white/10" />

          <h2 className="mt-5 text-2xl md:text-3xl tracking-tight">Quick profile</h2>
          <p className="mt-2 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-2xl">
            UX Architecture, Service Design and design systems with frontend-aware
            delivery for teams that need reliable execution.
          </p>

          <a
            href="/Hernany-Acosta-CV.pdf"
            download="Hernany-Acosta-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-5 py-3.5 text-base transition-colors hover:bg-white/[0.08]"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
