import React from 'react';
import './timeline.css';

const Timeline = ({calendar, title}) => {
  return (
    <div className="timeline-item">
      <div className="circle-dot"></div>
      <h6 className="timeline-date">
        <i className="fa fa-calendar"></i>
        { calendar }
      </h6>
      <h4 className="timeline-title">{ title }</h4>
      <p className="timeline-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
  )
}

export default Timeline;