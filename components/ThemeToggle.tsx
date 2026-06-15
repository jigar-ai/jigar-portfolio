'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const selected = stored || prefers;
    setTheme(selected);
    document.documentElement.dataset.theme = selected;
  }, []);

  const updateTheme = (next: 'dark' | 'light') => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('portfolio-theme', next);
  };

  return (
    <button
      type="button"
      onClick={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-blue-400/30 hover:bg-white/10"
    >
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}
