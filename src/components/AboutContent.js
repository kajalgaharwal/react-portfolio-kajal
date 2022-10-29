import '../components/AboutContentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import aboutMeImg from '../assets/michele-orallo-ChenIO61cgE-unsplash.jpg';
import aboutReactImg from '../assets/img1.jpg';

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
          experience to users and convert as much traffic as possible. I believe
          in writing success stories in digital world as
          <span>WebeeKajal. </span>I create secure and responsive websites for
          my clients.
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
            <img src={aboutReactImg} className='img' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
