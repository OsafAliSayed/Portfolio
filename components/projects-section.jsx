'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'AI Kaatib',
      description: 'AI-based bulk blog writing tool that automates content creation for blogs and websites. Generates SEO-optimized articles at scale.',
      technologies: ['Next.js', 'OpenAI API', 'Supabase', 'Django', 'Django REST Framework', 'PyTest', 'Docker', 'AWS'],
      github: 'https://github.com/osafalisayed/aikaatib',
      live: null,
      status: 'Coming Soon'
    },
    {
      title: 'GSorcerer',
      description: 'Tool designed to help developers find Google Summer of Code (GSoC) issues and projects. Makes it easier to search and filter suitable projects.',
      technologies: ['JavaScript', 'GitHub API', 'Django', 'Redis'],
      github: 'https://github.com/osafalisayed/gsorcerer',
      live: null
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.status && (
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="inline-block px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      
                      {project.live && (
                        <Button size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}