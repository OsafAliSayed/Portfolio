'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icons from '@/components/icons';

const ProjectCard = ({ title, desc, tags, images, link, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToImage = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (index === currentImageIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className={`group relative block overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500 min-h-[280px] ${className || ''}`}>
      {/* Main project link */}
      <a 
        href={link} 
        className="absolute inset-0 z-5"
      >
      </a>

      {/* Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ 
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 h-full w-full"
            >
              <Image 
                src={image} 
                alt={`${title} - Image ${index + 1}`} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      {/* Carousel Controls - Outside the anchor tag */}
      {images.length > 1 && (
        <>
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={(e) => goToImage(index, e)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* External Link Icon - always visible and clickable */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 z-30 flex items-center justify-center w-9 h-9 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-neutral-300 hover:text-white hover:bg-white/20 hover:border-white/30 hover:scale-110 transition-all duration-300"
        aria-label={`Open ${title} project link`}
      >
        <Icons.ExternalLink className="w-4 h-4" />
      </a>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <div className="flex justify-between items-start">
        </div>

        <div className="mt-20">
          <h3 className="text-base font-medium text-white mb-2">{title}</h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">{desc}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const IconComponent = Icons[tag];
              return (
                <span 
                  key={tag} 
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs bg-white/5 border border-white/10 text-neutral-300"
                >
                  {IconComponent && <IconComponent className="w-3 h-3" />}
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Kaatib",
      desc: "Automated SEO content engine using OpenAI & Celery.",
      tags: ['Django', 'Python', 'React'],
      images: [
        "/images/projects/aikaatib-combined.png",
        "/images/projects/aikaatib-pc.png",
        "/images/projects/aikaatib-phone.png"
      ],
      link: "https://www.github.com/osafalisayed/aikaatib"
    },
    {
      title: "CryptoDash",
      desc: "Real-time market tracking with WebSockets.",
      tags: ['NextJs', 'TypeScript', 'React'],
      images: [
        "/images/projects/cryptodash-combined.png",
        "/images/projects/cryptodash-pc.png",
        "/images/projects/cryptodash-phone.png"
      ],
      link: "https://www.github.com/osafalisayed/crypto-dashboard"
    }
  ];

  return (
    <section id="projects" className="mb-20 scroll-mt-24">
      <h2 className="text-base font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Selected Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;