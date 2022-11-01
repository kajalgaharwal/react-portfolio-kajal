import React from 'react';
import Footer from '../components/Footer';
import HeroHomeImage from '../components/HeroHomeImage';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHomeImage />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
