import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-gray-900 flex flex-col justify-center items-center py-16">
      <div className="container mx-auto px-6 md:px-12 text-center text-white space-y-6">
        
        {/* Headline */}
        <h5 className="text-lg text-gray-400">LET'S CONNECT</h5>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
        Interested to Collaborating? <span className="text-red-500">Contact Me</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          I’m open to collaborations and opportunities. Feel free to reach out to me through the contact details below.
        </p>

        {/* Contact Details */}
        <div className="space-y-4 mt-8">
          {/* Email */}
          <p className="text-lg mb-4">
            <a
              href={`mailto:your-email@example.com`} // Replace with your email
              className="hover:text-white transition-colors duration-300"
            >
              <FaEnvelope className="inline-block w-6 h-6 mr-2" />
              your-email@example.com
            </a>
          </p>

          {/* WhatsApp */}
          <p className="text-lg mb-4">
            <a
              href="https://wa.me/62819494610888"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp className="inline-block w-6 h-6 mr-2" />
              WhatsApp
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          {/* Facebook */}
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook className="w-8 h-8" />
          </a>
          
          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          
          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
