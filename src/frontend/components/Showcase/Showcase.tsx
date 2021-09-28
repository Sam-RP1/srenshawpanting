import React from 'react';

// Components
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';

// Lib

// Styles
import './Showcase.scss';

/**
 * Exports Showcase component
 * @returns JSX.Element
 */
export const Showcase = (): JSX.Element => {
    return (
        <Section selector={'showcase'}>
            <Container classes={'showcase'}>
                <h1>test</h1>
            </Container>
        </Section>
    );
};
