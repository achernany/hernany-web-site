import { motion } from 'motion/react';

export function AlazChapter() {
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
          <div className="text-xs tracking-[0.3em] uppercase text-cyan-500 mb-4">03 — Product Strategy</div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight mb-6">Alaz SAC</h2>
          <p className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed">
            Strategic consulting practice across regulated industries. Discovery to delivery frameworks for complex B2B and infrastructure products.
          </p>
        </motion.div>

        {/* Horizontal Client Ribbon */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Client Engagements</h3>
          <ClientRibbon />
        </motion.div>

        {/* Engagement Model */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Process Framework</h3>
          <EngagementModel />
        </motion.div>

        {/* Deliverables */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Strategic Outputs</h3>
          <DeliverablesGrid />
        </motion.div>

        {/* Impact */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Engagement Impact</h3>
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
              Strategic consulting revealed that most UX problems are actually alignment problems. Our framework focuses on making implicit assumptions explicit before any design work begins.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientRibbon() {
  const clients = [
    { name: 'Wetrax', industry: 'Fleet Management SaaS', engagement: 'Discovery + Strategy' },
    { name: 'Internet Para Todos', industry: 'Telecom Infrastructure', engagement: 'Product Roadmap' },
    { name: 'EGCAPP', industry: 'Public Health Platform', engagement: 'Service Design' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {clients.map((client, index) => (
        <motion.div
          key={client.name}
          className="border border-white/10 bg-white/[0.02] p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          <div className="text-xl mb-3">{client.name}</div>
          <div className="text-xs text-white/40 mb-6">{client.industry}</div>
          <div className="text-xs text-cyan-500">{client.engagement}</div>
        </motion.div>
      ))}
    </div>
  );
}

function EngagementModel() {
  const phases = [
    { name: 'Discovery', duration: '2-4 weeks', deliverables: ['Stakeholder Interviews', 'Current State Analysis', 'Constraint Mapping'] },
    { name: 'Strategy', duration: '3-6 weeks', deliverables: ['Future State Vision', 'Roadmap', 'Success Metrics'] },
    { name: 'Requirements', duration: '2-3 weeks', deliverables: ['User Stories', 'Technical Specs', 'Design Principles'] },
    { name: 'Delivery', duration: 'Ongoing', deliverables: ['Design System', 'Prototypes', 'Handoff Documentation'] },
  ];

  return (
    <div className="space-y-[1px] bg-white/5">
      {phases.map((phase, index) => (
        <motion.div
          key={phase.name}
          className="bg-black border border-white/5 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <div className="text-sm md:text-base mb-1">{phase.name}</div>
              <div className="text-xs text-white/40">{phase.duration}</div>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              {phase.deliverables.map((deliverable) => (
                <div key={deliverable} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-sm">
                  {deliverable}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function DeliverablesGrid() {
  const deliverables = [
    { type: 'Service Blueprint', count: 12 },
    { type: 'User Journey Maps', count: 8 },
    { type: 'Product Roadmaps', count: 3 },
    { type: 'Design Systems', count: 2 },
    { type: 'Research Reports', count: 15 },
    { type: 'Prototypes', count: 24 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-white/5">
      {deliverables.map((item, index) => (
        <motion.div
          key={item.type}
          className="bg-black border border-white/5 p-6 md:p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="text-3xl md:text-4xl mb-2 tracking-tight text-cyan-500">{item.count}</div>
          <div className="text-xs text-white/40">{item.type}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ImpactMetrics() {
  const metrics = [
    { label: 'Avg. Engagement Duration', value: '4.2 mo' },
    { label: 'Stakeholder Alignment Score', value: '8.7/10' },
    { label: 'Roadmap Execution Rate', value: '89%' },
    { label: 'Client Retention', value: '100%' },
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
          <div className="text-xs text-white/40">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
}