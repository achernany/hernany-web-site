import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Linkedin, Github, Instagram } from "lucide-react";

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
          <div className="hidden md:block h-full w-full">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent md:from-black/60 md:via-black/22 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          </div>

          {/* Mobile-only app background */}
          <div className="md:hidden absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_0%,rgba(99,102,241,0.35),transparent_56%),radial-gradient(100%_90%_at_90%_100%,rgba(56,189,248,0.2),transparent_62%),linear-gradient(180deg,#06070e_0%,#0a0d1a_58%,#090b14_100%)]" />
          <div className="md:hidden absolute inset-0 opacity-[0.08] [background-size:20px_20px] [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)]" />
        </motion.div>

        {/* ✅ FIX: h-full so desktop grid fills the hero */}
        <motion.div style={{ y: textY, opacity }} className="relative z-10 h-full">
          <div className="h-[100svh] md:h-full grid grid-rows-[1fr_auto]">
            {/* MAIN CONTENT */}
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
                  <div className="md:hidden w-full max-w-md mx-auto">
                    <div className="rounded-[30px] border border-white/15 bg-black/45 backdrop-blur-2xl p-4 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-white/60">
                        <span>Portfolio App</span>
                        <span>Live</span>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-[10px] uppercase tracking-[0.13em] text-[var(--accent-portfolio)]">
                          Product System
                        </p>
                        <h1
                          id="home-hero-title"
                          className="font-brand text-white tracking-tight leading-[0.95] mt-2"
                        >
                          <span className="block text-[32px] font-semibold">Hernany</span>
                          <span className="block text-[32px] font-light">Acosta</span>
                        </h1>
                        <p className="mt-3 text-[13px] leading-relaxed text-white/85">
                          Portfolio experience focused on UX architecture and
                          regulated product design.
                        </p>
                      </div>

                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                          <p className="text-[10px] text-white/55">Role</p>
                          <p className="text-[11px] text-white/90 mt-1">Lead Product</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                          <p className="text-[10px] text-white/55">Focus</p>
                          <p className="text-[11px] text-white/90 mt-1">UX Systems</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                          <p className="text-[10px] text-white/55">Mode</p>
                          <p className="text-[11px] text-white/90 mt-1">Shipping</p>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <button
                          onClick={() => onNavigate("projects")}
                          className="inline-flex items-center justify-center h-11 rounded-xl bg-[var(--accent-portfolio)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                          Open Works
                        </button>
                        <button
                          onClick={() => onNavigate("contact")}
                          className="inline-flex items-center justify-center h-11 rounded-xl border border-white/20 bg-white/[0.05] text-white/90 text-sm font-semibold hover:bg-white/[0.12] transition-colors"
                        >
                          Contact Me
                        </button>
                      </div>

                      <p className="mt-3 text-[11px] text-white/60">
                        End-to-end journeys, business rules and frontend-ready handoff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div
              className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-3"
              style={{ paddingBottom: "calc(10px + env(safe-area-inset-bottom))" }}
            >
              <div className="hidden md:flex items-center justify-between gap-3">
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

                <a
                  href="mailto:hey@hernanyacosta.com"
                  className="hidden sm:block text-white/70 hover:text-white transition-colors text-sm"
                >
                  hey@hernanyacosta.com
                </a>

               <a
                  href="/Hernany-Acosta-CV.pdf"
                  download="Hernany-Acosta-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 md:h-10 px-3 md:px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/18 transition-colors whitespace-nowrap text-[11px] md:text-sm"
                >
                  Download CV
                </a>
              </div>

              <div className="md:hidden">
                <div className="rounded-2xl border border-white/15 bg-black/45 backdrop-blur-2xl px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/hernanyacosta/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-white/85 hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="https://github.com/achernany"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-white/85 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="https://instagram.com/hernanyac"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="text-white/85 hover:text-white transition-colors"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>

                    <a
                      href="mailto:hey@hernanyacosta.com"
                      className="text-[11px] text-white/70 hover:text-white transition-colors"
                    >
                      hey@hernanyacosta.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
