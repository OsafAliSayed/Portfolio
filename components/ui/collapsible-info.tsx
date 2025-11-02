'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Icons from '../icons';
import React from 'react';
import highlightKeywords from '@/lib/highlight-utils';
type Props = {
  data: any;
  isOpen: boolean;
  useHighlight?: boolean;
  onToggle: (id: number) => void;
};

export default function CollapsibleInfo({ data, isOpen, useHighlight=false, onToggle }: Props) {
  return (
    <motion.div className="bg-transparent rounded-r-lg">
      <div className="mb-6">
        <div className="flex  sm:items-start gap-4">
          {/* Institution logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white border-2 border-white/10 flex-shrink-0 self-start flex items-center justify-center">
            <Image
              src={data.logo}
              alt={data.title}
              width={80}
              height={80}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col justify-start min-w-0 flex-1">
            <div className="flex items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                {data.title}
              </h3>

              <button
                onClick={() => onToggle(data.id)}
                aria-expanded={!!isOpen}
                className="ml-4 flex items-center text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {/* render chevron icon if list is given*/}
                {data.list && data.list.length > 0 && (
                  <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                )}
                <span className="sr-only">Toggle coursework</span>
              </button>
            </div>

            {/* render link if any */}
            {data.link && (
              <p className="text-sm sm:text-base text-foreground/60 py-1">
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="underline">
                  {data.link}
                </a>
              </p>
            )}

            {/* render degree and period if any */}
            {data.description && (
              <p className="text-sm sm:text-base text-foreground/60">
                {data.description}
              </p>
            )}

            {/* render period if any */}
            {data.period && (
              <p className="text-sm sm:text-base text-foreground/60">
                {data.period}
              </p>
            )}
            {/* render GPA if any */}
            {data.gpa && (
              <p className="text-sm sm:text-base text-foreground/60 font-medium">
                {data.gpa}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Coursework (collapsible, toggled by chevron in header) */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden mb-6"
      >
        <div className="pt-4">
          <ul className="space-y-2">
            {data.list.map((entry: { text: string; highlights: string[] }, idx: number) => (
              // if useHighlight is true, highlight the keywords in the course string you can use data.list.text and data.list.highlights
              
              
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : -10
                }}
                transition={{
                  duration: 0.2,
                  delay: isOpen ? idx * 0.05 : 0
                }}
                className="text-sm sm:text-base text-foreground/70 leading-relaxed"
              >
                {/* Highlight keywords in the course string if useHighlight is true */}
                {useHighlight ? highlightKeywords(entry.text, entry.highlights) : entry.text}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
