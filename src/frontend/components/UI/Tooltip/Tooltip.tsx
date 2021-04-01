import React from 'react';

import './Tooltip.scss';

type TooltipProps = {
    position?: string;
    tip: string;
};

export const Tooltip = ({ position = 'default', tip }: TooltipProps): JSX.Element => {
    if (position === '') {
        position = 'tooltip__text';
    } else if (position === 'right') {
        position = 'tooltip__text--right';
    } else if (position === 'left') {
        position = 'tooltip__text--left';
    } else {
        position = 'tooltip__text';
    }

    return <span className={position}>{tip}</span>;
};
