import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: 'rgba(255,255,255,0.06)',
        surface2: 'rgba(255,255,255,0.08)',
        accent: '#6d82ff',
        accent2: '#7c3aed',
        glow: '#76c7ff',
      },
      boxShadow: {
        glow: '0 0 40px rgba(114, 137, 255, 0.25)',
        'soft-glow': '0 0 120px rgba(124, 58, 237, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, rgba(109,130,255,0.18), transparent 55%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, rgba(124,58,237,0.18), rgba(80, 70, 229, 0.04), rgba(109,130,255,0.18), rgba(124,58,237,0.18))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
