import React, { useState } from "react";

// Navbar Component with Hamburger Menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-100">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img
            src="/Images/Black and White Illustrative Home Catering Logo (1).png"
            alt="La Tavola Italiana Logo"
            className="w-auto h-[65px] rounded-full"
          />
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 text-white md:static absolute top-full left-0 w-full md:w-auto md:bg-transparent bg-black bg-opacity-90 md:space-y-0 space-y-4 py-4 md:py-0 ${
            isOpen ? "flex flex-col items-center" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <li className="w-full md:w-auto">
            <a href="/" className="hover:text-red-500 cursor-pointer font-bold transition block text-center py-2 md:py-0">
              Home
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#about" className="hover:text-red-500 cursor-pointer font-bold transition block text-center py-2 md:py-0">
              About
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#menu" className="hover:text-red-500 cursor-pointer font-bold transition block text-center py-2 md:py-0">
              Menu
            </a>
          </li>
          <li className="w-full md:w-auto">
            <a href="#show" className="hover:text-red-500 cursor-pointer transition font-bold block text-center py-2 md:py-0">
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Header Component (Hero Section)
const Header = () => {
  return (
    <header
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/Images/hero-section.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-red-600">Cusina Classica</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Authentic Italian Flavors in Every Bite
        </p>
        <a
          href="#book"
          className="bg-red-500 hover:bg-red-600 text-white text-2xl font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          Book a Table
        </a>
      </div>
    </header>
  );
};

// Main Component (Combining Navbar and Header)
const Hero = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Header />
    </>
  );
};

export default Hero;
