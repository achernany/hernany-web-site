import { motion } from 'motion/react';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50 hidden md:block">
      <motion.div
        className="h-full bg-cyan-500"
        style={{
          width: `${progress * 100}%`,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
      />
    </div>
  );
}
