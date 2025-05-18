'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>
        
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I am a full-stack developer with a passion for building robust and scalable web applications. 
              With expertise in both frontend and backend technologies, I create seamless user experiences 
              while ensuring solid system architecture. My approach combines technical excellence with 
              a strong focus on solving real-world problems through code.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Currently working as a Software Developer Intern at Zenduty, I collaborate with teams to 
              develop and maintain critical systems. I'm experienced in various programming languages and frameworks,
              with a particular focus on web technologies and AI integration.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}