import React from 'react';
import './main.css';

import Portfolio from '../Portfolio/Portfolio';
import Profile from '../Profile/Profile';
import Service from '../Service/Service';
import About from '../About/About';

const Main = () => {
  return (
    <div className="container-main">
      <Profile />
      <About />
      <Service />
      <Portfolio />
    </div>
  )
}

export default Main;
