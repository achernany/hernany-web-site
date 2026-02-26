import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export function SplashHero() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    if (!mediaQuery.matches || hasStarted) {
      return;
    }

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const preventDefault = (event: Event) => {
      event.preventDefault();
    };

    const preventKeys = (event: KeyboardEvent) => {
      if (
        [
          " ",
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Home",
          "End",
        ].includes(event.key)
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventKeys, { passive: false });

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("wheel", preventDefault as EventListener);
      window.removeEventListener("touchmove", preventDefault as EventListener);
      window.removeEventListener("keydown", preventKeys);
    };
  }, [hasStarted]);

  const scrollToFirstChapter = () => {
    const firstChapter = document.getElementById("lotobola");
    if (!firstChapter) {
      return;
    }

    setHasStarted(true);
    firstChapter.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="works-hero" className="relative h-[100svh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(24,30,70,0.28),transparent_48%)] pointer-events-none" />

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="w-full max-w-[342px] mx-auto pt-[156px] text-center">
          <h1 className="hero-title-mobile font-body text-[#f5f5f7]">
            Designing Systems
            <br />
            Under Constraint
          </h1>

          <p className="hero-paragraph-mobile mt-3 font-body text-center text-[rgba(245,245,247,0.65)]">
            <span className="text-[var(--accent-portfolio)]">
              Regulated platforms, multi-tenant systems and enterprise infrastructures
            </span>{" "}
            delivered from architecture to production.
          </p>

          <p className="mt-5 text-[8px] leading-3 tracking-[0.11em] text-white/42">
            Strategy → Architecture → Production.
          </p>

          <p className="mt-8 text-[10px] tracking-[0.34em] uppercase text-white/44">
            Start - <span className="text-[var(--accent-portfolio)]">Now</span>
          </p>

          <button
            type="button"
            onClick={scrollToFirstChapter}
            aria-label="Start walkthrough from LotoBola"
            className="sweep-glint mt-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/24 bg-[var(--accent-portfolio)]/90 text-white shadow-[0_0_0_1px_rgba(99,102,241,0.24),0_10px_20px_rgba(99,102,241,0.28)] transition-all duration-500 hover:scale-[1.03] hover:opacity-95"
          >
            <ArrowDown size={16} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
