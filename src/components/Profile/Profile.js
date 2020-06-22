import React from 'react';
import './profile.css';

import ProfileImg from '../../assets/image/nelsonwenner.jpeg';

const Profile = () => {
  return (
    <div className="profile section" id="home">
      <div className="container-profile">
        <div className="intro">
          <img src={ ProfileImg } alt="profile" className="shadow-dark" />
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

export default Profile;