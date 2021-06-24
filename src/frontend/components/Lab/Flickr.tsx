import React, { useEffect, useState, useRef } from 'react';
import Glide from '@glidejs/glide';

import '../../../../node_modules/@glidejs/glide/src/assets/sass/glide.core';
// import '../../../../node_modules/@glidejs/glide/src/assets/sass/glide.theme';

type FlickrProps = {
    flickrContent: {
        title: string;
        url: string;
    }[];
};

export const Flickr = ({ flickrContent }: FlickrProps): JSX.Element => {
    console.log('render FLICKR component');
    // console.log('FLICKR', flickrContent[0]);

    const slideContainer = useRef(null);

    const slideElems = flickrContent.map(({ url }, i) => {
        return (
            <li key={'lab-flickr-slide-' + i} className='glide__slide'>
                <img src={url} />
            </li>
        );
    });

    useEffect(() => {
        if (slideContainer.current.hasChildNodes()) {
            const carousel = new Glide('.glide', {
                type: 'carousel',
                focusAt: 'center',
                startAt: 0,
                perView: 1.7,
                breakpoints: {
                    1475: {
                        perView: 1.5,
                    },
                    912: {
                        perView: 1.3,
                    },
                    767: {
                        perView: 1.15,
                    },
                    575: {
                        perView: 1,
                    },
                },
            });
            carousel.mount();
        }
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

            <div className='glide-wrapper'>
                <div className='glide'>
                    <div className='glide__track' data-glide-el='track'>
                        <ul ref={slideContainer} className='glide__slides'>
                            {/* {slideElems} */}
                            {/* Lazy loading spinners inside each slide then when loaded replace the spinners */}
                            <li className='glide__slide'></li>
                            <li className='glide__slide'></li>
                            <li className='glide__slide'></li>
                            <li className='glide__slide'></li>
                            <li className='glide__slide glide__slide--more'></li>
                        </ul>
                    </div>

                    <div className='glide__bullets' data-glide-el='controls[nav]'>
                        <button className='glide__bullet' data-glide-dir='=0'></button>
                        <button className='glide__bullet' data-glide-dir='=1'></button>
                        <button className='glide__bullet' data-glide-dir='=2'></button>
                        <button className='glide__bullet' data-glide-dir='=3'></button>
                        <button className='glide__bullet' data-glide-dir='=4'></button>
                    </div>
                </div>
                <span id='flickr-leader-line-bottom'></span>
            </div>
        </div>
    );
};
