import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-6 mt-10">
      <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-24">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/learn" className="hover:text-gray-300">
              Learn
            </Link>
            <Link to="/workshop" className="hover:text-gray-300">
              Workshop
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500">
          © 2024 EduJoy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
