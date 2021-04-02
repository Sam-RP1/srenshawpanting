import React from 'react';

import { Heading } from '../UI/Typography/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';

import './Splash.scss';

// type SplashProps = {};

export const Splash = (): JSX.Element => {
    return (
        <Section classes={['end-center', 'splash']}>
            <>
                <div className='splash__filter'></div>
                <Container classes={'splash__content'}>
                    <>
                        <Heading importance={3} title={'Samuel Renshaw-Panting'} classes={['spaced']} />
                        <Heading
                            importance={5}
                            title={'Software Engineering Graduate & Web Developer'}
                            classes={['spaced']}
                        />
                    </>
                </Container>
            </>
        </Section>
    );
};
