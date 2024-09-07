import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100 font-lato" id="about">
      <div className="container mx-auto px-6 md:flex items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/Images/restaurant.jpg"
            alt="Our Restaurant"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="font-playfair text-6xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-8">
            At La Cusina Classica, we celebrate the rich traditions of Italian
            cuisine. Our dishes are crafted from family recipes passed down
            through generations, using only the freshest ingredients to deliver
            authentic flavors in every bite. Whether you're here for a casual
            lunch or a grand dinner, every meal is a celebration of Italy's
            culinary heritage.
          </p>
          <a
            href="#"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;