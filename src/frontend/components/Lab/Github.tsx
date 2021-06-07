import React from 'react';

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

    // put the new tool tips on the icons
    // when doing icons check for "" and null for the website link not the repo link

    const featuredRepos = featured.map((repo) => {
        return (
            <div key={'lab-featured-repo-' + repo.id} className='lab__github__panel__repo'>
                <p>{repo.title}</p>
                <div className='lab__github__Panel__repo__icons'></div>
            </div>
        );
    });

    const recentRepos = recent.map((repo) => {
        return (
            <div key={'lab-featured-repo-' + repo.id} className='lab__github__panel__repo'>
                <p>{repo.title}</p>
                <div className='lab__github__Panel__repo__icons'></div>
            </div>
        );
    });

    return (
        <div className='lab__github'>
            <h4 id='lab__title'>Github</h4>

            <div className='lab__github__panel'>
                <section className='lab__github__panel__tabs'>
                    <div className='lab__github__panel__tab'>Featured</div>
                    <div className='lab__github__panel__tab'>Recent</div>
                </section>

                <section className='lab__github__panel__content'>
                    <div className='lab__github__panel__featured'>
                        <div className='lab__github__panel__repos'>{featuredRepos}</div>
                        <div className='lab__github__panel__title'>
                            <h4>Featured</h4>
                        </div>
                    </div>

                    <div className='lab__github__panel__recent'>
                        <div className='lab__github__panel__repos'>{recentRepos}</div>
                        <div className='lab__github__panel__title'>
                            <h4>Recent</h4>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
