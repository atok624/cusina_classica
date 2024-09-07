/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="w-full mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.673340088074!2d-122.39694848467872!3d37.7919815797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b6c5e6bfb%3A0x3c6b5d7d7b12cd06!2s123%20Example%20St%2C%20San%20Francisco%2C%20CA%2094110%2C%20USA!5e0!3m2!1sen!2sin!4v1636620371338!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="mailto:info@example.com" className="hover:underline">
                  Cusinaclassica@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <p>123 Example St, City, Italy</p>
              </li>
            </ul>
          </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.04c-5.525 0-10 4.475-10 10 0 5.238 3.967 9.537 9.128 9.943v-7h-2.75v-2.943h2.75v-2.179c0-2.714 1.597-4.216 4.062-4.216 1.156 0 2.146.085 2.43.123v2.823h-1.667c-1.31 0-1.564.622-1.564 1.544v1.917h2.896l-.378 2.943h-2.518v7.737c5.16-.406 9.13-4.704 9.13-9.943 0-5.525-4.475-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.46 6c-.774.345-1.605.578-2.48.682.892-.536 1.577-1.385 1.901-2.401-.835.494-1.758.855-2.741 1.048-.789-.84-1.91-1.365-3.152-1.365-2.39 0-4.327 1.935-4.327 4.327 0 .34.037.673.104.993-3.594-.18-6.781-1.903-8.918-4.528-.374.641-.588 1.384-.588 2.179 0 1.504.766 2.832 1.93 3.607-.711-.023-1.379-.22-1.963-.548v.056c0 2.098 1.492 3.84 3.469 4.239-.363.099-.745.152-1.14.152-.279 0-.55-.027-.814-.078.553 1.728 2.157 2.99 4.063 3.023-1.49 1.168-3.371 1.868-5.412 1.868-.352 0-.698-.021-1.04-.061 1.94 1.245 4.244 1.973 6.73 1.973 8.078 0 12.491-6.686 12.491-12.491 0-.189-.004-.378-.013-.567.86-.621 1.605-1.4 2.193-2.287z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="text-pink-600 hover:text-pink-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.04c-5.525 0-10 4.475-10 10 0 5.238 3.967 9.537 9.128 9.943v-7h-2.75v-2.943h2.75v-2.179c0-2.714 1.597-4.216 4.062-4.216 1.156 0 2.146.085 2.43.123v2.823h-1.667c-1.31 0-1.564.622-1.564 1.544v1.917h2.896l-.378 2.943h-2.518v7.737c5.16-.406 9.13-4.704 9.13-9.943 0-5.525-4.475-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        
      </div>
      <div className="text-center mt-3 py-4 border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Cusina Classica. All rights
          reserved.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
