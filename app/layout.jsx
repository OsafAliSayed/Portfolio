import './globals.css';
import{ PostHogProvider } from './provider';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
        <body className={`font-inter bg-background text-foreground h-full`}>
          <PostHogProvider>
            {children}
          </PostHogProvider>
      </body>
    </html>
  );
}