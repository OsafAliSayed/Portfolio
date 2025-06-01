'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://www.github.com/osafalisayed' },
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/osafalisayed/' },
    { icon: <Mail size={18} />, url: 'mailto:osafalisayed@gmail.com' },
    { icon: <Phone size={18} />, url: 'tel:+918890530727' }
  ];

  return (
    <footer className="py-5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-4 md:mb-0 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Osaf Ali Sayed. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}