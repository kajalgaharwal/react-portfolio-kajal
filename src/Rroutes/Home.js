import React from 'react';
import Footer from '../components/Footer';
import HeroHomeImage from '../components/HeroHomeImage';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHomeImage />
      <Work />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
