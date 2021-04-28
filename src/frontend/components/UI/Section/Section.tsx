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
    const isEndCenter = classes.indexOf('end-center');
    const isDefault = classes.indexOf('default');
    const isTop = classes.indexOf('top');
    let classStr = '';

    if (isCenterCenter > -1) {
        classes[isCenterCenter] = 'section--center-center';
    } else if (isEndCenter > -1) {
        classes[isEndCenter] = 'section--end-center';
    }

    if (isTop > -1) {
        classes[isTop] = 'section--top';
    } else if (isDefault > -1) {
        classes[isDefault] = 'section--default';
    }

    if (classes.length !== 0) {
        for (const style in classes) {
            classStr = classStr + ' ' + classes[style];
        }
    }

    return <section className={'section' + classStr}>{children}</section>;
};
