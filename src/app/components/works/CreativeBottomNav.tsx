import { motion } from 'motion/react';
import { Sparkles, Layers } from 'lucide-react';

export function CreativeBottomNav() {
  return (
    <section className="min-h-screen bg-black py-24 md:py-32 relative border-t border-white/5 flex items-center">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">More Work</div>
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tight mb-6">Explore Further</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Visual Design Lab */}
          <motion.div
            className="relative border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent p-12 md:p-16 group hover:border-cyan-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              initial={false}
            />

            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-cyan-500 mb-8" />
              <h3 className="text-3xl md:text-4xl mb-4 tracking-tight">Visual Design Lab</h3>
              <p className="text-white/50 text-base mb-8 leading-relaxed max-w-md">
                Motion studies, UI explorations, branding experiments, and interaction systems. Pure visual craft.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-cyan-500 group-hover:gap-3 transition-all">
                <span>Explore Lab</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity">
              <div className="grid grid-cols-2 gap-2 p-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-white/20 rounded-sm" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other UX/UI Projects */}
          <motion.div
            className="relative border border-white/10 bg-gradient-to-bl from-white/[0.02] to-transparent p-12 md:p-16 group hover:border-cyan-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              initial={false}
            />

            <div className="relative z-10">
              <Layers className="w-12 h-12 text-cyan-500 mb-8" />
              <h3 className="text-3xl md:text-4xl mb-4 tracking-tight">Additional Projects</h3>
              <p className="text-white/50 text-base mb-8 leading-relaxed max-w-md">
                Smaller UX/UI engagements, rapid prototypes, and experimental work across various domains.
              </p>

              <div className="space-y-2 mb-8">
                {['E-commerce Dashboard', 'Fintech Mobile App', 'SaaS Onboarding'].map((project, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-white/40">
                    <div className="w-1 h-1 rounded-full bg-cyan-500" />
                    <span>{project}</span>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-cyan-500 group-hover:gap-3 transition-all">
                <span>View Collection</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact & Footer */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="px-8 py-4 bg-cyan-500 text-black rounded-full text-sm tracking-wide hover:bg-cyan-400 transition-colors">
            Contact Me
          </button>
          
          <p className="text-xs text-white/30 tracking-wide">
            © 2026 Hernany Acosta. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
