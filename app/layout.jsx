import './globals.css';
import { Providers } from './provider';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
        <body className={`font-inter bg-background text-foreground h-full`}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}