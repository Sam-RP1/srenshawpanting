import React, { useEffect, useState } from 'react';

import { Section } from '../../components/UI/Section/Section';
import { Container } from '../../components/UI/Container/Container';

import { Lab as LabCmpnt } from '../../components/Lab/Lab';
import { Github as GithubCmpnt } from '../../components/Lab/Github';
import { Flickr as FlickrCmpnt } from '../../components/Lab/Flickr';

interface repo {
    id: number;
    title: string;
    created: string;
    updated: string;
    repoURL: string;
    webURL: string;
}

export const Lab = (): JSX.Element => {
    console.log('render LAB container');
    // hide api key
    // https://www.flickr.com/services/api/flickr.people.getPublicPhotos.htm
    // https://www.flickr.com/services/api/misc.urls.html
    // https://www.flickr.com/services/apps/72157719318031383/

    //  Make a fetch req to server asking for the list of codepens to link / load preview images of?

    // featured repos and then most recently updated sent as seperate props to the component

    const [githubContent, setGithubContent] = useState({ featured: [], recent: [] });
    const [flickrContent, setFlickrContent] = useState([]);

    useEffect(() => {
        const fetchData = async (url: string): Promise<any> => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                return { status: 'success', data: data };
            } catch (e) {
                return { status: 'error', data: e };
            }
        };

        const fetchGithub = async (): Promise<any> => {
            const reqURL = 'https://api.github.com/users/Sam-RP1/repos';
            const res = await fetchData(reqURL);
            // const res = await fetchData(reqURL).catch(e => handleError(e));
            // const [data, e] = await fetchData(reqURL);

            if (res.status === 'success' && !Object.prototype.hasOwnProperty.call(res.data, 'message')) {
                const data = res.data;
                const featuredIDs = [283739731, 304401876, 290325161, 287375977, 287027145];
                const sortedArr = [];
                let featuredArr = [];
                let recentArr = [];

                data.sort((a, b) => {
                    return a.pushed_at < b.pushed_at ? 1 : a.pushed_at > b.pushed_at ? -1 : 0;
                });

                for (const item of data) {
                    const entry: repo = {
                        id: item.id,
                        title: item.name,
                        created: item.created_at.split('T')[0],
                        updated: item.pushed_at.split('T')[0],
                        repoURL: item.svn_url,
                        webURL: item.homepage,
                    };
                    sortedArr.push(entry);
                }

                featuredArr = sortedArr.filter((item) => {
                    return featuredIDs.includes(item.id);
                });

                recentArr = sortedArr.slice(0, 5);

                setGithubContent({ featured: featuredArr, recent: recentArr });
            } else {
                console.log('Error fetching Github data: ', res.data);
                const errorPlaceholder = [
                    {
                        id: 9999,
                        title: 'error',
                        created: '9999-99-99',
                        updated: '9999-99-99',
                        repoURL: '',
                        webURL: '',
                    },
                ];

                setGithubContent({ featured: errorPlaceholder, recent: errorPlaceholder });
            }
        };

        const fetchFlickr = async (): Promise<any> => {
            const reqURL =
                'https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=00f41900ae82dd74da2c9d3d1f063db3&user_id=193049669%40N05&per_page=5&format=json&nojsoncallback=1';
            const res = await fetchData(reqURL);

            if (res.status === 'success') {
                const photoArr = res.data.photos.photo;
                console.log(photoArr);
                const urlPrefix = 'https://live.staticflickr.com/';
                const flickrArr = [];

                for (let i = 0; i < 4; i++) {
                    const photoTitle = photoArr[i].title;
                    const photoId = photoArr[i].id;
                    const serverId = photoArr[i].server;
                    const secret = photoArr[i].secret;
                    const size = 'b';

                    const photoObj = {
                        title: photoTitle,
                        url: urlPrefix + serverId + '/' + photoId + '_' + secret + '_' + size + '.jpg',
                    };

                    flickrArr.push(photoObj);
                }

                setFlickrContent(flickrArr);
            } else {
                console.log('Error fetching Flickr data: ', res.data);
                setFlickrContent([]);
            }
        };

        fetchGithub();
        console.log('FETCHED GITHUB');
        fetchFlickr();
        console.log('FETCHED FLICKR');
    }, []);

    return (
        <Section selector={'lab'}>
            <Container classes={'lab'}>
                <>
                    <LabCmpnt />
                    <GithubCmpnt featured={githubContent.featured} recent={githubContent.recent} />
                    <FlickrCmpnt flickrContent={flickrContent} />
                </>
            </Container>
        </Section>
    );
};
