'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jigar-parmar/repos?per_page=6&sort=updated');
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(
            data
              .filter((repo: Repo) => !repo.fork)
              .slice(0, 6)
              .map((repo: Repo) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                stargazers_count: repo.stargazers_count,
                language: repo.language,
                html_url: repo.html_url,
              }))
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">GitHub</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Open source impact</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Live repository cards displaying GitHub stars, languages, and recent active work from the public profile.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {repos.length === 0 ? (
            <div className="glass-panel rounded-[36px] border border-white/10 p-10 text-center text-slate-400">Loading GitHub repositories...</div>
          ) : (
            repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="group glass-panel rounded-[32px] border border-white/10 p-6 text-left transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">Repo</span>
                </div>
                <p className="mt-4 min-h-[60px] text-sm leading-7 text-slate-300">{repo.description || 'Open source project with AI, automation, or data insights.'}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">⭐ {repo.stargazers_count}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{repo.language || 'Tech'}</span>
                </div>
              </motion.a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
