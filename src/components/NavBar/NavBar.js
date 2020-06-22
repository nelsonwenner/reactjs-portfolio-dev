import React from 'react';
import './navbar.css';

const NavBar = () => {

  const handlerClicked = (event) => {
    const actives = document.querySelectorAll(".nav li a");
    const sections = document.querySelectorAll(".section");
    actives.forEach(active => active.classList.remove("active"));
    event.target.classList.add("active");
    showSection(sections, event.target);
  }

  const showSection = (sections, elements) => {
    sections.forEach(section => section.classList.add("hide"));
    const target = elements.getAttribute("href").split("#")[1];
    document.querySelector(`#${target}`).classList.remove("hide");
  }

  return (
    <ul className="nav">
      <li><a onClick={ handlerClicked } href="#home" className="active"><i className="fa fa-home"></i>Home</a></li>
      <li><a onClick={ handlerClicked } href="#about"><i className="fa fa-user"></i>About</a></li>
      <li><a onClick={ handlerClicked } href="#services"><i className="fa fa-list"></i>Services</a></li>
      <li><a onClick={ handlerClicked } href="#portfolio"><i className="fa fa-briefcase"></i>Portfolio</a></li>
      <li><a onClick={ handlerClicked } href="#blog"><i className="fa fa-envelope"></i>Blog</a></li>
      <li><a onClick={ handlerClicked } href="#contact"><i className="fa fa-comments"></i>Contact</a></li>
    </ul>
  )
}

export default NavBar;