'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/about.scss';

import youtubeIcon from '../../../assets/icons/youtube.png';
import twitterIcon from '../../../assets/icons/twitter.png';
import instagramIcon from '../../../assets/icons/instagram.png';
import githubIcon from '../../../assets/icons/github.png';

/**
* About() - Contains the HTML content for the About page component.
* @return returns the HTML content for the About page component
*/
function About(props) {
  return (
    <article className="container column">
    <h1 data-aos="flip-down">About</h1>
    <p data-aos="fade-right" data-aos-delay="150">I am Sam, a Software Engineering graduate from the University of Portsmouth. I am a motivated individual that looks to consistently improve my knowledge and abilities in numerous subject areas relating to technology such as distributed systems, cloud computing and web development. Alongside this, I am currently self-employed and operate SRP Designs, a business that provides bespoke design solutions for a variety of applications.</p>
    <div className="about-info-container">
    <div className="about-list-container">
    <div className="about-list" data-aos="fade-up" data-aos-delay="250">
    <h2>Competencies</h2>
    <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>ES6</li>
    <li>SQL</li>
    <li>React</li>
    </ul>
    </div>
    <div className="about-list" data-aos="fade-up" data-aos-delay="150">
    <h2>Interests</h2>
    <ul>
    <li>Front End Development</li>
    <li>Back End Development</li>
    <li>Web Development</li>
    <li>UI / UX</li>
    <li>Distributed Systems</li>
    <li>Cloud Computing</li>
    </ul>
    </div>
    </div>
    <div className="about-icons-container">
    <div className="icon-row">
    <a href="https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q" target="_blank" data-aos="fade-right" data-aos-delay="180">
    <img src={youtubeIcon} alt="SRP Designs YouTube"></img>
    </a>
    <a href="https://twitter.com/SRP_Designs" target="_blank" data-aos="fade-down" data-aos-delay="220">
    <img src={twitterIcon} alt="SRP Designs Twitter"></img>
    </a>
    </div>
    <div className="icon-row">
    <a href="https://www.instagram.com/_srpdesigns/" target="_blank" data-aos="fade-up" data-aos-delay="120">
    <img src={instagramIcon} alt="SRP Designs Instagram"></img>
    </a>
    <a href="https://github.com/Sam-RP1?tab=repositories" target="_blank" data-aos="fade-left" data-aos-delay="100">
    <img src={githubIcon} alt="SRP Designs GitHub"></img>
    </a>
    </div>
    </div>
    </div>
    </article>
  );
};

export default About;
