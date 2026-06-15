'use client';

import { motion } from 'framer-motion';

const certifications = [
  'Data Analytics Job Simulation',
  'Deep Learning Course',
  'Building Machine Learning Ready Organization',
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Certifications</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Verified AI credentials</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Premium certifications and training achievements in analytics, machine learning, and AI-driven business transformation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-[32px] border border-white/10 p-6 shadow-soft-glow backdrop-blur-xl hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold text-white">{cert}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Focused certification with modern business analytics, machine learning readiness, and AI process optimization.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
