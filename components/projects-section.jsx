'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import '@/app/components/project-styles.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'AI Kaatib',
      description: 'AI-based bulk blog writing tool that automates content creation for blogs and websites. Generates SEO-optimized articles at scale.',
      technologies: ['Next.js', 'OpenAI API', 'Supabase', 'Django', 'Django REST Framework', 'PyTest', 'Docker', 'AWS'],
      github: 'https://github.com/osafalisayed/aikaatib',
      live: null,
      status: 'Coming Soon',
      thumbnail: '/images/projects/aikaatib-combined.png',
      images: [
        '/images/projects/aikaatib-combined.png',
        '/images/projects/aikaatib-pc.png',
        '/images/projects/aikaatib-phone.png'
      ],
      longDescription: 'AI Kaatib is a powerful AI-based blog writing tool that automates content creation for blogs and websites. It leverages advanced language models to generate SEO-optimized articles at scale, making it an essential tool for content creators, marketers, and website owners. The platform offers customization options for tone, style, and target audience, ensuring each piece is tailored to specific needs.'
    },
    {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/cryptodash',
      live: null,
      thumbnail: '/images/projects/cryptodash-pc.png',
      images: [
        '/images/projects/cryptodash-combined.png',
        '/images/projects/cryptodash-pc.png',
        '/images/projects/cryptodash-phone.png'
      ],
      longDescription: 'GSorcerer is a specialized tool designed to help developers easily navigate and find suitable Google Summer of Code (GSoC) issues and projects. It simplifies the process of searching and filtering projects based on programming languages, difficulty levels, and organizations. The tool integrates with the GitHub API to provide real-time updates on available issues and projects, making it easier for aspiring GSoC participants to find the perfect match for their skills and interests.'
    },
    {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/cryptodash',
      live: null,
      thumbnail: '/images/projects/cryptodash-phone.png',
      images: [
        '/images/projects/cryptodash-combined.png',
        '/images/projects/cryptodash-pc.png',
        '/images/projects/cryptodash-phone.png'
      ],
      longDescription: 'GSorcerer is a specialized tool designed to help developers easily navigate and find suitable Google Summer of Code (GSoC) issues and projects. It simplifies the process of searching and filtering projects based on programming languages, difficulty levels, and organizations. The tool integrates with the GitHub API to provide real-time updates on available issues and projects, making it easier for aspiring GSoC participants to find the perfect match for their skills and interests.'
    },
     {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/cryptodash',
      live: null,
      thumbnail: '/images/projects/cryptodash-phone.png',
      images: [
        '/images/projects/cryptodash-combined.png',
        '/images/projects/cryptodash-pc.png',
        '/images/projects/cryptodash-phone.png'
      ],
      longDescription: 'GSorcerer is a specialized tool designed to help developers easily navigate and find suitable Google Summer of Code (GSoC) issues and projects. It simplifies the process of searching and filtering projects based on programming languages, difficulty levels, and organizations. The tool integrates with the GitHub API to provide real-time updates on available issues and projects, making it easier for aspiring GSoC participants to find the perfect match for their skills and interests.'
    },
     {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/cryptodash',
      live: null,
      thumbnail: '/images/projects/cryptodash-pc.png',
      images: [
        '/images/projects/cryptodash-combined.png',
        '/images/projects/cryptodash-pc.png',
        '/images/projects/cryptodash-phone.png'
      ],
      longDescription: 'GSorcerer is a specialized tool designed to help developers easily navigate and find suitable Google Summer of Code (GSoC) issues and projects. It simplifies the process of searching and filtering projects based on programming languages, difficulty levels, and organizations. The tool integrates with the GitHub API to provide real-time updates on available issues and projects, making it easier for aspiring GSoC participants to find the perfect match for their skills and interests.'
    },
     {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/cryptodash',
      live: null,
      thumbnail: '/images/projects/cryptodash-combined.png',
      images: [
        '/images/projects/cryptodash-combined.png',
        '/images/projects/cryptodash-pc.png',
        '/images/projects/cryptodash-phone.png'
      ],
      longDescription: 'GSorcerer is a specialized tool designed to help developers easily navigate and find suitable Google Summer of Code (GSoC) issues and projects. It simplifies the process of searching and filtering projects based on programming languages, difficulty levels, and organizations. The tool integrates with the GitHub API to provide real-time updates on available issues and projects, making it easier for aspiring GSoC participants to find the perfect match for their skills and interests.'
    },
     {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/cryptodash',
      live: null,
      thumbnail: '/images/projects/cryptodash-combined.png',
      images: [
        '/images/projects/cryptodash-combined.png',
        '/images/projects/cryptodash-pc.png',
        '/images/projects/cryptodash-phone.png'
      ],
      longDescription: 'GSorcerer is a specialized tool designed to help developers easily navigate and find suitable Google Summer of Code (GSoC) issues and projects. It simplifies the process of searching and filtering projects based on programming languages, difficulty levels, and organizations. The tool integrates with the GitHub API to provide real-time updates on available issues and projects, making it easier for aspiring GSoC participants to find the perfect match for their skills and interests.'
    },
    {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/cryptodash',
      live: null,
      thumbnail: '/images/projects/cryptodash-combined.png',
      images: [
        '/images/projects/cryptodash-combined.png',
        '/images/projects/cryptodash-pc.png',
        '/images/projects/cryptodash-phone.png'
      ],
      longDescription: 'GSorcerer is a specialized tool designed to help developers easily navigate and find suitable Google Summer of Code (GSoC) issues and projects. It simplifies the process of searching and filtering projects based on programming languages, difficulty levels, and organizations. The tool integrates with the GitHub API to provide real-time updates on available issues and projects, making it easier for aspiring GSoC participants to find the perfect match for their skills and interests.'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto relative"
      >
        {/* Background decorative elements */}
        <div className="absolute -z-10 top-40 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -z-10 bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -z-10 top-60 right-10 w-24 h-24 border border-primary/10 rounded-full" />
        <div className="absolute -z-10 bottom-40 left-10 w-16 h-16 border border-primary/20 rounded-full" />
        
        {/* Bento grid layout for projects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[160px]">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className={`cursor-pointer ${
                    // Bento grid layout pattern based on index - exact match to the attached image
                    index % 5 === 0 ? 'md:col-span-12 md:row-span-3' :
                    index % 5 === 1 ? 'md:col-span-8 md:row-span-2' : // Top right rectangle
                    index % 5 === 2 ? 'md:col-span-4 md:row-span-2' : // Middle left rectangle (actually third item)
                    index % 5 === 3 ? 'md:col-span-4 md:row-span-2' : // Middle right square (actually fourth item)
                    index % 5 === 4 ? 'md:col-span-8 md:row-span-2' : // Bottom large rectangle
                    'md:col-span-8 md:row-span-2' // Fallback for any additional items
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="h-full overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md relative group">
                    <div className="w-full h-full overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-white line-clamp-1">{project.title}</h3>
                            {project.status && (
                              <span className="px-2 py-0.5 bg-primary/30 text-white rounded-full text-xs font-medium whitespace-nowrap ml-2">
                                {project.status}
                              </span>
                            )}
                          </div>
                          
                          <p className="text-white/90 text-sm line-clamp-2 mb-3">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 2).map(tech => (
                              <span key={tech} className="inline-block px-2 py-0.5 bg-white/20 text-white rounded-md text-xs backdrop-blur-sm">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="inline-block px-2 py-0.5 bg-white/20 text-white rounded-md text-xs backdrop-blur-sm">
                                +{project.technologies.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-5xl md:max-w-6xl lg:max-w-7xl p-0 overflow-hidden" showX={false}>
                <DialogClose className="absolute right-6 top-6 rounded-full w-10 h-10 flex items-center justify-center bg-background/90 hover:bg-background shadow-md z-10">
                  <X className="h-5 w-5" />
                </DialogClose>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left section - Project details */}
                  <div className="p-6 flex flex-col h-full overflow-y-auto max-h-[85vh] hide-scrollbar">
                    <DialogHeader>
                      <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold">{project.title}</h2>
                        {project.status && (
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                            {project.status}
                          </span>
                        )}
                      </div>
                    </DialogHeader>
                    
                    <div className="mt-8">
                      <h3 className="text-base font-medium text-muted-foreground mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map(tech => (
                          <span key={tech} className="inline-block px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-base font-medium text-muted-foreground mb-3">Description</h3>
                      <p className="text-base leading-relaxed text-foreground mb-8">
                        {project.longDescription || project.description}
                      </p>
                      
                      <div className="flex space-x-5 mt-auto pt-6">
                        <Button variant="outline" size="default" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                          </a>
                        </Button>
                        
                        {project.live && (
                          <Button size="default" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-5 w-5" />
                              View Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right section - Project images */}
                  <div className="bg-muted/30 flex flex-col h-full max-h-[85vh] overflow-y-auto hide-scrollbar">
                    {project.images && project.images.length > 0 ? (
                      <div className="w-full p-6">
                        <div className="grid grid-cols-1 gap-8 w-full">
                          {project.images.map((image, imageIndex) => (
                            <div 
                              key={imageIndex} 
                              className="w-full rounded-lg overflow-hidden shadow-lg"
                            >
                              <img 
                                src={image} 
                                alt={`${project.title} preview ${imageIndex + 1}`}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full w-full">
                        <p className="text-muted-foreground">Images coming soon</p>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </motion.div>
    </section>
  );
}