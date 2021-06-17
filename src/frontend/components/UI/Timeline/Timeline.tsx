import React from 'react';

import './Timeline.scss';

type TimelineProps = {
    title: string;
    megaTitle?: boolean;
    leaderLine?: boolean;
};

export const Timeline = ({ title, megaTitle = true, leaderLine = false }: TimelineProps): JSX.Element => {
    return (
        <>
            <div className='timeline'>{leaderLine === true && <span id={title + '-leader-line-end'}></span>}</div>
            <div className='timeline__title'>
                <h1>{title}</h1>
                {leaderLine === true && <span id={title + '-leader-line-start'}></span>}
                {megaTitle === true && (
                    <div className='mega-title'>
                        <h2>{title}</h2>
                    </div>
                )}
            </div>
        </>
    );
};
