'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Icons from './icons';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="home" className="text-white pt-24 pb-16 flex items-center">
      <div className="container max-w-2xl mx-auto">
        <motion.div
          className="mx-auto flex flex-col md:flex-row justify-between items-start gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
        <div className="flex-1">
          <motion.div variants={item}>
            <h1 className="text-2xl font-medium mb-2">
              hi osaf here <span className="text-[#89d957]">👋</span>
            </h1>
          </motion.div>
          
          <motion.div variants={item}>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center text-xs px-2 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full hover:border-[#89d957] hover:text-[#89d957] transition-colors duration-200">
                <span className="mr-1">🧑‍💻</span> Full Stack Developer
              </span>
              <span className="inline-flex items-center text-xs px-2 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full hover:border-[#89d957] hover:text-[#89d957] transition-colors duration-200">
                <span className="mr-1">🕒</span> IST (GMT+5:30)
              </span>
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <p className="text-sm text-gray-300 mb-6">
              Coding since IIIT Pune days, where they taught me algorithms but I learned that caffeine is the real Big O optimization.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                className="text-xs px-4 py-1 h-auto bg-transparent hover:bg-transparent border border-gray-700 hover:border-[#89d957] text-gray-300 hover:text-[#89d957] transition-colors rounded"
                variant="outline"
                size="sm"
              >
                <Icons.Download className="w-3 h-3 mr-1.5" />
                Resume
              </Button>
            </Link>

            <Link href="https://linkedin.com/in/osaf-ali-sayed" target="_blank" rel="noopener noreferrer">
              <div className="p-1.5 rounded-sm text-gray-400 hover:text-[#89d957] transition-colors">
                <Icons.LinkedIn className="w-4 h-4" />
              </div>
            </Link>

            <Link href="https://github.com/OsafAliSayed" target="_blank" rel="noopener noreferrer">
              <div className="p-1.5 rounded-sm text-gray-400 hover:text-[#89d957] transition-colors">
                <Icons.GitHub className="w-4 h-4" />
              </div>
            </Link>

            <Link href="mailto:osafalisayed@gmail.com">
              <div className="p-1.5 rounded-sm text-gray-400 hover:text-[#89d957] transition-colors">
                <Icons.Email className="w-4 h-4" />
              </div>
            </Link>
            
            <Link href="https://www.upwork.com/freelancers/osafalisayed" target="_blank" rel="noopener noreferrer">
              <div className="p-1.5 rounded-sm text-gray-400 hover:text-[#89d957] transition-colors">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </div>
            </Link>
          </motion.div>
          

        </div>
        
        <motion.div variants={item} className="relative w-24 h-24 md:w-28 md:h-28 self-start mt-2">
          <Image
            src="/images/home-portfolio-img.webp"
            alt="Profile"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}