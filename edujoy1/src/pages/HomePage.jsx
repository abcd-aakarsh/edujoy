import React from "react";
import { Link } from "react-router-dom";

import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";

const HomePage = () => {
  return (
    <div>
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to EduJoy</h1>
          <p className="text-lg mb-6">
            Your ultimate platform for gamified learning in engineering and
            computer programming.
          </p>
          <Link
            to="/learn"
            className="bg-white text-blue-500 font-semibold py-2 px-4 rounded"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <div className="shimmer w-full h-72 mb-4 relative">
                <img
                  src={Image1}
                  alt="Feature 1"
                  loading="lazy"
                  className="w-full h-auto object-cover absolute top-0 left-0"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Interactive Learning Modules
              </h3>
              <p className="text-center">
                Dive into interactive lessons that make complex topics easy to
                understand and engaging.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <div className="shimmer w-full h-72 mb-4 relative">
                <img
                  src={Image2}
                  alt="Feature 2"
                  loading="lazy"
                  className="w-full h-auto object-cover absolute top-0 left-0"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Gamified Quizzes
              </h3>
              <p className="text-center">
                Test your knowledge with fun and challenging quizzes that
                reinforce what you’ve learned.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <div className="shimmer w-full h-72 mb-4 relative">
                <img
                  src={Image3}
                  alt="Feature 3"
                  loading="lazy"
                  className="w-full h-auto object-cover absolute top-0 left-0"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Track Your Progress
              </h3>
              <p className="text-center">
                Keep track of your learning journey and see how much you’ve
                improved over time.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
              <div className="shimmer w-full h-72 mb-4 relative">
                <img
                  src={Image4}
                  alt="Feature 4"
                  loading="lazy"
                  className="w-full h-auto object-cover absolute top-0 left-0"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Community Support
              </h3>
              <p className="text-center">
                Join a community of learners and get help from peers and
                mentors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
