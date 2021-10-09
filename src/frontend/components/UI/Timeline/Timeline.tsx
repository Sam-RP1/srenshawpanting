import React from 'react';

import './Timeline.scss';

type TimelineProps = {
    title: string;
    megaTitle?: boolean;
    leaderLine?: boolean;
    modifiers?: string[];
};

export const Timeline = ({
    title,
    megaTitle = true,
    leaderLine = false,
    modifiers = [],
}: TimelineProps): JSX.Element => {
    let classes = '';
    for (const modifier in modifiers) {
        classes += ' timeline__title--' + modifiers[modifier];
    }
    return (
        <>
            <div className='timeline'>{leaderLine === true && <span id={title + '-leader-line-end'}></span>}</div>
            <div className={'timeline__title' + classes}>
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
