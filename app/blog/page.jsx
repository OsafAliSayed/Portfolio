import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/ui/navbar';
import FooterSection from '@/components/common/footer';
import PageHeaderSection from '@/components/common/page-header';
import BlogClient from '@/components/blog/blog-client'
import { Suspense } from 'react';

export const metadata = {
  title: 'Blog — Osaf Ali Sayed',
  description:
    'Thoughts on software development, technology, and everything in between. Articles on Next.js, Python, Django, and building scalable systems.',
  keywords: [
    'Blog',
    'Osaf Ali Sayed',
    'Software Development',
    'Next.js',
    'Python',
    'Django',
    'Tech Writing',
    'Web Development',
  ],
  metadataBase: new URL('https://www.osafalisayed.com'),
  openGraph: {
    title: 'Blog — Osaf Ali Sayed',
    description:
      'Thoughts on software development, technology, and everything in between.',
    url: 'https://www.osafalisayed.com/blog',
    siteName: 'Osaf Ali Sayed',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://www.osafalisayed.com/favicon.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Osaf Ali Sayed',
    description:
      'Thoughts on software development, technology, and everything in between.',
    creator: '@sayedosafali',
    images: ['https://www.osafalisayed.com/favicon.jpeg'],
  },
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const pageHeaderProps = {
  title: "My Writings",
  description: "Thoughts on development, technology, and everything in between."
}

export default async function BlogPage({ searchParams }) {
  

  // Fetch posts server-side
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">

      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 relative z-10">

        {/* Page Header */}
        <PageHeaderSection props={pageHeaderProps} />

        {/* BlogContent */}
        <Suspense fallback={<div className="py-6 text-center text-sm text-neutral-500">Loading posts…</div>}>
          <BlogClient posts={posts} />
        </Suspense>
        

        {/* Footer */}
        <FooterSection />
      </div>
    </div>

  );
}