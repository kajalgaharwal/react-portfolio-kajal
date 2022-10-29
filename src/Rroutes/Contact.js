import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroOtherImage from '../components/HeroOtherImage';
import ContactForm from '../components/ContactForm';
import { Toaster } from 'react-hot-toast';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroOtherImage heading='CONTACT.' text='Lets have a chat.' />
      <ContactForm />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Contact;
