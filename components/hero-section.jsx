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
            
            <Link href="https://twitter.com/osafalisayed" target="_blank" rel="noopener noreferrer">
              <div className="p-1.5 rounded-sm text-gray-400 hover:text-[#89d957] transition-colors">
                <Icons.TwitterX className="w-4 h-4" />
              </div>
            </Link>
            
            <Link href="https://www.upwork.com/freelancers/osafalisayed" target="_blank" rel="noopener noreferrer">
              <div className="p-1.5 rounded-sm text-gray-400 hover:text-[#89d957] transition-colors">
                <Icons.Upwork className="w-4 h-4" />
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