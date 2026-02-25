import { motion } from 'motion/react';

export function SplashHero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black pointer-events-none" />
      
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          className="mb-3 text-sm tracking-[0.3em] uppercase text-white/40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          SELECTED SYSTEMS · until 2026
        </motion.div>

        <motion.h1
          className="text-[clamp(3rem,12vw,9rem)] leading-[0.9] tracking-[-0.03em] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Designing Systems
          <br />
          Under Real-World
          <br />
          Constraints
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          A curated progression of regulated platforms, multi-tenant products and enterprise infrastructures built from strategy to implementation.
        </motion.p>

        <motion.div
          className="text-sm text-white/40 tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Service Design · Product Architecture · Multi-tenant Systems · Design Systems Engineering
        </motion.div>

        <motion.button
          className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm tracking-wide">Start the Walkthrough</span>
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
