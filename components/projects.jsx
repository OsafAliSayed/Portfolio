'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Icons from './icons';
import  highlightKeywords from '../lib/highlight-utils';

export default function ProjectsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      id: 1,
      title: "AI Kaatib",
      description: "An intelligent AI-powered writing assistant that helps users create compelling content with advanced natural language processing.",
      image: "/images/projects/aikaatib-pc.png",
      additionalImages: [
        "/images/projects/aikaatib-combined.png",
        "/images/projects/aikaatib-phone.png"
      ],
      techStack: ["JavaScript", "Next.js", "TailwindCSS", "Django", "Django REST Framework", "PostgreSQL", "AWS", "OpenAI", "PyTest"],
      repoUrl: "https://github.com/OsafAliSayed/ai-kaatib",
      description: [
        {
          text: "Generates 100+ SEO-ready blogs in under 5 minutes using OpenAI APIs.",
          highlights: ["100+", "SEO-ready", "OpenAI APIs"]
        },
        {
          text: "Engineered a scalable backend with Django and a high-performance frontend with Next.js (40% faster SSR).",
          highlights: ["Django", "Next.js", "40% faster SSR"]
        },
        {
          text: "Deployed via Docker and GitHub Actions, cutting release time by 70%.",
          highlights: ["Docker", "GitHub Actions", "70%"]
        },
        {
          text: "Achieved 95% test coverage with PyTest; integrated linting for code quality.",
          highlights: ["95%", "PyTest", "linting"]
        }
      ],
    },
    {
      id: 2,
      title: "CryptoDash",
      description: "A comprehensive cryptocurrency dashboard providing real-time market data, portfolio tracking, and advanced analytics.",
      image: "/images/projects/cryptodash-pc.png",
      additionalImages: [
        "/images/projects/cryptodash-combined.png",
        "/images/projects/cryptodash-phone.png"
      ],
      techStack: ["JavaScript (ES6+)", "ShadCN UI", "Supabase", "CoinGecko API", "Chart.js/Recharts", "Electron"],
      repoUrl: "https://github.com/OsafAliSayed/crypto-dashboard",
      description: [
        {
          text: "Authentication: Integrated Supabase email/password authentication with secure Row Level Security (RLS) policies.",
          highlights: ["Supabase", "Row Level Security (RLS)"]
        },
        {
          text: "Live Crypto Data: Connected to the CoinGecko API to fetch and display top 5 cryptocurrencies by market cap with real-time price, logo, 24h % change, and market cap.",
          highlights: ["CoinGecko API", "real-time", "24h % change"]
        },
        {
          text: "Auto-Refresh: Set up live updates every 30 seconds for crypto prices without page reloads.",
          highlights: ["live updates", "30 seconds"]
        },
        {
          text: "Cross-Platform: Packaged as both web app and Electron desktop app (.exe & Linux build) with native-like performance.",
          highlights: ["web app", "Electron", "native-like performance"]
        }
      ],
    }
  ];

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

  const getProjectImages = (project) => {
    return [project.image, ...project.additionalImages];
  };

  const getCurrentImageIndex = (projectId) => {
    return currentImageIndex[projectId] || 0;
  };

  const setProjectImageIndex = (projectId, index) => {
    const direction = getSlideDirection(projectId, index);
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: index,
      [`${projectId}_direction`]: direction
    }));
  };

  const handleImageHover = (event, project) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const totalImages = getProjectImages(project).length;
    const sectionWidth = width / totalImages;
    const hoveredIndex = Math.floor(x / sectionWidth);
    
    if (hoveredIndex !== getCurrentImageIndex(project.id) && hoveredIndex >= 0 && hoveredIndex < totalImages) {
      setProjectImageIndex(project.id, hoveredIndex);
    }
  };

  const getSlideDirection = (projectId, newIndex) => {
    const currentIndex = getCurrentImageIndex(projectId);
    return newIndex > currentIndex ? 1 : -1;
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300
    }),
    center: {
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 }
      }
    })
  };

  return (
    <section >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-start mb-4 text-foreground">
          Projects
        </h2>
        <p className="text-start text-foreground/70">
          A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="relative"
            >
              <motion.div className="bg-transparent py-4 rounded-r-lg">
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                  {/* Project image carousel */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative">
                      <div 
                        className="w-full h-auto min-h-[400px] rounded-lg overflow-hidden bg-background border-2 border-white/10 relative cursor-pointer"
                        onMouseMove={(e) => handleImageHover(e, project)}
                      >
                        {/* Invisible hover zones for visual feedback */}
                        <div className="absolute inset-0 z-10 flex">
                          {getProjectImages(project).map((_, index) => (
                            <div
                              key={index}
                              className="flex-1 transition-colors duration-200"
                            />
                          ))}
                        </div>
                        
                        <AnimatePresence initial={false} custom={currentImageIndex[`${project.id}_direction`] || 1}>
                          <motion.div
                            key={`${project.id}-${getCurrentImageIndex(project.id)}`}
                            custom={currentImageIndex[`${project.id}_direction`] || 1}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 h-full w-full"
                          >
                            <Image
                              src={getProjectImages(project)[getCurrentImageIndex(project.id)]}
                              alt={`${project.title} - Image ${getCurrentImageIndex(project.id) + 1}`}
                              width={400}
                              height={300}
                              className="w-full h-full object-contain lg:object-cover"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      
                      {/* Dot navigation */}
                      <div className="flex justify-center mt-3 space-x-2">
                        {getProjectImages(project).map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setProjectImageIndex(project.id, index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              getCurrentImageIndex(project.id) === index
                                ? 'bg-blue-400 w-6 shadow-lg shadow-blue-400/30'
                                : 'bg-white/30 hover:bg-white/50 w-2'
                            }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`View image ${index + 1} of ${project.title}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="mb-3">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                        
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-foreground/60 hover:text-foreground/80 font-medium inline-flex items-center group"
                        >
                          {project.repoUrl.replace('https://github.com/', '')}
                          <Icons.ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {project.description.map((description, idx) => (
                            <li key={idx} className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                              {highlightKeywords(description.text, description.highlights)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => {
                        const IconComponent = Icons[tech] || Icons.Code;
                        return (
                          <div
                            key={tech}
                            className="flex items-center space-x-2 px-2 sm:px-3 py-1 rounded-2xl bg-blue-500/10 border-blue-500/20 text-xs font-medium text-blue-400"
                          >
                            <IconComponent className="w-3 h-3" />
                            <span className="text-xs sm:text-xs">{tech}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}