import Card from '../components/Card';
import '../styles/pages/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      subtitle: "TechCorp Inc.",
      content: "Led the development of responsive web applications using React, Redux, and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
      date: "2022 - Present",
      tags: ["React", "Redux", "TypeScript", "SASS", "Jest"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      subtitle: "InnovateX",
      content: "Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Implemented RESTful APIs and integrated third-party services for enhanced functionality.",
      date: "2020 - 2022",
      tags: ["React", "Node.js", "Express", "MongoDB", "AWS"]
    },
    {
      id: 3,
      title: "Web Developer",
      subtitle: "Digital Solutions Co.",
      content: "Created responsive and dynamic websites for clients across various industries. Utilized modern frameworks and libraries to build user-friendly interfaces with optimal performance.",
      date: "2018 - 2020",
      tags: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap"]
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="experience-title">My Experience</h2>
        <div className="experience-container">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              title={experience.title}
              subtitle={experience.subtitle}
              content={experience.content}
              date={experience.date}
              tags={experience.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
