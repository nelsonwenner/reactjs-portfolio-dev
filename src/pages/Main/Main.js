import React from 'react';
import './main.css';

import StyleSwitcher  from '../../components/common/StyleSwitcher/StyleSwitcher';
import { FullContainer, Row, Column } from 'react-system-grid';
import Toggler from '../../components/common/Toggler/Toggler';
import Portfolio from '../../components/Portfolio/Portfolio';
import SideBar from '../../components/SideBar/SideBar';
import Contact from '../../components/Contact/Contact';
import Profile from '../../components/Profile/Profile';
import Service from '../../components/Service/Service';
import About from '../../components/About/About';
import Blog from '../../components/Blog/Blog';

const Main = () => {
  return (
    <FullContainer>
      <Row>
        <Column xlarge={2} large={3} medium={0} small={0}>
          <SideBar />
        </Column>
        <Column xlarge={10} large={9} medium={12} small={12}>
          <Toggler />
          <Profile />
          <About />
          <Service />
          <Portfolio />
          <Blog />
          <Contact />
          <StyleSwitcher />
        </Column>
      </Row>
    </FullContainer>
  )
}

export default Main;