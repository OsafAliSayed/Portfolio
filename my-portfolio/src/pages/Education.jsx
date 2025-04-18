import Card from '../components/Card';
import '../styles/pages/Education.css';

const Education = () => {
  const educations = [
    {
      id: 1,
      title: "Master of Science in Computer Science",
      subtitle: "Stanford University",
      content: "Specialized in artificial intelligence and machine learning. Conducted research on natural language processing and developed deep learning models for text analysis.",
      date: "2018 - 2020",
      tags: ["Artificial Intelligence", "Machine Learning", "Data Science", "NLP"]
    },
    {
      id: 2,
      title: "Bachelor of Science in Software Engineering",
      subtitle: "MIT",
      content: "Studied core computer science principles and software development methodologies. Participated in various hackathons and coding competitions.",
      date: "2014 - 2018",
      tags: ["Software Development", "Algorithms", "Data Structures", "Web Development"]
    },
    {
      id: 3,
      title: "Full Stack Development Bootcamp",
      subtitle: "Coding Academy",
      content: "Intensive 12-week bootcamp focused on modern web development technologies and best practices. Developed several real-world projects with agile methodologies.",
      date: "2013 - 2014",
      tags: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
    }
  ];

  return (
    <section className="education-section">
      <div className="container">
        <h2 className="education-title">My Education</h2>
        <div className="education-container">
          {educations.map((education) => (
            <Card
              key={education.id}
              title={education.title}
              subtitle={education.subtitle}
              content={education.content}
              date={education.date}
              tags={education.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
