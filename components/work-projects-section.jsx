// filepath: d:\03_Projects\08_Portfolio\components\work-projects-section.jsx
'use client';


import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import '@/app/components/experience-styles.css';

export default function WorkProjectsSection() {
  const [activeTab, setActiveTab] = useState('work');
  // Match header.jsx nav active styling
  const tabClass = (tab) =>
    `px-7 py-1 w-[50%] text-sm rounded-md transition-all font-medium ${
      activeTab === tab
        ? 'bg-primary/10 text-primary' // active tab
        : 'text-muted-foreground hover:text-foreground' // inactive tab
    }`;

  const work = [
    {
      title: 'Software Developer Intern',
      company: 'Zenduty',
      logo: '/images/experience/zenduty_logo.jpg',
      period: 'Jan 2025 - Present',
      description: [
        
        'Minimized database hits through query optimization, improving API response times by 75%.',
        'Developed reusable Ant Design components to display key data for sales and technical teams.',
        'Built serializers, viewsets and endpoints powering 10+ interactive dashboard features.',
        'Created a custom scheduler to run tests sequentially and parallelly, reducing the overall runtime by 60%.',
        'Enhanced Zenduty website reliability by developing a comprehensive PyTest and Cypress suite. Used daily by 8+ developers and QA engineers for code validation.',
      ]
    },
    {
      title: 'Python Developer Intern',
      company: 'Algo Financials',
      logo: '/images/experience/algofinancials_logo.jpg',
      period: 'Dec 2023 - Mar 2024',
      description: [
        'Launched an asynchronous API utilizing FastAPI and MongoDB, accelerating data processing speeds by 90% compared to previous synchronous systems, reducing server latency by 30 milliseconds.',
        'Established seamless connectivity between FastAPI and MongoDB using Pydantic and Beanie.',
        'Implemented 15 new API endpoints, controller and services for enhanced data querying capabilities.',
        'Orchestrated the refactoring of order history storage using Redis, accelerating query response times by 75% and enabling faster retrieval of customer purchase information for support teams.'
      ]
    }
  ];

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

  const hoverEffect = {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    whileTap: { y: 0 }
  };

  return (
    <section className="pt-20 pb-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-fit mx-auto"
      >
        <div className="w-full flex gap-2 mb-8">
          <button className={tabClass('work')} onClick={() => setActiveTab('work')}>Work</button>
          <button className={tabClass('projects')} onClick={() => setActiveTab('projects')}>Projects</button>
        </div>
        <div className="space-y-8 max-w-2xl mx-auto">
          {activeTab === 'work' && work.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeInUp}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary card-glossy w-full">
                <CardContent className="p-0">
                  <div className="p-6 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center">
                      <div className="relative w-12 h-12 flex-shrink-0 company-logo-container">
                        <Image
                          src={item.logo}
                          alt={item.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-grow text-left">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <div className="text-muted-foreground text-sm flex items-center">
                          <span>{item.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 list-disc pl-5 text-muted-foreground mb-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="experience-item">{desc}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          {activeTab === 'projects' && projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              variants={fadeInUp}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary card-glossy w-full">
                <CardContent className="p-0">
                  <div className="p-6 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row gap-4 mb-2 items-center">
                      <div className="flex-grow text-left">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <div className="text-muted-foreground text-sm mb-2">{project.description}</div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4 items-center mt-2">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary underline text-xs font-medium">GitHub</a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-primary underline text-xs font-medium">Live</a>
                          )}
                          {project.status && (
                            <span className="text-xs text-muted-foreground">{project.status}</span>
                          )}
                        </div>
                      </div>
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
