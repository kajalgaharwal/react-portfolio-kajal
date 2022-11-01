import '../components/AboutContentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import aboutMeImg from '../assets/cartoon1667280709193.jpg';
import aboutBack from '../assets/cartoon1667280796261.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>
          Hello Hola,नमस्ते👋 Vanakkam Satsriyakal!! Im Kajal Gaharwal -A Web
          Developer. I Like to Solve Problems with Tech🖥. I have done my
          education in Masters degree in computer application along with 3+
          years of experience in this industry. As a designer, I am always
          willing to design fantastic looking interfaces that will give a real
          experience to users and convert as much traffic as possible. I create
          secure and responsive websites for my clients.
          <span> WebeeKajal. </span>
        </p>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={aboutMeImg} className='img' alt='' />
          </div>
          <div className='img-stack bottom'>
            <img src={aboutBack} className='img' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
