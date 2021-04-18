'use strict';

import React from 'react';

import '../../styles/root.scss';
import './About.scss';

import Lists from './Lists';
import Icons from './Icons';

/**
 * About - The About component.
 */
const About = () => {
    const listOne = {
        title: 'Competencies',
        list: ['HTML', 'CSS / SASS', 'JS / ES6 / JSX', 'React', 'MySQL', 'Webpack'],
    };
    const listTwo = {
        title: 'Interests',
        list: ['Web Design', 'Front-end Web Development', 'Backend Development', 'UI / UX', 'Cloud Computing'],
    };
    const icons = {
        rowOne: [
            { href: 'https://www.youtube.com/channel/UCDDIlIQ1pU7TAl0bjth6G2Q', src: <i class='fab fa-youtube'></i> },
            { href: 'https://www.instagram.com/_srpdesigns/', src: <i class='fab fa-instagram'></i> },
        ],
        rowTwo: [
            { href: 'https://www.linkedin.com/in/samuel-renshaw-panting/', src: <i class='fab fa-linkedin-in'></i> },
            { href: 'https://github.com/Sam-RP1?tab=repositories', src: <i class='fab fa-github'></i> },
        ],
    };

    return (
        <section id='about' className='section-default h-auto padding-6016'>
            <article className='container column'>
                <h1 data-aos='flip-down'>About</h1>
                <p data-aos='fade-right' data-aos-delay='150'>
                    Hi there! I&apos;m Sam, a 22-year-old Web Developer and Software Engineering graduate. I&apos;m
                    an enthusiastic guy with a passion for the web and its multitude of technologies. I like to compose captivating designs, create smart user interfaces, solve complex problems,
                    squash troublesome bugs, develop rich web experiences and web applications. As well as, I enjoy consistently pushing myself by learning new languages, frameworks and
                    technologies in addition to further improving my abilities in ones I am already familiar with. When I&apos;m not learning, conceptualising, designing or developing, you&apos;ll most likely
                    find me either exercising, playing with my dog, listening to music or being below average at
                    chess.
                </p>
                <div className='about-info-container'>
                    <Lists listOne={listOne} listTwo={listTwo} />
                    <Icons icons={icons} />
                </div>
            </article>
        </section>
    );
};

export default About;
