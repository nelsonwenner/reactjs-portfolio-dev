import React from 'react';
import './navbar.css';

const NavBar = () => {

  const handlerClicked = (event) => {
    const actives = document.querySelectorAll(".nav li a");
    actives.forEach(active => active.classList.remove("active"));
    event.target.classList.add("active");
  }

  return (
    <ul className="nav">
      <li onClick={ handlerClicked }><a href="#home" className="active"><i className="fa fa-home"></i>Home</a></li>
      <li onClick={ handlerClicked }><a href="#about"><i className="fa fa-user"></i>About</a></li>
      <li onClick={ handlerClicked }><a href="#services"><i className="fa fa-list"></i>Services</a></li>
      <li onClick={ handlerClicked }><a href="#portfolio"><i className="fa fa-briefcase"></i>Portfolio</a></li>
      <li onClick={ handlerClicked }><a href="#blog"><i className="fa fa-envelope"></i>Blog</a></li>
      <li onClick={ handlerClicked }><a href="#contact"><i className="fa fa-comments"></i>Contact</a></li>
    </ul>
  )
}

export default NavBar;