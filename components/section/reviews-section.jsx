"use client";

import Link from 'next/link';
import Icons from "../icons";
import { MouseFollowTooltip } from "@/components/ui/tooltip";
import { reviews } from "@/lib/constants";

export default function ReviewsSection() {
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

  // Show only the first 3 reviews in the section
  const displayedReviews = reviews.slice(0, 4);

  return (
    <section id="reviews" className="mb-10 scroll-mt-24">
      <h2 className="text-base font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedReviews.map((review) => (
          <MouseFollowTooltip
            key={review.id}
            content={review.review || ""}
            showCondition={() => review.review && review.review.length > 40}
            className="p-4 bg-[#0a0a0a] border border-white/10 hover:border-white/50 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {renderRating(review.rating)}

            <div className="flex flex-col flex-grow">
              {review.review ? (
                <>
                  {/* Mobile: Show full review */}
                  <p className="text-xs text-neutral-400 leading-relaxed italic mt-3 md:hidden">
                    &quot;{review.review}&quot;
                  </p>
                  {/* Desktop: Show truncated review */}
                  <p className="text-xs text-neutral-400 leading-relaxed italic mt-3 hidden md:block">
                    &quot;{review.review.length > 50 ? `${review.review.substring(0, 40)}...` : review.review}&quot;
                  </p>
                </>
              ) : (
                <p className="text-xs text-neutral-600 italic mt-3">
                  No written review provided
                </p>
              )}

              <div className="pt-3">
                <h3 className="text-sm font-medium text-white mb-0.5">
                  {review.name}
                </h3>
                <p className="text-xs text-neutral-500">{review.company}</p>
              </div>
            </div>
          </MouseFollowTooltip>
        ))}
      </div>
    </section>
  );
}