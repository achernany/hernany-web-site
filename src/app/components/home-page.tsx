import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="pt-0">
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden"
        aria-labelledby="home-hero-title"
      >
        {/* Background */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
          <img
            src="/images/hero-desktop.webp"
            srcSet="/images/hero-mobile.webp 900w, /images/hero-desktop.webp 1920w"
            sizes="(max-width: 768px) 100vw, 100vw"
            alt="Hernany Acosta — Service & Product Designer"
            className="w-full h-full object-cover object-[20%_20%] md:object-[25%_20%]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent md:from-black/60 md:via-black/22 md:to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        </motion.div>

       {/* Content + Footer layout (mobile-safe, desktop unchanged) */}
        <motion.div style={{ y: textY, opacity }} className="relative z-10">
          {/* ✅ Mobile: 100svh avoids Safari bottom bar overlap
              ✅ Desktop: h-full like before */}
          <div className="h-[100svh] md:h-full grid grid-rows-[1fr_auto]">
            {/* ====== MAIN CONTENT (row 1) ====== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 md:pt-32">
              <div className="h-full grid lg:grid-cols-12 items-end lg:items-center">
                <div className="hidden lg:block lg:col-span-6" />

                <div className="lg:col-span-6 w-full">
                  {/* DESKTOP (NO TOCAR) */}
                  <div className="hidden md:block max-w-xl">
                    <h1
                      id="home-hero-title"
                      className="tracking-tight text-white/90 mb-8 leading-[0.92]"
                    >
                      <span className="block font-brand font-semibold text-5xl md:text-7xl lg:text-7xl">
                        Hernany
                      </span>
                      <span className="block font-brand font-light text-5xl md:text-7xl lg:text-7xl">
                        Acosta
                      </span>
                    </h1>

                    <p className="text-white/80 text-xl md:text-xl leading-relaxed mb-8">
                      <span className="font-semibold">I design scalable UX systems</span>{" "}
                      <span className="italic">
                        for complex, regulated and transactional environments
                      </span>{" "}
                      — translating business constraints into architecture-ready,
                      frontend-aligned product experiences.
                    </p>

                    <p className="text-white/50 text-sm md:text-base mb-8">
                      UX Architecture · Service Design · Design Systems · Frontend-aware Handoff
                    </p>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => onNavigate("projects")}
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[var(--accent-portfolio)] text-white hover:opacity-90 transition-opacity text-sm font-semibold"
                      >
                        Explore work
                      </button>

                      <button
                        onClick={() => onNavigate("contact")}
                        className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-[var(--accent-portfolio)] bg-[color:var(--accent-portfolio)]/10 text-[var(--accent-portfolio)] hover:bg-[color:var(--accent-portfolio)]/16 transition-colors text-sm font-semibold"
                      >
                        Get in touch
                      </button>
                    </div>
                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden w-full">
                    <h1
                      id="home-hero-title"
                      className="font-brand uppercase text-white text-center tracking-[0.04em] leading-none mb-1 text-[32px]"
                    >
                      <span className="font-semibold">HERNANY</span>{" "}
                      <span className="font-light">ACOSTA</span>
                    </h1>

                    <p className="text-white/90 text-[12px] leading-relaxed mb-2 text-center">
                      <span className="font-bold">Service &amp; Product Designer</span>{" "}
                      <span className="italic">for regulated digital products.</span>
                    </p>

                    <p className="text-white/45 text-[clamp(0.68rem,2.7vw,0.78rem)] leading-relaxed mb-6 text-center px-10">
                      UX Architecture · Service Design · Design Systems · Frontend-aware Handoff
                    </p>

                    {/* CTA row (keeps your look) */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <button
                        onClick={() => onNavigate("projects")}
                        className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-[var(--accent-portfolio)] text-white hover:opacity-90 transition-opacity text-sm font-semibold flex-1 max-w-[220px]"
                      >
                        Explore work
                      </button>

                      <button
                        onClick={() => onNavigate("contact")}
                        className="inline-flex items-center justify-center h-11 px-4 rounded-full border border-[var(--accent-portfolio)] bg-[color:var(--accent-portfolio)]/10 text-[var(--accent-portfolio)] hover:bg-[color:var(--accent-portfolio)]/16 transition-colors text-sm font-semibold w-[132px]"
                      >
                        Get in touch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====== FOOTER (row 2) ALWAYS VISIBLE ====== */}
            <div
              className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-3"
              style={{ paddingBottom: "calc(10px + env(safe-area-inset-bottom))" }}
            >
              <div className="flex items-center justify-between gap-3">
                {/* Left icons */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/hernanyacosta/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="https://github.com/achernany"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href="https://instagram.com/hernanyac"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>

                {/* Desktop email */}
                <a
                  href="mailto:hey@hernanyacosta.com"
                  className="hidden sm:block text-white/70 hover:text-white transition-colors text-sm"
                >
                  hey@hernanyacosta.com
                </a>

                {/* Download */}
                <a
                  href="/Hernany-Acosta-CV.pdf"
                  className="inline-flex items-center justify-center h-9 md:h-10 px-3 md:px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/18 transition-colors whitespace-nowrap text-[11px] md:text-sm"
                >
                  Download CV
                </a>
              </div>

              {/* Mobile email line (always visible) */}
              <div className="sm:hidden mt-1 text-center text-[11px]">
                <a
                  href="mailto:hey@hernanyacosta.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  hey@hernanyacosta.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}