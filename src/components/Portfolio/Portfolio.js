import React from 'react';
import './portfolio.css';

import portfolio01 from '../../assets/image/01.png';
import porfolio02 from '../../assets/image/02.png';
import porfolio03 from '../../assets/image/03.png';
import porfolio04 from '../../assets/image/04.jpeg';
import porfolio05 from '../../assets/image/05.jpg';
import porfolio06 from '../../assets/image/06.jpg';

const Portfolio = () => {
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
          <button type="button" className="active" data-filter='all'>All</button>
          <button type="button" data-filter='web-design'>Web Design</button>
          <button type="button" data-filter='photography'>Photography</button>
          <button type="button" data-filter='wordpress'>Wordpress</button>
        </div>
      </div>
      <div className="row">
        <div className="grid-portfolio">
          <div className="portfolio-item" data-category="wordpress">
            <div className="portfolio-img">
              <img src={ portfolio01 } alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Wordpress</h4>
              <div className="portfolio-icon">
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="portfolio-item" data-category="photography">
            <div className="portfolio-img">
              <img src={ porfolio04 } alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Photography</h4>
              <div className="portfolio-icon">
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="portfolio-item" data-category="wordpress">
            <div className="portfolio-img">
              <img src={ porfolio02 } alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Wordpress</h4>
              <div className="portfolio-icon">
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="portfolio-item" data-category="photography">
            <div className="portfolio-img">
              <img src={ porfolio05 } alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Photography</h4>
              <div className="portfolio-icon">
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="portfolio-item" data-category="wordpress">
            <div className="portfolio-img">
              <img src={ porfolio03 } alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Wordpress</h4>
              <div className="portfolio-icon">
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="portfolio-item" data-category="web-design">
            <div className="portfolio-img">
              <img src={ porfolio06 } alt="portfolio" />
            </div>
            <div className="portfolio-info">
              <h4>Web Desing</h4>
              <div className="portfolio-icon">
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;