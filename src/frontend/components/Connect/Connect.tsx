import React from 'react';

import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';
import { Tooltip } from '../UI/Tooltip/Tooltip';

import { Icons } from '../../lib/interfaces';

import './Connect.scss';

type ConnectProps = {
    icons: Icons;
};

export const Connect = ({ icons }: ConnectProps): JSX.Element => {
    const moonOrbits = ['orbit-1', 'orbit-2', 'orbit-3', 'orbit-4', 'orbit-5', 'orbit-6', 'orbit-7', 'orbit-8'];

    const connectPlanets = icons.map(({ id, icon, url }, i) => {
        const index = Math.floor(Math.random() * moonOrbits.length);
        const orbit = moonOrbits.splice(index, 1);

        return (
            <div key={'connect-' + id} className='connect__planet-system'>
                <div className={'connect__moon-container ' + orbit[0]}>
                    <div className='connect__moon'>
                        <div className='connect__moon__body'>
                            <span className='crater--1'></span>
                            <span className='crater--2'></span>
                            <span className='crater--3'></span>
                        </div>
                    </div>
                </div>

                <div className='connect__planet-container'>
                    <div className='connect__planet'>
                        <a href={url} target='__blank' className={'connect__planet__body connect__planet__body--' + id}>
                            <span id={'connect-planet-' + i} className='connect__planet__body__icon'>
                                {icon}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Section selector={'connect'} classes={[]}>
            <Container classes={'connect'}>
                <>
                    <Timeline title={'connect'} megaTitle={true} leaderLine={true} />

                    <div className='connect__planets-container'>{connectPlanets}</div>
                </>
            </Container>
        </Section>
    );
};
