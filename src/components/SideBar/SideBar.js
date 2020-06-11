import React from 'react';
import './sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="/">Wenner</a>
      </div>
      <ul className="nav">
        <li><a href="home"><i className="fa fa-home"></i>Home</a></li>
        <li><a href="home"><i className="fa fa-user"></i>About</a></li>
        <li><a href="home"><i className="fa fa-list"></i>Services</a></li>
        <li><a href="home"><i className="fa fa-briefcase"></i>Portfolio</a></li>
        <li><a href="home"><i className="fa fa-envelope"></i>Blog</a></li>
        <li><a href="home"><i className="fa fa-comments"></i>Contact</a></li>
      </ul>
      <div className="copyright-text">
        &copy; 2020 Nelson Wenner
      </div>
    </div>
  )
}

export default SideBar;