import Card from '../components/Card';
import '../styles/pages/Education.css';

const Education = () => {
    const educations = [
        {
            id: 1,
            title: 'Indian Institute of Information Technology, Pune',
            subtitle: 'Bachelors of Technology in Computer Science',
            date: '2021 - 2025',
            tags: ['Operating Systems', 'Object-Oriented Programming', 'DBMS', 'Computer Networks'],
        },
        {
            id: 2,
            title: 'Internation Indian School, Tabuk (Saudi Arabia)',
            subtitle: 'Class 12th (85.6%)',
            date: '2020',
            tags: ['Physics', 'Chemistry', 'Mathematics', 'Informatics Practices', 'English'],
        },

        {
            id: 3,
            title: 'Internation Indian School, Tabuk (Saudi Arabia)',
            subtitle: 'Class 10th (78%)',
            date: '2018',
            tags: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
        },
    ];

    return (
        <section className="education-section">
            <div className="container">
                <h2 className="education-title">My Education</h2>
                <div className="education-container">
                    {educations.map(education => (
                        <Card
                            key={education.id}
                            title={education.title}
                            subtitle={education.subtitle}
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
