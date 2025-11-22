'use client';

import Icons from './icons';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Kenny Joseph',
      company: 'Cryptodashboard - Upwork',
      rating: 5,
      review: 'Great work from Osaf. He did the project exactly as requested',
      date: 'August 2025'
    },
    {
      id: 2,
      name: 'Carl Johan Larrson',
      company: 'Mock Service in Supabase - Upwork',
      rating: 5,
      date: 'September 2025'
    }
  ];

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icons.Star 
          key={i} 
          className={`w-3 h-3 ${i < rating ? 'text-yellow-500' : 'text-neutral-800'}`}
        />
      );
    }
    return (
      <div className="flex items-center gap-0.5">
        {stars}
      </div>
    );
  };

  return (
    <section id="reviews" className="mb-10 scroll-mt-24">
      <h2 className="text-sm font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Reviews
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="p-4 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-sm font-medium text-white mb-0.5">
                  {review.name}
                </h3>
                <p className="text-xs text-neutral-500">
                  {review.company}
                </p>
              </div>
              {renderRating(review.rating)}
            </div>

            {review.review && (
              <p className="text-xs text-neutral-400 leading-relaxed italic">
                "{review.review}"
              </p>
            )}
            
            {!review.review && (
              <p className="text-xs text-neutral-600 italic">
                No written review provided
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}