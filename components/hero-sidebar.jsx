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
      url: 'https://twitter.com/OsafAliSayed',
      icon: Icons.Twitter,
    },
    {
      name: 'Email',
      url: 'mailto:osafalisayed@gmail.com',
      icon: Icons.Mail,
    },
    {
      name: 'Resume',
      url: '/resume',
      icon: Icons.Document,
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/osafalisayed',
      icon: Icons.Upwork,
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
    <section className="p-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col items-center space-y-6"
      >
        {/* Profile Image */}
        <motion.div variants={item}>
          <div className="w-32 h-32 rounded-full overflow-hidden">
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
        <motion.div variants={item}>
          <h1 className="text-heading-display text-foreground">
            Osaf Ali Sayed
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={item}>
          <h2 className="text-xl font-medium text-foreground/60">
            Full Stack Web Developer
          </h2>
        </motion.div>

        {/* Location */}
        <motion.div variants={item}>
          <p className="flex items-center justify-center space-x-2 text-foreground/60">
            <span>📍</span>
            <span>Rajasthan, India 🇮🇳</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={item}>
          <p className="max-w-xs text-center leading-relaxed text-foreground/70">
            Building Real Products For Real Clients, Not Just More Projects
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="flex justify-center space-x-4 pt-4">
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
                className="p-2 rounded-full transition-all duration-300 hover:bg-secondary/10"
              >
                <link.icon 
                  className="w-6 h-6 text-foreground/60 hover:text-secondary transition-colors" 
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}  