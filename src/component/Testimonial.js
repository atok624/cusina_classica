import React, { useState } from 'react';

// Sample testimonials data
const testimonials = [
  {
    name: 'Agnes Right',
    position: 'Milan',
    text: 'The atmosphere was cozy and inviting. Perfect for a casual dinner with friends or a romantic date.',
    photo: '/Images/image1.jpg'
  },
  {
    name: 'Albert Dera',
    position: 'Manchester',
    text: 'The staff was incredibly attentive and friendly, making sure we had everything we needed.',
    photo: '/Images/image2.jpg'
  },
  {
    name: 'Hisu Lee',
    position: 'Korea',
    text: 'The restaurant was clean and well-maintained, which made for a pleasant dining experience.',
    photo: '/Images/image3.jpg'
  },
  {
    name: 'Jimmy Fermin',
    position: 'Bologna',
    text: 'The chef’s special was amazing. Be sure to ask about it!Try the house-made desserts—they’re out of this world.',
    photo: '/Images/image4.jpg'
  },
  {
    name: 'Derick Anies',
    position: 'Madrid',
    text: 'A great spot for a special occasion. Everything from the food to the service was top-notch.',
    photo: '/Images/image5.jpg'
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="relative">
        <div className="flex items-center justify-center">
          <button
            onClick={goToPrev}
            className="absolute left-0 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-gray-600"
          >
            &lt;
          </button>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 200}px)` }} // Adjusted to use 200px
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[400px] h-[250px] px-4">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="text-lg font-semibold">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-800">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goToNext}
            className="absolute right-0 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full hover:bg-gray-600"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
