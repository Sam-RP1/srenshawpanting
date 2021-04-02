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
            <a key={icon.id} href={icon.url} target='_blank' rel='noreferrer'>
                <div className='icon-wrapper tooltip'>
                    {icon.icon}
                    <Tooltip tip={icon.tooltip} position={'left'} />
                </div>
            </a>
        );
    });

    return (
        <Section classes={['center-center', 'connect']}>
            <Container>
                <article className='connect__content'>
                    <Heading importance={3} title={'Connect'} classes={['uppercase', 'spaced', 'underline']} />
                    <p>Get in touch, view my work or even support me via the platforms below.</p>
                    <p>For other enquiries use: samrpenquiries@gmail.com</p>
                    <div className='connect__content__icon-container'>{iconElems}</div>
                </article>
            </Container>
        </Section>
    );
};
