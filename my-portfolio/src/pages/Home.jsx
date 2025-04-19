import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-container">
                <div className="home-left">
                    <h2 className="home-greeting">Hello, World!</h2>
                    <h1 className="home-title">
                        I'm <span className="logo-primary">Osaf</span>
                    </h1>
                    <p className="home-description">
                        A passionate full-stack developer specializing in modern web technologies
                        and cloud solutions. I create seamless user experiences and robust backend
                        systems to bring ideas to life.
                    </p>
                    <div className="home-buttons">
                        <Link to="/contact" className="home-button">
                            Get In Touch
                        </Link>
                        <a
                            href="/resume.pdf"
                            className="resume-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
                <div className="home-right">
                    <div className="profile-image-container">
                        <img
                            src="/images/home-portfolio-img.jpg"
                            alt="Osaf"
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
