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
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'playfair': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'monospace'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'serif': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'monospace'],
      },
      colors: {
        primary: 'rgba(var(--primary), <alpha-value>)',
        secondary: 'rgba(var(--secondary), <alpha-value>)',
        tertiary: 'rgba(var(--tertiary), <alpha-value>)',
        quaternary: 'rgba(var(--quaternary), <alpha-value>)',
        text: 'rgba(var(--text), <alpha-value>)',
        'text-muted': 'rgba(var(--text-muted), <alpha-value>)',
        foreground: 'rgba(var(--foreground), <alpha-value>)',
        background: 'rgba(var(--background), <alpha-value>)',
        border: 'rgba(var(--border), <alpha-value>)',
        card: 'rgba(var(--card), <alpha-value>)',
        'card-border': 'rgba(var(--card-border), <alpha-value>)',
        muted: {
          DEFAULT: 'rgba(var(--text-muted), <alpha-value>)',
          foreground: 'rgba(var(--text-muted), <alpha-value>)',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    function({ addUtilities }: any) {
      addUtilities({
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        }
      })
    }
  ],
};
export default config;
