'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Icons from './icons';

export default function Header({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Set to empty if at top of page
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }
      
      // Determine active section based on scroll position
      const sections = ['work', 'projects', 'skills', 'education', 'contact'];
      const viewportHeight = window.innerHeight;
      const viewportMidpoint = viewportHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= viewportMidpoint && rect.bottom >= viewportMidpoint) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Navigation items with icons
  const navItems = [
    { name: 'Work', key: 'work', icon: Icons.Experience },
    { name: 'Projects', key: 'projects', icon: Icons.Project },
    { name: 'Skills', key: 'skills', icon: Icons.Skills },
    { name: 'Education', key: 'education', icon: Icons.Education },
    { name: 'Contact', key: 'contact', icon: Icons.Contact },
  ];

  // Responsive state
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <motion.header
      className={`fixed ${isMobile ? 'bottom-5 left-0 right-0 top-auto px-0 py-1 w-[95%] justify-center' : 'top-3 left-0 right-0 mx-auto max-w-3xl py-2 px-10'} z-50 transition-all duration-300 transform rounded-full ${
        isScrolled && !isMobile
          ? 'bg-background/80 backdrop-blur-md shadow-md border border-primary/10'
          : 'bg-background/40 backdrop-blur-sm'
      } nav-floating header-glossy`}
      style={isMobile ? {} : {}}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center w-full">
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-1 flex-grow">
          <ThemeToggle />
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.key}
                className={`px-7 py-1 text-sm rounded-md flex items-center gap-2 transition-all ${
                  activeSection === item.key
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-text-dark hover:text-foreground'
                }`}
                onClick={() => {
                  if (typeof scrollToSection === 'function') {
                    scrollToSection(item.key);
                  }
                  setActiveSection(item.key);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden md:inline">{item.name}</span>
                <Icon className="h-4 w-4 md:hidden" />
              </motion.button>
            );
          })}
        </nav>

      </div>

      {/* Mobile Navigation Menu or Bottom Nav */}
      <AnimatePresence>
        {isMobile && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="md:hidden flex justify-between items-center px-2 py-1 gap-1 w-full"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  className={`flex flex-col items-center justify-center flex-1 px-1 py-1 rounded-md text-xs transition-all ${
                    activeSection === item.key
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-text-dark hover:text-foreground'
                  }`}
                  onClick={() => {
                    scrollToSection(item.key);
                    setActiveSection(item.key);
                  }}
                >
                  <Icon className="h-5 w-5 mb-0.5" />
                  <span className="sr-only">{item.name}</span>
                </button>
              );
            })}
          </motion.nav>
        )}
        {!isMobile && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-2 absolute left-0 right-0 border border-primary/10"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.key}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                      activeSection === item.key
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-text-dark'
                    }`}
                    onClick={() => {
                      scrollToSection(item.key);
                      setMobileMenuOpen(false);
                      setActiveSection(item.key);
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
