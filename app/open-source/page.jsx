import Navbar from '@/components/ui/navbar';
import Image from 'next/image';
import Link from 'next/link';
import highlightKeywords from '@/lib/highlight-utils';
import Icons from '@/components/ui/icons';
import { contributions } from '@/lib/constants';
import PageHeaderSection from '@/components/common/page-header';
import FooterSection from '@/components/common/footer';

export const metadata = {
  title: 'Open Source — Osaf Ali Sayed',
  description:
    'Contributing to the developer community by solving real problems and improving tools that developers use every day.',
  keywords: [
    'Open Source',
    'Osaf Ali Sayed',
    'Contributions',
    'GitHub',
    'Developer Community',
    'Frappe',
    'Wagtail',
    'Python',
  ],
  openGraph: {
    title: 'Open Source — Osaf Ali Sayed',
    description:
      'Contributing to the developer community by solving real problems and improving tools that developers use every day.',
    url: 'https://osafalisayed.com/open-source',
    siteName: 'Osaf Ali Sayed',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/favicon.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Source — Osaf Ali Sayed',
    description:
      'Contributing to the developer community by solving real problems and improving tools that developers use every day.',
    creator: '@sayedosafali',
    images: ['/favicon.jpeg'],
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

const OpenSourceHeaders = {
  title: "Open Source",
  description: "Contributing to the developer community by solving problems and improving tools that developers use every day."
}

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar activeLabel="Open Source" />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 relative z-10">
        {/* Header */}
        <PageHeaderSection props={OpenSourceHeaders} />
        
        {/* Contributions List */}
        <div className="space-y-10 mb-10">
          {contributions.map((contribution) => (
            <div key={contribution.id} className="relative mt-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl">

              {/* Logo — half outside top border */}
              <div className="absolute -top-6 left-5 z-10">
                <div className="w-12 h-12 rounded-full ring-[3px] ring-[rgb(12,12,12)] overflow-hidden bg-white">
                  <Image
                    src={contribution.logo}
                    alt={contribution.company}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="px-5 pb-5 pt-10">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link
                      href={contribution.link}
                      target="_blank"
                      // onClick={(e) => e.stopPropagation()}
                      className="text-white font-semibold text-base tracking-tight flex items-center gap-2 hover:text-secondary transition-colors"
                    >
                      {contribution.title}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        {contribution.status}
                      </span>
                    </Link>
                    <p className="text-xs text-neutral-500 italic mt-0.5">{contribution.description}</p>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono shrink-0 hidden sm:block">{contribution.date}</span>
                </div>

                {/* Details */}
                <div className="border-t border-white/5 pt-4 mt-4 space-y-2">
                  {contribution.list.map((item, idx) => (
                    <p key={idx} className="text-sm text-neutral-400 leading-relaxed">
                      {highlightKeywords(item.text, item.highlights)}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {contribution.technologies.map((tech) => {
                    const IconComponent = Icons[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-sm font-medium bg-white/5 text-neutral-300 border border-white/10"
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 text-secondary" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
