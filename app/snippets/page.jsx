import Navbar from "@/components/ui/navbar";
import ContactCTA from "@/components/common/contact-cta";
import FooterSection from "@/components/common/footer";
import PageHeaderSection from "@/components/common/page-header";
import Snippets from "@/components/snippets/snippets";

export const metadata = {
  title: 'Snippets — Osaf Ali Sayed',
  description:
    'Essential pieces of code for specific use cases — React components, GitHub Actions, automation scripts, and more.',
  keywords: [
    'Code Snippets',
    'Osaf Ali Sayed',
    'React Components',
    'GitHub Actions',
    'Automation',
    'Scripts',
    'Python',
    'Next.js',
  ],
  openGraph: {
    title: 'Snippets — Osaf Ali Sayed',
    description:
      'Essential pieces of code for specific use cases — React components, GitHub Actions, automation scripts, and more.',
    url: 'https://osafalisayed.com/snippets',
    siteName: 'Osaf Ali Sayed',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/favicon.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snippets — Osaf Ali Sayed',
    description:
      'Essential pieces of code for specific use cases — React components, GitHub Actions, automation scripts, and more.',
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

const SnippetsHeader = {
    title: "Snippets",
    description: "Few essential pieces of code that may come in handy for a very specific use case. It can be a Component, Github Action, Automation, Scripts etc."
}

export default function SnippetsPage() {

    return (
        <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
            {/* Grid background */}
            <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
            <Navbar activeLabel="Snippets" />
            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-6 pt-32 relative z-10">
                {/* Page Header */}
                <PageHeaderSection props={SnippetsHeader} />

                <Snippets />
                {/* Contact CTA */}
                <ContactCTA />
                {/* Footer */}
                <FooterSection />
            </div>
        </div>
    );
}