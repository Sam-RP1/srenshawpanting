import React, { useState, useEffect } from 'react';
import Splide from '@splidejs/splide';

import '../../../../node_modules/@splidejs/splide/dist/css/splide-core.min.css';

import { flickrIcon } from '../../lib/icons';
import { Spinner } from '../UI/Spinner/Spinner';

type FlickrProps = {
    flickrContent: {
        title: string;
        url: string;
    }[];
};

export const Flickr = ({ flickrContent }: FlickrProps): JSX.Element => {
    console.log('render FLICKR component');

    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState(undefined);

    useEffect(() => {
        if (flickrContent.length !== 0) {
            setIsLoading(false);
            setImages(flickrContent);
        } else {
            setIsLoading(true);
        }

        const splide = new Splide('.splide', {
            type: 'slide',
            rewind: 'true', // rewind from 1 to last or last to 1
            height: 295,
            autoHeight: false,
            width: 500,
            autoWidth: false,
            gap: 10,
            arrows: false,
            focus: 'center',
        }).mount();

        return () => {
            splide.destroy();
        };
    }, [flickrContent]);

    return (
        <div className='lab__flickr'>
            <div className='lab__title'>
                <h1>Flickr</h1>
                <span id='flickr-leader-line'></span>
                <div className='mega-title'>
                    <h2>Flickr</h2>
                </div>
            </div>

            <div className='splide-wrapper'>
                <div className='splide'>
                    <div className='splide__track'>
                        <ul className='splide__list'>
                            <li className='splide__slide'>{isLoading ? <Spinner /> : <img src={images[0].url} />}</li>
                            <li className='splide__slide'>{isLoading ? <Spinner /> : <img src={images[1].url} />}</li>
                            <li className='splide__slide'>{isLoading ? <Spinner /> : <img src={images[2].url} />}</li>
                            <li className='splide__slide'>{isLoading ? <Spinner /> : <img src={images[3].url} />}</li>
                            <li className='splide__slide splide__slide--more' style={{ width: '500px' }}>
                                <a href={flickrIcon.url} target='__blank' className='splide__slide__content'>
                                    {flickrIcon.icon}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span id='flickr-leader-line-bottom'></span>
            </div>
        </div>
    );
};
