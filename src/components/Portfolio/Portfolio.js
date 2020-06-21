import React from 'react';
import './portfolio.css';

import PortfolioItem from './PortfolioItem/PortfolioItem';
import ImageModal from './imageModal/ImageModal';

import portfolio01 from '../../assets/image/01.png';
import porfolio02 from '../../assets/image/02.png';
import porfolio03 from '../../assets/image/03.png';
import porfolio04 from '../../assets/image/04.jpeg';
import porfolio05 from '../../assets/image/05.jpg';
import porfolio06 from '../../assets/image/06.jpg';

const Portfolio = () => {

  const portfolioFilterClicked = (event) => {
    const filterContainer = document.querySelector(".portfolio-filter");
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const totalPortfolioItem = portfolioItems.length;
    
    const filterValue = event.target.getAttribute("data-filter");
    for (let i=0; i < totalPortfolioItem; i++) {
      if (filterValue === portfolioItems[i].getAttribute("data-category")) {
        portfolioItems[i].classList.remove('hide');
        portfolioItems[i].classList.add('show');
      } else {
        portfolioItems[i].classList.remove('show');
        portfolioItems[i].classList.add('hide');
      }

      if (filterValue === "all") {
        portfolioItems[i].classList.remove('hide');
        portfolioItems[i].classList.add('show');
      }
    }
  }

  return (
    <div className="portfolio">
      <div className="row">
        <div className="portfolio-title">
          <h2>Portfolio</h2>
          <span></span>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-filter">
          <button onClick={ portfolioFilterClicked } type="button" className="active" data-filter='all'>All</button>
          <button onClick={ portfolioFilterClicked } type="button" data-filter='web-design'>Web Design</button>
          <button onClick={ portfolioFilterClicked } type="button" data-filter='photography'>Photography</button>
          <button onClick={ portfolioFilterClicked } type="button" data-filter='wordpress'>Wordpress</button>
        </div>
      </div>
      <div className="row">
        <div className="grid-portfolio">
          <PortfolioItem 
            title={ "Wordpress" }
            imagePortfolio={ portfolio01 }
            category={ "wordpress" }
          />
          <PortfolioItem 
            title={ "Photography" }
            imagePortfolio={ porfolio04 }
            category={ "photography" }
          />
          <PortfolioItem 
            title={ "Wordpress" }
            imagePortfolio={ porfolio02 }
            category={ "wordpress" }
          />
          <PortfolioItem 
            title={ "Photography" }
            imagePortfolio={ porfolio05 }
            category={ "photography" }
          />
          <PortfolioItem 
            title={ "Wordpress" }
            imagePortfolio={ porfolio03 }
            category={ "wordpress" }
          />
          <PortfolioItem 
            title={ "Web Design" }
            imagePortfolio={ porfolio06 }
            category={ "web-design" }
          />
          <PortfolioItem 
            title={ "Web Design" }
            imagePortfolio={ porfolio06 }
            category={ "web-design" }
          />
        </div>
      </div>
      <ImageModal />
    </div>
  )
}

export default Portfolio;