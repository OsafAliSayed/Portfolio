'use client';

import { motion } from 'framer-motion';
import Icons from './ui/icons';

export default function SkillsSection() {
  // Grouped skills by type, not as separate sections
  const skills = {
    'Frontend': [
      { name: 'HTML', icon: 'HTML5' },
      { name: 'CSS', icon: 'CSS3' },
      { name: 'JavaScript', icon: 'JavaScript' },
      { name: 'React', icon: 'React' },
      { name: 'Vite.js', icon: 'Vite' },
      { name: 'Next.js', icon: 'NextJs' },
      { name: 'Tailwind CSS', icon: 'TailwindCSS' },
      { name: 'Ant Design', icon: 'AntDesign' },
    ],
    'Backend': [
      { name: 'Django', icon: 'Django' },
      { name: 'Flask', icon: 'Flask' },
      { name: 'FastAPI', icon: 'FastAPI' },
      { name: 'Django Rest Framework', icon: 'DjangoRest' },
    ],
    'DevOps': [
      { name: 'Docker', icon: 'Docker' },
      { name: 'Github Actions', icon: 'GitHubActions' },
      { name: 'Jenkins', icon: 'Jenkins' },
      { name: 'Kubernetes', icon: 'Kubernetes' },
      { name: 'AWS', icon: 'AWS' },
      { name: 'DigitalOcean', icon: 'DigitalOcean' }
    ],
    'Version Control': [
      { name: 'Git', icon: 'Git' },
      { name: 'Github', icon: 'GitHub' }
    ],
    'Database': [
      { name: 'MySQL', icon: 'MySQL' },
      { name: 'MongoDB', icon: 'MongoDB' },
      { name: 'PostgreSQL', icon: 'PostgreSQL' },
      { name: 'SQLite3', icon: 'SQLite' }
    ],
    'Libraries and Tools': [
      { name: 'Pytest', icon: 'Pytest' },
      { name: 'Selenium', icon: 'Selenium' },
      { name: 'Postman', icon: 'Postman' },
      { name: 'Cypress', icon: 'Cypress' },
      { name: 'Django Silk', icon: '' },
    ]
  };

  // Color schemes for each category
  const getCategoryColors = (category) => {
    const colorSchemes = {
      'Frontend': {
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        leftBorder: 'border-blue-500'
      },
      'Backend': {
        bg: 'bg-green-500/20',
        border: 'border-green-500/20',
        text: 'text-green-400',
        leftBorder: 'border-green-500'
      },
      'DevOps': {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        leftBorder: 'border-purple-500'
      },
      'Version Control': {
        bg: 'bg-indigo-500/20',
        border: 'border-indigo-500/20',
        text: 'text-indigo-400',
        leftBorder: 'border-indigo-500'
      },
      'Database': {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500/20',
        text: 'text-orange-400',
        leftBorder: 'border-orange-500'
      },
      'Libraries and Tools': {
        bg: 'bg-pink-500/20',
        border: 'border-pink-500/20',
        text: 'text-pink-400',
        leftBorder: 'border-pink-500'
      }
    };
    return colorSchemes[category] || {
      bg: 'bg-white/5',
      border: 'border-white/10',
      text: 'text-foreground/70',
      leftBorder: 'border-secondary'
    };
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
    <section className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-bold text-start mb-4 text-foreground">
          Skills
        </h2>
        <p className="text-start text-foreground/70 max-w-2xl">
          Technologies and tools I use to bring ideas to life and build scalable solutions.
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
          {Object.entries(skills).map(([group, items], index) => {
            const colors = getCategoryColors(group);
            return (
              <motion.div
                key={group}
                variants={item}
                className="relative"
              >
                <motion.div className={`bg-transparent rounded-r-lg`}>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => {
                      const IconComponent = Icons[skill.icon];
                      return (
                        <div
                          key={skill.name}
                          className={`flex items-center space-x-2 px-3 py-1 rounded-2xl ${colors.bg} ${colors.border}  ${colors.text}`}
                        >
                          {IconComponent && <IconComponent className="w-3 h-3" />}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}