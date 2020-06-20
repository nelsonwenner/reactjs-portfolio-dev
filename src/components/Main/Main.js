import React from 'react';
import './main.css';

import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Service from '../Service/Service';
import About from '../About/About';
import Blog from '../Blog/Blog';

const Main = () => {
  return (
    <div className="container-main">
      <Profile />
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  )
}

export default Main;
