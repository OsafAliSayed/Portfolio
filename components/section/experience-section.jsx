'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import highlightKeywords from '@/lib/highlight-utils';
import Icons from '@/components/icons';

const   ExperienceTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Debounced hover handlers to prevent flickering
  const handleMouseEnter = useCallback((index) => {
    // Disable hover on touch devices to prevent conflict with click
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;

    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredIndex(index);
  }, [hoverTimeout]);

  const handleMouseLeave = useCallback(() => {
    // Disable hover on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;

    const timeout = setTimeout(() => {
      setHoveredIndex(null);
    }, 100); // 100ms delay to prevent flickering
    setHoverTimeout(timeout);
  }, []);

  // Click handler for touch devices
  const handleClick = useCallback((index) => {
    if (hoveredIndex === index) {
      // If already expanded, collapse it
      setHoveredIndex(null);
    } else {
      // Expand the clicked item
      setHoveredIndex(index);
    }
  }, [hoveredIndex]);

  const experiences = [
    {
      id: 1,
      company: "Ecomlytix",
      position: "Freelance Full Stack Developer",
      type: "Freelance",
      duration: "Aug 2025 - Present",
      location: "Remote",
      logo: "/images/experience/ecomlytix_logo.png",
      description: [
        {
          text: "Built the entire application from scratch using Next.js and Nest.js, ensuring a modular, scalable, and maintainable architecture",
          highlights: ["Next.js", "Nest.js"]
        },
        {
          text: "Designed and implemented RESTful APIs with Nest.js, integrating PostgreSQL databases for reliable data flow and performance.",
          highlights: ["RESTful APIs", "Nest.js", "PostgreSQL"]
        },
        {
          text: "Configured and deployed infrastructure on DigitalOcean Droplets, managing Nginx, SSL (Certbot), and environment setup for production and staging environments.",
          highlights: ["DigitalOcean", "Droplets", "Nginx", "SSL"]
        },
        {
          text: "Set up CI/CD pipelines using GitHub Actions to automate testing, building, and deployment of both frontend and backend services.",
          highlights: ["CI/CD pipelines", "GitHub Actions"]
        },
        {
          text: "Implemented secure environment variable management and CORS policies to streamline communication between microservices.",
          highlights: ["CORS"]
        },
        {
          text: "Designed and optimized database schemas for performance and scalability using PostgreSQL.",
          highlights: ["PostgreSQL"]
        },
        {
          text: "Automated daily scheduler jobs using BullMQ for backend data synchronization and updates.",
          highlights: ["BullMQ"]
        },
        {
          text: "Managed Domain, DNS, and HTTPS configuration for seamless frontend–backend integration.",
          highlights: ["Domain", "DNS", "HTTPS"]
        }
      ],
      technologies: ["NodeJs", "NextJs", "NestJs", "TailwindCSS", "PostgreSQL", "GitHubActions"],
    },
    {
      id: 2,
      company: "Zenduty",
      position: "Software Engineer",
      type: "Internship",
      duration: "Jan 2025 - Aug 2025 (8 Months)",
      location: "Remote",
      logo: "/images/experience/zenduty_logo.jpg",
      description: [
        {
          text: "Built serializers, viewsets and endpoints in Django and Django REST Framework powering 10+ interactive dashboard features.",
          highlights: ["Django REST Framework", "Django"]
        },
        {
          text: "Minimized database hits through query optimization, improving API response times by 75%.",
          highlights: ["query optimization", "API response times", "75%"]
        },
        {
          text: "Developed reusable Ant Design components to display key data for sales and technical teams.",
          highlights: ["Ant Design"]
        },
        {
          text: "Created a custom scheduler to run tests sequentially, and parallelly, reducing the overall runtime by 60%.",
          highlights: ["custom scheduler", "tests", "60%"]
        },
        {
          text: "Enhanced Zenduty website reliability by developing a comprehensive PyTest and Cypress suite. Used daily by 8+ developers and QA engineers for code validation.",
          highlights: ["PyTest", "Cypress", "8+", "developers", "QA engineers"]
        }
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
      description: [
        {
          text: "Launched an asynchronous API utilizing FastAPI and MongoDB, accelerating data processing speeds by 90% compared to previous synchronous systems, reducing server latency by 30 milliseconds.",
          highlights: ["FastAPI", "MongoDB", "90%", "30 milliseconds"]
        },
        {
          text: "Established seamless connectivity between FastAPI and MongoDB using Pydantic and Beanie.",
          highlights: ["FastAPI", "MongoDB", "Pydantic", "Beanie"]
        },
        {
          text: "Implemented 15 new API endpoints, controller and services for enhanced data querying capabilities.",
          highlights: ["15", "API endpoints", "controller", "services"]
        },
        {
          text: "Orchestrated the refactoring of order history storage using Redis, accelerating query response times by 75% and enabling faster retrieval of customer purchase information for support teams.",
          highlights: ["Redis", "75%"]
        }
      ],
      technologies: ["React", "TypeScript", "MaterialUI", "API", "ChartJS"],
    }
  ];

  return (
    <section id="work" className="mb-10 scroll-mt-24">
      <h2 className="text-base font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Experience
      </h2>
      
      <div className="space-y-8  border-l-2 border-white/30 ml-5 pl-5 relative">
        {experiences.map((job, i) => (
          <div 
            key={i} 
            className="relative transition-all duration-400 ease-in-out cursor-pointer group flex flex-col justify-between"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          >
            {/* Company logo in timeline dot */}
            <div className="absolute -left-[39px] lg:-left-[43px] w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-neutral-700 flex items-center justify-center">
              <Image
                src={job.logo}
                alt={job.company}
                width={28}
                height={28}
                className={`w-full h-full ${job.company === "Ecomlytix" ? "object-contain p-0.5" : "object-cover"}`}
              />
            </div>
            
            {/* Basic Info (Always Visible) */}
            <div className="pl-3 flex flex-col sm:flex-row sm:items-center justify-between mt-1">
              <h3 className="text-white font-medium text-sm">{job.company}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 font-mono">{job.duration}</span>
                <button
                  type="button"
                  aria-expanded={hoveredIndex === i}
                  aria-controls={`exp-details-${job.id}`}
                  onClick={(e) => { e.stopPropagation(); handleClick(i); }}
                  className="p-1 rounded-md text-neutral-300  hover:bg-neutral-800 transition"
                  title={hoveredIndex === i ? 'Collapse' : 'Expand'}
                >
                  {Icons.ChevronDown && (
                    <Icons.ChevronDown className={`text-neutral-500 w-4 h-4 transition-transform ${hoveredIndex === i ? 'rotate-180' : ''}`} />
                  )}
                </button>
              </div>
            </div>
            <p className="pl-3 text-xs italic mb-1">{job.position}</p>
            
            {/* Expanded Details (Only on Hover) */}
            <div
              id={`exp-details-${job.id}`}
              className={`overflow-hidden transition-all duration-300 ${
                hoveredIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-3 space-y-3">
                {/* Description */}
                <div className="space-y-2">
                  {job.description.map((desc, idx) => (
                    <p key={idx} className="text-xs text-neutral-400 leading-relaxed">
                      • {highlightKeywords(desc.text, desc.highlights)}
                    </p>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {job.technologies.map((tech) => {
                    const IconComponent = Icons[tech];
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 px-2 py-1 text-xs bg-neutral-800 text-neutral-300 border border-neutral-700"
                      >
                        {IconComponent && <IconComponent className="w-3 h-3" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;