import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './About.scss';
import './Code.scss';

// type AboutProps = {};

export const About = (): JSX.Element => {
    return (
        <Section classes={['top', 'center-center']}>
            <Container classes={'about'}>
                <>
                    <article className='code__container'>
                        <p className='code__line'>
                            <span className='code--keyword'>const</span> <span className='code--function'>About</span>{' '}
                            <span className='code--symbol'>=</span> ( )<span className='code--symbol'>:</span>{' '}
                            <span className='code--special'>string</span>[]{' '}
                            <span className='code--keyword'>={'>'}</span> {'{'}
                        </p>

                        <p className='code__line'>
                            <span className='code--keyword'>return</span> competenciesArr;
                        </p>
                        <p className='code__line'>{'}'}</p>
                        <br />

                        {/* DATA BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span> <span className='code--function'>srpData</span>{' '}
                            <span className='code--symbol'>=</span>
                            {' {'}
                        </p>
                        <p className='code__line code__line--indent--4'>
                            name: <span className='code--string'>&apos;Samuel Renshaw-Panting&apos;</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            age: <span className='code--integer'>22</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            gender: <span className='code--string'>&apos;Male&apos;</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            dateOfBirth: <span className='code--integer'>906726600000</span>,
                        </p>
                        <p className='code__line code__line--indent--4'>
                            email: <span className='code--string'>&apos;srenshawpanting@gmail.com&apos;</span>,
                        </p>
                        <p className='code__line'>{'}'};</p>
                        <br />

                        {/* DESCRIPTION BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span>{' '}
                            <span className='code--function'>description</span> <span className='code--symbol'>=</span>{' '}
                            <span className='code--string'>
                                &apos;Hi there! I&apos;m Sam, a 22-year-old Web Developer and Software Engineering
                                graduate. I&apos;m an enthusiastic guy with a passion for the web and its multitude of
                                technologies.
                            </span>{' '}
                            <span className='code--string'>
                                I like to compose captivating designs, create smart user interfaces, solve complex
                                problems, squash troublesome bugs, develop rich web experiences and web applications.
                            </span>{' '}
                            <span className='code--string'>
                                As well as, I enjoy consistently pushing myself by learning new languages, frameworks
                                and technologies in addition to further improving my abilities in ones I am already
                                familiar with.
                            </span>{' '}
                            <span className='code--string'>
                                When I&apos;m not learning, conceptualising, designing or developing, you&apos;ll most
                                likely find me either exercising, playing with my dog, listening to music or being below
                                average at chess.&apos;
                            </span>
                            ;
                        </p>
                        <br />

                        {/* COMPETENCIES BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span>{' '}
                            <span className='code--function'>competencies</span> <span className='code--symbol'>=</span>{' '}
                            [
                        </p>
                        <p className='code__line code__string code__line--indent--4'>
                            <span>&apos;HTML&apos;</span>, <span>&apos;CSS&apos;</span>, <span>&apos;JS&apos;</span>,{' '}
                            <span>&apos;SASS&apos;</span>, <span>&apos;React&apos;</span>,{' '}
                            <span>&apos;Redux&apos;</span>, <span>&apos;Jest&apos;</span>,{' '}
                            <span>&apos;Enzyme&apos;</span>, <span>&apos;MySQL&apos;</span>,{' '}
                            <span>&apos;NoSQL&apos;</span>, <span>&apos;Webpack&apos;</span>,{' '}
                            <span>&apos;Node.js&apos;</span>, <span>&apos;npm&apos;</span>,{' '}
                            <span>&apos;Express.js&apos;</span>, <span>&apos;Websockets&apos;</span>,{' '}
                            <span>&apos;Socket.io&apos;</span>, <span>&apos;PWA&apos;</span>,{' '}
                            <span>&apos;SPA&apos;</span>, <span>&apos;AWS&apos;</span>, <span>&apos;GCP&apos;</span>
                        </p>
                        <p className='code__line'>];</p>
                        <br />

                        {/* INTERESTS BLOCK */}
                        <p className='code__line'>
                            <span className='code--keyword'>const</span>{' '}
                            <span className='code--function'>interests</span> <span className='code--symbol'>=</span> [
                        </p>
                        <p className='code__line code__string code__line--indent--4'>
                            <span>&apos;Web Design&apos;</span>, <span>&apos;UI&apos;</span>,{' '}
                            <span>&apos;UX&apos;</span>, <span>&apos;Frontend Development&apos;</span>,{' '}
                            <span>&apos;Backend Development&apos;</span>, <span>&apos;Fullstack Development&apos;</span>
                            , <span>&apos;Cloud Computing&apos;</span>, <span>&apos;Drones&apos;</span>,{' '}
                            <span>&apos;Photography&apos;</span>, <span>&apos;Fitness&apos;</span>,{' '}
                            <span>&apos;Nutrition&apos;</span>, <span>&apos;NFL&apos;</span>,{' '}
                            <span>&apos;Chess&apos;</span>, <span>&apos;Music&apos;</span>,{' '}
                            <span>&apos;Halo&apos;</span>
                        </p>
                        <p className='code__line'>];</p>
                        <br />

                        <p>
                            Hi there! I&apos;m Sam, a 22-year-old Web Developer and Software Engineering graduate.
                            I&apos;m an enthusiastic guy with a passion for the web and its multitude of technologies.
                        </p>
                        <p>
                            I like to compose captivating designs, create smart user interfaces, solve complex problems,
                            squash troublesome bugs, develop rich web experiences and web applications.
                        </p>
                        <p>
                            As well as, I enjoy consistently pushing myself by learning new languages, frameworks and
                            technologies in addition to further improving my abilities in ones I am already familiar
                            with.
                        </p>
                        <p>
                            When I&apos;m not learning, conceptualising, designing or developing, you&apos;ll most
                            likely find me either exercising, playing with my dog, listening to music or being below
                            average at chess.
                        </p>
                    </article>
                </>
            </Container>
        </Section>
    );
};
