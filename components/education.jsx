'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Icons from './icons';

export default function EducationSection() {
  const [openCoursework, setOpenCoursework] = useState({});

  const educationList = [
    {
      id: 1,
      institution: 'Indian Institute of Information Technology, Pune',
      degree: 'B.Tech in Computer Science and Engineering',
      period: '2021 - 2025',
      gpa: '7.95 CGPA',
      logo: '/images/education/iiitpune.png', // Using Python logo as placeholder for IIIT logo
      coursework: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Machine Learning',
        'Computer Graphics',
        'Distributed Systems',
        'Artificial Intelligence',
        'Compiler Design',
        'Discrete Structures',
        'C Programming',
        'Java Programming'
      ]
    },
    {
      id: 2,
      institution: 'Harvard University',
      degree: 'CS50 Web: Programming with Python and JavaScript',
      period: '2022',
      gpa: 'Certificate',
      logo: '/images/education/harvarduniversity.png',
      coursework: [
        'Python Web Development',
        'Django Framework',
        'JavaScript ES6+',
        'React.js',
        'HTML5 and CSS3',
        'SQL and Database Design',
        'Git and Version Control',
        'User Interface Design',
        'Testing and Debugging',
        'Deployment and Scalability'
      ]
    },
    {
      id: 3,
      institution: 'Harvard University',
      degree: 'CS50: Introduction to Computer Science',
      period: '2021',
      gpa: 'Certificate',
      logo: '/images/education/harvarduniversity.png',
      coursework: [
        'Introduction to Programming',
        'Algorithms and Data Structures',
        'Memory Management',
        'Web Development Basics',
        'SQL and Databases',
        'Python Programming',
        'C Programming',
        'JavaScript Fundamentals',
        'HTML and CSS',
        'Problem Solving Techniques'
      ]
    },
    
  ];

  const toggleCoursework = (educationId) => {
    setOpenCoursework(prev => ({
      ...prev,
      [educationId]: !prev[educationId]
    }));
  };

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

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='mb-6'
      >
        <h2 className="font-bold text-start mb-4 text-foreground">
          Education and Certifications
        </h2>
        <p className="text-start text-foreground/70">
          My academic journey in Computer Science and Engineering.
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
          {educationList.map((education) => (
            <motion.div
              key={education.id}
              variants={item}
              className="relative"
            >
              <motion.div className="bg-transparent rounded-r-lg">
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Institution logo */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white border-2 border-white/10 flex-shrink-0 self-start flex items-center justify-center">
                      <Image
                        src={education.logo}
                        alt={education.institution}
                        width={80}
                        height={80}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-start min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {education.institution}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/60">
                        {education.degree}
                      </p>
                      <p className="text-sm sm:text-base text-foreground/60">
                        {education.period}
                      </p>
                      <p className="text-sm sm:text-base text-foreground/60 font-medium">
                        {education.gpa}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coursework Dropdown */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleCoursework(education.id)}
                    className="flex items-center gap-2 text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-200"
                  >
                    <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openCoursework[education.id] ? 'rotate-180' : ''}`} />
                    <span className="font-medium">Relevant Coursework</span>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openCoursework[education.id] ? 'auto' : 0,
                      opacity: openCoursework[education.id] ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4">
                      <ul className="space-y-2">
                        {education.coursework.map((course, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ 
                              opacity: openCoursework[education.id] ? 1 : 0, 
                              y: openCoursework[education.id] ? 0 : -10 
                            }}
                            transition={{ 
                              duration: 0.2, 
                              delay: openCoursework[education.id] ? idx * 0.05 : 0 
                            }}
                            className="text-sm sm:text-base text-foreground/70 leading-relaxed"
                          >
                            {course}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}