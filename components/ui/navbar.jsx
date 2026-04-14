'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icons from '@/components/ui/icons';

const Navbar = (props) => {
  const activeLabel = props.activeLabel || 'Home';
  const [activeTab, setActiveTab] = useState(activeLabel);
  const [hoveredTab, setHoveredTab] = useState(null);

  const navItems = [
    { id: 'Home', label: 'Home', href: '/', icon: Icons.Home },
    { id: 'Writing', label: 'Writing', href: '/blog/', icon: Icons.Pen },
    { id: 'Snippets', label: 'Snippets', href: '/snippets/', icon: Icons.Code },
    { id: 'Open Source', label: 'Open Source', href: '/open-source/', icon: Icons.OpenSource },
    { id: 'Reviews', label: 'Reviews', href: '/reviews/', icon: Icons.Star },
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <nav 
        className="relative flex items-center p-1.5 bg-[rgb(12,12,12)] border border-white/10 hover:border-white/20 rounded-full shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
        onMouseLeave={() => setHoveredTab(null)}
      >
        {/* The Single Unified Bubble - full width when no hover */}
        {!hoveredTab && (
          <motion.div
            layoutId="nav-pill"
            className="absolute bg-white/5 rounded-full z-0"
            style={{
              left: "6px",
              right: "6px",
              top: "6px",
              bottom: "6px",
            }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.4
            }}
          />
        )}

        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const isHovered = hoveredTab === item.id;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              className={`
                relative px-3 sm:px-6 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full outline-none z-10
                ${isActive ? 'text-secondary font-semibold' : 'text-neutral-400 hover:text-white'}
              `}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* When this button is hovered, the 'nav-pill' moves here */}
              {isHovered && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-0 shadow-sm"
                  transition={{
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.4
                  }}
                />
              )}

              {/* Active Tab Indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <span className="relative z-20 flex items-center gap-2">
                <Icon className="h-4 w-4 sm:hidden" aria-hidden />
                <span className="hidden sm:block">{item.label}</span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;