import React from 'react';

import { Header } from '../../containers/Header/Header';
import { Hero } from '../../containers/Hero/Hero';
import { Showcase as ShowcaseCmpnt } from '../../components/Showcase/Showcase';

type ShowcaseProps = {
    data: any;
};

export const Showcase = ({ data }: ShowcaseProps): JSX.Element => {
    const headerBtns = ['return to home', 'design', 'tech'];

    return (
        <>
            <Header btns={headerBtns} />
            <Hero title={data.title} />
            <ShowcaseCmpnt />
        </>
    );
};
