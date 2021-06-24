import React, { useState } from 'react';

import { githubIcon, externalLinkIcon } from '../../lib/icons';

type GithubProps = {
    featured: {
        id: number;
        title: string;
        created: string;
        updated: string;
        repoURL: string;
        webURL: string;
    }[];
    recent: {
        id: number;
        title: string;
        created: string;
        updated: string;
        repoURL: string;
        webURL: string;
    }[];
};

export const Github = ({ featured, recent }: GithubProps): JSX.Element => {
    console.log('render GITHUB component');

    const [openTab, setOpenTab] = useState('featured');

    const featuredRepos = featured.map(({ id, title, repoURL, webURL }) => (
        <div key={'lab-featured-repo-' + id} className='lab__github__panel__repo'>
            <p>{title}</p>
            <div className='lab__github__panel__repo__icons'>
                {webURL !== '' && webURL !== null && (
                    <a href={webURL} target='__blank'>
                        {externalLinkIcon.icon}
                    </a>
                )}
                <a href={repoURL} target='__blank'>
                    {githubIcon.icon}
                </a>
            </div>
        </div>
    ));

    const recentRepos = recent.map(({ id, title, repoURL, webURL }) => (
        <div key={'lab-recent-repo-' + id} className='lab__github__panel__repo'>
            <p>{title}</p>
            <div className='lab__github__panel__repo__icons'>
                {webURL !== '' && webURL !== null && (
                    <a href={webURL} target='__blank'>
                        {externalLinkIcon.icon}
                    </a>
                )}
                <a href={repoURL} target='__blank'>
                    {githubIcon.icon}
                </a>
            </div>
        </div>
    ));

    const tabs = [
        { id: 'featured', content: featuredRepos },
        { id: 'recent', content: recentRepos },
    ];

    // put the new tool tips on the icons
    // when doing icons check for "" and null for the website link not the repo link

    return (
        <div className='lab__github'>
            <div className='lab__title'>
                <h1>Github</h1>
                <span id='github-leader-line'></span>
                <div className='mega-title'>
                    <h2>Github</h2>
                </div>
            </div>

            <div className='lab__github__panel'>
                <section className='lab__github__panel__tabs'>
                    {tabs.map(({ id }) => {
                        const isActive = id === openTab ? ' active' : '';
                        return (
                            <div
                                key={id}
                                onClick={() => setOpenTab(id)}
                                className={'lab__github__panel__tab' + isActive}
                            >
                                <p>{id}</p>
                            </div>
                        );
                    })}
                </section>

                <section className='lab__github__panel__content'>
                    {tabs.map(({ id, content }) => {
                        const repos = id === openTab ? content : '';
                        return repos;
                    })}
                </section>
            </div>
        </div>
    );
};
