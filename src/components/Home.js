import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import correct icons
import ProfileImage from '../Assets/YAN00035-removebg-preview.png';
import CVFile from '../Assets/CV_Bima Bayu Sofana.pdf';

const Home = () => {
  return (
    <section id="home" className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Bagian Kiri - Informasi */}
        <div className="space-y-6 text-left">
          <h5 className="text-lg text-gray-500">HELLO</h5>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            I’m <span className="text-red-500">Bima Bayu Sofana</span>
          </h1>
          <p className="text-lg text-gray-600">
            I'm a passionate IT Business Development professional, helping businesses achieve goals by aligning client needs with the latest tech innovations.
          </p>
          <a
            href={CVFile}
            download
            className="inline-block bg-red-500 text-white text-lg px-8 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
          >
            Download CV
          </a>
          <div className="flex space-x-6 mt-6">
            {/* Social Media Links */}
            {/* Facebook */}
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            
            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter className="w-7 h-7" />
            </a>
            
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            
            {/* Instagram */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            
            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            
            {/* Email */}
            <a
              href="mailto:your-email@example.com"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/your-phone-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Bagian Kanan - Foto */}
        <div className="hidden md:block">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-auto object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
