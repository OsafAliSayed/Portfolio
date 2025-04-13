import Card from "../components/Card";

const Experience = () => {
  const experiences = [
    {
      title: "Algo Trading",
      subtitle: "Python Developer Intern",
      content: "Implemented and maintained trading algorithms, developed Python code using libraries like Pandas and NumPy, and contributed to real-time monitoring systems.",
      date: "Dec 2023 - Feb 2024",
      tags: ["Python", "Pandas", "NumPy", "API Integration"]
    },
    {
      title: "SuperProf",
      subtitle: "Freelance CSE Tutor",
      content: "Taught more than 30 students individually, ranked in top 10 web development teachers, and taught various subjects including DSA, C, C++, Java, Python, and JavaScript.",
      date: "Jun 2022 - Dec 2022",
      tags: ["Teaching", "Web Development", "DSA", "Programming Languages"]
    }
  ];

  return (
    <section className="min-h-screen px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-white">Experience</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            title={experience.title}
            subtitle={experience.subtitle}
            content={experience.content}
            date={experience.date}
            tags={experience.tags}
            className="hover:shadow-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
