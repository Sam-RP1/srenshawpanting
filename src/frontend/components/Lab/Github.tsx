import React, { useState, useEffect } from 'react';

import { githubIcon, externalLinkIcon, leftChevronIcon, rightChevronIcon } from '../../lib/icons';
import { Spinner } from '../UI/Spinner/Spinner';

type GithubProps = {
    featuredRepos: {
        id: number;
        title: string;
        created: string;
        updated: string;
        repoURL: string;
        webURL: string;
        description: string;
        tags: Array<string>;
    }[];
    recentRepos: {
        id: number;
        title: string;
        created: string;
        updated: string;
        repoURL: string;
        webURL: string;
        description: string;
        tags: Array<string>;
    }[];
};

export const Github = ({ featuredRepos, recentRepos }: GithubProps): JSX.Element => {
    console.log('render GITHUB component');

    const [isLoading, setIsLoading] = useState(true);
    const [openTab, setOpenTab] = useState('featured');

    useEffect(() => {
        if (featuredRepos.length !== 0 && recentRepos.length !== 0) {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [featuredRepos, recentRepos]);

    const featuredElems = featuredRepos.map(({ id, title, repoURL, webURL, description, tags }) => (
        <div key={'lab-featured-repo-' + id} className='lab__github__panel__repo'>
            <div className='lab__github__panel__repo__name'>
                {rightChevronIcon.icon}
                <h1>{title}</h1>
            </div>
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
            <div className='lab__github__panel__repo__description'>
                <p>{description}</p>
            </div>
            <div className='lab__github__panel__repo__tags'>
                {tags.map((tag) => (
                    <p key={'lab-featured-repo-' + id + '-' + tag}>{tag}</p>
                ))}
            </div>
        </div>
    ));

    const recentElems = recentRepos.map(({ id, title, repoURL, webURL, description, tags }) => (
        <div key={'lab-recent-repo-' + id} className='lab__github__panel__repo'>
            <div className='lab__github__panel__repo__name'>
                {rightChevronIcon.icon}
                <h1>{title}</h1>
            </div>
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
            <div className='lab__github__panel__repo__description'>
                <p>{description}</p>
            </div>
            <div className='lab__github__panel__repo__tags'>
                {tags.map((tag) => (
                    <p key={'lab-recent-repo-' + id + '-' + tag}>{tag}</p>
                ))}
            </div>
        </div>
    ));

    const tabs = [
        { id: 'featured', content: featuredElems },
        { id: 'recent', content: recentElems },
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
                            <a
                                key={id}
                                onClick={() => setOpenTab(id)}
                                className={'lab__github__panel__tab' + isActive}
                            >
                                <p>{id}</p>
                                {leftChevronIcon.icon}
                            </a>
                        );
                    })}
                </section>

                <section className={'lab__github__panel__content' + (isLoading ? ' isLoading' : ' loaded')}>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        tabs.map(({ id, content }) => {
                            const repos = id === openTab ? content : '';
                            return repos;
                        })
                    )}
                    <a
                        className='lab__github__panel__btn'
                        href='https://github.com/Sam-RP1?tab=repositories'
                        target='__blank'
                    >
                        <p>All repositories</p>
                        {rightChevronIcon.icon}
                    </a>
                </section>
            </div>
        </div>
    );
};
