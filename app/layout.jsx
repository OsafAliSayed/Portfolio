import './globals.css';
import{ PostHogProvider } from './provider';

export const metadata = {
  title: {
    default: 'Osaf Ali Sayed - Full Stack Developer',
    template: '%s | Osaf Ali Sayed'
  },
  description: 'Full Stack Developer specializing in React, Node.js, and Python. Building modern web applications and sharing insights about software development.',
  keywords: ['Osaf Ali Sayed', 'Full Stack Developer', 'React', 'Node.js', 'Python', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Osaf Ali Sayed' }],
  creator: 'Osaf Ali Sayed',
  metadataBase: new URL('https://osafalisayed.github.io'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.jpeg', type: 'image/jpeg' },
      { url: '/favicon.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/favicon.jpeg', sizes: '16x16', type: 'image/jpeg' }
    ],
    apple: [
      { url: '/favicon.jpeg', sizes: '180x180', type: 'image/jpeg' }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://osafalisayed.github.io',
    siteName: 'Osaf Ali Sayed',
    title: 'Osaf Ali Sayed - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and Python. Building modern web applications and sharing insights about software development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osaf Ali Sayed - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and Python. Building modern web applications and sharing insights about software development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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