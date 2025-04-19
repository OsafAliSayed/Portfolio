// components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll event for navbar background opacity
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <h1>
                        <span className="logo-primary">Osaf Ali Sayed</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-menu">
                    <ul className="navbar-menu-items">
                        <li className="navbar-menu-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navbar-menu-item">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="navbar-menu-item">
                            <Link to="/experience">Experience</Link>
                        </li>
                        <li className="navbar-menu-item">
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="navbar-contact-button">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-menu-mobile-button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="navbar-mobile-menu">
                    <ul className="navbar-mobile-menu-items">
                        <li className="navbar-mobile-menu-item">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="navbar-mobile-menu-item">
                            <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
                                Projects
                            </Link>
                        </li>
                        <li className="navbar-mobile-menu-item">
                            <Link to="/experience" onClick={() => setMobileMenuOpen(false)}>
                                Experience
                            </Link>
                        </li>
                        <li className="navbar-mobile-menu-item">
                            <Link to="/education" onClick={() => setMobileMenuOpen(false)}>
                                Education
                            </Link>
                        </li>
                        <li className="navbar-mobile-menu-item">
                            <Link
                                to="/contact"
                                className="navbar-contact-button"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
