import React from 'react';
import TimelineData from '../components/TimelineData';
import '../components/TimelineStyles.scss';
const Timeline = () => {
  return (
    <div id='timeline'>
      <h1 className='service-heading'>Services Provided</h1>
      <div className='timelineBox'>
        {TimelineData.map((value, index) => {
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

export default Timeline;
