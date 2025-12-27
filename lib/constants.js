export const reviews = [
  {
    id: 1,
    name: "Javeed Yara",
    company: "Software Development Engineer - Xurrent",
    rating: 5,
    review: `
    I had the pleasure of working with Osaf, and I can confidently say he exceeded every expectation. He is extremely smart, curious, and consistently punctual. An absolute gem to work with.

    During our engagement, he contributed far beyond his role:

      Built complete test pipelines for both the frontend and backend from scratch, robust, clean, and reliable.

      Demonstrated deep understanding of asynchronous systems and implemented solutions 
      that were efficient and well-architected.

      Showed excellent backend engineering skills, especially in Django.
      
      Created automation scripts to streamline frontend workflows, including automated
      tag-adding tools that saved our team significant time.

      Writes excellent documentation. In fact, when he first joined us as an intern, 
      we tasked him with fixing the backend setup documentation (which had several issues, especially around PostgreSQL). 
      He handled it meticulously and improved the onboarding process for every future developer.

      He is proactive, communicates clearly, and brings a problem-solving mindset to every task. 
      Truly a standout engineer with a bright future ahead. I'd work with him again without hesitation.
    `,
    date: "December 2025",
  },
  {
    id: 2,
    name: "Steve Rose",
    company: "JailWatch Pro - Upwork",
    rating: 5,
    review:
      `I hired Osaf for a few small Django site updates, and he ended up improving much more than expected. 
      He proactively fixed layout and content issues, cleaned up templates, and modernized the site overall. 
      He worked in the CST timezone, which made communication smooth and quick. He delivers clean, professional 
      results without needing constant direction. Fast, responsive, and easy to work with - will definitely hire again.`,
    date: "December 2025",
  },
  {
    id: 3,
    name: "Kenny Joseph",
    company: "Cryptodashboard - Upwork",
    rating: 5,
    review: "Great work from Osaf. He did the project exactly as requested.",
    date: "August 2025",
  },
  {
    id: 4,
    name: "Carl Johan Larrson",
    company: "Mock Service in Supabase - Upwork",
    rating: 5,
    date: "September 2025",
  },
];

export const projects = [
  {
    title: "AI Kaatib",
    desc: "Automated SEO content engine using OpenAI & Celery. Schedule your blog posts and let AI Kaatib handle the rest.",
    tags: ['Django', 'Python', 'React', 'NextJs'],
    link: "https://www.github.com/osafalisayed/aikaatib",
    logo: "/images/projects/ai-kaatib-logo.png",
    images: [
      "https://via.placeholder.com/1920x1080/1a2a3a/ffffff?text=AI+Kaatib+Dashboard",
      "https://via.placeholder.com/1920x1080/2a3a1a/ffffff?text=Content+Scheduling+Interface"
    ]
  },
  {
    title: "CryptoDash",
    desc: "Real-time market tracking with WebSockets. Stay updated with live cryptocurrency prices and trends.",
    tags: ['NextJs', 'TypeScript', 'React', 'ChartJS'],
    link: "https://www.github.com/osafalisayed/crypto-dashboard",
    logo: "/images/projects/cryptodash-logo.png",
    images: [
      "https://via.placeholder.com/1920x1080/3a1a2a/ffffff?text=CryptoDash+Real-Time+Prices",
      "https://via.placeholder.com/1920x1080/1a3a2a/ffffff?text=CryptoDash+Market+Trends"
    ]
  }
];



export const contributions = [
  {
    id: 1,
    title: "Frappe LMS",
    type: "Pull Request",
    repository: "frappe/lms",
    company: "Frappe",
    logo: "/images/opensource/frappe.png",
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
    logo: "/images/opensource/wagtail.png",
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


export const experiences = [
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
    technologies: ["React", "TypeScript", "MaterialUI", "ChartJS"],
  }
];


export const contactInfo = {
  email: 'osafalisayed@gmail.com',
  phone: '917727934703' // international format without +, e.g. 15551234567
}


export const educations = [
  {
    id: 1,
    institution: "Indian Institute of Information Technology, Pune",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2021 - 2025",
    type: "Degree",
    logo: "/images/education/iiitpune.png",
    gpa: "7.95 CGPA",
    link: "https://www.iiitp.ac.in/",
    description: "Bachelor of Technology in Computer Science and Engineering with focus on software development and systems.",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Computer Graphics",
      "Distributed Systems",
      "Artificial Intelligence",
      "Compiler Design",
      "Discrete Structures",
      "C Programming",
      "Java Programming"
    ]
  },
  {
    id: 2,
    institution: "Harvard University",
    degree: "CS50 Web: Programming with Python and JS",
    period: "2022",
    type: "Certificate",
    logo: "/images/education/harvarduniversity.png",
    gpa: null,
    link: "https://cs50.harvard.edu/web/",
    description: "Professional Certificate in Web Programming with Python and JavaScript, covering modern web development practices.",
    coursework: [
      "Python Web Development",
      "Django Framework",
      "JavaScript ES6+",
      "React.js",
      "HTML5 and CSS3",
      "SQL and Database Design",
      "Git and Version Control",
      "User Interface Design",
      "Testing and Debugging",
      "Deployment and Scalability"
    ]
  },
  {
    id: 3,
    institution: "Harvard University",
    degree: "CS50: Introduction to Computer Science",
    period: "2021",
    type: "Certificate",
    logo: "/images/education/harvarduniversity.png",
    gpa: null,
    link: "https://cs50.harvard.edu/x/",
    description: "Comprehensive introduction to computer science and programming, covering fundamental concepts and practical applications.",
    coursework: [
      "Introduction to Programming",
      "Algorithms and Data Structures",
      "Memory Management",
      "Web Development Basics"
    ]
  }
];
