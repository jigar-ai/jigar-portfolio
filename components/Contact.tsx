'use client';

import { motion } from 'framer-motion';

const social = [
  { label: 'GitHub', href: 'https://github.com/jigar-parmar' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jigar-parmar' },
  { label: 'Email', href: 'mailto:jigar.parmar@example.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let&apos;s build intelligent automation together</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Reach out for collaborations, AI automation development, workflow design, or enterprise analytics projects.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-[36px] border border-white/10 p-8 shadow-soft-glow"
          >
            <div className="grid gap-6">
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Name
                <input className="rounded-3xl border border-white/10 bg-black/80 px-4 py-3 text-white outline-none transition focus:border-blue-400/40 focus:ring-2 focus:ring-blue-500/20" placeholder="Your name" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Email
                <input className="rounded-3xl border border-white/10 bg-black/80 px-4 py-3 text-white outline-none transition focus:border-violet-400/40 focus:ring-2 focus:ring-violet-500/20" placeholder="you@example.com" type="email" />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Message
                <textarea className="min-h-[150px] rounded-3xl border border-white/10 bg-black/80 px-4 py-3 text-white outline-none transition focus:border-blue-400/40 focus:ring-2 focus:ring-blue-500/20" placeholder="Tell me about your project" />
              </label>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95">
                  Send Message
                </button>
                <button type="button" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400/30 hover:bg-white/10">
                  Book a Call
                </button>
              </div>
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 rounded-[36px] border border-white/10 bg-black/70 p-8 shadow-soft-glow backdrop-blur-xl"
          >
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Social</p>
              <div className="mt-6 grid gap-4">
                {social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-black/80 px-5 py-4 text-sm text-white transition hover:border-blue-400/30 hover:bg-white/10">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Availability</p>
              <p className="mt-4 text-sm text-slate-300">Open for AI/ML development, automation consulting, and strategic workflow engineering collaborations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
