'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';


export default function SkillsSection() {
  // Grouped skills by type, not as separate sections
  const skills = {
    'Frontend': [
      { name: 'HTML/CSS', logo: '/images/logos/html5.svg' },
      { name: 'JavaScript', logo: '/images/logos/javascript.svg' },
      { name: 'React', logo: '/images/logos/react.svg' },
      { name: 'Vue.js', logo: '/images/logos/vuejs.svg' },
      { name: 'Next.js', logo: '/images/logos/nextjs.svg' },
    ],
    'Backend': [
      { name: 'Django', logo: '/images/logos/django.svg' },
      { name: 'Flask', logo: '/images/logos/flask.svg', ismonochrome: true },
      { name: 'Fast APi', logo: '/images/logos/fastapi.svg' },
      { name: 'DRF', logo: '/images/logos/djangorest.svg' },
    ],
    'DevOps': [
      { name: 'Docker', logo: '/images/logos/docker.svg' },
      { name: 'Github Actions', logo: '/images/logos/githubactions.svg' },
      { name: 'Jenkins', logo: '/images/logos/jenkins.svg' },
      { name: 'Kubernetes', logo: '/images/logos/kubernetes.svg' },
      { name: 'AWS', logo: '/images/logos/aws.svg' }
    ],
    'Version Control': [
      { name: 'Git', logo: '/images/logos/git.svg' },
      { name: 'Github', logo: '/images/logos/github.svg' }
    ],
    'Databases': [
      { name: 'MySQL', logo: '/images/logos/mysql.svg' },
      { name: 'MongoDB', logo: '/images/logos/mongodb.svg' },
      { name: 'PostgreSQL', logo: '/images/logos/postgresql.svg' },
      { name: 'SQLite3', logo: '/images/logos/sqlite.svg' }
    ],
    'Libraries & Tools': [
      { name: 'Pytest', logo: '/images/logos/pytest.svg' },
      { name: 'selenium', logo: '/images/logos/selenium.svg' },
      { name: 'Postman', logo: '/images/logos/postman.svg' },
      { name: 'Cypress', logo: '/images/logos/cypressio.svg' },
      { name: 'Tailwind CSS', logo: '/images/logos/tailwind.svg' },
      { name: 'Ant Design', logo: '/images/logos/antdesign.svg' }
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
        <Card className="overflow-hidden card-glossy border border-border">
          <CardContent>
            <div className="py-6 backdrop-blur-sm">
              {Object.entries(skills).map(([group, items], idx) => (
                <div key={group} className={idx !== 0 ? 'mt-8' : ''}>
                  <h3 className="text-lg font-bold mb-3 text-primary/90">{group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <div key={item.name} className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-sm hover:bg-primary/20 transition-colors">
                        <div className="relative w-6 h-6">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className={item.ismonochrome ? "object-contain filter invert hover:brightness-150" : "object-contain"}
                            style={item.ismonochrome ? { filter: 'brightness(0) invert(1)' } : {}}
                          />
                        </div>
                        <span>{item.name}</span>
                      </div>
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