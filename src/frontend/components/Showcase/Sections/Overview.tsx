import React from 'react';

import { Icon } from '../../../lib/interfaces';

// Components
import { Section } from '../../UI/Section/Section';
import { Container } from '../../UI/Container/Container';
import { Timeline } from '../../UI/Timeline/Timeline';

type OverviewProps = {
    description: string;
    buttons: {
        id: string;
        url: string;
        icon: Icon;
        label: string;
        newTab: boolean;
    }[];
};

/**
 * Exports Showcase component
 * @returns JSX.Element
 */
export const Overview = ({ description, buttons }: OverviewProps): JSX.Element => {
    const renderButtons: OverviewProps['buttons'] = [];

    for (const i in buttons) {
        if (buttons[i].newTab === true) {
            renderButtons.push(buttons[i]);
        }
    }

    return (
        <Section selector={'overview'}>
            <Container classes={'showcase__overview'}>
                <>
                    <Timeline title={'Overview'} megaTitle={false} />
                    <div className='showcase__overview__content'>
                        <p>{description}</p>
                    </div>
                    <div className='showcase__overview__buttons'>
                        {renderButtons.map(({ id, url, icon, label }) => (
                            <a key={id} href={url} target='__blank'>
                                <span>{label}</span>
                                {icon.icon}
                            </a>
                        ))}
                    </div>
                </>
            </Container>
        </Section>
    );
};
