'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Programming',
    items: ['Python', 'SQL'],
  },
  {
    title: 'Machine Learning',
    items: ['Regression', 'Classification', 'Clustering', 'Feature Engineering'],
  },
  {
    title: 'Deep Learning',
    items: ['ANN', 'CNN', 'RNN', 'LSTM', 'GRU'],
  },
  {
    title: 'Data Analytics',
    items: ['Power BI', 'Excel', 'Pandas', 'NumPy'],
  },
  {
    title: 'Automation',
    items: ['n8n', 'Activepieces', 'API Integrations'],
  },
  {
    title: 'Cloud & Big Data',
    items: ['Azure', 'Hadoop', 'Hive', 'Pig', 'MapReduce'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Jupyter', 'Google Colab'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Advanced AI & automation skillset</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A premium collection of competencies covering modern AI development, automation tooling, analytics, and cloud data workflows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group rounded-[32px] border border-white/10 bg-black/70 p-6 shadow-soft-glow backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-400/40 hover:bg-white/10 hover:text-white">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
