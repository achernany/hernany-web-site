import { motion } from 'motion/react';

interface TimelineProps {
  activeChapter: number;
  scrollProgress: number;
}

const chapters = ['Intro', 'LotoBola', 'PlayzonBet', 'Alaz', 'InLearning', 'Pacasmayo'];

export function Timeline({ activeChapter, scrollProgress }: TimelineProps) {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="relative">
        {/* Spine line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/5" />
        
        {/* Progress line */}
        <motion.div 
          className="absolute left-[7px] top-0 w-[2px] bg-cyan-500"
          style={{
            height: `${Math.min(scrollProgress * 120, 100)}%`,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        />

        {/* Chapter dots */}
        <div className="relative space-y-12">
          {chapters.map((chapter, index) => (
            <div key={chapter} className="flex items-center gap-4">
              <motion.div
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeChapter
                    ? 'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                    : 'bg-black border-2 border-white/20'
                }`}
                animate={{
                  scale: index === activeChapter ? 1.2 : 1,
                }}
              />
              <motion.span
                className={`text-xs tracking-wide transition-all duration-300 whitespace-nowrap ${
                  index === activeChapter
                    ? 'text-cyan-500 opacity-100'
                    : 'text-white/30 opacity-0'
                }`}
                animate={{
                  opacity: index === activeChapter ? 1 : 0,
                  x: index === activeChapter ? 0 : -10,
                }}
              >
                {chapter}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
