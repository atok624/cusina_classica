import React from 'react';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Menu from './component/Menu';
import Slideshow from './component/Slideshow';
import Testimonials from './component/Testimonial';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Menu/>
      <Slideshow/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
