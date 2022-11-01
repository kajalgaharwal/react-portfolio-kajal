import './HeroHomeImageStyles.css';
import IntroImg from '../assets/background.jpg';
import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroImage = () => {
  const animations = {
    p: {
      initial: {
        x: '-100%',
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    }
  };
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='' />
      </div>
      <div className='content'>
        <motion.p {...animations.p}>
          Hi, I Am <br /> Kajal Gaharwal
        </motion.p>
        <p style={{ color: 'crimson' }}>
          <Typewriter
            options={{
              strings: ['A Developer', 'A Designer'],
              autoStart: true,
              loop: true,
              cursor: '',
              wrapperClassName: 'typewriterpara'
            }}
          />
        </p>

        <h1>React Developer</h1>
        <div>
          <Link to='/project' className='btn'>
            Projects
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
