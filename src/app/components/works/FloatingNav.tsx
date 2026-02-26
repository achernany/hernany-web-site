import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface FloatingNavProps {
  activeChapter: number;
}

const chapters = [
  { id: "lotobola", name: "LotoBola" },
  { id: "playzonbet", name: "PlayzonBet" },
  { id: "alaz", name: "Alaz" },
  { id: "inlearning", name: "Inlearning" },
  { id: "pacasmayo", name: "Pacasmayo" },
];

export function FloatingNav({ activeChapter: _activeChapter }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id ?? "lotobola");
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const firstChapter = document.getElementById("lotobola");
    if (!firstChapter) {
      return;
    }

    const showObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      {
        root: null,
        threshold: 0.02,
        rootMargin: "0px 0px -70% 0px",
      },
    );

    showObserver.observe(firstChapter);

    const ratioById = new Map<string, number>();
    const visibleIds = new Set<string>();

    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          ratioById.set(id, entry.intersectionRatio);
          if (entry.isIntersecting) {
            visibleIds.add(id);
          } else {
            visibleIds.delete(id);
          }
        }

        const currentlyVisible = chapters
          .map((chapter) => chapter.id)
          .filter((id) => visibleIds.has(id));

        if (currentlyVisible.length === 0) {
          return;
        }

        let nextId = currentlyVisible[0];
        let nextRatio = ratioById.get(nextId) ?? 0;

        for (const id of currentlyVisible) {
          const ratio = ratioById.get(id) ?? 0;
          if (ratio > nextRatio) {
            nextRatio = ratio;
            nextId = id;
          }
        }

        setActiveChapterId((prev) => (prev === nextId ? prev : nextId));
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    for (const chapter of chapters) {
      const section = document.getElementById(chapter.id);
      if (section) {
        activeObserver.observe(section);
      }
    }

    return () => {
      showObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    if (!mediaQuery.matches) {
      return;
    }

    const activeButton = buttonRefs.current[activeChapterId];
    if (!activeButton) {
      return;
    }

    activeButton.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeChapterId]);

  const scrollToChapter = (chapterId: string) => {
    const targetSection = document.getElementById(chapterId);
    if (!targetSection) return;
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveChapterId(chapterId);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-1/2 z-50 w-[min(720px,calc(100vw-32px))] -translate-x-1/2"
          initial={{ y: 24, opacity: 0, scale: 0.965 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.975 }}
          transition={{ type: "spring", stiffness: 190, damping: 24, mass: 0.78 }}
        >
          <div className="sweep-glint relative rounded-[120px] border border-white/14 bg-black/52 px-2 py-2 shadow-[0_18px_42px_rgba(0,0,0,0.52),0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-black/42">
            <div
              aria-hidden
              className="pointer-events-none absolute left-10 right-10 top-2 h-2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.66),rgba(255,255,255,0)_72%)] opacity-34 blur-[2px]"
            />

            <div className="scrollbar-hide overflow-x-auto">
              <div className="mx-auto flex w-max min-w-full items-center justify-center gap-2">
                {chapters.map((chapter) => {
                  const isActive = activeChapterId === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      ref={(node) => {
                        buttonRefs.current[chapter.id] = node;
                      }}
                      onClick={() => scrollToChapter(chapter.id)}
                      className={[
                        "h-11 w-[108px] md:w-auto rounded-full border px-5 md:px-6 text-sm font-semibold whitespace-nowrap transition-all duration-500",
                        isActive
                          ? "sweep-glint border-white/22 bg-[var(--accent-portfolio)] text-white shadow-[0_0_0_1px_rgba(99,102,241,0.26),0_10px_28px_rgba(99,102,241,0.24)]"
                          : "border-transparent bg-transparent text-white/50 hover:bg-white/[0.05] hover:text-white/85",
                      ].join(" ")}
                    >
                      {chapter.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
