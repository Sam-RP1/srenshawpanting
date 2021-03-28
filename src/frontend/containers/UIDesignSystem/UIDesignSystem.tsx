import React from 'react';

import { DefaultButton } from '../../components/UI/Button/DefaultButton/DefaultButton';
import { Heading } from '../../components/UI/Typography/Heading/Heading';

export const UIDesignSystem = (): JSX.Element => {
    return (
        <>
            <DefaultButton text={'button'} />

            <Heading importance={1} title={'title'} classes={[]} />
            <Heading importance={2} title={'title'} classes={[]} />
            <Heading importance={3} title={'title'} classes={[]} />
            <Heading importance={4} title={'title'} classes={[]} />

            <Heading importance={1} title={'title'} classes={['bold']} />
            <Heading importance={2} title={'title'} classes={['bold']} />
            <Heading importance={3} title={'title'} classes={['bold']} />
            <Heading importance={4} title={'title'} classes={['bold']} />

            <p>Paragraph text.</p>
        </>
    );
};
