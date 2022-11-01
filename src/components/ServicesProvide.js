import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import {
//   AiFillIeCircle,
//   AiFillChrome,
//   AiFillApi,
//   AiFillCloud,
//   AiFillSetting,
//   AiFillDingtalkCircle
// } from 'react-icons/ai';
import '../components/ServicesProvideStyles.css';

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      opacity: 0,
      x: '-100%'
    },
    twoAndThree: {
      opacity: 0,
      y: '-100%'
    },

    four: {
      opacity: 0,
      x: '100%'
    }
  };

  return (
    <div id='services'>
      <h1 className='services-heading'>You are looking for??</h1>
      <section>
        <motion.div
          className='serviceBox1'
          whileInView={animations.whileInView}
          initial={animations.one}>
          {/* <AiFillChrome /> */}
          <span>Web Development</span>
          <span>
            <div className='service-details'>
              website development is essential to generate more business, your
              voice needs to be heard, your brand needs to be seen. Web
              development is the key to making those things happen. Website is
              the window to the business, giving customers a taste of what you
              have to offer and enticing them to delve deeper for more.
            </div>
          </span>
        </motion.div>
        <motion.div
          className='serviceBox2'
          whileInView={animations.whileInView}
          initial={animations.four}>
          {/* <AiFillIeCircle /> */}
          <span>Web Designing</span>
          <span>
            <div className='service-details'>
              If only given 15 minutes to consume content, 66 percent of people
              would prefer to see something beautifully designed versus
              something plain and simple. Your website’s design is an important
              part of your online marketing presence. To build a better website
              for your business, you must choose web Designing.
            </div>
          </span>
        </motion.div>
        <motion.div
          className='serviceBox3'
          whileInView={animations.whileInView}
          initial={animations.one}
          transition={{
            delay: 0.2
          }}>
          {/* <AiFillDingtalkCircle /> */}
          <span>Graphic Designing</span>
          <span>
            <div className='service-details'>
              There’s a misconception that graphic design is just “pretty
              pictures” but it’s actually presentation, organization and
              well-thought-out market concepts that deliver everything in one
              good-looking package and even Branding isn’t limited to just a
              company logo.It means putting together things your company
              presents.
            </div>
          </span>
        </motion.div>
        <motion.div
          className='serviceBox4'
          whileInView={animations.whileInView}
          initial={animations.four}>
          {/* <AiFillApi /> */}
          <span>Domain and Hosting</span>
          <span>
            <div className='service-details'>
              Reliable and high-performing web hosting is a crucial part of any
              successful website. When you’re thinking about building a new
              website, your choice of host is probably one of the last things on
              your mind. But, neglecting to choose the right host can have
              disastrous effects on your business.
            </div>
          </span>
        </motion.div>
        <motion.div
          className='serviceBox4'
          whileInView={animations.whileInView}
          initial={animations.one}>
          {/* <AiFillCloud /> */}
          <span>Web promotion</span>
          <span>
            <div className='service-details'>
              Web promotion helps you to drive more qualified traffic. You reach
              more leads that are interested in business. The ability to target
              leads helps you drive traffic that takes an interest in your
              company. It requires advertising through a variety of
              tried-and-true methods to capture the attention of internet users
              to the fullest.
            </div>
          </span>
        </motion.div>
        <motion.div
          className='serviceBox4'
          whileInView={animations.whileInView}
          initial={animations.four}>
          {/* <AiFillSetting /> */}
          <span>Website Maintenance</span>
          <span>
            <div className='service-details'>
              Regularly updating and maintaining your site is crucial to
              ensuring that your site is running at full capacity. Just like
              cars, websites require maintenance to operate properly. Properly
              maintaining your site helps to ensure site security, increase the
              number of new visitors, boost returning traffic, and more.
            </div>
          </span>
        </motion.div>
      </section>
      <div className='solution'>
        <p>I have a solution for all these services. </p>
        <p> What are you waiting for?</p>{' '}
        <p>
          Give me a mail and i am here to Make your business shine on the web.{' '}
          <span>
            <Link to='/contact' style={{ color: 'yellow' }}>
              Click here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Services;
