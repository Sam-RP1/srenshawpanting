import React from 'react';

// Components
import { Section } from '../../UI/Section/Section';
import { Container } from '../../UI/Container/Container';
import { Timeline } from '../../UI/Timeline/Timeline';

type FeaturesProps = {
    data?: any;
};

/**
 * Exports Showcase component
 * @returns JSX.Element
 */
export const Features = ({ data }: FeaturesProps): JSX.Element => {
    return (
        <Section selector={'features'}>
            <>
                <div className='mask'></div>
                <Container classes={'showcase__features'}>
                    <Timeline title={'Features'} megaTitle={false} modifiers={['inverse']} />
                </Container>
            </>
        </Section>
    );
};
