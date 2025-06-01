'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, GraduationCap, Globe } from 'lucide-react';
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
    <section className="min-h-screen pt-20 md:pt-16 flex items-center justify-center px-6 relative overflow-hidden pb-5">
      
      <motion.div
        className="min-w lg:w-[50%] px-10 mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          variants={item} 
          className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 mx-auto mb-8"
        >
          <Image
            src="/images/home-portfolio-img.webp"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div variants={item}>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-primary">Osaf Ali Sayed</span>
          </h1>
        </motion.div>
        
        <motion.div variants={item}>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
            Full Stack Developer
          </h2>
        </motion.div>
        
        <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Django</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">DRF</span>
        </motion.div>
        
        <motion.div variants={item} className="mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-6 text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              <span>Software Engineer</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" />
              <span>IIIT Pune, Computer Science</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={item} className="mb-8 sm:mb-4">
          <Button
            onClick={() => scrollToSection('about')}
            className="rounded-full"
            size="lg"
          >
            View My Work
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-12 pointer-events-none"
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
      </motion.div>
    </section>
  );
}