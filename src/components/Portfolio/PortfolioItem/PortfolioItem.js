import React from 'react';
import './portfolio-item.css';

const PortfolioItem = ({ title, imagePortfolio, category }) => {
  
  const changeItem = (event) => {
    const srcImg = event.target.getAttribute("url-img");
    
    const lightBox = document.querySelector(".lightbox");
    const lightBoxImg = document.querySelector(".lightbox-img");

    lightBox.classList.toggle("open");
    lightBoxImg.src = srcImg;
  }
  
  return (
    <div onClick={ changeItem } className="portfolio-item shadow-dark" data-category={ category }>
      <div className="portfolio-img">
        <img src={ imagePortfolio } alt="portfolio" />
      </div>
      <div className="portfolio-info" url-img={ imagePortfolio }>
        <h4>{ title }</h4>
        <div className="portfolio-icon">
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;