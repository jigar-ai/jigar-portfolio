'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const phrases = [
  'Machine Learning',
  'Deep Learning',
  'AI Automation',
  'Workflow Automation',
  'Power BI Developer',
  'Python Developer',
];

export default function Hero() {
  const [activePhrase, setActivePhrase] = useState(0);
  const [showPhrase, setShowPhrase] = useState('');

  useEffect(() => {
    let text = '';
    let index = 0;
    let charIndex = 0;
    let writing = true;
    const update = () => {
      const current = phrases[index];
      if (writing) {
        text = current.slice(0, charIndex + 1);
        setShowPhrase(text);
        charIndex += 1;
        if (charIndex === current.length) {
          writing = false;
          setTimeout(update, 1400);
          return;
        }
      } else {
        text = current.slice(0, charIndex - 1);
        setShowPhrase(text);
        charIndex -= 1;
        if (charIndex === 0) {
          writing = true;
          index = (index + 1) % phrases.length;
          setActivePhrase(index);
        }
      }
      setTimeout(update, writing ? 90 : 50);
    };
    update();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(109,130,255,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.23),_transparent_30%)]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-3xl" />
      <div className="mx-auto relative flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300 shadow-soft-glow">
            Premium AI Portfolio
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            AI/ML Engineer & AI Automation Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
            className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Building futuristic AI experiences with Machine Learning, Deep Learning, Power BI and automation ecosystems for intelligent business workflows.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400/30 hover:bg-white/10">
              View Projects
            </a>
            <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
              Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/30 hover:bg-white/10">
              Hire Me
            </a>
          </div>
          <div className="mt-12 inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-soft-glow backdrop-blur-xl">
            <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-blue-500 to-violet-500 p-1">
              <div className="h-full w-full rounded-3xl bg-black/95" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Featured Skill</p>
              <p className="mt-1 text-sm font-medium text-white">AI Automation · Neural Systems · Intelligent Workflows</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
          className="group relative z-10 mx-auto flex h-[520px] w-full max-w-[520px] items-center justify-center rounded-[42px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-2xl sm:p-8 lg:mx-0"
        >
          <div className="absolute inset-0 rounded-[42px] border border-white/5 bg-[radial-gradient(circle_at_top_left,_rgba(109,130,255,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.22),_transparent_35%)] opacity-80" />
          <div className="absolute -left-10 top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-10 bottom-14 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-between rounded-[32px] border border-white/10 bg-black/80 p-5">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a14]/90">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-5 text-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-transparent shadow-soft-glow">
                  <span className="text-4xl"></span>
                </div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">AI Neural Node</p>
                <p className="text-sm leading-6 text-slate-300">Interactive 3D neural network, dynamic particle energy and premium futuristic UI experience for portfolio visitors.</p>
              </div>
            </div>
            <div className="mt-6 grid w-full grid-cols-2 gap-4 text-left text-sm text-slate-300 sm:grid-cols-3">
              {['Real-time Data', 'Intelligent Workflows', 'Automation', 'AI Research', 'ML Optimization', 'Neural GPU'].map((label) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/10">
                  <p className="text-xs uppercase text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(circle_at_bottom,_rgba(109,130,255,0.16),transparent_55%)]" />
      <div className="mt-8 px-6 text-sm text-slate-400 sm:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-soft-glow backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
          <span>Now showcasing AI automation workflows, premium project case studies, GitHub impact, and enterprise-grade portfolio design.</span>
        </div>
      </div>
    </section>
  );
}
