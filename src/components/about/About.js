'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './About.scss';

import AboutLists from './AboutLists.js';
import AboutIcons from './AboutIcons.js';

import youtubeIcon from '../../assets/icons/youtube.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../../assets/icons/instagram.png';
import githubIcon from '../../assets/icons/github.png';

/**
* About - Class for the About component.
*/
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOne: {
        title: "Competencies",
        list: ["HTML", "CSS / Sass", "JS / JSX", "MySQL", "React", "Webpack"]
      },
      listTwo: {
        title: "Interests",
        list: ["Front End Development", "Back End Development", "Web Development", "UI / UX", "Distributed Systems", "Cloud Computing"]
      },
      icons: {
        rowOne: [
          { href: "https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q", src: youtubeIcon, alt: "SRP Designs YouTube" },
          { href: "https://www.instagram.com/_srpdesigns/", src: instagramIcon, alt: "SRP Designs Instagram" },
        ],
        rowTwo: [
          { href: "https://www.linkedin.com/in/samuel-renshaw-panting/", src: linkedinIcon, alt: "Samuel Renshaw Panting Linkedin" },
          { href: "https://github.com/Sam-RP1?tab=repositories", src: githubIcon, alt: "Samuel Renshaw Panting GitHub" }
        ]
      }
    };
  }

  render () {
    return (
      <article className="container column">
      <h1 data-aos="flip-down">About</h1>
      <p data-aos="fade-right" data-aos-delay="150">I am Sam, a Software Engineering graduate from the University of Portsmouth. I am a motivated individual that looks to consistently improve my knowledge and proficiency in numerous subject areas relating to information technology such as front end development, back end development, web development and cloud computing. Alongside this, I am currently self-employed and operate SRP Designs, a business that provides bespoke web design solutions for clients in Surrey.</p>
      <div className="about-info-container">
      <AboutLists listOne={this.state.listOne} listTwo={this.state.listTwo} />
      <AboutIcons icons={this.state.icons} />
      </div>
      </article>
    );
  }
};

export default About;
