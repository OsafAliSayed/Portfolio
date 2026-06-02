import { getAllCaseStudies } from '@/lib/case-studies';
import Navbar from '@/components/ui/navbar';
import FooterSection from '@/components/common/footer';
import PageHeaderSection from '@/components/common/page-header';
import CaseStudiesClient from '@/components/case-studies/case-studies-client';
import { Suspense } from 'react';

export const metadata = {
  title: 'Case Studies — Osaf Ali Sayed',
  description:
    'In-depth case studies on software projects, system design decisions, and technical challenges I have solved.',
  keywords: [
    'Case Studies',
    'Osaf Ali Sayed',
    'Software Development',
    'System Design',
    'Web Development',
    'Technical Projects',
    'Engineering',
  ],
  metadataBase: new URL('https://www.osafalisayed.com'),
  alternates: {
    canonical: 'https://www.osafalisayed.com/case-studies/',
  },
  openGraph: {
    title: 'Case Studies — Osaf Ali Sayed',
    description:
      'In-depth case studies on software projects, system design decisions, and technical challenges I have solved.',
    url: 'https://www.osafalisayed.com/case-studies',
    siteName: 'Osaf Ali Sayed',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://www.osafalisayed.com/favicon.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies — Osaf Ali Sayed',
    description:
      'In-depth case studies on software projects, system design decisions, and technical challenges I have solved.',
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
  title: "Case Studies",
  description: "In-depth looks at projects, decisions, and technical challenges."
}

export default async function CaseStudiesPage() {
  const posts = getAllCaseStudies();

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

        {/* Case Studies List */}
        <Suspense fallback={<div className="py-6 text-center text-sm text-neutral-500">Loading case studies…</div>}>
          <CaseStudiesClient posts={posts} />
        </Suspense>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
