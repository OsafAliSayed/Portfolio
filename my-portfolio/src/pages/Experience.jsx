import ExperienceCard from '../components/ExperienceCard';
import '../styles/pages/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Zenduty",
      subtitle: "Software Developer Intern",
      bulletPoints: [
        "Developed a custom scheduler to run tests sequentially, and parallelly as needed, reducing the overall runtime by 40%.",
        "Developed and automated test cases using PyTest for the Zenduty website, ensuring comprehensive scenario coverage.",
        "Enforced test automation workflows to improve efficiency and accuracy in regression testing.",
        "Designed and developed dynamic newsletter templates for Zenduty, enhancing user engagement."
      ],
      date: "Jan 2025 - Present",
      logo: "/images/experience/zenduty_logo.jpg",
      tags: ["JavaScript", "Cypress", "Pytest", "Python", "Django", "DRF", "Jenkins", "pytest-xdist"]
    },
    {
      id: 2,
      title: "AlgoFinancials",
      subtitle: "Python Developer Intern",
      bulletPoints: [
        "Created a comprehensive API structure using Postman for production environments.",
        "Designed and implemented an asynchronous API, achieving a 90% performance boost over synchronous versions.",
        "Established seamless connectivity between FastAPI and MongoDB using Pydantic and Beanie.",
        "Engineered efficient query routing, endpoints, controllers, and services across multiple modules.",
        "Designed and implemented a Redis-based order history model, achieving a 70-80% improvement in execution speed."
      ],
      date: "Dec 2023 - Mar 2024",
      logo: "/images/experience/algofinancials_logo.jpg",
      tags: ["FastAPI", "Node.js", "Redis", "MongoDB", "ORM"]
    },
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="experience-title">My Experience</h2>
        <div className="experience-container">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              subtitle={experience.subtitle}
              bulletPoints={experience.bulletPoints}
              date={experience.date}
              logo={experience.logo}
              tags={experience.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
