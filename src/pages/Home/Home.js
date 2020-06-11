import React from 'react';
import './home.css';

import SideBar from '../../components/SideBar/SideBar';
import Main from '../../components/Main/Main';

const Home = () => {
  return (
    <div className="full-container">
      <div className="row">
        <div className="column xlarge-2 large-3 medium-4 small-12">
          <SideBar />
        </div>
        <div className="column xlarge-10 large-9 medium-8 small-12">
          <Main />
        </div>
      </div>
    </div>
  )
}

export default Home;