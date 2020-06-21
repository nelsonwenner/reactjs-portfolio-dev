import React from 'react';
import './style-switcher.css';

const StyleSwitcher = () => {

  const handlerClicked = (event) => {
    document.querySelector(".style-switcher").classList.toggle("open");
  }

  return (
    <div className="style-switcher">
      <div className="toggle-style-switcher" onClick={ handlerClicked }>
        <i className="fa fa-cog fa-spin"></i>
      </div>
      <h5>Body Skin</h5>
      <label>
        <input type="radio" className="body-skin" name="body-style" value="light" checked="true"/>
        Light
      </label>
      <label>
        <input type="radio" className="body-skin" name="body-style" value="dark" />
        Dark
      </label>
    </div>
  )
}

export default StyleSwitcher;