import './globals.css';
import './components/nav-styles.css';
import './components/experience-styles.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Osaf Ali Sayed | Full Stack Developer',
  description: 'Portfolio of Osaf Ali Sayed, Full Stack Developer',
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}