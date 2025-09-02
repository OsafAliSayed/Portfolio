'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import SkillTag from '@/components/ui/skills-tag';
import Icons from './icons';


export default function SkillsSection() {
  // Grouped skills by type, not as separate sections
  const skills = {
    'Frontend': [
      { name: 'HTML/CSS', icon: 'Code' },
      { name: 'JavaScript', icon: 'JavaScript' },
      { name: 'TypeScript', icon: 'TypeScript' },
      { name: 'React', icon: 'React' },
      { name: 'Next.js', icon: 'NextJs' },
      { name: 'Tailwind CSS', icon: 'TailwindCSS' },
    ],
    'Backend': [
      { name: 'Python', icon: 'Python' },
      { name: 'Django', icon: 'Django' },
      { name: 'Flask', icon: 'Flask' },
      { name: 'FastAPI', icon: 'FastAPI' },
    ],
    'DevOps': [
      { name: 'Docker', icon: 'Docker' },
      { name: 'Git', icon: 'Git' },
      { name: 'GitHub', icon: 'GitHub' },
      { name: 'Kubernetes', icon: 'Kubernetes' },
      { name: 'AWS', icon: 'AWS' }
    ],
    'Databases': [
      { name: 'MongoDB', icon: 'MongoDB' },
      { name: 'PostgreSQL', icon: 'PostgreSQL' }
    ]
  };

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
        className="max-w-2xl mx-auto"
      >
        <Card className="overflow-hidden card-glossy border border-tertiary">
          <CardContent>
            <div className="py-6 backdrop-blur-sm">
              {Object.entries(skills).map(([group, items], idx) => (
                <div key={group} className={idx !== 0 ? 'mt-8' : ''}>
                  <h3 className="text-lg font-bold mb-3 text-secondary/90">{group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <SkillTag 
                        key={item.name} 
                        name={item.name} 
                        icon={Icons[item.icon]} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}