import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Tooltip } from '../UI/Tooltip/Tooltip';

import { Icons } from '../../lib/interfaces';

import './Connect.scss';

type ConnectProps = {
    icons: Icons;
};

export const Connect = ({ icons }: ConnectProps): JSX.Element => {
    const iconElems = icons.map((icon) => {
        return (
            <div key={icon.id} className='icon-wrapper tooltip'>
                <a href={icon.url} target='_blank' rel='noreferrer'>
                    {icon.icon}
                    <Tooltip tip={icon.tooltip} position={'left'} />
                </a>
            </div>
        );
    });

    return (
        <Section classes={['top', 'center-center']}>
            <Container classes={'connect'}>
                <article className='connect__content'>
                    <Heading importance={3} title={'Connect'} classes={['uppercase', 'spaced', 'underline']} />
                    <div className='connect__content__icon-container'>{iconElems}</div>
                    <p>Get in touch, view my work or even support me via the platforms above.</p>
                    <p>However, if you prefer to email then you can contact me directly using:</p>
                    <p>samrpenquiries@gmail.com</p>
                </article>
            </Container>
        </Section>
    );
};
