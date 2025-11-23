import './globals.css';
import{ PostHogProvider } from './provider';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display',
  display: 'swap',
});

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
        <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} font-inter bg-background text-foreground h-full`}>
          <PostHogProvider>
            {children}
          </PostHogProvider>
      </body>
    </html>
  );
}