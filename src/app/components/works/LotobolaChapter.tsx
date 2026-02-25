import { motion } from 'motion/react';

export function LotobolaChapter() {
  return (
    <section className="min-h-screen bg-black py-24 md:py-32 relative">
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Chapter Header - Command Center Aesthetic */}
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-cyan-500 mb-4">01 — National Platform</div>
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight mb-6">LotoBola</h2>
              <p className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed">
                Regulated lottery ecosystem connecting payment providers, retail networks, and compliance systems across Peru's national infrastructure.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-xs text-white/40 mb-2">Complexity</div>
              <div className="text-5xl tracking-tighter text-cyan-500">9.2</div>
              <div className="text-xs text-white/30 mt-1">/10</div>
            </div>
          </div>
        </motion.div>

        {/* Ecosystem Map - Radial Command Center */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Ecosystem Architecture</h3>
          <div className="border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 rounded-sm">
            <EcosystemRadial />
          </div>
        </motion.div>

        {/* Service Blueprint - Wide Horizontal */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Service Blueprint</h3>
          <ServiceBlueprint />
        </motion.div>

        {/* Integration Architecture */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Integration Matrix</h3>
          <IntegrationMatrix />
        </motion.div>

        {/* System Comparison */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Multi-Channel System</h3>
          <SystemComparison />
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
              This project redefined how we think about distributed lottery systems. The challenge wasn't just technical integration—it was orchestrating trust across regulatory bodies, retail networks, and financial institutions while maintaining sub-second transaction speeds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EcosystemRadial() {
  const integrations = [
    { name: 'Yape', sector: 0, radius: 180 },
    { name: 'Plin', sector: 60, radius: 180 },
    { name: 'Banks', sector: 120, radius: 180 },
    { name: 'Tambo+', sector: 180, radius: 160 },
    { name: 'Retail POS', sector: 240, radius: 160 },
    { name: 'AWS Brazil', sector: 300, radius: 200 },
    { name: 'RNG Core', sector: 30, radius: 220 },
    { name: 'Compliance', sector: 150, radius: 220 },
    { name: 'Regulator', sector: 270, radius: 200 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      {/* Center Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <div className="text-xs text-cyan-500">Core</div>
          <div className="text-[10px] text-white/40">Platform</div>
        </div>
      </motion.div>

      {/* Integration Nodes */}
      {integrations.map((integration, index) => {
        const angle = (integration.sector * Math.PI) / 180;
        const x = Math.cos(angle) * integration.radius;
        const y = Math.sin(angle) * integration.radius;

        return (
          <div key={integration.name}>
            {/* Connection Line */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <motion.line
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="rgba(6, 182, 212, 0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              />
            </svg>

            {/* Node */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x, y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
            >
              <div className="px-3 py-2 border border-white/10 bg-black/80 backdrop-blur-sm rounded-sm text-[10px] whitespace-nowrap">
                {integration.name}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceBlueprint() {
  const lanes = [
    { name: 'User Actions', items: ['Select Game', 'Add Ticket', 'Pay', 'Confirm', 'Track'] },
    { name: 'Frontend Layer', items: ['Web App', 'POS Interface', 'Mobile Web', 'Receipt', 'Notifications'] },
    { name: 'Backstage Ops', items: ['Validation', 'Payment Gateway', 'Ticket Gen', 'Settlement', 'Reconciliation'] },
    { name: 'Infrastructure', items: ['API Gateway', 'Auth Service', 'Game Engine', 'Database', 'Cache Layer'] },
    { name: 'Compliance', items: ['Age Check', 'Limits Monitor', 'Audit Log', 'Reports', 'Regulator Sync'] },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px] space-y-[1px]">
        {lanes.map((lane, laneIndex) => (
          <motion.div
            key={lane.name}
            className="flex items-stretch"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: laneIndex * 0.1 }}
          >
            <div className="w-48 flex-shrink-0 bg-white/[0.02] border border-white/5 px-6 py-4 flex items-center">
              <div className="text-xs text-white/50">{lane.name}</div>
            </div>
            <div className="flex-1 flex items-stretch">
              {lane.items.map((item, itemIndex) => (
                <div
                  key={item}
                  className="flex-1 border border-white/5 bg-white/[0.01] px-4 py-4 flex items-center justify-center"
                >
                  <div className="text-[10px] text-white/40 text-center">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IntegrationMatrix() {
  const integrations = [
    { name: 'Yape API', type: 'Payment', latency: '120ms', uptime: '99.8%' },
    { name: 'Plin SDK', type: 'Payment', latency: '95ms', uptime: '99.9%' },
    { name: 'BCP Gateway', type: 'Banking', latency: '180ms', uptime: '99.7%' },
    { name: 'AWS RDS', type: 'Database', latency: '8ms', uptime: '99.99%' },
    { name: 'RNG Provider', type: 'Core Logic', latency: '45ms', uptime: '99.95%' },
    { name: 'MINCETUR API', type: 'Compliance', latency: '320ms', uptime: '98.5%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5">
      {integrations.map((integration, index) => (
        <motion.div
          key={integration.name}
          className="bg-black p-6 border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="text-xs text-cyan-500 mb-2">{integration.type}</div>
          <div className="text-sm mb-4">{integration.name}</div>
          <div className="flex items-center justify-between text-[10px] text-white/40">
            <div>↓ {integration.latency}</div>
            <div>↑ {integration.uptime}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SystemComparison() {
  const systems = [
    { name: 'Public Web', users: '120K MAU', channels: 'Desktop, Mobile Web', complexity: 'Medium' },
    { name: 'POS System', users: '2.8K Terminals', channels: 'Retail, Kiosks', complexity: 'High' },
    { name: 'Admin Backoffice', users: '240 Staff', channels: 'Desktop Only', complexity: 'High' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {systems.map((system, index) => (
        <motion.div
          key={system.name}
          className="border border-white/10 bg-white/[0.02] p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          <div className="text-lg mb-6">{system.name}</div>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-white/40">Users</span>
              <span className="text-white/70">{system.users}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Channels</span>
              <span className="text-white/70">{system.channels}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Complexity</span>
              <span className="text-cyan-500">{system.complexity}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function DecisionLog() {
  const decisions = [
    {
      title: 'Unified Design System',
      rationale: 'Single source of truth across web, POS, and admin to reduce inconsistency and maintenance burden.',
      impact: 'High',
    },
    {
      title: 'Progressive Enhancement for POS',
      rationale: 'Hardware limitations in retail terminals required offline-first architecture with sync reconciliation.',
      impact: 'Critical',
    },
    {
      title: 'Compliance-First Validation',
      rationale: 'Age verification and limit enforcement at API gateway level, not UI, to prevent regulatory violations.',
      impact: 'Critical',
    },
    {
      title: 'Modular Payment Abstraction',
      rationale: 'Provider-agnostic payment layer to support future integrations without frontend refactoring.',
      impact: 'High',
    },
    {
      title: 'Error Taxonomy System',
      rationale: 'Standardized error codes and recovery flows across all touchpoints for consistent UX.',
      impact: 'Medium',
    },
  ];

  return (
    <div className="space-y-[1px] bg-white/5">
      {decisions.map((decision, index) => (
        <motion.div
          key={decision.title}
          className="bg-black border border-white/5 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="text-sm md:text-base">{decision.title}</div>
            <div className={`text-xs px-2 py-1 rounded-sm ${
              decision.impact === 'Critical' 
                ? 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20' 
                : decision.impact === 'High'
                ? 'bg-white/5 text-white/70 border border-white/10'
                : 'bg-white/[0.02] text-white/50 border border-white/5'
            }`}>
              {decision.impact}
            </div>
          </div>
          <p className="text-xs text-white/50 leading-relaxed">{decision.rationale}</p>
        </motion.div>
      ))}
    </div>
  );
}

function ImpactMetrics() {
  const metrics = [
    { label: 'Transaction Success Rate', value: '99.4%', change: '+2.8%', trend: 'up' },
    { label: 'Average Processing Time', value: '1.2s', change: '-40%', trend: 'down' },
    { label: 'Support Tickets (Payment)', value: '67', change: '-73%', trend: 'down' },
    { label: 'Monthly Active Users', value: '120K', change: '+145%', trend: 'up' },
    { label: 'POS Terminal Uptime', value: '99.1%', change: '+1.8%', trend: 'up' },
    { label: 'Compliance Incidents', value: '0', change: '-100%', trend: 'down' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-white/5">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="bg-black border border-white/5 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="text-3xl md:text-4xl mb-2 tracking-tight text-cyan-500">{metric.value}</div>
          <div className="text-xs text-white/40 mb-2">{metric.label}</div>
          <div className={`text-[10px] ${metric.trend === 'up' ? 'text-green-500' : 'text-cyan-500'}`}>
            {metric.change}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
