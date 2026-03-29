import './globals.css';
import{ PostHogProvider } from './provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="5yTo4wLolQ0MskY4Y_5IvbUWXTQoo95rkramECE1dmc" />
      </head>
        <body className={`font-inter bg-background text-foreground h-full`}>
          <PostHogProvider>
            {children}
          </PostHogProvider>
      </body>
    </html>
  );
}