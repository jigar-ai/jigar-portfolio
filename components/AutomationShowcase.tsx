'use client';

import { motion } from 'framer-motion';

const workflows = [
  'Telegram Bot Automation',
  'Email Automation',
  'Lead Generation Workflow',
  'Webhook Integrations',
  'AI Chatbot Workflow',
];

export default function AutomationShowcase() {
  return (
    <section id="automation" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">AI Automation Showcase</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Workflow automation gallery</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Interactive diagrams, flow-driven automation concepts, and AI-powered workflow ecosystems for modern business automation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-[36px] p-8"
          >
            <div className="mb-8 rounded-[28px] border border-white/10 bg-black/75 p-6">
              <div className="mb-5 text-sm uppercase tracking-[0.28em] text-slate-400">Workflow diagram</div>
              <div className="h-[300px] rounded-[24px] bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 p-4 shadow-soft-glow">
                <div className="h-full rounded-[22px] border border-white/10 bg-black/80 p-4 text-slate-300">
                  <p className="text-sm text-slate-400">Interactive flow mockup with nodes, connector lines, and process stages.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-4"
          >
            {workflows.map((workflow) => (
              <div key={workflow} className="rounded-[32px] border border-white/10 bg-black/70 p-6 shadow-soft-glow transition hover:border-blue-400/40 hover:bg-white/5">
                <h3 className="text-xl font-semibold text-white">{workflow}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">Premium automation concept with live integration, monitoring, and AI orchestration layers.</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
