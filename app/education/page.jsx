import Navbar from '../../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import highlightKeywords from '../../lib/highlight-utils';
import Icons from '../../components/icons';

const educationData = [
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

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Education & Certifications</h1>
          <p className="text-neutral-500 text-sm mb-6">
            My academic journey and professional certifications in computer science and software engineering.
          </p>
        </div>
        
        {/* Education List */}
        <div className="space-y-12">
          {educationData.map((item) => (
            <div key={item.id} className="relative border-l border-white/10 pl-8 ml-2">
              {/* Logo on timeline */}
              <div className="absolute -left-[15px] top-0 w-8 h-8 rounded-full overflow-hidden bg-white border-2 border-neutral-700 flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.institution}
                  width={28}
                  height={28}
                  className="object-contain p-0.5"
                />
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <div>
                  <h2 className="text-white font-medium text-base flex items-center gap-2">
                    <Link 
                      href={item.link}
                      target="_blank"
                      className="hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      {item.institution}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </Link>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.type}
                    </span>
                  </h2>
                </div>
                <span className="text-xs text-neutral-600 font-mono mt-2 sm:mt-0">{item.period}</span>
              </div>

              <p className="text-sm text-neutral-300 mb-2 font-medium">{item.degree}</p>
              {item.gpa && (
                <p className="text-xs text-neutral-500 mb-4">{item.gpa}</p>
              )}

              <p className="text-xs text-neutral-400 leading-relaxed mb-4">{item.description}</p>

              {/* Coursework */}
              <div className="mb-4">
                <h3 className="text-xs text-neutral-500 font-semibold mb-2 uppercase tracking-wider">Key Coursework</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.coursework.map((course, idx) => (
                    <div key={idx} className="text-xs text-neutral-400">
                      • {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="py-10 text-center text-neutral-700 text-xs mt-20">
          <p>© 2025 Osaf Ali Sayed.</p>
        </footer>
      </div>
    </div>
  );
}
