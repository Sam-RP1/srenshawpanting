import React from 'react';

import { githubIcon, externalLinkIcon, rightChevronIcon } from '../../lib/icons';

import { Portfolio as PortfolioCmpnt } from '../../components/Portfolio/Portfolio';

// Load images lazily from server side when deployed, create a spinner for loading
import deductionPrev from '../../assets/portfolio/deduction/img/deduction-min.png';
import letterDetonatorPrev from '../../assets/portfolio/letter-detonator/img/letter-detonator-min.png';
import karensBeautyBoxPrev from '../../assets/portfolio/karensbeautybox/img/karensbeautybox-min.png';
import peerReviewPortalPrev from '../../assets/portfolio/peer-review-portal/img/prp-min.png';
import roboticsPrev from '../../assets/portfolio/robotics/img/robotics.png';
import pudhubPrev from '../../assets/portfolio/portsmouth-unattended-displays/img/pud-min.png';
import distPrev from '../../assets/portfolio/distributed-systems/img/dss-min.png';
import litrevPrev from '../../assets/portfolio/literature-review/img/litrev-min.png';

export const Portfolio = (): JSX.Element => {
    const portfolioContent = [
        {
            id: 'deduction',
            title: 'Deduction',
            created: '2020',
            taster: 'Multiplayer web game',
            // taster: 'A real-time multiplayer web game in which two teams face off to get their score to zero first',
            tags: ['scss', 'react', 'redux', 'nodejs', 'express', 'socket-io', 'mysql'],
            description: '',
            buttons: [
                {
                    id: 'deduction-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'deduction-github-btn',
                    url: 'https://github.com/Sam-RP1/deduction',
                    icon: githubIcon,
                    label: 'Open repo',
                },
                {
                    id: 'deduction-visit-btn',
                    url: 'http://www.thedeductiongame.com/',
                    icon: externalLinkIcon,
                    label: 'Open site',
                },
            ],
            img: deductionPrev,
        },
        {
            id: 'letterdetonator',
            title: 'Letter Detonator',
            created: '2020',
            taster: 'Single-player web game',
            // taster: 'A web game where players type to survive the endless waves of letters',
            tags: ['html', 'canvas', 'scss', 'javascript', 'react', 'local-storage'],
            description: '',
            buttons: [
                {
                    id: 'letterdetonator-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'letterdetonator-github-btn',
                    url: 'https://github.com/Sam-RP1/letter-detonator',
                    icon: githubIcon,
                    label: 'Open repo',
                },
                {
                    id: 'letterdetonator-visit-btn',
                    url: 'http://letterdetonator.co.uk/',
                    icon: externalLinkIcon,
                    label: 'Open site',
                },
            ],
            img: letterDetonatorPrev,
        },
        {
            id: 'karensbeautybox',
            title: 'Karens Beauty Box',
            created: '2020',
            taster: 'Single-page website',
            // taster: 'A single-page website with a minimalistic design featuring bespoke icons and a logo',
            tags: ['html', 'scss', 'react'],
            description: '',
            buttons: [
                {
                    id: 'karensbeautybox-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'karensbeautybox-visit-btn',
                    url: 'http://karensbeautybox.co.uk/',
                    icon: externalLinkIcon,
                    label: 'Open site',
                },
            ],
            img: karensBeautyBoxPrev,
        },
        {
            id: 'peerreviewportal',
            title: 'Peer Review Portal',
            created: '2019',
            taster: 'Academic web application',
            // taster: 'A web application that streamlines and enhances the peer review and meta review processes',
            tags: [
                'html',
                'css',
                'javascript',
                'react',
                'nodejs',
                'express',
                'express-session',
                'google-auth',
                'mysql',
                'multer',
            ],
            description: '',
            buttons: [
                {
                    id: 'peerreviewportal-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
                {
                    id: 'peerreviewportal-report-btn',
                    url: '#',
                    icon: externalLinkIcon,
                    label: 'Open report',
                },
            ],
            img: peerReviewPortalPrev,
        },
        {
            id: 'pudhub',
            title: 'P.U.D Hub',
            created: '2018',
            taster: 'Web application',
            // taster: 'A web application that allows for the full creation, customisation and management of a network of unattended displays',
            tags: ['html', 'css', 'javascript', 'nodejs', 'express', 'multer', 'mysql'],
            description: '',
            buttons: [
                // {
                //     id: 'pudhub-github-btn',
                //     url: '#',
                //     icon: gitHubIcon,
                //     label: 'View on GitHub',
                // },
                {
                    id: 'pudhub-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
            ],
            img: pudhubPrev,
        },
        {
            id: 'robotics',
            title: 'Robotics',
            created: '2019',
            taster: 'V-REP Mobile robot simulation',
            // taster: 'A project aiming to improve the performance of a mobile robot`s object manipulation and colour based sorting',
            tags: ['lua-script', 'v-rep'],
            description: '',
            buttons: [
                // {
                //     id: 'robotics-report-btn',
                //     url: '#',
                //     icon: externalLinkIcon,
                //     label: 'View Report',
                // },
                // {
                //     id: 'robotics-github-btn',
                //     url: '#',
                //     icon: gitHubIcon,
                //     label: 'View on GitHub',
                // },
                {
                    id: 'robotics-more-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Learn more',
                },
            ],
            img: roboticsPrev,
        },
        {
            id: 'distributedsystems',
            title: 'Distributed Systems',
            created: '2019',
            taster: 'Research paper',
            // taster: 'A paper researching and evaluting the suitability of different methods to detect and mitigate DDOS attacks in IoT temperature sensing devices',
            tags: ['ddos', 'iot', 'nodejs', 'raspberry-pi', 'computer-cluster', 'research'],
            description: '',
            buttons: [
                {
                    id: 'distibutedsystems-report-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Open research',
                },
            ],
            img: distPrev,
        },
        {
            id: 'literaturereview',
            title: 'Mitigating Data Exposure',
            created: '2017',
            taster: 'Literature review',
            // taster: 'A literature review exploring the topic of Mitigating Corporate Information Exposure on the Web',
            tags: ['byod', 'info-exposure', 'literature-review'],
            description: '',
            buttons: [
                {
                    id: 'literaturereview-report-btn',
                    url: '#',
                    icon: rightChevronIcon,
                    label: 'Open review',
                },
            ],
            img: litrevPrev,
        },
    ];

    return <PortfolioCmpnt portfolioContent={portfolioContent} />;
};
