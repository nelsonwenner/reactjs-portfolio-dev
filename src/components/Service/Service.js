import React from 'react';
import './service.css';

const Service = () => {
  return (
    <div className="service">
      <div className="row">
        <div className="service-title">
          <h2>Services</h2>
          <span></span>
        </div>
      </div>
      <div className="row">
        <div className="grid-service">
          <div className="service-item">
            <div className="icon"><i className="fa fa-laptop"></i></div>
            <h4>Web Design</h4>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor.
            </p>
          </div>
          <div className="service-item">
            <div className="icon"><i className="fa fa-photo"></i></div>
            <h4>Photography</h4>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor.
            </p>
          </div>
          <div className="service-item">
            <div className="icon"><i className="fa fa-code"></i></div>
            <h4>Web Development</h4>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor.
            </p>
          </div>
          <div className="service-item">
            <div className="icon"><i className="fa fa-film"></i></div>
            <h4>Video Editing</h4>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor.
            </p>
          </div>
          <div className="service-item">
            <div className="icon"><i className="fa fa-rocket"></i></div>
            <h4>Seo Optimization</h4>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor.
            </p>
          </div>
          <div className="service-item">
            <div className="icon"><i className="fa fa-paint-brush"></i></div>
            <h4>Logo Design</h4>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;