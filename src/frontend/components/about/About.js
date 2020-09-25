'use strict';

import React from 'react';

import '../../styles/root.scss';
import './About.scss';

import Lists from './Lists';
import Icons from './Icons';

import youtubeIcon from '../../assets/icons/youtube.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../../assets/icons/instagram.png';
import githubIcon from '../../assets/icons/github.png';

/**
* About - The About component.
*/
const About = () => {
  const listOne = {
    title: "Competencies",
    list: ["HTML", "CSS / Sass", "JS / JSX", "MySQL", "React", "Webpack"]
  };
  const listTwo = {
    title: "Interests",
    list: ["Front End Development", "Back End Development", "Web Development", "UI / UX", "Distributed Systems", "Cloud Computing"]
  };
  const icons = {
    rowOne: [
      { href: "https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q", src: <i class="fab fa-youtube"></i> },
      { href: "https://www.instagram.com/_srpdesigns/", src: <i class="fab fa-instagram"></i> },
    ],
    rowTwo: [
      { href: "https://www.linkedin.com/in/samuel-renshaw-panting/", src: <i class="fab fa-linkedin-in"></i> },
      { href: "https://github.com/Sam-RP1?tab=repositories", src: <i class="fab fa-github"></i> }
    ]
  };

  return (
    <section id="about" className="section-default h-auto padding-6016">
    <article className="container column">
    <h1 data-aos="flip-down">About</h1>
    <p data-aos="fade-right" data-aos-delay="150">I am Sam, a Software Engineering graduate from the University of Portsmouth. I am a motivated individual that looks to consistently improve my knowledge and proficiency in numerous subject areas relating to information technology such as front end development, back end development, web development and cloud computing. Alongside this, I am currently self-employed and operate SRP Designs, a business that provides bespoke web design solutions for clients in Surrey.</p>
    <div className="about-info-container">
    <Lists listOne={listOne} listTwo={listTwo} />
    <Icons icons={icons} />
    </div>
    </article>
    </section>
  );
};

export default About;
