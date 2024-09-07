import React from 'react';

// Sample testimonials data with rating
const testimonials = [
  {
    name: 'Agnes Right',
    position: 'Milan',
    text: 'The atmosphere was cozy and inviting. Perfect for a casual dinner with friends or a romantic date.',
    photo: '/Images/image1.jpg',
    rating: 4
  },
  {
    name: 'Albert Dera',
    position: 'Manchester',
    text: 'The staff was incredibly attentive and friendly, making sure we had everything we needed.',
    photo: '/Images/image2.jpg',
    rating: 5
  },
  {
    name: 'Hisu Lee',
    position: 'Korea',
    text: 'The restaurant was clean and well-maintained, which made for a pleasant dining experience.',
    photo: '/Images/Image3.jpg',
    rating: 3
  },
  {
    name: 'Derick Anies',
    position: 'Madrid',
    text: 'A great spot for a special occasion. Everything from the food to the service was top-notch.',
    photo: '/Images/image5.jpg',
    rating: 4
  },
];

// Helper function to display stars based on rating
const StarRating = ({ rating }) => {
  const stars = Array(5).fill(0);  // Array with 5 slots representing the stars
  return (
    <div className="flex">
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? "gold" : "gray"}  // Fill gold for active stars, gray for others
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.25l6.75 4.5-2.25-7.5L21 9.75h-7.5L12 2.25 10.5 9.75H3l5.25 4.5L6 21.75l6-4.5z"
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full p-10">
      <h2 className="text-2xl font-bold text-center mb-8">What Our customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg py-6 px-3 mx-3">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.position}</p>
                {/* Rating component */}
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
            <p className="text-gray-800">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
