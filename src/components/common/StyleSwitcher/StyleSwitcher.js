import React from 'react';
import './style-switcher.css';

import usePersistedState from '../../../hooks/usePersistedState';

const StyleSwitcher = () => {
  const [theme, setTheme] = usePersistedState('theme', 'dark');

  const handlerClicked = (event) => {
    document.querySelector(".style-switcher").classList.toggle("open");
  }

  const toggleTheme = () => {
    setTheme((prevState) => {
      const getTheme = {light: 'dark', dark: 'light'};
      document.body.classList.replace(prevState, getTheme[prevState]);
      return prevState === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <div className="style-switcher">
      <div className="toggle-style-switcher" onClick={ handlerClicked }>
        <i className="fa fa-cog fa-spin"></i>
      </div>
      <h5>Body Skin</h5>
      <label>
        <input type="radio" className="body-skin" name="body-style" value="light" defaultChecked={ theme === 'light' ? true : false } onClick={ toggleTheme } />
        Light
      </label>
      <label>
        <input type="radio" className="body-skin" name="body-style" value="dark" defaultChecked={ theme === 'dark' ? true : false } onClick={ toggleTheme } />
        Dark
      </label>
    </div>
  )
}

export default StyleSwitcher;