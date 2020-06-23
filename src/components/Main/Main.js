import React from 'react';
import './main.css';

import StyleSwitcher  from '../StyleSwitcher/StyleSwitcher';
import Toggler from '../common/Toggler/Toggler';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Service from '../Service/Service';
import About from '../About/About';
import Blog from '../Blog/Blog';

const Main = () => {
  return (
    <>
      <Toggler />
      <Profile />
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      <StyleSwitcher />
    </>
  )
}

export default Main;
