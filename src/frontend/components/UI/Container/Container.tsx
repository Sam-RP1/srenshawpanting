import React from 'react';

import './Container.scss';

type ContainerProps = {
    classes?: string;
    children: JSX.Element;
};

export const Container = ({ classes = '', children = <h1>Error loading...</h1> }: ContainerProps): JSX.Element => {
    classes = classes !== '' ? classes + ' ' : '';
    return <div className={classes + 'container'}>{children}</div>;
};
