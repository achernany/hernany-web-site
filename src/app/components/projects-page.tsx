import { useEffect, useState } from "react";
import { useActiveChapter } from "../hooks/useScrollProgress";
import { Timeline } from "./works/Timeline";
import { ProgressBar } from "./works/ProgressBar";
import { FloatingNav } from "./works/FloatingNav";
import { SplashHero } from "./works/SplashHero";
import { LotobolaChapter } from "./works/LotobolaChapter";
import { PlayzonBetChapter } from "./works/PlayzonBetChapter";
import { AlazChapter } from "./works/AlazChapter";
import { InLearningChapter } from "./works/InLearningChapter";
import { PacasmayoChapter } from "./works/PacasmayoChapter";
import { WebVsPdfBlock } from "./works/WebVsPdfBlock";
import { CreativeBottomNav } from "./works/CreativeBottomNav";

export function ProjectsPage() {
  const totalChapters = 6;
  const activeChapter = useActiveChapter(totalChapters);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScrollable = documentHeight - windowHeight;
      const progress = scrollPosition / totalScrollable;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Respect reduced motion preference.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty("--motion-reduce", "1");
    }
  }, []);

  return (
    <div className="bg-black text-white antialiased">
      <ProgressBar progress={scrollProgress} />
      <Timeline activeChapter={activeChapter} scrollProgress={scrollProgress} />
      <FloatingNav activeChapter={activeChapter} />

      <SplashHero />
      <LotobolaChapter />
      <PlayzonBetChapter />
      <AlazChapter />
      <InLearningChapter />
      <PacasmayoChapter />
      <WebVsPdfBlock />
      <CreativeBottomNav />
    </div>
  );
}
