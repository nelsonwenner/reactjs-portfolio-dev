import React from 'react';
import './toggler.css';

const Toggler = () => {
  
  const handlerClicked = (event) => {
    document.querySelector(".sidebar").classList.toggle("open");
    document.querySelector(".toggler").classList.toggle("open");
  }

  return (
    <div className="toggler hide" onClick={ handlerClicked }>
      <span></span>
    </div>
  )
}

export default Toggler;