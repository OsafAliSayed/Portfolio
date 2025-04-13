// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-black border-b-4 border-[#E50914]' 
          : 'bg-gradient-to-b from-black to-transparent'}
        px-6 py-4
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-3xl font-extrabold text-[#E50914]">OSAF<span className="text-white">.DEV</span></h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link 
              to="/" 
              className="text-gray-200 hover:text-[#E50914] hover:underline transition-colors text-sm uppercase tracking-widest font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="text-gray-200 hover:text-[#E50914] hover:underline transition-colors text-sm uppercase tracking-widest font-bold"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              className="text-gray-200 hover:text-[#E50914] hover:underline transition-colors text-sm uppercase tracking-widest font-bold"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="/education" 
              className="text-gray-200 hover:text-[#E50914] hover:underline transition-colors text-sm uppercase tracking-widest font-bold"
            >
              Education
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="bg-[#E50914] text-white px-6 py-2 rounded-sm hover:bg-red-800 transition-colors text-sm uppercase tracking-widest font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E50914]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E50914]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t-2 border-[#E50914] mt-4 py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-200 hover:text-[#E50914] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="text-gray-200 hover:text-[#E50914] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/experience" 
                className="text-gray-200 hover:text-[#E50914] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                to="/education" 
                className="text-gray-200 hover:text-[#E50914] transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="bg-[#E50914] text-white px-4 py-2 mt-2 inline-block rounded-sm"
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
