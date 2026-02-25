import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface FloatingNavProps {
  activeChapter: number;
}

const chapters = [
  { id: 1, name: "LotoBola" },
  { id: 2, name: "PlayzonBet" },
  { id: 3, name: "Alaz" },
  { id: 4, name: "InLearning" },
  { id: 5, name: "Pacasmayo" },
];

export function FloatingNav({ activeChapter }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.22);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (chapterId: number) => {
    const sections = document.querySelectorAll("section");
    const targetSection = sections[chapterId];
    if (!targetSection) return;
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-3 left-0 right-0 z-50 px-4 md:bottom-5"
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 36, opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="mx-auto w-full max-w-3xl rounded-[24px] border border-white/15 bg-black/45 shadow-[0_10px_36px_rgba(0,0,0,0.4)] backdrop-blur-xl supports-[backdrop-filter]:bg-black/35">
            <div className="scrollbar-hide overflow-x-auto px-2 py-2">
              <div className="mx-auto flex w-max min-w-full items-center justify-center gap-2 md:gap-3">
                {chapters.map((chapter) => {
                  const isActive = activeChapter === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => scrollToChapter(chapter.id)}
                      className={[
                        "h-11 rounded-full border px-5 md:px-6 text-sm font-semibold whitespace-nowrap transition-colors",
                        isActive
                          ? "border-[color:var(--accent-portfolio)] bg-[var(--accent-portfolio)] text-white shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_8px_24px_rgba(99,102,241,0.22)]"
                          : "border-white/20 bg-white/[0.03] text-white/90 hover:bg-white/[0.08]",
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
