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

    const slideElems = flickrContent.map((photo, i) => {
        return (
            <li key={'lab-flickr-slide-' + i} className='glide__slide'>
                <img src={photo.url} />
            </li>
        );
    });

    useEffect(() => {
        // console.log('FLICKR USE EFFECT');
        if (slideContainer.current.hasChildNodes()) {
            const carousel = new Glide('.glide', {
                type: 'carousel',
                focusAt: 'center',
                startAt: 1,
                perView: 2,
                breakpoints: {
                    1024: {
                        perView: 2,
                    },
                    600: {
                        perView: 1,
                    },
                },
            });
            carousel.mount();
        }
    }, [flickrContent]);

    return (
        <div className='lab__flickr'>
            <h4 id='lab__flickr__title'>Flickr</h4>

            <div className='glide'>
                <div className='glide__track' data-glide-el='track'>
                    <ul ref={slideContainer} className='glide__slides'>
                        {slideElems}
                    </ul>
                </div>

                <div className='glide__arrows' data-glide-el='controls'>
                    <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
                        prev
                    </button>
                    <button className='glide__arrow glide__arrow--right' data-glide-dir='>'>
                        next
                    </button>
                </div>
                {/* 
                <div className='glide__bullets' data-glide-el='controls[nav]'>
                    <button className='glide__bullet' data-glide-dir='=0'></button>
                    <button className='glide__bullet' data-glide-dir='=1'></button>
                    <button className='glide__bullet' data-glide-dir='=2'></button>
                    <button className='glide__bullet' data-glide-dir='=3'></button>
                </div> */}
            </div>
        </div>
    );
};
