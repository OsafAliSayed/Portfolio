import Card from '../components/Card';
import '../styles/pages/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'AI Kaatib',
            subtitle: 'AI bulk blog generator',
            content:
                "An AI-powered platform that generates bulk blog posts using OpenAI's GPT-3.5 API, with user authentication and a responsive design.",
            image: '/images/project_section/01_ai_kaatib.png',
            tags: ['React', 'Next.js', 'Supabase', 'AWS', 'Django', 'DRF', 'OpenAI'],
            link: {
                url: 'https://github.com/yourusername/ecommerce-platform',
                text: 'View Project',
                external: true,
            },
        },
        {
            id: 2,
            title: 'Gsorcerer',
            subtitle: 'GSoC Issue finder',
            content:
                'A real-time task management system with collaborative features, deadline tracking, and notification system.',
            image: '/images/project_section/02_gsorcerer.png',
            tags: ['JavaScript', 'Django', 'Redis', 'Github API'],
            link: {
                url: 'https://github.com/yourusername/task-manager',
                text: 'View Project',
                external: true,
            },
        },
        {
            id: 3,
            title: 'Gmail Clone',
            subtitle: 'Gmail clone with custom backend API',
            content:
                'A Gmail clone with a custom backend API, featuring email sending, receiving, and a user-friendly interface.',
            image: '/images/project_section/03_mail.png',
            tags: ['Python', 'JavaScript', 'SQLite3', 'Django', 'DRF'],
            link: {
                url: 'https://github.com/yourusername/ai-image-generator',
                text: 'View Project',
                external: true,
            },
        },
    ];

    return (
        <section className="projects-section">
            <div className="container">
                <h2 className="projects-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
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
