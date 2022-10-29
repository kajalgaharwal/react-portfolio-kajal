import React from 'react';
import { motion } from 'framer-motion';
import {
  AiFillIeCircle,
  AiFillChrome,
  AiFillApi,
  AiFillCloud,
  AiFillSetting,
  AiFillDingtalkCircle
} from 'react-icons/ai';
import '../components/servicesStyles.css';

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
      <h1 className='services-heading'>Services</h1>
      <section>
        <motion.div
          className='serviceBox1'
          whileInView={animations.whileInView}
          initial={animations.one}>
          <AiFillChrome />
          <span>Web Designing</span>
        </motion.div>
        <motion.div
          className='serviceBox2'
          whileInView={animations.whileInView}
          initial={animations.four}>
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className='serviceBox3'
          whileInView={animations.whileInView}
          initial={animations.one}
          transition={{
            delay: 0.2
          }}>
          <AiFillDingtalkCircle />
          <span>Graphic Designing</span>
        </motion.div>
        <motion.div
          className='serviceBox4'
          whileInView={animations.whileInView}
          initial={animations.four}>
          <AiFillApi />
          <span>Domain and Hosting</span>
        </motion.div>
        <motion.div
          className='serviceBox4'
          whileInView={animations.whileInView}
          initial={animations.one}>
          <AiFillCloud />
          <span>Web promotion</span>
        </motion.div>
        <motion.div
          className='serviceBox4'
          whileInView={animations.whileInView}
          initial={animations.four}>
          <AiFillSetting />
          <span>Website Maintenance</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
