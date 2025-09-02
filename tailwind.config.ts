import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quaternary: 'var(--quaternary)',
        text: 'var(--text)',
        'text-dark': 'var(--text-dark)',
        border: 'var(--border)',
        foreground: 'var(--foreground)',
        background: 'var(--background)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
