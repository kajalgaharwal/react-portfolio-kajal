import React from 'react';
import Footer from '../components/Footer';
import HeroProjectImage from '../components/HeroOtherImage';
import Navbar from '../components/Navbar';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroProjectImage
        heading='PROJECTS.'
        text='Some of my most recent projects.'
      />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
