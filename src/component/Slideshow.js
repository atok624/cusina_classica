import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const images = [
  { src: '/Images/kitchen.jpg', alt: 'Restaurant interior', caption: 'Watch our chefs craft culinary masterpieces' },
  { src: '/Images/bar.jpg', alt: 'Signature pasta dish', caption: 'Explore our curated wine collection' },
  { src: '/Images/happy.jpg', alt: 'Happy customers', caption: 'Join our satisfied guests' },
  { src: '/Images/waitress.jpg', alt: 'Chef preparing food', caption: 'Delight in our expertly prepared dishes'},
  { src: '/Images/vip.jpg', alt: 'Wine selection', caption:'Savor premium wines and exquisite dishes'  },
];

const ImageSlideshow = ({ interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(nextImage, interval);
    }
    return () => clearInterval(timer);
  }, [isPlaying, interval, nextImage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === ' ') {
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" id='show'>
      <h2 className="text-3xl font-bold text-center mb-6 text-primary-800">Experience Cuisine Classica</h2>
      <div className="relative aspect-w-16 aspect-h-9 group">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className="w-full h-screen object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
        <p className="absolute bottom-4 left-4 right-4 text-white text-lg md:text-xl text-center font-semibold bg-black/50 px-4 py-2 rounded-lg">
          {images[currentIndex].caption}
        </p>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary-200 text-primary-800 hover:bg-primary-300 rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-200 text-primary-800 hover:bg-primary-300 rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={togglePlayPause}
          className="absolute top-2 right-2 bg-primary-200 text-primary-800 hover:bg-primary-300 rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-200 ${
              index === currentIndex ? 'bg-primary-600 w-6' : 'bg-primary-200'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
