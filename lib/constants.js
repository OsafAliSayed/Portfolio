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


export const contactInfo = {
    email: 'osafalisayed@gmail.com',
    phone: '917727934703' // international format without +, e.g. 15551234567
}