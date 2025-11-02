'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import CollapsibleInfo from './ui/collapsible-info';


export default function OpenSourceSection() {
  const [openDescription, setOpenDescription] = useState({});

  const toggleDescription = (contributionId) => {
    setOpenDescription((prev) => ({
      ...prev,
      [contributionId]: !prev[contributionId],
    }));
  };

  const contributions = [
    {
      id: 1,
      title: "Frappe LMS",
      type: "Pull Request",
      repository: "frappe/lms",
      company: "Frappe",
      logo: "/images/opensource/frappe.png", // Using Python logo as placeholder for Frappe
      description: "Related Courses Feature Implementation",
      link: "https://github.com/frappe/lms/pull/1565/",
      status: "Merged",
      technologies: ["Python", "Frappe", "Vue", "JavaScript"],
      list: [
        {
          text: "Contributed to Frappe LMS v2.31.0 by implementing a 'Related Courses' feature to enhance course discovery",
          highlights: ["Frappe LMS v2.31.0", "'Related Courses'", "course discovery"]
        },
        {
          text: "Displayed contextually similar courses on the course page using Vue.js and Frappe's Python backend logic",
          highlights: ["Vue.js", "Frappe", "Python", "backend"]
        },
        {
          text: "Enhanced user experience and course discoverability for educational platforms",
          highlights: []
        }
      ],
      date: "2025"
    },
    {
      id: 2,
      title: "Wagtail CMS",
      type: "Pull Request",
      repository: "wagtail/wagtail",
      company: "Wagtail",
      logo: "/images/opensource/wagtail.png", // Using Django logo since Wagtail is Django-based
      description: "Branding Assets Update & Admin Panel Enhancement",
      link: "https://github.com/wagtail/wagtail/pull/11756/",
      status: "Merged",
      technologies: ["Python", "Django", "Wagtail", "React", "SCSS"],
      list: [
        {
          text: "Replaced outdated branding assets across the admin panel, documentation, and email templates with new SVG logos and favicons",
          highlights: []
        },
        {
          text: "Modified React+SCSS components to update the Wagtail admin sidebar logo and implemented a new hover animation for improved UX",
          highlights: ["React+SCSS"]
        },
        {
          text: "Enhanced the overall visual consistency and user experience of the Wagtail admin interface",
          highlights: []
        }
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

      <div className="relative mt-8">
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
              <CollapsibleInfo
                data={contribution}
                isOpen={!!openDescription[contribution.id]}
                useHighlight={true}
                onToggle={toggleDescription}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}