"use client";

import Icons from "./ui/icons";
import Link from "next/link";
import { reviews } from "@/lib/constants";
import SectionHeader from "@/components/ui/section-header";

// Bento span config for up to 4 cards
const BENTO_SPANS = [
  "md:col-span-2", // card 0 — wide
  "md:col-span-1", // card 1
  "md:col-span-1", // card 2
  "md:col-span-2", // card 3 — wide
];

export default function ReviewsSection() {
  const displayedReviews = reviews.slice(0, 4);

  return (
    <section id="reviews" className="mb-10 scroll-mt-24">
      <SectionHeader>Featured Reviews</SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {displayedReviews.map((review, idx) => {
          const reviewSlug = review.name.replace(/\s+/g, "-").toLowerCase();
          const reviewHref = `/reviews/#${reviewSlug}`;
          const span = BENTO_SPANS[idx] ?? "md:col-span-1";

          return (
            <Link
              key={review.id}
              href={reviewHref}
              aria-label={`Read the review from ${review.name}`}
              className={`block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${span}`}
            >
              <div className="h-full rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl hover:-translate-y-1 px-5 py-5 flex flex-col">

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icons.Star
                      key={i}
                      className={`w-4 h-4 transition-colors duration-300 ${
                        i < review.rating ? "text-orange-500 group-hover:text-secondary" : "text-neutral-800"
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <div className="flex-grow mb-4 overflow-hidden">
                  {review.review ? (
                    <p className="text-sm text-neutral-400 leading-relaxed italic line-clamp-6">
                      &ldquo;{review.review.trim()}&rdquo;
                    </p>
                  ) : (
                    <p className="text-xs text-neutral-600 italic">No written review provided</p>
                  )}
                </div>

                {/* Author */}
                <div className="border-t border-white/5 pt-4">
                  <p className="text-sm font-semibold text-white tracking-tight">{review.name}</p>
                  <p className="text-xs text-neutral-500">{review.company}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-3">
        {reviews.length > 4 && (
          <Link
            href="/reviews"
            className="flex items-center justify-between w-full px-5 py-4 rounded-3xl border border-white/10 hover:border-white/20 bg-[rgb(12,12,12)] hover:shadow-lg transition-all duration-300 group"
          >
            <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">View all reviews</span>
            <span className="text-neutral-600 group-hover:text-neutral-300 transition-colors text-sm">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
