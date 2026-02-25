import { useState, useEffect, RefObject } from 'react';

export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element has been scrolled through
      const scrolled = windowHeight - elementTop;
      const totalScrollable = elementHeight + windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}

export function useActiveChapter(totalChapters: number) {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate which chapter we're in based on scroll position
      const totalScrollable = documentHeight - windowHeight;
      const scrollProgress = scrollPosition / totalScrollable;
      const chapter = Math.floor(scrollProgress * totalChapters);
      
      setActiveChapter(Math.min(chapter, totalChapters - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalChapters]);

  return activeChapter;
}
