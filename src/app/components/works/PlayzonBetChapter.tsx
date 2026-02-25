import { motion } from 'motion/react';
import { useState } from 'react';

export function PlayzonBetChapter() {
  const [activeBrand, setActiveBrand] = useState(0);

  return (
    <section className="min-h-screen bg-black py-24 md:py-32 relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Chapter Header */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.3em] uppercase text-cyan-500 mb-4">02 — Multi-Tenant Sportsbook</div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight mb-6">PlayzonBet</h2>
          <p className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed">
            White-label regulated sportsbook platform rebuilt from legacy architecture. Multi-brand theming, KYC compliance, and CMS governance layer.
          </p>
        </motion.div>

        {/* Split Screen Layout - Theme System + Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-32">
          {/* Theme Variations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Multi-Brand System</h3>
            <ThemeShowcase activeBrand={activeBrand} setActiveBrand={setActiveBrand} />
          </motion.div>

          {/* Integration Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Integration Stack</h3>
            <IntegrationStack />
          </motion.div>
        </div>

        {/* KYC Validation Gallery */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">KYC Validation States</h3>
          <KYCGallery />
        </motion.div>

        {/* Strapi Governance */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">CMS Governance</h3>
          <StrapiGovernance />
        </motion.div>

        {/* Decision Log */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Key Decisions</h3>
          <DecisionLog />
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Impact</h3>
          <ImpactMetrics />
        </motion.div>

        {/* Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border-l-2 border-cyan-500/20 pl-8 md:pl-12">
            <div className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Reflection</div>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
              Rebuilding a sportsbook from legacy code taught us that design systems aren't just about visual consistency—they're about encoding business rules that prevent regulatory violations at the component level.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ThemeShowcase({ activeBrand, setActiveBrand }: { activeBrand: number; setActiveBrand: (n: number) => void }) {
  const brands = [
    { name: 'Brand Alpha', primary: '#06B6D4', secondary: '#0891B2' },
    { name: 'Brand Beta', primary: '#10B981', secondary: '#059669' },
    { name: 'Brand Gamma', primary: '#8B5CF6', secondary: '#7C3AED' },
  ];

  return (
    <div>
      {/* Brand Selector */}
      <div className="flex gap-2 mb-8">
        {brands.map((brand, index) => (
          <button
            key={brand.name}
            onClick={() => setActiveBrand(index)}
            className={`px-4 py-2 text-xs tracking-wide transition-all rounded-sm ${
              activeBrand === index
                ? 'bg-cyan-500 text-black'
                : 'bg-white/5 border border-white/10 text-white/50 hover:border-white/20'
            }`}
          >
            {brand.name}
          </button>
        ))}
      </div>

      {/* Token Swatches */}
      <motion.div
        key={activeBrand}
        className="grid grid-cols-4 gap-2 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[brands[activeBrand].primary, brands[activeBrand].secondary, '#FFFFFF', '#000000'].map((color, i) => (
          <div key={i} className="aspect-square rounded-sm border border-white/10" style={{ backgroundColor: color }} />
        ))}
      </motion.div>

      {/* Preview */}
      <motion.div
        key={`preview-${activeBrand}`}
        className="aspect-video border border-white/10 rounded-sm overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(135deg, ${brands[activeBrand].primary}15, ${brands[activeBrand].secondary}05)`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xs text-white/30">[Brand Interface Preview]</div>
        </div>
      </motion.div>
    </div>
  );
}

function IntegrationStack() {
  const stack = [
    { name: 'EveryMatrix', type: 'Sportsbook Engine', status: 'Active' },
    { name: 'AWS CloudFront', type: 'CDN', status: 'Active' },
    { name: 'MINCETUR API', type: 'KYC Validation', status: 'Active' },
    { name: 'Strapi CMS', type: 'Content Governance', status: 'Active' },
  ];

  return (
    <div className="space-y-[1px] bg-white/5">
      {stack.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-black border border-white/5 p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="text-sm">{item.name}</div>
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
          </div>
          <div className="text-xs text-white/40">{item.type}</div>
        </motion.div>
      ))}
    </div>
  );
}

function KYCGallery() {
  const states = [
    { status: 'Pending Submission', color: 'yellow', desc: 'User initiated, awaiting documents' },
    { status: 'Under Review', color: 'blue', desc: 'MINCETUR validation in progress' },
    { status: 'Verified', color: 'green', desc: 'Approved, betting enabled' },
    { status: 'Rejected', color: 'red', desc: 'Failed validation, manual review' },
  ];

  const colorMap: Record<string, string> = {
    yellow: 'border-yellow-500/20 bg-yellow-500/5',
    blue: 'border-cyan-500/20 bg-cyan-500/5',
    green: 'border-green-500/20 bg-green-500/5',
    red: 'border-red-500/20 bg-red-500/5',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {states.map((state, index) => (
        <motion.div
          key={state.status}
          className={`border rounded-sm p-8 ${colorMap[state.color]}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-sm mb-2">{state.status}</div>
          <div className="text-xs text-white/40 mb-6">{state.desc}</div>
          <div className="aspect-video bg-black/20 rounded-sm border border-white/5 flex items-center justify-center">
            <div className="text-xs text-white/20">[State UI]</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StrapiGovernance() {
  return (
    <div className="border border-white/10 bg-white/[0.02] p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xs text-cyan-500 mb-3">Content Control</div>
          <div className="text-xs text-white/50 leading-relaxed">
            Odds, promotions, and compliance disclaimers managed through structured CMS to prevent unauthorized changes.
          </div>
        </div>
        <div>
          <div className="text-xs text-cyan-500 mb-3">Multi-Brand Routing</div>
          <div className="text-xs text-white/50 leading-relaxed">
            Single CMS instance serving multiple brand frontends with role-based content visibility.
          </div>
        </div>
        <div>
          <div className="text-xs text-cyan-500 mb-3">Approval Workflow</div>
          <div className="text-xs text-white/50 leading-relaxed">
            Legal review required for all customer-facing content before publish to production.
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionLog() {
  const decisions = [
    { title: 'Token-Based Theming', impact: 'High' },
    { title: 'Headless CMS Architecture', impact: 'High' },
    { title: 'Component-Level KYC Enforcement', impact: 'Critical' },
    { title: 'Edge-Side Personalization', impact: 'Medium' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5">
      {decisions.map((decision, index) => (
        <motion.div
          key={decision.title}
          className="bg-black border border-white/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <div className="text-sm mb-2">{decision.title}</div>
          <div className={`text-xs px-2 py-1 rounded-sm inline-block ${
            decision.impact === 'Critical' ? 'bg-cyan-500/10 text-cyan-500' : 'bg-white/5 text-white/50'
          }`}>
            {decision.impact}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ImpactMetrics() {
  const metrics = [
    { label: 'Brand Deployment Time', value: '2 days', change: '-85%' },
    { label: 'KYC Success Rate', value: '94.2%', change: '+12%' },
    { label: 'Content Update Speed', value: '< 5min', change: '-95%' },
    { label: 'Frontend Performance', value: '98', change: '+34 pts' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/5">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="bg-black border border-white/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="text-2xl md:text-3xl mb-2 tracking-tight text-cyan-500">{metric.value}</div>
          <div className="text-xs text-white/40 mb-1">{metric.label}</div>
          <div className="text-[10px] text-green-500">{metric.change}</div>
        </motion.div>
      ))}
    </div>
  );
}
