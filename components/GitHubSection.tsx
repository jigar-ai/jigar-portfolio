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
  fork: boolean;
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/jigar-ai/repos?per_page=20&sort=updated'
        );

        const data = await response.json();

        if (Array.isArray(data)) {
          const filteredRepos = data
            .filter((repo: Repo) => !repo.fork)
            .slice(0, 6);

          setRepos(filteredRepos);
        }
      } catch (error) {
        console.error('GitHub API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
            GitHub
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Open Source Projects
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore my AI, Machine Learning, Data Analytics and Automation
            projects directly from GitHub.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {loading ? (
            <div className="col-span-full text-center text-slate-400">
              Loading repositories...
            </div>
          ) : repos.length === 0 ? (
            <div className="col-span-full text-center text-slate-400">
              No repositories found.
            </div>
          ) : (
            repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {repo.name}
                  </h3>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                    Repository
                  </span>
                </div>

                <p className="mt-4 min-h-[80px] text-sm text-slate-300">
                  {repo.description ||
                    'AI / ML / Automation project hosted on GitHub.'}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    ⭐ {repo.stargazers_count}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {repo.language || 'Technology'}
                  </span>

                </div>
              </motion.a>
            ))
          )}

        </div>
      </div>
    </section>
  );
}