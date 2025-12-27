'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import highlightKeywords from '@/lib/highlight-utils';
import Icons from '@/components/icons';
import { experiences } from '@/lib/constants';

const   ExperienceTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Debounced hover handlers to prevent flickering
  const handleMouseEnter = useCallback((index) => {
    // Disable hover on touch devices to prevent conflict with click
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;

    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredIndex(index);
  }, [hoverTimeout]);

  const handleMouseLeave = useCallback(() => {
    // Disable hover on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;

    const timeout = setTimeout(() => {
      setHoveredIndex(null);
    }, 100); // 100ms delay to prevent flickering
    setHoverTimeout(timeout);
  }, []);

  // Click handler for touch devices
  const handleClick = useCallback((index) => {
    if (hoveredIndex === index) {
      // If already expanded, collapse it
      setHoveredIndex(null);
    } else {
      // Expand the clicked item
      setHoveredIndex(index);
    }
  }, [hoveredIndex]);

  return (
    <section id="work" className="mb-10 scroll-mt-24">
      <h2 className="text-base font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Experience
      </h2>
      
      <div className="space-y-8  border-l-2 border-white/30 ml-5 pl-5 relative">
        {experiences.map((job, i) => (
          <div 
            key={i} 
            className="relative transition-all duration-400 ease-in-out group flex flex-col justify-between"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          >
            {/* Company logo in timeline dot */}
            <div className="absolute -left-[39px] lg:-left-[43px] w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-neutral-700 flex items-center justify-center">
              <Image
                src={job.logo}
                alt={job.company}
                width={28}
                height={28}
                className={`w-full h-full ${job.company === "Ecomlytix" ? "object-contain p-0.5" : "object-cover"}`}
              />
            </div>
            
            {/* Basic Info (Always Visible) */}
            <div className="pl-3 flex flex-col sm:flex-row sm:items-center justify-between mt-1">
              <h3 className="text-white font-medium text-sm">{job.company}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 font-mono">{job.duration}</span>
                <button
                  type="button"
                  aria-expanded={hoveredIndex === i}
                  aria-controls={`exp-details-${job.id}`}
                  onClick={(e) => { e.stopPropagation(); handleClick(i); }}
                  className="p-1 rounded-md text-neutral-300  hover:bg-neutral-800 transition"
                  title={hoveredIndex === i ? 'Collapse' : 'Expand'}
                >
                  {Icons.ChevronDown && (
                    <Icons.ChevronDown className={`text-neutral-500 w-4 h-4 transition-transform ${hoveredIndex === i ? 'rotate-180' : ''}`} />
                  )}
                </button>
              </div>
            </div>
            <p className="pl-3 text-xs italic mb-1">{job.position}</p>
            
            {/* Expanded Details (Only on Hover) */}
            <div
              id={`exp-details-${job.id}`}
              className={`overflow-hidden transition-all duration-300 ${
                hoveredIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-3 space-y-3">
                {/* Description */}
                <div className="space-y-2">
                  {job.description.map((desc, idx) => (
                    <p key={idx} className="text-xs text-neutral-400 leading-relaxed">
                      • {highlightKeywords(desc.text, desc.highlights)}
                    </p>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {job.technologies.map((tech) => {
                    const IconComponent = Icons[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-2 py-1 text-xs bg-neutral-800 text-neutral-300 border border-neutral-700"
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
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;