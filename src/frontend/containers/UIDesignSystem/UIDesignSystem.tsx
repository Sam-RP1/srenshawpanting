import React from 'react';

import { Header } from '../../components/Header/Header';
import { DefaultButton } from '../../components/UI/Button/DefaultButton/DefaultButton';
import { Heading } from '../../components/UI/Typography/Heading/Heading';

export const UIDesignSystem = (): JSX.Element => {
    return (
        <>
            <Header test={'TEST'} />
            <DefaultButton text={'button'} />

            <Heading importance={1} title={'title'} classes={''} />
            <Heading importance={2} title={'title'} classes={''} />
            <Heading importance={3} title={'title'} classes={''} />
            <Heading importance={4} title={'title'} classes={''} />

            <Heading importance={1} title={'title'} classes={'h1-bold'} />
            <Heading importance={2} title={'title'} classes={'h2-bold'} />
            <Heading importance={3} title={'title'} classes={'h3-bold'} />
            <Heading importance={4} title={'title'} classes={'h4-bold'} />

            <p>Paragraph text.</p>
        </>
    );
};
