import React, { useState } from 'react';

// Components
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';

// About Component Tab Files
import { Profile } from './files/Profile';
import { Education } from './files/Education';
import { Experience } from './files/Experience';
import { Data } from './files/Data';

// Lib
import { reactIcon, jsIcon } from '../../lib/icons';

// Styles
import './About.scss';

/**
 * Exports About component
 * @returns JSX.Element
 */
export const About = (): JSX.Element => {
    const [openTab, setOpenTab] = useState('Profile.tsx');

    const tabs = [
        { id: 'Profile.tsx', icon: reactIcon.icon, file: <Profile /> },
        { id: 'Education.tsx', icon: reactIcon.icon, file: <Education /> },
        { id: 'Experience.tsx', icon: reactIcon.icon, file: <Experience /> },
        { id: 'Data.js', icon: jsIcon.icon, file: <Data /> },
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
                                    <a
                                        key={tab.id}
                                        onClick={() => setOpenTab(tab.id)}
                                        className={'editor__tab' + isActive}
                                    >
                                        {tab.icon}
                                        <p>{tab.id}</p>
                                        <span>&#x2715;</span>
                                    </a>
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
                </>
            </Container>
        </Section>
    );
};
