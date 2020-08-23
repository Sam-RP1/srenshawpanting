'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../../styles/root.scss';
import '../../../styles/about.scss';

import youtubeIcon from '../../../assets/icons/youtube.png';
import linkedinIcon from '../../../assets/icons/linkedin.png';
import instagramIcon from '../../../assets/icons/instagram.png';
import githubIcon from '../../../assets/icons/github.png';

/**
* About - Class for the About component.
*/
class About extends Component {
  render () {
    return (
      <article className="container column">
      <h1 data-aos="flip-down">About</h1>
      <p data-aos="fade-right" data-aos-delay="150">I am Sam, a Software Engineering graduate from the University of Portsmouth. I am a motivated individual that looks to consistently improve my knowledge and proficiency in numerous subject areas relating to information technology such as front end development, back end development, web development and cloud computing. Alongside this, I am currently self-employed and operate SRP Designs, a business that provides bespoke web design solutions for clients in Surrey.</p>
      <div className="about-info-container">
      <AboutList />
      <AboutIcons />
      </div>
      </article>
    );
  }
};

/**
* AboutList - Contains the Lists for the Contact component.
*/
class AboutList extends Component {
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
      }
    };
  }

  render() {
    return (
      <div className="about-list-container">
      <div className="about-list" data-aos="fade-up" data-aos-delay="250">
      <h2>{this.state.listOne.title}</h2>
      <ul>
      {this.state.listOne.list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      </div>
      <div className="about-list" data-aos="fade-up" data-aos-delay="150">
      <h2>{this.state.listTwo.title}</h2>
      <ul>
      {this.state.listTwo.list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      </div>
      </div>
    )
  }
}

/**
* AboutIcons - Contains the Icons for the Contact component.
*/
class AboutIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: {
        rowOne: [
          {
            href: "https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q",
            src: youtubeIcon,
            alt: "SRP Designs YouTube"
          },
          {
            href: "https://www.instagram.com/_srpdesigns/",
            src: instagramIcon,
            alt: "SRP Designs Instagram"
          }
        ],
        rowTwo: [
          {
            href: "https://www.linkedin.com/in/samuel-renshaw-panting/",
            src: linkedinIcon,
            alt: "Samuel Renshaw Panting Linkedin"
          },
          {
            href: "https://github.com/Sam-RP1?tab=repositories",
            src: githubIcon,
            alt: "SRP Designs GitHub"
          }
        ]
      },
      aos_data: ["fade-right", "fade-up", "fade-down", "fade-left"],
      aos_delay: ["180", "120", "220", "100"],
    };
  }

  render() {
    return (
      <div className="about-icons-container">
      <div className="icon-row">
      {this.state.icons.rowOne.map((item, i) =>
        <a key={i} href={item.href} target="_blank" data-aos={this.state.aos_data[i]} data-aos-delay={this.state.aos_delay[i]}>
        <img src={item.src} alt={item.alt}></img>
        </a>
      )}
      </div>
      <div className="icon-row">
      {this.state.icons.rowTwo.map((item, i) =>
        <a key={i} href={item.href} target="_blank" data-aos={this.state.aos_data[i+2]} data-aos-delay={this.state.aos_delay[i+2]}>
        <img src={item.src} alt={item.alt}></img>
        </a>
      )}
      </div>
      </div>
    )
  }
}

export default About;
