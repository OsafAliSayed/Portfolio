'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import '@/app/components/experience-styles.css';

export default function EducationSection() {
  const education = {
    institution: 'Indian Institute of Information Technology, Pune',
    degree: 'B.Tech in CSE',
    period: '2021 - 2025',
    gpa: '7.95'
  };

  const achievements = [
    'Participated in multiple hackathons and coding competitions',
    'Secured top positions in collegiate technical events',
    'Completed various online courses and certifications in specialized areas'
  ];

  const hoverEffect = {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    whileTap: { y: 0 }
  };

  return (
    <section className=" pt-20 pb-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex flex-col max-w-2xl gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary card-glossy">
              <CardContent className="p-0">
                <div className="p-6 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 flex-shrink-0 company-logo-container flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold ml-3">Education</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">{education.institution}</h4>
                  <p className="text-text-dark mb-1">{education.degree}</p>
                  
                  <div className="flex items-center text-sm text-text-dark mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{education.period}</span>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    CGPA: {education.gpa}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={hoverEffect.whileHover}
            whileTap={hoverEffect.whileTap}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary card-glossy">
              <CardContent className="p-0">
                <div className="p-6 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="relative w-10 h-10 flex-shrink-0 company-logo-container flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold ml-3">Achievements</h3>
                  </div>
                  
                  <ul className="space-y-4 mt-4">
                    {achievements.map((achievement, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start experience-item"
                      >
                        <div className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <span className="text-text-dark">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}