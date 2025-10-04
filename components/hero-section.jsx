'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Icons from './icons';
import HoverableTag from '@/components/ui/hoverable-tag';
import SocialIcon from '@/components/ui/social-icon';
import GithubStats from '@/components/github-stats';


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
    <section id="home" className="pt-24 pb-16 flex justify-between">
      <div className="container max-w-2xl mx-auto flex justify-center">
        <motion.div
          className="w-full h-[100%] flex flex-col md:flex-row justify-center  items-start"
          variants={container}
          initial="hidden"
          animate="show"
        >
        <div className="flex-1 h-full flex flex-col justify-between">
          <motion.div variants={item}>
            <h1 className="text-2xl font-medium mb-2">
              Hi osaf here 👋
            </h1>
          </motion.div>

          {/* Professional Tags */}
          <motion.div variants={item}>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <HoverableTag icon="🧑‍💻">Full Stack Developer</HoverableTag>
              <HoverableTag icon="🕒">IST (GMT+5:30)</HoverableTag>
              <HoverableTag className="text-tertiary" icon="💼">Available for hire</HoverableTag>
            </div>
          </motion.div>
          
          {/* Github stats */}
          <motion.div variants={item} className="mb-4">
            <GithubStats />
          </motion.div>

          {/* Skills Summary */}
          {/* <motion.div variants={item}>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <HoverableTag>React.JS</HoverableTag>
              <HoverableTag>Next.JS</HoverableTag>
              <HoverableTag>Tailwind CSS</HoverableTag>
              <HoverableTag>Django</HoverableTag>
              <HoverableTag>Flask</HoverableTag>
              <HoverableTag>Python</HoverableTag>
              <HoverableTag>DevOps</HoverableTag>
            </div>
          </motion.div> */}

          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <SocialIcon href="https://www.upwork.com/freelancers/osafalisayed" icon={Icons.Upwork} label="Upwork Profile" />
            <SocialIcon href="/resume.pdf" icon={Icons.Document} label="Resume" />
            <SocialIcon href="https://linkedin.com/in/osaf-ali-sayed" icon={Icons.LinkedIn} label="LinkedIn Profile" />
            <SocialIcon href="https://github.com/OsafAliSayed" icon={Icons.GitHub} label="GitHub Profile" />
            <SocialIcon href="mailto:osafalisayed@gmail.com" icon={Icons.Email} label="Email Contact" />
            <SocialIcon href="https://twitter.com/osafalisayed" icon={Icons.TwitterX} label="Twitter Profile" />
          </motion.div>
        </div>

        <motion.div variants={item} className="relative h-full w-[50%] md:ml-6 md:mt-0 p-4">
          <Image
            src="/images/home-portfolio-img.webp"
            alt="Profile"
            fill
            className="object-cover rounded-lg border border-background/40 "
            priority
          />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}