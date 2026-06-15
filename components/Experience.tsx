'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'AI Automation Developer',
    period: 'Present',
    details: ['Activepieces', 'n8n', 'Webhook Integrations', 'API Automation', 'LLM Workflows'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Experience</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Timeline of AI automation impact</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A premium timeline showcasing AI workflow development, automation integration, and modern data automation skill sets.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/70 p-8 shadow-soft-glow backdrop-blur-xl">
          <div className="absolute top-10 left-8 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-blue-500 to-violet-500 opacity-60" />
          <div className="space-y-10">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.role}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-6 top-3 h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-glow" />
                <div className="rounded-3xl border border-white/10 bg-black/80 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{entry.role}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{entry.period}</span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {entry.details.map((detail) => (
                      <div key={detail} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{detail}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
