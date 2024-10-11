import React, { useState } from 'react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Fungsi untuk menangani scroll ke bagian yang dituju
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth', // Efek scroll yang halus
      block: 'start', // Mengatur posisi scroll ke atas
    });
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo atau Nama */}
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-red-500">Bima</span>Portofolio
        </h1>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          {/* Ganti href dengan ID atau link yang sesuai */}
          <a
            href="#home"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#portfolio"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('portfolio');
            }}
          >
            Portfolio
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-lg text-gray-800 relative group transition duration-300 ease-in-out hover:text-red-500"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleNav}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white absolute w-full left-0 top-16 ${
          navOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="#home"
          className="block text-lg text-gray-800 px-6 py-4 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-red-500"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-lg text-gray-800 px-6 py-4 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-red-500"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a
          href="#portfolio"
          className="block text-lg text-gray-800 px-6 py-4 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-red-500"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('portfolio');
          }}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="block text-lg text-gray-800 px-6 py-4 hover:bg-gray-100 transition duration-300 ease-in-out hover:text-red-500"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
