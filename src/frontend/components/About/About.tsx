import React, { useState } from 'react';

import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';

import { Profile } from './files/Profile';
import { Education } from './files/Education';
import { Experience } from './files/Experience';
import { Skills } from './files/Skills';

import { reactIcon, jsIcon } from '../../lib/icons';

import './About.scss';

export const About = (): JSX.Element => {
    const [openTab, setOpenTab] = useState('Profile.tsx');

    const tabs = [
        { id: 'Profile.tsx', icon: reactIcon.icon, file: <Profile /> },
        { id: 'Education.tsx', icon: reactIcon.icon, file: <Education /> },
        { id: 'Experience.tsx', icon: reactIcon.icon, file: <Experience /> },
        { id: 'Skills.js', icon: jsIcon.icon, file: <Skills /> },
    ];

    return (
        <Section selector={'about'}>
            <Container classes={'about'}>
                <>
                    <Timeline title={'About'} megaTitle={true} />

                    <div className='editor'>
                        <div className='editor__header'>
                            <div className='editor__header__controls'>
                                <div className='close'></div>
                                <div className='minimise'></div>
                                <div className='restore'></div>
                            </div>

                            <div className='editor__header__title'>
                                <p>
                                    srenshawpanting <span>- {openTab}</span>
                                </p>
                            </div>
                        </div>

                        <div className='editor__tabs'>
                            {tabs.map((tab) => {
                                const isActive = tab.id === openTab ? ' active' : '';
                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => setOpenTab(tab.id)}
                                        className={'editor__tab' + isActive}
                                    >
                                        {tab.icon}
                                        <p>{tab.id}</p>
                                        <span>&#x2715;</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className='editor__window'>
                            {tabs.map((tab) => {
                                const activeFile = tab.id === openTab ? tab.file : '';
                                return activeFile;
                            })}
                        </div>
                    </div>

                    <article className='code__container'>
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
                        <p className='code__line'>&nbsp;</p>

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
                    </article>
                </>
            </Container>
        </Section>
    );
};
