import Card from "../components/Card";

const Education = () => {
  const educationList = [
    {
      title: "Indian Institute of Information Technology, Pune",
      subtitle: "Computer Science and Engineering (B.Tech)",
      content: "Activities and societies: R.O.F.I.E.S | Robotics club of IIIT Pune. The competitive environment here allows me to push harder everyday.",
      date: "2021 - 2025",
      tags: ["Computer Science", "CGPA: 7.62/10"]
    },
    {
      title: "International Indian School, Tabuk",
      subtitle: "High School (Upto 12th grade)",
      content: "Completed senior secondary school from Saudi Arabia, Tabuk. Spent over 10 years studying in this school.",
      date: "2007 - 2020",
      tags: ["High School", "Percentage: 85.6/100"]
    }
  ];

  return (
    <section className="min-h-screen px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-white">Education</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {educationList.map((education, index) => (
          <Card
            key={index}
            title={education.title}
            subtitle={education.subtitle}
            content={education.content}
            date={education.date}
            tags={education.tags}
            className="hover:shadow-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
