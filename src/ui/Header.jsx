import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerlogo from "../assets/Preview.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-stone-900  text-white">
      <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-24">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <img
                src={headerlogo}
                alt="EduJoy Logo"
                className="h-10 w-10 mr-2"
              />
              EduJoy
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
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
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              onClick={toggleMenu}
            >
              Learn
            </Link>
            <Link
              to="/workshop"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-300"
              onClick={toggleMenu}
            >
              Workshop
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
