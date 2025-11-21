'use client';

import { useRef } from 'react';
import Icons from './icons';

const ProjectCard = ({ title, desc, tags, imageSrc, videoSrc, link, className }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <a 
      href={link} 
      className={`group relative block overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Layer (Image + Video) */}
      <div className="absolute inset-0 z-0">
        {/* Static Image (Fades out on hover) */}
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-0 transition-opacity duration-500"
        />
        
        {/* Video (Hidden by default, shown on hover) */}
        <video 
          ref={videoRef}
          src={videoSrc}
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        />
        
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white">
             <Icons.Grid3X3 className="w-4 h-4" />
          </div>
          <div className="translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
             <Icons.ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-2">{desc}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="px-2 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Al Kaatib",
      desc: "Automated SEO content engine using OpenAI & Celery.",
      tags: ['Django', 'OpenAI', 'Redis'],
      imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
      videoSrc: "https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4",
      link: "#",
      className: "md:col-span-2 min-h-[280px]"
    },
    {
      title: "CryptoDash",
      desc: "Real-time market tracking with WebSockets.",
      tags: ['Next.js', 'Supabase'],
      imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
      videoSrc: "https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/Stock_Market_01_preview.mp4",
      link: "#",
      className: "min-h-[280px]"
    },
    {
      title: "DevSpace",
      desc: "A social network for developers.",
      tags: ['React', 'GraphQL'],
      imageSrc: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop",
      videoSrc: "https://joy1.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Typing_dark_04_preview.mp4",
      link: "#",
      className: "min-h-[280px]"
    }
  ];

  return (
    <section id="projects" className="mb-20 scroll-mt-24">
      <h2 className="text-sm font-bold text-neutral-100 mb-6 flex items-center gap-2">
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