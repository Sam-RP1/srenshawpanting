import React from 'react';
import { Icons } from '../../lib/interfaces';

import { Tooltip } from '../UI/Tooltip/Tooltip';

import './SocialStack.scss';

type SocialStackProps = {
    socials: Icons;
};

export const SocialStack = ({ socials }: SocialStackProps): JSX.Element => {
    const socialElems = socials.map((icon) => {
        return (
            <li key={'ss-' + icon.id} className=''>
                <a href={icon.url} rel='norefferer' target='__blank' className='tooltip'>
                    {icon.icon}
                    {/* <Tooltip tip={icon.tooltip} position={'left'} /> */}
                </a>
            </li>
        );
    });

    return <ul className='social-stack'>{socialElems}</ul>;
};
