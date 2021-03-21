import React from 'react';

import './Heading.scss';

type HeadingProps = {
    importance: number;
    title: string;
    classes?: string;
};

export const Heading = ({ importance, title, classes = '' }: HeadingProps): JSX.Element => {
    classes = classes !== '' ? ' ' + classes : '';
    switch (importance) {
        case 1:
            return <h1 className={'h1' + classes}>{title}</h1>;
        case 2:
            return <h2 className={'h2' + classes}>{title}</h2>;
        case 3:
            return <h3 className={'h3' + classes}>{title}</h3>;
        case 4:
            return <h4 className={'h4' + classes}>{title}</h4>;
        case 5:
            return <h5 className={'h5' + classes}>{title}</h5>;
        case 6:
            return <h6 className={'h6' + classes}>{title}</h6>;
        default:
            return <h1 className={'h1' + classes}>{title}</h1>;
    }
};
