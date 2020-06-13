import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="container-about">
      <div className="row">
        <div className="about-title">
          <h2>About Me</h2>
          <span></span>
        </div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>I'm Nelson Wenner and <span>FullStack Developer</span></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="row">
          <div className="personal-info">
            <div className="column xlarge-7 large-12 medium-12 small-12">
              <div className="info-item">
                <div>
                  <p>Birthday: <span>5 June 1992</span></p>
                  <p>Age: <span>28</span></p>
                  <p>Website: <span>www.domain.com</span></p>
                  <p>Email: <span>info@gmail.com</span></p>
                </div>
                <div>
                  <p>Phone: <span>0800 000 000</span></p>
                  <p>City: <span>Mumbai</span></p>
                  <p>Freelance: <span>Available</span></p>
                  <p>Degree: <span>M.Tech</span></p>
                </div>
              </div>
              <div className="buttons">
                <button className="btn-about">Download CV</button>
                <button className="btn-about">Hire Me</button>
              </div>
            </div>
          </div>
          <div className="skills-info">
            <div className="column xlarge-5 large-12 medium-12 small-12">
              <div className="skills-item">
                <div className="item-skill">
                  <h4>Javascript</h4>
                  <div className="progress">
                    <div className="progress-in" style={{width: '86%'}}></div>
                    <div className="skill-percent">86%</div>
                  </div>
                </div>
                <div className="item-skill">
                  <h4>Css</h4>
                  <div className="progress">
                    <div className="progress-in" style={{width: '80%'}}></div>
                    <div className="skill-percent">80%</div>
                  </div>
                </div>
                <div className="item-skill">
                  <h4>Python</h4>
                  <div className="progress">
                    <div className="progress-in" style={{width: '90%'}}></div>
                    <div className="skill-percent">90%</div>
                  </div>
                </div>
                <div className="item-skill">
                  <h4>Docker</h4>
                  <div className="progress">
                    <div className="progress-in" style={{width: '95%'}}></div>
                    <div className="skill-percent">95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;