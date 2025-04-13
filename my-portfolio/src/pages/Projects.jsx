import Card from "../components/Card";

const Projects = () => {
  const projectsList = [
    {
      title: "Trading Platform",
      subtitle: "Full Stack Web Application",
      content: "Fully functioning e-commerce platform that allows users to perform trades.",
      image: "/images/project-section/p2.png",
      tags: ["HTML", "CSS", "JavaScript", "Django", "Bootstrap"],
      link: {
        url: "#",
        text: "View Project",
        external: true
      }
    },
    {
      title: "Wikipedia Clone",
      subtitle: "Web Application",
      content: "Maintain your own wiki by linking different pages together.",
      image: "/images/project-section/p3.png",
      tags: ["HTML", "CSS", "JavaScript", "Python", "Django"],
      link: {
        url: "#",
        text: "View Project",
        external: true
      }
    },
    {
      title: "Gmail Clone",
      subtitle: "API-based Mailing System",
      content: "An API-based mailing system that allows users to send and receive mails with features like reply and archive.",
      image: "/images/project-section/p4.png",
      tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "Selenium", "Redis"],
      link: {
        url: "#",
        text: "View Project", 
        external: true
      }
    }
  ];

  return (
    <section className="min-h-screen px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-white">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            content={project.content}
            image={project.image}
            tags={project.tags}
            link={project.link}
            className="relative h-full"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
