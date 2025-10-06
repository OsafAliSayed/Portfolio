'use client';

import { motion } from 'framer-motion';
import Icons from './icons';
import { useState } from 'react';

export default function ReviewsSection() {
  // Store expanded review states
  const [expandedReviews, setExpandedReviews] = useState({});

  // Toggle a specific review's expanded state
  const toggleReviewExpansion = (reviewId) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const reviews = [
    {
      id: 1,
      name: 'Kenny Joseph',
      title: '',
      company: 'Cryptodashboard - Upwork',
      rating: 5,
      review: 'Great work from Osaf. He did the project exactly as requested',
      date: 'August 2025'
    },
    {
      id: 2,
      name: 'Carl Johan Larrson',
      title: '',
      company: 'Upwork',
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
          className={`w-4 h-4 ${i < rating ? 'text-secondary' : 'text-foreground/30'}`}
        />
      );
    }
    return (
      <div className="flex items-center gap-1">
        {stars}
      </div>
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-start mb-4 text-foreground">
          Reviews
        </h2>
        <p className="text-start text-foreground/70">
          Feedback from clients and collaborators on my work and professional engagements.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 mt-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={item}
              className="relative"
            >
              <motion.div className="bg-transparent rounded-r-lg">
                <div className="mb-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-start min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                        {review.name}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/60">
                        {review.title && `${review.title} at `}{review.company}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        {renderRating(review.rating)}
                        <span className="text-sm text-foreground/60">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Text - Only show if review exists */}
                {review.review && (
                  <div className="mt-4">
                    <div className="relative">
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {expandedReviews[review.id] || review.review.length <= 200 
                          ? review.review 
                          : review.review.substring(0, 200) + '...'}
                      </p>
                      {review.review.length > 200 && (
                        <button 
                          onClick={() => toggleReviewExpansion(review.id)}
                          className="text-sm text-secondary hover:text-secondary/80 font-medium mt-2 focus:outline-none"
                        >
                          {expandedReviews[review.id] ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}