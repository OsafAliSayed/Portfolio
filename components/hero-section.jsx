'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection({ scrollToSection }) {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen pt-20 md:pt-16 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>
      <div>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6 md:mb-8">
          <motion.div variants={item} className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/images/home-portfolio-img.webp"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          <div className="text-center md:text-left">
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-primary">Osaf Ali Sayed</span>
              </h1>
            </motion.div>
            
            <motion.div variants={item}>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
                Full Stack Developer
              </h2>
            </motion.div>
            
            <motion.div variants={item}>
              <p className="text-lg mb-8 max-w-2xl">
                Building innovative web solutions with cutting-edge technologies
              </p>
            </motion.div>
          </div>
        </div>
        
        
        <motion.div variants={item} className="mb-8 sm:mb-4">
          <Button
            onClick={() => scrollToSection('about')}
            className="rounded-full"
            size="lg"
          >
            View My Work
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="m-auto mb-2 mt-20 pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center" 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary opacity-70" />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}