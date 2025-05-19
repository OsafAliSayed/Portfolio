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
    <footer className="py-10 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <span className="text-primary font-semibold">Osaf</span> Ali Sayed
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4 md:mb-0 text-center text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Osaf Ali Sayed. All rights reserved.
          </motion.div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}