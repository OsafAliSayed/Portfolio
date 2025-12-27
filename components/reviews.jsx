"use client";

import Icons from "./ui/icons";
import { MouseFollowTooltip } from "@/components/ui/tooltip";
import { reviews } from "@/lib/constants";

function truncateReview(review, sentenceCount = 2) {
  if (!review) return "";
  const sentences = review.split(/[.?!]+/).slice(0, -1);
  if (sentences.length < sentenceCount) {
    return review;
  }

  return sentences.slice(0, sentenceCount).join(".") + (sentences.length > sentenceCount ? "..." : ".");
}

export default function ReviewsSection() {
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icons.Star
          key={i}
          className={`w-3 h-3 transition-all duration-200 ${i < rating ? "text-white group-hover:text-secondary" : "text-neutral-800 group-hover:text-secondary-800"
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
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Featured Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedReviews.map((review) => (
          <MouseFollowTooltip
            key={review.id}
            content={review.review || ""}
            showCondition={() => review.review && review.review.length > 40}
            className="group p-4 bg-[#0a0a0a] border border-white/10 hover:border-secondary transition-all duration-2F00 flex flex-col "
          >
            {renderRating(review.rating)}

            <div className="flex flex-col flex-grow">


              <div className="pt-3  ">
                <h3 className="text-sm font-medium text-white mb-0.5">
                  {review.name}
                </h3>
                <p className="text-xs text-neutral-500">{review.company}</p>
              </div>

              {review.review ? (
                <>
                  {/* Desktop: Show truncated review */}
                  <p className="text-xs text-neutral-400 leading-relaxed italic">
                    {truncateReview(review.review)}
                  </p>
                </>
              ) : (
                <p className="text-xs text-neutral-600 italic mt-3">
                  No written review provided
                </p>
              )}
            </div>
          </MouseFollowTooltip>
        ))}
      </div>
    </section>
  );
}