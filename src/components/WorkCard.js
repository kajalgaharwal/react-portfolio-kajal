import '../components/WorkCardStyles.css';
import React from 'react';
// import { NavLink } from 'react-router-dom';

const WorkCard = props => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt='' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-details'>
        <p>{props.text}</p>
        <div className='project-btns'>
          <a href={props.view} target={'blank'} className='btn'>
            View
          </a>
          <a href={props.source} target={'blank'} className='btn'>
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
