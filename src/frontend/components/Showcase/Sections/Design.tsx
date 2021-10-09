import React, { useState, useEffect } from 'react';

import { ProjectsType } from '../../../lib/types';

// Components
import { Section } from '../../UI/Section/Section';
import { Container } from '../../UI/Container/Container';
import { Timeline } from '../../UI/Timeline/Timeline';

type DesignProps = {
    data?: any;
    colors: ProjectsType['portfolioContent']['showcase']['design']['colors'];
};

/**
 * Exports Showcase component
 * @returns JSX.Element
 */
export const Design = ({ data, colors }: DesignProps): JSX.Element => {
    const defaultColors = (
        <div className='default'>
            {colors.color_palette.default.length > 0 &&
                colors.color_palette.default.map(({ color, name }, i) => (
                    <div key={i} className='showcase__design__palette__color'>
                        <span style={{ backgroundColor: color }}></span>
                        <p>{name}</p>
                    </div>
                ))}
        </div>
    );

    const darkColors = (
        <div className='dark'>
            {colors.color_palette.dark.length > 0 &&
                colors.color_palette.dark.map(({ color, name }, i) => (
                    <div key={i} className='showcase__design__palette__color'>
                        <span style={{ backgroundColor: color }}></span>
                        <p>{name}</p>
                    </div>
                ))}
        </div>
    );

    const lightColors = (
        <div className='light'>
            {colors.color_palette.light.length > 0 &&
                colors.color_palette.light.map(({ color, name }, i) => (
                    <div key={i} className='showcase__design__palette__color'>
                        <span style={{ backgroundColor: color }}></span>
                        <p>{name}</p>
                    </div>
                ))}
        </div>
    );

    const [openTab, setOpenTab] = useState('dark');
    const [tabs, setTabs] = useState([
        { id: 'default', isEnabled: true, list: defaultColors },
        { id: 'dark', isEnabled: true, list: darkColors },
        { id: 'light', isEnabled: true, list: lightColors },
    ]);

    useEffect(() => {
        const colorArrays = colors.color_palette;
        const localTabs = [...tabs];

        for (const arr in localTabs) {
            if (colorArrays[localTabs[arr].id].length === 0) {
                localTabs[arr].isEnabled = false;
            }
        }

        setTabs(localTabs);
    }, [colors]);

    return (
        <Section selector={'design'}>
            <>
                <div className='mask'></div>
                <Container classes={'showcase__design'}>
                    <>
                        <Timeline title={'Design'} megaTitle={false} modifiers={['inverse']} />

                        <section className='showcase__design__palette'>
                            <div className='showcase__design__palette__tabs'>
                                {tabs.map((tab) => {
                                    const isEnabled = tab.isEnabled === true ? '' : ' disabled';
                                    const isActive = tab.id === openTab ? ' active' : '';

                                    return (
                                        <a
                                            key={tab.id}
                                            onClick={() => setOpenTab(tab.id)}
                                            className={'showcase__design__palette__tab' + isEnabled + isActive}
                                        >
                                            {tab.id}
                                        </a>
                                    );
                                })}
                            </div>
                            <div className='showcase__design__palette__lists'>
                                {tabs.map((tab) => {
                                    const activeList = tab.id === openTab ? tab.list : '';
                                    return activeList;
                                })}
                            </div>
                        </section>
                    </>
                </Container>
            </>
        </Section>
    );
};
