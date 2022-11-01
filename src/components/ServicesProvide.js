import React from 'react';
import { Link } from 'react-router-dom';
import ServicesProvideData from './ServicesProvideData';
import '../components/ServicesProvideStyles.scss';
// import {
//   AiFillIeCircle,
//   AiFillChrome,
//   AiFillApi,
//   AiFillCloud,
//   AiFillSetting,
//   AiFillDingtalkCircle
// } from 'react-icons/ai';

const ServicesProvide = () => {
  return (
    <div>
      <div id='timeline'>
        <h1 className='service-heading'>You are looking for??</h1>
        <div className='timelineBox'>
          {ServicesProvideData.map((value, index) => {
            return (
              <TimelineItem
                heading={value.title}
                index={index}
                key={value.title}
              />
            );
          })}
        </div>
      </div>
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

const TimelineItem = ({ heading, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? 'leftTimeline' : 'rightTimeline'
    }`}>
    <div>
      <h2>{heading}</h2>
    </div>
  </div>
);
export default ServicesProvide;
