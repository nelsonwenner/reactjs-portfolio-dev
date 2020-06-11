import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <ul className="nav">
      <li><a href="home" className="active"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="home"><i className="fa fa-user"></i>About</a></li>
      <li><a href="home"><i className="fa fa-list"></i>Services</a></li>
      <li><a href="home"><i className="fa fa-briefcase"></i>Portfolio</a></li>
      <li><a href="home"><i className="fa fa-envelope"></i>Blog</a></li>
      <li><a href="home"><i className="fa fa-comments"></i>Contact</a></li>
    </ul>
  )
}

export default NavBar;