import React from "react";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/Images/hero-section.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-10 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">La Tavola Italiana</h1>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="/" className="hover:text-red-500 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-red-500 cursor-pointer">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-500 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-500 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to La Tavola Italiana
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Authentic Italian Flavors in Every Bite
        </p>
        <a
          href="#book"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          Book a Table
        </a>
      </div>
    </div>
  );
};

export default Hero;
