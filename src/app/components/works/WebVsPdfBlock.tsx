import { motion } from 'motion/react';
import { Download, ExternalLink } from 'lucide-react';

export function WebVsPdfBlock() {
  return (
    <section className="min-h-screen bg-black py-24 md:py-32 relative border-t border-white/5 flex items-center">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Choose Format</div>
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tight mb-6">Web or PDF</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            Experience the full narrative here, or download a curated executive summary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Panel */}
          <motion.div
            className="border border-white/10 bg-white/[0.02] p-12 group hover:border-cyan-500/30 transition-all duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ExternalLink className="w-8 h-8 text-cyan-500 mb-8" />
            <h3 className="text-2xl mb-4 tracking-tight">Living Narrative</h3>
            <ul className="space-y-3 mb-12 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Long-scroll modular structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Interactive diagrams and data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Layered motion choreography</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Evolving with new projects</span>
              </li>
            </ul>
            <button 
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 text-sm font-semibold text-white/90 transition-colors hover:bg-white/[0.08]"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </button>
          </motion.div>

          {/* PDF Panel */}
          <motion.div
            className="border border-white/10 bg-white/[0.02] p-12 group hover:border-cyan-500/30 transition-all duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Download className="w-8 h-8 text-cyan-500 mb-8" />
            <h3 className="text-2xl mb-4 tracking-tight">Executive Summary</h3>
            <ul className="space-y-3 mb-12 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Curated 12–15 page document</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Static diagrams and screenshots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Print-ready format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span>Key highlights only</span>
              </li>
            </ul>
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent-portfolio)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
