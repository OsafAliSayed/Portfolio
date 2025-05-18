'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function SkillsSection() {
  const categories = [
    {
      name: 'Frontend',
      items: [
        { name: 'HTML/CSS', logo: '/images/logos/html5.svg' },
        { name: 'JavaScript', logo: '/images/logos/javascript.svg' },
        { name: 'React', logo: '/images/logos/react.svg' },
        { name: 'Vue.js', logo: '/images/logos/vuejs.svg' },
        { name: 'Next.js', logo: '/images/logos/nextjs.svg' },
      ]
    },
    {
      name: 'Backend',
      items: [
        { name: 'Django', logo: '/images/logos/django.svg' },
        { name: 'Flask', logo: '/images/logos/flask-white.svg' },
        { name: 'Fast APi', logo: '/images/logos/fastapi.svg' },
        { name: 'DRF', logo: '/images/logos/djangorest.svg' },
      ]
    },
    {
      name: 'DevOps',
      items: [
        { name: 'Docker', logo: '/images/logos/docker.svg' },
        { name: 'Github Actions', logo: '/images/logos/githubactions.svg' },
        { name: 'Jenkins', logo: '/images/logos/jenkins.svg' },
        { name: 'Kubernetes', logo: '/images/logos/kubernetes.svg' },
        { name: 'AWS', logo: '/images/logos/aws.svg' }
      ]
    },
    {
      name: 'Version Control',
      items: [
        { name: 'Git', logo: '/images/logos/git.svg' },
        { name: 'Github', logo: '/images/logos/github.svg' }
      ]
    },
    {
      name: 'Databases',
      items: [
        { name: 'MySQL', logo: '/images/logos/mysql.svg' },
        { name: 'MongoDB', logo: '/images/logos/mongodb.svg' },
        { name: 'PostgreSQL', logo: '/images/logos/postgresql.svg' },
        { name: 'SQLite3', logo: '/images/logos/sqlite.svg' }
      ]
    },
    {
      name: 'Libraries and Tools',
      items: [
        { name: 'Pytest', logo: '/images/logos/pytest.svg' },
        { name: 'selenium', logo: '/images/logos/selenium.svg' },
        { name: 'Postman', logo: '/images/logos/postman.svg' },
        { name: 'Cypress', logo: '/images/logos/cypressio.svg' },
        { name: 'Tailwind CSS', logo: '/images/logos/tailwind.svg' },
        { name: 'Ant Design', logo: '/images/logos/antdesign.svg' }
      ]
    },
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
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>
        
        <div className="space-y-6">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              variants={fadeInUp}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {category.items.map(item => (
                      <div key={item.name} className="flex flex-col items-center justify-center gap-2">
                        <div className="relative w-12 h-12">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                      </div>
                    ))}
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