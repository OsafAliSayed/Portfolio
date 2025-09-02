'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function ExperienceSection() {
  const experiences = [
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const hoverEffect = {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    whileTap: { y: 0 }
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              whileHover={hoverEffect.whileHover}
              whileTap={hoverEffect.whileTap}
            >
              <Card className="overflow-hidden border-l-4 border-l-primary card-glossy">
                <CardContent className="p-0">
                  <div className="p-6 backdrop-blur-sm">                      <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className="relative w-12 h-12 flex-shrink-0 company-logo-container">
                        <Image
                          src={experience.logo}
                          alt={experience.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-grow text-left">
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <div className="flex items-center text-text-dark">
                          <Building2 className="h-4 w-4 mr-1" />
                          <span>{experience.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-text-dark">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 list-disc pl-5 text-text-dark">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="experience-item">{item}</li>
                      ))}
                    </ul>
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