import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

import './About.scss';

// type AboutProps = {};

export const About = (): JSX.Element => {
    return (
        <Section classes={['center-center', 'about']}>
            <Container>
                <article className='about__content'>
                    <Heading importance={3} title={'About'} classes={['uppercase', 'spaced', 'underline']} />
                    <p className=''>
                        I am Sam, a Software Engineering graduate from the University of Portsmouth. I am a motivated
                        individual who consistently improves my knowledge and proficiency in numerous subject areas
                        relating to information technology. Such areas include web design, front-end web development,
                        backend development and cloud computing.
                    </p>
                    <div className='about__content__lists-container'>
                        <div className='about__content__lists-container__list'>
                            <Heading importance={4} title={'Competencies:'} classes={['spaced']} />
                            <ul>
                                <li>HTML</li>
                                <li>CSS & SASS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Jest & Enzyme</li>
                                <li>MySQL</li>
                                <li>Webpack</li>
                                <li>Express</li>
                                <li>Socket.io</li>
                            </ul>
                        </div>
                        <div className='about__content__lists-container__list'>
                            <Heading importance={4} title={'Interests:'} classes={['spaced']} />
                            <ul>
                                <li>Web Design</li>
                                <li>UI / UX</li>
                                <li>Frontend Web Development</li>
                                <li>Backend Development</li>
                                <li>Cloud Computing</li>
                            </ul>
                        </div>
                    </div>
                    <div className='about__content__icons-container'>
                        <a href='#'>
                            <div className='icon-wrapper'>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                        </a>
                        <a href='#'>
                            <div className='icon-wrapper'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </a>
                        <a href='#'>
                            <div className='icon-wrapper'>
                                <FontAwesomeIcon icon={faChessKnight} />
                            </div>
                        </a>
                        <a href='#'>
                            <div className='icon-wrapper'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        </a>
                        <a href='#'>
                            <div className='icon-wrapper'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </a>
                    </div>
                </article>
            </Container>
        </Section>
    );
};
