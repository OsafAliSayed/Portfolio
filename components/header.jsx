'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Set to empty if at top of page (to highlight none)
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }
      
      // Determine active section based on scroll position
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const viewportHeight = window.innerHeight;
      const viewportMidpoint = viewportHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        
        // Check if section is in viewport and near the top portion
        if (rect.top <= viewportMidpoint && rect.bottom >= viewportMidpoint) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once on mount to determine initial active section
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navItems = [
    { name: 'About', key: 'about' },
    { name: 'Skills', key: 'skills' },
    { name: 'Experience', key: 'experience' },
    { name: 'Projects', key: 'projects' },
    { name: 'Education', key: 'education' },
    { name: 'Contact', key: 'contact' },
  ];

  return (    <motion.header
      className={`fixed top-2 sm:top-4 left-0 right-0 z-50 py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 max-w-4xl mx-auto rounded-full ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg border border-opacity-10 border-white dark:border-gray-700'
          : 'bg-background/40 backdrop-blur-sm'
      } nav-floating header-glossy`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-lg sm:text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-primary">Osaf Ali</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <motion.button
              key={item.key}
              className={`px-3 py-1.5 rounded-full transition-all nav-item ${
                activeSection === item.key
                  ? 'nav-item-active'
                  : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => {
                scrollToSection(item.key);
                setActiveSection(item.key); // Immediately update the active section when clicked
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-x-4 top-16 sm:top-20 bg-background/80 backdrop-blur-lg shadow-xl rounded-2xl z-40 p-4 sm:p-6 md:hidden header-glossy"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className={`rounded-lg px-4 py-2.5 text-lg transition-all nav-item ${
                  activeSection === item.key
                    ? 'nav-item-active'
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => {
                  scrollToSection(item.key);
                  setActiveSection(item.key); // Immediately update the active section when clicked
                  setMobileMenuOpen(false);
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
