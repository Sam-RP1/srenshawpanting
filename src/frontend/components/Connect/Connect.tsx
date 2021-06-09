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
    const test = icons.map((icon) => {
        return (
            <div key={icon.id} className='connect__ps'>
                <div className='connect__ps__wrapper'>
                    <div className='connect__ps__celestial-body connect__ps__celestial-body--planet'>
                        <span id={icon.id}>{icon.icon}</span>
                    </div>
                </div>

                <div className='connect__ps__wrapper'>
                    <div className='connect__ps__celestial-body connect__ps__celestial-body--satellite'>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Section selector={'connect'} classes={[]}>
            <Container classes={'connect'}>
                <>
                    <Timeline title={'Connect'} megaTitle={true} />

                    <div className='connect__icons-container'>{test}</div>
                </>
            </Container>
        </Section>
    );
};
