import './FooterStyles.css';
import {
  FaHome,
  FaMailBulk,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Subhash Nagar</p>
              <p>Ajmer</p>
            </div>
          </div>
          {/* <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            </h4>
          </div> */}
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              webeekajal@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>Kajal Gaharwal.</h4>
          <p>
            A juvenile, dynamic, result oriented freelance web developer
            glabally. I focus in building powerful, affordable and stunning
            websites and delivering innovative, responsive websites to help
            clients in realizing their online potential. I have 3+ years of
            experience in this industry. I love experimenting with technology
            and designing a strong user experience. In Spite of the trend with
            the industrialization of the Web, I wish to remain a craftsperson in
            the medium. I believe in writing success stories in digital world as
            WebeeKajal.
          </p>
          <div className='social'>
            <a href='https://www.instagram.com/' target={'blank'}>
              <FaInstagram
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a href='https://twitter.com/home' target={'blank'}>
              <FaTwitter
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>

            <a href='https://www.linkedin.com/feed/' target={'blank'}>
              <FaLinkedinIn
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a href='https://github.com/' target={'blank'}>
              <FaGithub
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
