import React from 'react';

import { Header } from '../../containers/Header/Header';
import { Hero } from '../../containers/Hero/Hero';
import { Showcase as ShowcaseCmpnt } from '../../components/Showcase/Showcase';

type ShowcaseProps = {
    data: any;
};

export const Showcase = ({ data }: ShowcaseProps): JSX.Element => {
    const headerBtns = ['return to home', 'design', 'tech'];
    const heroContent = (
        <ul className='showcase__details__list'>
            <li>
                <span>Context</span> {data.definition}
            </li>
            <li>
                <span>Role</span> {data.role}
            </li>
            <li>
                <span>Date</span> {data.created}
            </li>
        </ul>
    );

    return (
        <>
            <Header btns={headerBtns} />
            <Hero title={data.title} content={heroContent} />
            <ShowcaseCmpnt data={data} />
        </>
    );
};
