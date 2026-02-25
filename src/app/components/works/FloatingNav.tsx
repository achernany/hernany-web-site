import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

interface FloatingNavProps {
  activeChapter: number;
}

const chapters = [
  { id: 1, name: 'LotoBola' },
  { id: 2, name: 'PlayzonBet' },
  { id: 3, name: 'Alaz' },
  { id: 4, name: 'InLearning' },
  { id: 5, name: 'Pacasmayo' },
];

export function FloatingNav({ activeChapter }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after hero
      setIsVisible(window.scrollY > window.innerHeight * 0.3);
      
      // Set scrolling state
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set new timeout to detect scroll stop
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []); // Empty dependency array - only set up once

  const scrollToChapter = (chapterId: number) => {
    const sections = document.querySelectorAll('section');
    if (sections[chapterId]) {
      sections[chapterId].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Determine visible chapters based on active
  const getVisibleChapters = () => {
    const activeIndex = chapters.findIndex(ch => ch.id === activeChapter);
    
    if (activeIndex === -1) return chapters.slice(0, 3);
    
    // Show current and next two, or adjust if near end
    if (activeIndex === chapters.length - 1) {
      return chapters.slice(-3);
    } else if (activeIndex === chapters.length - 2) {
      return chapters.slice(-3);
    } else {
      return chapters.slice(activeIndex, activeIndex + 3);
    }
  };

  const visibleChapters = getVisibleChapters();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50"
          initial={{ y: 100 }}
          animate={{ 
            y: 0,
          }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="relative bg-black/60 backdrop-blur-2xl border-t border-white/10"
            animate={{
              opacity: isScrolling ? 0.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-center gap-2">
                {visibleChapters.map((chapter) => {
                  const isActive = activeChapter === chapter.id;
                  
                  return (
                    <motion.button
                      key={chapter.id}
                      onClick={() => scrollToChapter(chapter.id)}
                      className={`relative px-6 py-3 rounded-full text-sm tracking-wide whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-500 border-2 border-cyan-500'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5 border-2 border-transparent'
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                      }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Pulse effect for active */}
                      {isActive && !isScrolling && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-cyan-500"
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full bg-cyan-500/20"
                            animate={{
                              opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </>
                      )}
                      
                      <span className="relative z-10">{chapter.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
