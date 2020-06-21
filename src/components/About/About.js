import React from 'react';
import './about.css';

import Timeline from './Timeline/Timeline';

const About = () => {
  return (
    <div className="about" id="about">
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
        <div className="row margin-top-40">
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
            <div className="margin-top-25">
              <button className="btn-about">Download CV</button>
              <button className="btn-about">Hire Me</button>
            </div>
          </div>
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
        <div className="row margin-top-30">
          <div className="column xlarge-6 large-12 medium-12 small-12">
            <div className="education">
              <h2 className="title">Education</h2>
              <div className="row">
                <div className="timeline-box">
                  <div className="time-line shadow-dark">
                    <Timeline 
                      calendar={ '2013 - 2015' }
                      title={ 'Master In Computer Science' }
                    />
                    <Timeline 
                      calendar={ '2011 - 2013' }
                      title={ 'Studied At IFPI' }
                    />
                    <Timeline 
                      calendar={ '2008 - 2011' }
                      title={ 'Technologist' }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column xlarge-6 large-12 medium-12 small-12">
            <div className="experience">
              <h2 className="title">Experience</h2>
              <div className="row">
                <div className="timeline-box">
                  <div className="time-line shadow-dark">
                    <Timeline 
                      calendar={ '2013 - 2015' }
                      title={ 'Backend Developer' }
                    />
                    <Timeline 
                      calendar={ '2011 - 2013' }
                      title={ 'Fontend Developer' }
                    />
                    <Timeline 
                      calendar={ '2008 - 2011' }
                      title={ 'Graphic Designer' }
                    />
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