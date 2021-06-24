import React, { useEffect } from 'react';
import LeaderLine from 'react-leader-line';

import { Timeline } from '../UI/Timeline/Timeline';

import './Lab.scss';

export const Lab = (): JSX.Element => {
    console.log('render LAB component');
    useEffect(() => {
        const defaultLineProperties = {
            path: 'fluid',
            color: '#0080b3',
            size: 2,
            startPlug: 'behind',
            endPlug: 'behind',
        };
        const lineArr = [];

        const createLines = () => {
            const startLine = new LeaderLine(
                document.getElementById('lab-leader-line-start'),
                document.getElementById('github-leader-line'),
                defaultLineProperties
            );
            lineArr.push(startLine);

            const joiningLine = new LeaderLine(
                document.getElementById('github-leader-line'),
                document.getElementById('flickr-leader-line'),
                defaultLineProperties
            );
            lineArr.push(joiningLine);

            const joiningLine2 = new LeaderLine(
                document.getElementById('flickr-leader-line'),
                document.getElementById('flickr-leader-line-bottom'),
                defaultLineProperties
            );
            lineArr.push(joiningLine2);

            const endLine = new LeaderLine(
                document.getElementById('flickr-leader-line-bottom'),
                document.getElementById('lab-leader-line-end'),
                defaultLineProperties
            );
            lineArr.push(endLine);
        };

        const repositionLines = () => {
            for (const line in lineArr) {
                lineArr[line].position();
            }
        };

        const destroyLines = () => {
            for (const line in lineArr) {
                lineArr[line].remove();
            }
        };

        createLines();
        repositionLines();
        window.addEventListener('resize', repositionLines, false);
        window.addEventListener('scroll', repositionLines, false);

        return () => {
            window.removeEventListener('resize', repositionLines);
            window.removeEventListener('scroll', repositionLines);
            destroyLines();
        };
    }, []);

    return <Timeline title={'lab'} megaTitle={true} leaderLine={true} />;
};
