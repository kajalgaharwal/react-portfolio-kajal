import React from 'react';
import Footer from '../components/Footer';
import HeroHomeImage from '../components/HeroHomeImage';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHomeImage />
      <Timeline />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
