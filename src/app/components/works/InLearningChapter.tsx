import { motion } from 'motion/react';

export function InLearningChapter() {
  return (
    <section id="inlearning" className="min-h-screen bg-black py-24 md:py-32 relative border-t border-white/5">
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
          <div className="text-xs tracking-[0.3em] uppercase text-cyan-500 mb-4">04 — Research-Driven UX</div>
          <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight mb-6">InLearning</h2>
          <p className="text-white/50 max-w-2xl text-base md:text-lg leading-relaxed">
            Enterprise learning platform redesign. Login flows, notification architecture, and cognitive overload reduction through research-driven IA.
          </p>
        </motion.div>

        {/* Research Insights */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">User Research Insights</h3>
          <ResearchCards />
        </motion.div>

        {/* IA Tree */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Information Architecture</h3>
          <IATree />
        </motion.div>

        {/* Cognitive Load Reduction */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Complexity Reduction</h3>
          <CognitiveLoadComparison />
        </motion.div>

        {/* Login Flow */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl tracking-tight mb-12">Authentication Flow</h3>
          <LoginStoryboard />
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
              The breakthrough came from quantifying cognitive load—measuring not just task completion but mental effort. Reducing UI elements from 18 to 6 per screen improved comprehension scores by 47%.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResearchCards() {
  const insights = [
    {
      quote: "I can't tell which notifications are urgent. Everything feels important.",
      role: "Student, 22",
      severity: "High"
    },
    {
      quote: "It takes me 4 clicks to get to my active courses. That's ridiculous.",
      role: "Instructor, 35",
      severity: "Medium"
    },
    {
      quote: "The dashboard shows 18 different things at once. I just want to start learning.",
      role: "Administrator, 41",
      severity: "High"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {insights.map((insight, index) => (
        <motion.div
          key={index}
          className="border border-white/10 bg-white/[0.02] p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`text-[10px] px-2 py-1 rounded-sm inline-block mb-4 ${
            insight.severity === 'High' ? 'bg-cyan-500/10 text-cyan-500' : 'bg-white/5 text-white/50'
          }`}>
            {insight.severity} Impact
          </div>
          <p className="text-sm text-white/70 mb-4 leading-relaxed italic">"{insight.quote}"</p>
          <div className="text-xs text-white/40">— {insight.role}</div>
        </motion.div>
      ))}
    </div>
  );
}

function IATree() {
  const structure = [
    {
      section: 'Dashboard',
      children: ['My Courses', 'Progress Overview', 'Notifications (Filtered)']
    },
    {
      section: 'Courses',
      children: ['Active', 'Completed', 'Bookmarked']
    },
    {
      section: 'Profile',
      children: ['Settings', 'Achievements', 'Certificates']
    },
  ];

  return (
    <div className="border border-white/10 bg-white/[0.02] p-8 md:p-12">
      <div className="space-y-8">
        {structure.map((item, index) => (
          <motion.div
            key={item.section}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="text-base mb-4 text-cyan-500">{item.section}</div>
            <div className="ml-8 space-y-2">
              {item.children.map((child, childIndex) => (
                <motion.div
                  key={child}
                  className="flex items-center gap-3 text-sm text-white/60"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + childIndex * 0.05 }}
                >
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  {child}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CognitiveLoadComparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Before */}
      <motion.div
        className="border border-white/10 bg-white/[0.02] p-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-xs text-white/40 mb-1">Before</div>
            <div className="text-2xl tracking-tight">18 Elements</div>
          </div>
          <div className="text-xs px-2 py-1 bg-red-500/10 text-red-500 border border-red-500/20 rounded-sm">
            High Load
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 opacity-40">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="aspect-square bg-white/10 rounded-sm" />
          ))}
        </div>
      </motion.div>

      {/* After */}
      <motion.div
        className="border border-white/10 bg-white/[0.02] p-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-xs text-white/40 mb-1">After</div>
            <div className="text-2xl tracking-tight">6 Elements</div>
          </div>
          <div className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 rounded-sm">
            Optimized
          </div>
        </div>
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 bg-cyan-500/5 border border-cyan-500/20 rounded-sm" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function LoginStoryboard() {
  const steps = [
    { step: 'Entry', desc: 'Email/username input' },
    { step: 'Validation', desc: 'Account check + MFA trigger' },
    { step: 'Authentication', desc: 'Password + 2FA code' },
    { step: 'Recovery Option', desc: 'Contextual help if failed' },
    { step: 'Success State', desc: 'Redirect to dashboard' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {steps.map((item, index) => (
        <motion.div
          key={item.step}
          className="border border-white/10 bg-white/[0.02] p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center text-xs mb-4">
            {index + 1}
          </div>
          <div className="text-sm mb-2">{item.step}</div>
          <div className="text-xs text-white/40">{item.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ImpactMetrics() {
  const metrics = [
    { label: 'Task Completion Time', value: '-58%', trend: 'down' },
    { label: 'Comprehension Score', value: '+47%', trend: 'up' },
    { label: 'Login Success Rate', value: '96.4%', trend: 'up' },
    { label: 'Support Tickets', value: '-61%', trend: 'down' },
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
