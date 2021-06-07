import React, { useEffect } from 'react';
// import LeaderLine from 'react-leader-line';

import './Lab.scss';

export const Lab = (): JSX.Element => {
    console.log('render LAB component');
    useEffect(() => {
        // const test = document.querySelector('#line-start');
        // const githubAnchor = document.querySelector('.lab__github');
        // const codepenAnchor = document.querySelector('.lab__codepen');
        // const flickrAnchor = document.querySelector('.lab__flickr');
        // new LeaderLine(test, codepenAnchor, {
        //     color: '#0080b3',
        //     size: 2,
        //     startPlug: 'behind',
        //     endPlug: 'behind',
        //     startSocket: 'left',
        //     endSocket: 'left',
        //     startSocketGravity: '500',
        // });
    }, []);

    return (
        <>
            <div className='timeline'></div>
            <div className='timeline__title'>
                <h2>{'<Lab />'}</h2>
                <div className='mega-title'>
                    <h1>Lab</h1>
                </div>
            </div>
        </>
    );
};
