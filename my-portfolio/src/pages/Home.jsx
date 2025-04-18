import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <h1 className="home-title">
        Hi, I'm <span className="logo-primary">Osaf</span>
      </h1>
      <p className="home-description">
        A passionate full-stack developer specializing in modern web technologies and cloud solutions.
      </p>
      <Link to="/contact" className="home-button">
        Get In Touch
      </Link>
    </section>
  );
};

export default Home;
