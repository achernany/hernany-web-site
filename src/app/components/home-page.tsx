import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Linkedin, Github, Instagram } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

const ROTATING_SYSTEM_LINES = [
  "Systems Thinking + Real-World Execution",
  "Systems + Regulated, Transactional, Multi-Stakeholder",
  "Scope + Strategy, Architecture, Delivery",
  "Edge + Compliance, Integrations, Governance",
];

export function HomePage({ onNavigate }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [isDeletingLine, setIsDeletingLine] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const currentLine = ROTATING_SYSTEM_LINES[lineIndex] ?? "";
    const nextChar = isDeletingLine
      ? typedLine.charAt(Math.max(0, typedLine.length - 1))
      : currentLine.charAt(typedLine.length);

    let typingDelay = isDeletingLine ? 46 : 82;
    if (!isDeletingLine && [",", "+", "-", "."].includes(nextChar)) {
      typingDelay += 120;
    } else if (!isDeletingLine && nextChar === " ") {
      typingDelay += 56;
    } else if (isDeletingLine && nextChar === " ") {
      typingDelay += 26;
    }
    typingDelay += Math.floor(Math.random() * 18) - 9;

    if (!isDeletingLine && typedLine === currentLine) {
      const holdTimeout = window.setTimeout(() => setIsDeletingLine(true), 1850);
      return () => window.clearTimeout(holdTimeout);
    }

    if (isDeletingLine && typedLine.length === 0) {
      const nextLineTimeout = window.setTimeout(() => {
        setIsDeletingLine(false);
        setLineIndex((prev) => (prev + 1) % ROTATING_SYSTEM_LINES.length);
      }, 320);
      return () => window.clearTimeout(nextLineTimeout);
    }

    const timeout = window.setTimeout(() => {
      setTypedLine((prev) =>
        isDeletingLine
          ? currentLine.slice(0, Math.max(0, prev.length - 1))
          : currentLine.slice(0, prev.length + 1),
      );
    }, typingDelay);

    return () => window.clearTimeout(timeout);
  }, [typedLine, isDeletingLine, lineIndex]);

  const plusMarker = " + ";
  const plusIndex = typedLine.indexOf(plusMarker);
  const baseLine =
    plusIndex >= 0 ? typedLine.slice(0, plusIndex + plusMarker.length) : typedLine;
  const accentLine = plusIndex >= 0 ? typedLine.slice(plusIndex + plusMarker.length) : "";

  return (
    <main className="pt-0">
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden"
        aria-labelledby="home-hero-title"
      >
        {/* Background */}
        <motion.div style={isMobile ? undefined : { y: imageY }} className="absolute inset-0 z-0">
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

          {/* Mobile background */}
          <div className="md:hidden absolute inset-0 bg-black" />
          <img
            src="/images/hero-mobile.webp"
            alt="Hernany Acosta mobile hero"
            className="md:hidden absolute inset-0 w-full h-full object-cover object-[24%_12%] max-[380px]:object-[20%_10%] scale-[1.03] opacity-34"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="md:hidden absolute inset-0 bg-gradient-to-r from-black/22 via-black/48 to-black/86" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/46 via-black/56 to-black/84" />
          <div className="md:hidden absolute inset-x-0 bottom-0 h-[54%] bg-black/56" />
        </motion.div>

        {/* ✅ FIX: h-full so desktop grid fills the hero */}
        <motion.div
          style={isMobile ? undefined : { y: textY, opacity }}
          className="relative z-10 h-full"
        >
          <div className="h-[100svh] md:h-full grid grid-rows-[1fr_auto]">
            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-0 md:pt-32">
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
                  <div className="md:hidden w-full max-w-[342px] mx-auto">
                    <h1
                      id="home-hero-title"
                      className="text-left text-white pb-2"
                    >
                      <span className="block font-brand text-[64px] leading-[64px] tracking-[-2px] font-bold [text-shadow:0_0_20px_rgba(255,255,255,0.18)]">
                        Hernany
                      </span>
                      <span className="-mt-2 block font-brand text-[64px] leading-[64px] tracking-[-2px] font-normal [text-shadow:0_0_20px_rgba(255,255,255,0.18)]">
                        Acosta
                      </span>
                    </h1>

                    <p className="mt-4 text-left text-[14px] leading-5">
                      <span className="font-body font-bold italic text-[var(--accent-portfolio)]">
                        I design regulated digital systems
                      </span>{" "}
                      <span className="font-body font-normal text-white/65">
                        where architecture, compliance and user experience must work as one.
                      </span>{" "}
                    </p>

                    <p className="mt-2 text-left text-white/65 text-[10px] leading-4 tracking-[-0.2px]">
                      <span className="italic">
                        From product strategy to frontend delivery
                      </span>{" "}
                      in high-constraint environments.
                    </p>

                    <div className="mt-4 w-full flex items-center gap-2 py-2">
                      <button
                        onClick={() => onNavigate("projects")}
                        className="inline-flex h-11 w-[185px] items-center justify-center gap-2 rounded-[120px] border-2 border-[rgba(99,102,241,0.5)] bg-[var(--accent-portfolio)] px-3.5 text-[14px] leading-6 font-medium text-white hover:opacity-90 transition-opacity"
                      >
                        <span>Enter the Systems</span>
                        <ArrowRight size={14} />
                      </button>
                      <button
                        onClick={() => onNavigate("contact")}
                        className="inline-flex h-11 w-[149px] items-center justify-center rounded-[120px] border-2 border-white/20 bg-white/[0.06] px-5 text-[14px] leading-6 font-medium text-white/90 hover:bg-white/[0.12] transition-colors"
                      >
                        Work With Me
                      </button>
                    </div>

                    <p className="text-center py-3 text-[12px] leading-5 tracking-[-0.03em] text-white/90 min-h-[44px] break-words">
                      <span>{baseLine}</span>
                      <span className="typewriter-accent font-extrabold italic">
                        {accentLine}
                      </span>
                      <span className="typewriter-caret ml-0.5 text-white/85">|</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div
              className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-3"
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
              <p className="hidden md:block mt-3 text-center text-[11px] text-white/55">
                © 2026 Hernany Acosta. All rights reserved.
              </p>

              <div className="md:hidden mt-4 pb-[calc(10px+env(safe-area-inset-bottom))]">
                <div className="w-full max-w-[342px] mx-auto">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-3 w-full min-h-[14px]">
                      <a
                        href="https://www.linkedin.com/in/hernanyacosta/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                      <a
                        href="https://github.com/achernany"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href="https://instagram.com/hernanyac"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        <Instagram size={14} />
                      </a>
                    </div>

                    <a
                      href="mailto:hey@hernanyacosta.com"
                      className="block text-center text-[10px] leading-4 tracking-[-0.2px] text-white/80 hover:text-white transition-colors"
                    >
                      hey@hernanyacosta.com
                    </a>

                    <p className="py-3 text-center text-[8px] leading-3 tracking-[-0.16px] text-white/50 italic font-light">
                      © 2026 Hernany Acosta. All rights reserved.
                    </p>
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
