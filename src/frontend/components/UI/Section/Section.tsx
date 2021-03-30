import React from 'react';

import './Section.scss';

interface Classes {
    [index: number]: string;
}

type SectionProps = {
    classes?: Classes[];
    children: JSX.Element;
};

export const Section = ({ classes = [], children = <h1>Error loading...</h1> }: SectionProps): JSX.Element => {
    const isCenterCenter = classes.indexOf('center-center');
    let classStr = '';

    if (isCenterCenter > -1) {
        classes[isCenterCenter] = 'section--center-center';
    }

    if (classes.length !== 0) {
        for (const style in classes) {
            classStr = classStr + ' ' + classes[style];
        }
    }

    return <section className={'section' + classStr}>{children}</section>;
};