import React from 'react';

import './Heading.scss';

interface Classes {
    [index: number]: string;
}

type HeadingProps = {
    importance: number;
    title: string;
    classes?: Classes[];
};

export const Heading = ({ importance, title, classes = [] }: HeadingProps): JSX.Element => {
    const isBold = classes.indexOf('bold');
    const isUnderline = classes.indexOf('underline');
    const isSpaced = classes.indexOf('spaced');
    let classStr = '';

    if (isBold > -1) {
        classes[isBold] = 'h' + importance + '--bold';
    }
    if (isUnderline > -1) {
        classes[isUnderline] = 'h' + importance + '--underline';
    }
    if (isSpaced > -1) {
        classes[isSpaced] = 'h' + importance + '--space-out';
    }

    if (classes.length !== 0) {
        for (const style in classes) {
            classStr = classStr + ' ' + classes[style];
        }
    }

    switch (importance) {
        case 1:
            return <h1 className={'h1' + classStr}>{title}</h1>;
        case 2:
            return <h2 className={'h2' + classStr}>{title}</h2>;
        case 3:
            return <h3 className={'h3' + classStr}>{title}</h3>;
        case 4:
            return <h4 className={'h4' + classStr}>{title}</h4>;
        case 5:
            return <h5 className={'h5' + classStr}>{title}</h5>;
        case 6:
            return <h6 className={'h6' + classStr}>{title}</h6>;
        default:
            return <h1 className={'h1' + classStr}>{title}</h1>;
    }
};
