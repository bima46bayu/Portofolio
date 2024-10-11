import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to make navbar smaller when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setScrolling(true); // Navbar mengecil ketika scroll > 50px
      } else {
        setScrolling(false); // Navbar kembali besar ketika scroll ke atas
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to smoothly scroll to a section when a link is clicked
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolling ? 'py-2 h-16 w-3/4 mx-auto rounded-b-lg bg-white shadow-md' : 'py-4 h-20 w-full mx-auto bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo atau Nama */}
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-red-500">Bima</span>Portfolio
        </h1>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('home'); }}
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('about'); }}
          >
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#portfolio"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('portfolio'); }}
          >
            Portfolio
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}
          >
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          <a
            href="#home"
            className="block text-lg text-gray-800 hover:text-red-500 transition duration-300 ease-in-out"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('home'); }}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-lg text-gray-800 hover:text-red-500 transition duration-300 ease-in-out"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('about'); }}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="block text-lg text-gray-800 hover:text-red-500 transition duration-300 ease-in-out"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('portfolio'); }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block text-lg text-gray-800 hover:text-red-500 transition duration-300 ease-in-out"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
