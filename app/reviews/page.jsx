import { reviews } from '@/lib/constants';
import Icons from '@/components/ui/icons';
import Navbar from '@/components/ui/navbar';
import PageHeaderSection from '@/components/common/page-header';
import FooterSection from '@/components/common/footer';

export const metadata = {
  title: 'Reviews — Osaf Ali Sayed',
  description:
    'What clients and colleagues have said about working with me. Honest reviews reflecting my commitment to delivering quality work.',
  keywords: [
    'Reviews',
    'Testimonials',
    'Client Feedback',
    'Osaf Ali Sayed',
    'Freelance Developer',
    'Upwork',
  ],
  openGraph: {
    title: 'Reviews — Osaf Ali Sayed',
    description:
      'What clients and colleagues have said about working with me. Honest reviews reflecting my commitment to delivering quality work.',
    url: 'https://osafalisayed.com/reviews',
    siteName: 'Osaf Ali Sayed',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/favicon.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reviews — Osaf Ali Sayed',
    description:
      'What clients and colleagues have said about working with me. Honest reviews reflecting my commitment to delivering quality work.',
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

const ReviewsSectionHeader = {
  title: "Reviews",
  description: "What clients and colleagues have said about working with me. These reviews reflect my commitment to delivering quality work and building strong professional relationships."
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar activeLabel="Reviews" />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 relative z-10">
        {/* Header */}
        <PageHeaderSection props={ReviewsSectionHeader} />
        
        {/* Reviews List */}
        <div className="grid grid-cols-1 gap-3 mb-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl px-5 py-5"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icons.Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-orange-500' : 'text-neutral-800'}`}
                  />
                ))}
              </div>

              {/* Review content */}
              {review.review ? (
                <blockquote className="text-sm text-neutral-400 leading-relaxed italic mb-4">
                  &ldquo;{review.review}&rdquo;
                </blockquote>
              ) : (
                <p className="text-xs text-neutral-600 italic mb-4">No written review provided</p>
              )}

              {/* Author */}
              <div className="border-t border-white/5 pt-4 flex items-end justify-between">
                <div>
                  <p
                    className="text-sm font-semibold text-white tracking-tight"
                    id={`${review.name.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-500">{review.company}</p>
                </div>
                <span className="text-xs text-neutral-600 font-mono shrink-0">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="text-center py-16">
            <Icons.Star className="w-16 h-16 text-neutral-700 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-neutral-400 mb-2">No reviews yet</h2>
            <p className="text-neutral-500">Check back soon for client feedback and testimonials.</p>
          </div>
        )}

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
