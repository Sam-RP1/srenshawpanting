import React from 'react';

import './Timeline.scss';

type TimelineProps = {
    title: string;
    megaTitle?: boolean;
};

export const Timeline = ({ title, megaTitle = true }: TimelineProps): JSX.Element => {
    return (
        <>
            <div className='timeline'></div>
            <div className='timeline__title'>
                <h1>{title}</h1>
                {megaTitle === true && (
                    <div className='mega-title'>
                        <h2>{title}</h2>
                    </div>
                )}
            </div>
        </>
    );
};
