import { Mail, Linkedin, Download } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-20 md:pt-28 pb-0 md:pb-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="md:hidden min-h-[calc(100svh-8rem)] flex items-center justify-center">
          <div className="w-full max-w-[342px] flex flex-col gap-4 py-4">
            <h1 className="font-body font-semibold text-[#f5f5f7] text-[36px] leading-[40px] tracking-[-2px] text-center">
              Building Something Complex?
            </h1>

            <p className="font-body text-[14px] leading-5 text-center text-[rgba(245,245,247,0.65)]">
              I work on{" "}
              <span className="font-extrabold">
                complex, high-constraint products
              </span>{" "}
              that demand systemic thinking and production-ready execution.
            </p>

            <div className="flex flex-col items-center justify-center gap-3">
              <a
                href="mailto:hey@hernanyacosta.com?subject=Portfolio%20Inquiry"
                className="inline-flex h-11 w-[256px] items-center justify-center gap-2 rounded-[120px] border-2 border-[rgba(99,102,241,0.5)] bg-[var(--accent-portfolio)] px-3.5"
              >
                <Mail size={18} />
                <span className="font-body font-semibold text-[16px] leading-6 text-white/90">
                  Start the Conversation
                </span>
              </a>

              <a
                href="https://linkedin.com/in/hernanyacosta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-[257px] items-center justify-center gap-2 rounded-[120px] border-2 border-white/20 bg-white/[0.06] px-5"
              >
                <Linkedin size={18} />
                <span className="font-body font-semibold text-[16px] leading-6 text-white/90">
                  Connect on LinkedIn
                </span>
              </a>
            </div>

            <div className="h-px w-full bg-white/10" />

            <h2 className="font-body font-semibold text-[#f5f5f7] text-[24px] leading-8 tracking-[-0.6px] text-center">
              Professional Snapshot
            </h2>

            <p className="font-body text-[14px] leading-5 text-center text-[rgba(245,245,247,0.65)]">
              Systemic product thinking, service architecture, and frontend-aware
              delivery{" "}
              <span className="italic text-[rgba(99,102,241,0.75)]">
                for teams building under real operational constraints.
              </span>
            </p>

            <a
              href="/Hernany-Acosta-CV.pdf"
              download="Hernany-Acosta-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-flex h-11 w-[256px] items-center justify-center gap-3 rounded-[120px] border-2 border-white/20 bg-white/[0.06] px-5"
            >
              <Download size={18} />
              <span className="font-body font-semibold text-[16px] leading-6 text-white/90">
                Download Executive CV
              </span>
            </a>
          </div>
        </div>

        <div className="hidden md:block max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4">
            Let's build your next product experience.
          </h1>

          <p className="text-[16px] md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-2xl">
            Available for Lead Product Designer and Senior Product Designer roles in
            complex, transactional and regulated environments.
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <a
              href="mailto:hey@hernanyacosta.com?subject=Portfolio%20Inquiry"
              className="group inline-flex h-11 w-full md:w-auto items-center justify-center gap-3 rounded-full bg-[var(--accent-portfolio)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Mail size={18} />
              <span>Email me</span>
            </a>

            <a
              href="https://linkedin.com/in/hernanyacosta"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 w-full md:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-6 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
            >
              <Linkedin size={18} />
              <span>Message on LinkedIn</span>
            </a>
          </div>

          <div className="mt-5 h-px bg-white/10" />

          <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">Quick profile</h2>
          <p className="mt-2 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-2xl">
            UX Architecture, Service Design and design systems with frontend-aware
            delivery for teams that need reliable execution.
          </p>

          <a
            href="/Hernany-Acosta-CV.pdf"
            download="Hernany-Acosta-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-11 w-full md:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-6 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
