'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Major Projects', value: '6+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Role', value: 'AI Automation Developer' },
  { label: 'Specialty', value: 'Data Analytics Specialist' },
];

export default function About() {
  return (
    <>
      <section id="about" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">About</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium AI engineering profile</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Passionate AI/ML Engineer specializing in Machine Learning, Deep Learning, Data Analytics, Power BI, Workflow Automation, and AI-powered business solutions.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="glass-panel rounded-[36px] p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3 rounded-3xl border border-white/10 bg-black/70 p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Name</p>
                  <p className="text-xl font-semibold text-white">Jigar Parmar</p>
                </div>
                <div className="space-y-3 rounded-3xl border border-white/10 bg-black/70 p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Location</p>
                  <p className="text-xl font-semibold text-white">Ahmedabad, Gujarat</p>
                </div>
                <div className="space-y-3 rounded-3xl border border-white/10 bg-black/70 p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Education</p>
                  <p className="text-xl font-semibold text-white">M.Sc. IT (Business Intelligence & Analytics)</p>
                </div>
                <div className="space-y-3 rounded-3xl border border-white/10 bg-black/70 p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Expertise</p>
                  <p className="text-xl font-semibold text-white">AI/Machine Learning</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="grid gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-[32px] border border-white/10 p-6 shadow-soft-glow">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
