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
        primary: 'rgba(var(--primary), <alpha-value>)',
        secondary: 'rgba(var(--secondary), <alpha-value>)',
        tertiary: 'rgba(var(--tertiary), <alpha-value>)',
        quaternary: 'rgba(var(--quaternary), <alpha-value>)',
        text: 'rgba(var(--text), <alpha-value>)',
        foreground: 'rgba(var(--foreground), <alpha-value>)',
        background: 'rgba(var(--background), <alpha-value>)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
