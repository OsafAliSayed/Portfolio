'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Icons from './icons';
import { highlightKeywords } from '../lib/highlight-utils';

export default function ExperienceTimeline() {

  const experiences = [
     {
      id: 1,
      company: "Ecomlytix",
      position: "Full Stack Developer",
      type: "Freelance",
      duration: "Aug 2022 - Present",
      location: "Remote",
      logo: "/images/experience/algofinancials_logo.jpg",
      highlights: [
        "Built the entire application from scratch using Next.js (frontend) and Nest.js (backend), ensuring a modular, scalable, and maintainable architecture",
        "Designed and implemented RESTful APIs with Nest.js, integrating PostgreSQL databases for reliable data flow and performance.",
        "Configured and deployed infrastructure on DigitalOcean Droplets, managing Nginx, SSL (Certbot), and environment setup for production and staging environments.",
        "Set up CI/CD pipelines using GitHub Actions to automate testing, building, and deployment of both frontend and backend services.",
        "Implemented secure environment variable management and CORS policies to streamline communication between microservices.",
        "Designed and optimized database schemas for performance and scalability using PostgreSQL.",
        "Automated daily scheduler jobs using Nest.js for backend data synchronization and updates.",
        "Managed domain, DNS, and HTTPS configuration for seamless frontend–backend integration under custom domains."
  
      ],
      technologies: ["NX", "Node.js", "Next.JS", "Tailwind-CSS", "Nest.JS", "DigitalOcean", "PostgreSQL", "GitHub Actions"],
    },
    {
      id: 2,
      company: "Zenduty",
      position: "Software Engineer",
      type: "Internship",
      duration: "Jan 2025 - Aug 2025 (8 Months)",
      location: "Remote",
      logo: "/images/experience/zenduty_logo.jpg",
      highlights: [
        "Built serializers, viewsets and endpoints in Django and Django REST Framework powering 10+ interactive dashboard features.",
        "Minimized database hits through query optimization, improving API response times by 75%.",
        "Developed reusable Ant Design components to display key data for sales and technical teams.",
        "Created a custom scheduler to run tests sequentially, and parallelly, reducing the overall runtime by 60%.",
        "Enhanced Zenduty website reliability by developing a comprehensive PyTest and Cypress suite. Used daily by 8+ developers and QA engineers for code validation."
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: 3,
      company: "Algo Financials",
      position: "Python Developer",
      type: "Internship",
      duration: "Aug 2022 - Dec 2022 (3 Months)",
      location: "Remote",
      logo: "/images/experience/algofinancials_logo.jpg",
      highlights: [
        "Launched an asynchronous API utilizing FastAPI and MongoDB, accelerating data processing speeds by 90% compared to previous synchronous systems, reducing server latency by 30 milliseconds.",
        "Established seamless connectivity between FastAPI and MongoDB using Pydantic and Beanie.",
        "Implemented 15 new API endpoints, controller and services for enhanced data querying capabilities.",
        "Orchestrated the refactoring of order history storage using Redis, accelerating query response times by 75% and enabling faster retrieval of customer purchase information for support teams."
      ],
      technologies: ["React", "TypeScript", "Material-UI", "WebSocket", "Chart.js"],
    }
  ];

  const getWorkTypeColor = (type) => {
    const colors = {
      'Full-time': 'bg-secondary/10 text-secondary border-secondary/20',
      'Freelance': 'bg-secondary/10 text-secondary border-secondary/20',
      'Contract': 'bg-secondary/10 text-secondary border-secondary/20',
      'Internship': 'bg-secondary/10 text-secondary border-secondary/20'
    };
    return colors[type] || 'bg-secondary/10 text-secondary border-secondary/20';
  };

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
          Work
        </h2>
        <p className="text-start text-foreground/70 max-w-2xl ">
          My professional journey building innovative solutions and leading development teams.
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
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className="relative"
            >
              
              <motion.div
                className="border-secondary bg-transparent py-4 sm:py-8 rounded-r-lg"
              >
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Company logo inside card */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-background border-2 border-white/10 flex-shrink-0 self-start">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-start min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/60">
                        {exp.position}
                      </p>
                      <p className="text-sm sm:text-base text-foreground/60">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {highlightKeywords(highlight)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => {
                    const IconComponent = Icons[tech] || Icons.Code
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