'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'osafalisayed@gmail.com',
      link: 'mailto:osafalisayed@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 8890530727',
      link: 'tel:+918890530727'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'github.com/osafalisayed',
      link: 'https://www.github.com/osafalisayed'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/osafalisayed',
      link: 'https://www.linkedin.com/in/osafalisayed'
    }
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <Card>
          <CardContent className="p-6">
            <p className="text-lg mb-8">
              Feel free to reach out for collaborations, job opportunities, or just to say hello!
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-primary mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}