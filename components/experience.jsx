"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import highlightKeywords from '@/lib/highlight-utils';
import Icons from '@/components/ui/icons';
import { experiences } from '@/lib/constants';
import SectionHeader from '@/components/ui/section-header';

const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = useCallback((index) => {
    setExpandedIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <section id="work" className="mb-10 scroll-mt-24">
      <SectionHeader>Experience</SectionHeader>

      <div className="space-y-8">
        {experiences.map((job, i) => (
          <div
            key={i}
            className="relative mt-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl cursor-pointer"
            onClick={() => handleClick(i)}
          >
            {/* Logo — half outside the top border */}
            <div className="absolute -top-6 left-5 z-10">
              <div className="w-12 h-12 rounded-full ring-[3px] ring-[rgb(12,12,12)] overflow-hidden bg-white">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={48}
                  height={48}
                  className={`w-full h-full ${job.company === "Ecomlytix" ? "object-contain p-0.5" : "object-cover"}`}
                />
              </div>
            </div>

            {/* Card body */}
            <div className="px-5 pb-5 pt-10">

              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-base tracking-tight">{job.company}</h3>
                  <p className="text-xs text-neutral-500 italic mt-0.5">{job.position}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-neutral-500 font-mono hidden sm:block">{job.duration}</span>
                  <button
                    type="button"
                    aria-expanded={expandedIndex === i}
                    aria-controls={`exp-details-${job.id}`}
                    onClick={(e) => { e.stopPropagation(); handleClick(i); }}
                    className="p-1 rounded-full hover:bg-white/5 transition-colors"
                  >
                    <Icons.ChevronDown className={`text-neutral-500 w-4 h-4 transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Expandable details */}
              <div
                id={`exp-details-${job.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  expandedIndex === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="border-t border-white/5 pt-4 space-y-3">

                    <ul className="space-y-2">
                      {job.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-neutral-400 leading-relaxed">
                          {highlightKeywords(desc.text, desc.highlights)}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.technologies.map((tech) => {
                        const IconComponent = Icons[tech];
                        return (
                          <span
                            key={tech}
                            className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/10"
                          >
                            {IconComponent && <IconComponent className="w-3 h-3 text-secondary" />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;