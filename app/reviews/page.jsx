import { reviews } from '@/lib/constants';
import Icons from '@/components/icons';
import Navbar from '@/components/navbar';

export default function ReviewsPage() {
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icons.Star
          key={i}
          className={`w-3 h-3 ${
            i < rating ? "text-yellow-500" : "text-neutral-800"
          }`}
        />
      );
    }
    return <div className="flex items-center gap-0.5">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Reviews</h1>
          <p className="text-neutral-500 text-sm mb-6">
            What clients and colleagues have said about working with me. These reviews reflect my commitment to delivering quality work and building strong professional relationships.
          </p>
        </div>

        
        {/* Reviews List */}
        <div className="space-y-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative border-l border-white/10 pl-8 ml-2"
            >

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <div>
                  <h2 className="text-white font-medium text-base flex items-center gap-2">
                    {review.name}
                    {renderRating(review.rating)}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {review.company}
                  </p>
                </div>
                <span className="text-xs text-neutral-600 font-mono mt-2 sm:mt-0">{review.date}</span>
              </div>

              {/* Review content */}
              {review.review ? (
                <blockquote className="text-xs text-neutral-400 leading-relaxed italic mb-4">
                  &quot;{review.review}&quot;
                </blockquote>
              ) : (
                <p className="text-xs text-neutral-600 italic mb-4">
                  No written review provided
                </p>
              )}
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
        <footer className="py-10 text-center text-neutral-700 text-xs mt-20">
          <p>© 2025 Osaf Ali Sayed.</p>
        </footer>
      </div>
    </div>
  );
}
