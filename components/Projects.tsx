'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart AI Voice Assistant',
    description: 'Voice commands, WhatsApp automation, email workflows, face recognition, Q-Learning, and YouTube search.',
    features: ['Voice Commands', 'WhatsApp Automation', 'Email Automation', 'Face Recognition', 'Q-Learning', 'YouTube Search'],
    tech: ['Python', 'SpeechRecognition', 'pyttsx3', 'OpenCV', 'Q-Learning'],
  },
  {
    title: 'Medical Recommendation System',
    description: 'Disease prediction, medicine recommendations, diet plans, and workout suggestions for intelligent health support.',
    features: ['Disease Prediction', 'Medicine Recommendation', 'Diet Plans', 'Workout Suggestions'],
    tech: ['Django', 'Machine Learning', 'SVM', 'MySQL'],
  },
  {
    title: 'AI-Based Tuberculosis Detection',
    description: 'X-ray analysis with 99% accuracy using deep learning and medical imaging models.',
    features: ['X-Ray Analysis', '99% Accuracy', 'Deep Learning'],
    tech: ['TensorFlow', 'Keras', 'VGG16', 'Django'],
  },
  {
    title: 'Power BI Car Sales Dashboard',
    description: 'Interactive sales analytics dashboard delivering business insights and KPIs.',
    features: ['Interactive Dashboard', 'Sales Analytics', 'Business Insights', 'KPI Tracking'],
    tech: ['Power BI'],
  },
  {
    title: 'Flipkart Sales Analytics',
    description: 'Revenue analysis and visualization of marketplace sales performance.',
    features: ['EDA', 'Visualization', 'Revenue Analysis', 'Interactive Dashboard'],
    tech: ['Power BI', 'SQL'],
  },
  {
    title: 'Pizza Sales Analytics',
    description: 'Business analytics and revenue insights using SQL and reporting tools.',
    features: ['SQL Queries', 'Business Analytics', 'Revenue Insights'],
    tech: ['SQL', 'Power BI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Featured AI & analytics work</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            High-impact projects with advanced data science, automation workflows, intelligent systems, and interactive analytics.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-black/70 p-8 shadow-soft-glow backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/5 opacity-60 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Project</span>
                  <span className="text-slate-400">{project.tech[0]}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-blue-400/40 hover:bg-white/10">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
