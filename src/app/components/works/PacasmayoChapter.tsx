import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function PacasmayoChapter() {
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
          <div className="text-xs tracking-[0.3em] uppercase text-cyan-500 mb-4">05 — Design Systems Engineering</div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight mb-6">Cementos Pacasmayo</h2>
          <p className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed">
            Enterprise design system tokenization. Figma to Angular pipeline with Stencil web components, Style Dictionary, and automated sync.
          </p>
        </motion.div>

        {/* Token Pipeline */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Design-to-Code Pipeline</h3>
          <TokenPipeline />
        </motion.div>

        {/* Component Inventory */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Component Library</h3>
          <ComponentInventory />
        </motion.div>

        {/* Governance Framework */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Governance Model</h3>
          <GovernanceFramework />
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Technical Stack</h3>
          <TechnicalStack />
        </motion.div>

        {/* Impact */}
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
              Building a design system isn't about creating components—it's about encoding design decisions as infrastructure. Our token pipeline eliminated 93% of manual translation work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TokenPipeline() {
  const steps = [
    { name: 'Figma Tokens', desc: 'Design source' },
    { name: 'Tokens JSON', desc: 'Extracted values' },
    { name: 'Style Dictionary', desc: 'Transform layer' },
    { name: 'Backlight', desc: 'Documentation' },
    { name: 'Angular/Stencil', desc: 'Production code' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {steps.map((step, index) => (
        <div key={step.name} className="relative">
          <motion.div
            className="border border-white/10 bg-white/[0.02] p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="text-sm mb-1">{step.name}</div>
            <div className="text-xs text-white/40">{step.desc}</div>
          </motion.div>
          
          {index < steps.length - 1 && (
            <motion.div
              className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2 }}
            >
              <ArrowRight className="w-5 h-5 text-cyan-500/30" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

function ComponentInventory() {
  const components = [
    'Button', 'Input', 'Select', 'Checkbox',
    'Radio', 'Switch', 'Textarea', 'Card',
    'Modal', 'Dropdown', 'Tabs', 'Accordion',
    'Alert', 'Badge', 'Avatar', 'Tooltip',
    'Table', 'Pagination', 'Breadcrumb', 'Progress',
  ];

  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-[1px] bg-white/5">
      {components.map((component, index) => (
        <motion.div
          key={component}
          className="aspect-square bg-black border border-white/5 flex items-center justify-center text-xs hover:bg-white/[0.02] transition-colors cursor-default"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.02 }}
        >
          {component}
        </motion.div>
      ))}
    </div>
  );
}

function GovernanceFramework() {
  const roles = [
    {
      role: 'Design Lead',
      responsibilities: ['Token definition', 'Visual QA', 'Figma library ownership'],
    },
    {
      role: 'Frontend Lead',
      responsibilities: ['Component implementation', 'Storybook docs', 'CI/CD pipeline'],
    },
    {
      role: 'Product Owner',
      responsibilities: ['Roadmap priority', 'Adoption tracking', 'Stakeholder alignment'],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {roles.map((item, index) => (
        <motion.div
          key={item.role}
          className="border border-white/10 bg-white/[0.02] p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-sm mb-4 text-cyan-500">{item.role}</div>
          <ul className="space-y-2">
            {item.responsibilities.map((resp) => (
              <li key={resp} className="text-xs text-white/50 flex items-start gap-2">
                <span className="text-cyan-500/40">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

function TechnicalStack() {
  const stack = [
    { layer: 'Framework', tech: 'Angular 15 + Stencil', purpose: 'Web components' },
    { layer: 'Tokens', tech: 'Style Dictionary', purpose: 'Multi-platform output' },
    { layer: 'Documentation', tech: 'Backlight + Storybook', purpose: 'Living docs' },
    { layer: 'Version Control', tech: 'Git + Semantic Release', purpose: 'Automated versioning' },
    { layer: 'Distribution', tech: 'NPM Private Registry', purpose: 'Package management' },
  ];

  return (
    <div className="space-y-[1px] bg-white/5">
      {stack.map((item, index) => (
        <motion.div
          key={item.layer}
          className="bg-black border border-white/5 p-6 flex flex-col md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <div className="mb-2 md:mb-0">
            <div className="text-xs text-white/40 mb-1">{item.layer}</div>
            <div className="text-sm">{item.tech}</div>
          </div>
          <div className="text-xs text-white/50">{item.purpose}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ImpactMetrics() {
  const metrics = [
    { label: 'Component Reuse Rate', value: '87%' },
    { label: 'Design-Dev Handoff Time', value: '-93%' },
    { label: 'Visual Inconsistencies', value: '-98%' },
    { label: 'Developer Velocity', value: '+240%' },
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