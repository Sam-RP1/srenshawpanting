import React, { useEffect } from 'react';
// import LeaderLine from 'react-leader-line';

import { Timeline } from '../UI/Timeline/Timeline';

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

    return <Timeline title={'Lab'} megaTitle={true} />;
};
