"use client";

import Icons from "./icons";
import { MouseFollowTooltip } from "@/components/ui/tooltip";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Javeed Yara",
      company: "Software Development Engineer - Xurrent",
      rating: 5,
      review: `
      I had the pleasure of working with Osaf, and I can confidently say he exceeded every expectation. He is extremely smart, curious, and consistently punctual. An absolute gem to work with.

      During our engagement, he contributed far beyond his role:

        Built complete test pipelines for both the frontend and backend from scratch, robust, clean, and reliable.

        Demonstrated deep understanding of asynchronous systems and implemented solutions 
        that were efficient and well-architected.

        Showed excellent backend engineering skills, especially in Django.
        
        Created automation scripts to streamline frontend workflows, including automated
        tag-adding tools that saved our team significant time.

        Writes excellent documentation. In fact, when he first joined us as an intern, 
        we tasked him with fixing the backend setup documentation (which had several issues, especially around PostgreSQL). 
        He handled it meticulously and improved the onboarding process for every future developer.

        He is proactive, communicates clearly, and brings a problem-solving mindset to every task. 
        Truly a standout engineer with a bright future ahead. I’d work with him again without hesitation.
      `,
      date: "December 2025",
    },
    {
      id: 2,
      name: "Steve Rose",
      company: "JailWatch Pro - Upwork",
      rating: 5,
      review:
        `I hired Osaf for a few small Django site updates, and he ended up improving much more than expected. 
        He proactively fixed layout and content issues, cleaned up templates, and modernized the site overall. 
        He worked in the CST timezone, which made communication smooth and quick. He delivers clean, professional 
        results without needing constant direction. Fast, responsive, and easy to work with - will definitely hire again.`,
      date: "December 2025",
    },
    {
      id: 3,
      name: "Kenny Joseph",
      company: "Cryptodashboard - Upwork",
      rating: 5,
      review: "Great work from Osaf. He did the project exactly as requested.",
      date: "August 2025",
    },
    {
      id: 4,
      name: "Carl Johan Larrson",
      company: "Mock Service in Supabase - Upwork",
      rating: 5,
      date: "September 2025",
    },
  ];

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
    <section id="reviews" className="mb-10 scroll-mt-24">
      <h2 className="text-base font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
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
