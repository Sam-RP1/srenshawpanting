import React, { useEffect } from 'react';
import LeaderLine from 'react-leader-line';

import { Section } from '../UI/Section/Section';
import { Container } from '../UI/Container/Container';
import { Timeline } from '../UI/Timeline/Timeline';
import { Tooltip } from '../UI/Tooltip/Tooltip';

import { Icons } from '../../lib/interfaces';

import './Connect.scss';

type ConnectProps = {
    icons: Icons;
};

export const Connect = ({ icons }: ConnectProps): JSX.Element => {
    const moonOrbits = ['orbit-1', 'orbit-2', 'orbit-3', 'orbit-4', 'orbit-5', 'orbit-6', 'orbit-7', 'orbit-8'];

    const connectPlanets = icons.map(({ id, icon, url }, i) => {
        const index = Math.floor(Math.random() * moonOrbits.length);
        const orbit = moonOrbits.splice(index, 1);

        return (
            <div key={'connect-' + id} className='connect__planet-system'>
                <div className={'connect__moon-container ' + orbit[0]}>
                    <div className='connect__moon'>
                        <div className='connect__moon__body'>
                            <span className='crater--1'></span>
                            <span className='crater--2'></span>
                            <span className='crater--3'></span>
                        </div>
                    </div>
                </div>

                <div className='connect__planet-container'>
                    <div className='connect__planet'>
                        <a href={url} target='__blank' className={'connect__planet__body connect__planet__body--' + id}>
                            <span id={'connect-planet-' + i} className='connect__planet__body__icon'>
                                {icon}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    });

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
                document.getElementById('connect-leader-line-start'),
                document.getElementById('connect-planet-0'),
                defaultLineProperties
            );
            lineArr.push(startLine);

            const endLine = new LeaderLine(
                document.getElementById('connect-planet-' + (icons.length - 1)),
                document.getElementById('connect-leader-line-end'),
                defaultLineProperties
            );
            lineArr.push(endLine);

            for (let i = 0; i < icons.length; i++) {
                if (i + 1 !== icons.length) {
                    const line = new LeaderLine(
                        document.getElementById('connect-planet-' + i),
                        document.getElementById('connect-planet-' + (i + 1)),
                        defaultLineProperties
                    );
                    lineArr.push(line);
                }
            }
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

    return (
        <Section selector={'connect'} classes={[]}>
            <Container classes={'connect'}>
                <>
                    <Timeline title={'connect'} megaTitle={true} leaderLine={true} />

                    <div className='connect__planets-container'>{connectPlanets}</div>
                </>
            </Container>
        </Section>
    );
};
