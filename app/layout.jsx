import './globals.css';
import './components/nav-styles.css';
import './components/experience-styles.css';
import './components/project-styles.css';

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
      </head>
      <body style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}