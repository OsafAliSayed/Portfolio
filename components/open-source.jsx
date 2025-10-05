'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Icons from './icons';
import { highlightKeywords } from '../lib/highlight-utils';

export default function OpenSourceSection() {

  const contributions = [
    {
      id: 1,
      title: "Related Courses Feature Implementation",
      type: "Pull Request",
      repository: "frappe/lms",
      company: "Frappe",
      logo: "/images/opensource/frappe.png", // Using Python logo as placeholder for Frappe
      description: "Contributed to Frappe LMS v2.31.0 by implementing a 'Related Courses' feature to enhance course discovery and user engagement.",
      link: "https://github.com/frappe/lms/pull/1565/",
      status: "Merged",
      technologies: ["Python", "Frappe Framework", "Vue", "JavaScript", "Frappe UI"],
      contribution_details: [
        "Contributed to Frappe LMS v2.31.0 by implementing a 'Related Courses' feature to enhance course discovery",
        "Displayed contextually similar courses on the course page using Vue.js and Frappe's Python backend logic",
        "Enhanced user experience and course discoverability for educational platforms"
      ],
      date: "2025"
    },
    {
      id: 2,
      title: "Branding Assets Update & Admin Panel Enhancement",
      type: "Pull Request",
      repository: "wagtail/wagtail",
      company: "Wagtail",
      logo: "/images/opensource/wagtail.png", // Using Django logo since Wagtail is Django-based
      description: "Updated Wagtail CMS branding across admin panel, documentation, and email templates with new visual identity and improved UX.",
      link: "https://github.com/wagtail/wagtail/pull/11756/",
      status: "Merged",
      technologies: ["Python", "Django", "Wagtail CMS", "React", "SCSS"],
      contribution_details: [
        "Replaced outdated branding assets across the admin panel, documentation, and email templates with new SVG logos and favicons",
        "Modified React+SCSS components to update the Wagtail admin sidebar logo and implemented a new hover animation for improved UX",
        "Enhanced the overall visual consistency and user experience of the Wagtail admin interface"
      ],
      date: "2025"
    }
  ];



  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-start mb-4 text-foreground">
          Open Source
        </h2>
        <p className="text-start text-foreground/70 ">
          Contributing to the developer community by solving problems and improving tools that developers use every day.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {contributions.map((contribution) => (
            <motion.div
              key={contribution.id}
              variants={item}
              className="relative"
            >
              <motion.div className="bg-transparent py-4 sm:py-8 rounded-r-lg">
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Company logo */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-background border-2 border-white/10 flex-shrink-0 self-start">
                      <Image
                        src={contribution.logo}
                        alt={contribution.company}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-start min-w-0 flex-1">
                      <div className="mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                          {contribution.title}
                        </h3>
                      </div>
                      
                      <Link
                        href={contribution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-foreground/60 hover:text-foreground/80 font-medium inline-flex items-center group mb-2"
                      >
                        {contribution.repository}
                        <Icons.ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      
                      <p className="text-sm text-foreground/60">
                        {contribution.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {contribution.contribution_details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                          {highlightKeywords(detail)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.technologies.map((tech) => {
                    const IconComponent = Icons[tech] || Icons.Code;
                    return (
                      <div
                        key={tech}
                        className="flex items-center space-x-2 px-2 sm:px-3 py-1 rounded-2xl bg-blue-500/10 border-blue-500/20 text-xs font-medium text-blue-400"
                      >
                        <IconComponent className="w-3 h-3" />
                        <span className="text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}