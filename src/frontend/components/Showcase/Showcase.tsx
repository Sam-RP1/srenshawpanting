import React from 'react';

// Components
import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';

// Sections
import { Overview } from './Sections/Overview';
import { Design } from './Sections/Design';
import { Features } from './Sections/Features';

// Styles
import './Showcase.scss';

type ShowcaseProps = {
    data: any;
};

/**
 * Exports Showcase component
 * @returns JSX.Element
 */
export const Showcase = ({ data }: ShowcaseProps): JSX.Element => {
    console.log(data);
    return (
        <>
            <Overview description={data.description} buttons={data.portfolio.buttons} />
            <Design colors={data.showcase.design.colors} />
            <Features />
        </>
    );
};
