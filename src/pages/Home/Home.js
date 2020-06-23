import React from 'react';
import './home.css';

import { FullContainer, Row, Column } from 'react-system-grid';
import SideBar from '../../components/SideBar/SideBar';
import Main from '../../components/Main/Main';

const Home = () => {
  return (
    <FullContainer>
      <Row>
        <Column xlarge={2} large={3} medium={0} small={0}>
          <SideBar />
        </Column>
        <Column xlarge={10} large={9} medium={12} small={12}>
          <Main />
        </Column>
      </Row>
    </FullContainer>
  )
}

export default Home;