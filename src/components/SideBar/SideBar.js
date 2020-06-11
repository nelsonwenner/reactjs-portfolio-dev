import React from 'react';
import './sidebar.css';

import NavBar from '../NavBar/NavBar';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="/">Wenner</a>
      </div>
      <NavBar />
      <div className="copyright-text">
        &copy; 2020 Nelson Wenner
      </div>
    </div>
  )
}

export default SideBar;