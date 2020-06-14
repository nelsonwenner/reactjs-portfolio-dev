import React from 'react';
import './main.css';

import Profile from '../Profile/Profile';
import Service from '../Service/Service';
import About from '../About/About';

const Main = () => {
  return (
    <div className="container-main">
      <Profile />
      <About />
      <Service />
    </div>
  )
}

export default Main;