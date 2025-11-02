'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Icons from './icons';
import CollapsibleInfo from './ui/collapsible-info';

export default function EducationSection() {
  const [openCoursework, setOpenCoursework] = useState({});

  const educationList = [
    {
      id: 1,
      title: 'IIIT Pune',
      description: 'B.Tech in Computer Science and Engineering',
      period: '2021 - 2025',
      gpa: '7.95 CGPA',
      logo: '/images/education/iiitpune.png', // Using Python logo as placeholder for IIIT logo
      list: [
        {
          text: 'Data Structures and Algorithms',
          highlights: ['Data Structures', 'Algorithms']
        },
        {
          text: 'Object-Oriented Programming',
          highlights: ['Object-Oriented Programming']
        },
        {
          text: 'Database Management Systems',
          highlights: ['Database Management Systems']
        },
        {
          text: 'Computer Networks',
          highlights: ['Computer Networks']
        },
        {
          text: 'Operating Systems',
          highlights: ['Operating Systems']
        },
        {
          text: 'Machine Learning',
          highlights: ['Machine Learning']
        },
        {
          text: 'Computer Graphics',
          highlights: ['Computer Graphics']
        },
        {
          text: 'Distributed Systems',
          highlights: ['Distributed Systems']
        },
        {
          text: 'Artificial Intelligence',
          highlights: ['Artificial Intelligence']
        },
        {
          text: 'Compiler Design',
          highlights: ['Compiler Design']
        },
        {
          text: 'Discrete Structures',
          highlights: ['Discrete Structures']
        },
        {
          text: 'C Programming',
          highlights: ['C Programming']
        },
        {
          text: 'Java Programming',
          highlights: ['Java Programming']
        }
      ]
    },
    {
      id: 2,
      title: 'Harvard University',
      description: 'CS50 Web: Programming with Python and JS',
      period: '2022',
      gpa: 'Certificate',
      logo: '/images/education/harvarduniversity.png',
      list: [
        {
          text: 'Python Web Development',
          highlights: ['Python Web Development']
        },
        {
          text: 'Django Framework',
          highlights: ['Django Framework']
        },
        {
          text: 'JavaScript ES6+',
          highlights: ['JavaScript ES6+']
        },
        {
          text: 'React.js',
          highlights: ['React.js']
        },
        {
          text: 'HTML5 and CSS3',
          highlights: ['HTML5 and CSS3']
        },
        {
          text: 'SQL and Database Design',
          highlights: ['SQL and Database Design']
        },
        {
          text: 'Git and Version Control',
          highlights: ['Git and Version Control']
        },
        {
          text: 'User Interface Design',
          highlights: ['User Interface Design']
        },
        {
          text: 'Testing and Debugging',
          highlights: ['Testing and Debugging']
        },
        {
          text: 'Deployment and Scalability',
          highlights: ['Deployment and Scalability']
        }
      ]
    },
    {
      id: 3,
      title: 'Harvard University',
      description: 'CS50: Introduction to Computer Science',
      period: '2021',
      gpa: 'Certificate',
      logo: '/images/education/harvarduniversity.png',
      list: [
        {
          text: 'Introduction to Programming',
          highlights: ['Introduction to Programming']
        },
        {
          text: 'Algorithms and Data Structures',
          highlights: ['Algorithms and Data Structures']
        },
        {
          text: 'Memory Management',
          highlights: ['Memory Management']
        },
        {
          text: 'Web Development Basics',
          highlights: ['Web Development Basics']
        }
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
              <CollapsibleInfo
                data={education}
                isOpen={!!openCoursework[education.id]}
                onToggle={toggleCoursework}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}