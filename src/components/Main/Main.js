import React from 'react';
import './main.css';

import Profile from '../../assets/image/nelsonwenner.jpeg';

const Main = () => {
  return (
    <div className="main">
      <div className="container-main">
        <div className="intro">
          <img src={ Profile } alt="profile" className="shadow-dark" />
          <h1>Nelson Wenner</h1>
          <p>I'm a FullStack Web Developer</p>
          <div className="social-links">
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-instagram"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;