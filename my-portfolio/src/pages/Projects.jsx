import Card from '../components/Card';
import '../styles/pages/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "MERN Stack Application",
      content: "A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
      image: "/images/project-section/p1.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      link: {
        url: "https://github.com/yourusername/ecommerce-platform",
        text: "View Project",
        external: true
      }
    },
    {
      id: 2,
      title: "Task Management System",
      subtitle: "React & Firebase Application",
      content: "A real-time task management system with collaborative features, deadline tracking, and notification system.",
      image: "/images/project-section/p2.png",
      tags: ["React", "Firebase", "Material UI", "Context API"],
      link: {
        url: "https://github.com/yourusername/task-manager",
        text: "View Project",
        external: true
      }
    },
    {
      id: 3,
      title: "AI Image Generator",
      subtitle: "Next.js & OpenAI",
      content: "An application that generates unique images based on text prompts using OpenAI's DALL-E API integration.",
      image: "/images/project-section/p3.png",
      tags: ["Next.js", "OpenAI", "TailwindCSS", "Vercel"],
      link: {
        url: "https://github.com/yourusername/ai-image-generator",
        text: "View Project",
        external: true
      }
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      subtitle: "Vue.js & Chart.js",
      content: "A personal finance tracker with expense categorization, budget setting, and visual representations of spending habits.",
      image: "/images/project-section/p4.png",
      tags: ["Vue.js", "Chart.js", "Vuex", "Firebase"],
      link: {
        url: "https://github.com/yourusername/finance-tracker",
        text: "View Project",
        external: true
      }
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              content={project.content}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
