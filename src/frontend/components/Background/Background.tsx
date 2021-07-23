import React, { useEffect } from 'react';

import './Background.scss';
import moon from '../../assets/svgs/moontest.svg';

export const Background = (): JSX.Element => {
    // const useState here to store the parallax layers rather than querying them each time
    const parallax = (e) => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const centerY = windowHeight / 2;
        const centerX = windowWidth / 2;
        const maxTravel = 50;

        document.querySelectorAll<HTMLElement>('.parallax').forEach((layer) => {
            const depth = layer.getAttribute('data-depth');

            const x = -(((e.clientX - centerX) / centerX) * 100) * ((depth * maxTravel) / 100);
            const y = -(((e.clientY - centerY) / centerY) * 100) * ((depth * maxTravel) / 100);

            layer.style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0px)';
        });
    };

    useEffect(() => {
        document.addEventListener('mousemove', parallax);

        return () => document.removeEventListener('mousemove', parallax);
    }, []);

    return (
        <div className='sky'>
            <div className='sky__container'>
                <section className='sky__clouds'>
                    <div className='sky__clouds__container'>
                        {/* <div className='cloud--1'>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>
                </section>
                <section className='sky__moon'>
                    <div className='sky__moon__container'>
                        <div className='sky__moon__layer parallax' data-depth='0.2'>
                            <img className='sky__moon__img' src={moon} />
                        </div>
                    </div>
                </section>
                <section className='sky__moonlight'>
                    <div className='sky__moonlight__container'>
                        <div className='sky__moonlight__wrap'>
                            <div className='sky__moonlight__layer parallax' data-depth='0.5'></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
