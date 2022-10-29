import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroOtherImage from '../components/HeroOtherImage';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroOtherImage
        heading='ABOUT.'
        text='Im a friendly Front-End Developer.'
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
