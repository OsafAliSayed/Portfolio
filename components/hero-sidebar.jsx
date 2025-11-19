'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import Icons from './icons';

export default function HeroSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/OsafAliSayed',
      icon: Icons.GitHub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/osafalisayed/',
      icon: Icons.LinkedIn,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sayedosafali',
      icon: Icons.Twitter,
    },
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1i3H9MvB4cjPAbquU6966-lPs4RsbkKxj/view?usp=sharing',
      icon: Icons.Document,
    }
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="p-3 sm:p-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-start sm:items-center space-y-4 sm:space-y-6"
      >
        {/* Profile Image */}
        <motion.div variants={item} className="self-start sm:self-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
            <Image
              src="/images/home-portfolio-img.webp"
              alt="Osaf Ali Sayed"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={item} className="self-start sm:self-center">
          <h1 className="text-2xl sm:text-3xl lg:text-heading-display font-bold text-foreground text-left sm:text-center">
            Osaf Ali Sayed
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={item} className="self-start sm:self-center">
          <h2 className="text-lg sm:text-xl font-medium text-foreground/60 text-left sm:text-center">
            Full Stack Web Developer
          </h2>
        </motion.div>

        {/* Location */}
        <motion.div variants={item} className="self-start sm:self-center">
          <p className="flex items-center justify-start sm:justify-center space-x-2 text-sm sm:text-base text-foreground/60">
            <span>Rajasthan, India 🇮🇳</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={item} className="self-start sm:self-center">
          <p className="max-w-xs text-left sm:text-center leading-relaxed text-sm sm:text-base text-foreground/70">
            I am the guy who keeps those server up and running!
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={item} className="self-start sm:self-center w-full">
          <Link 
            href="mailto:osafalisayed@gmail.com" 
            className="w-full block text-center py-2.5 px-4 bg-secondary text-white font-medium rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-secondary/20 transform hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              <Icons.Mail className="w-4 h-4" />
              <span>Let&apos;s Work Together</span>
            </span>
          </Link>
        </motion.div>
        
        {/* Social Links */}
        <motion.div variants={item} className="flex justify-start sm:justify-center flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4 self-start sm:self-center">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/60 hover:text-secondary transition-colors" 
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}  