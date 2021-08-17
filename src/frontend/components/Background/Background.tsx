import React, { useEffect, useState } from 'react';

import './Background.scss';
import moon from '../../assets/svgs/moon.svg';
import stars from '../../assets/svgs/stars.svg';
import cloud_1 from '../../assets/svgs/cloud-1.svg';
import cloud_2 from '../../assets/svgs/cloud-2.svg';
import cloud_3 from '../../assets/svgs/cloud-3.svg';
import cloud_4 from '../../assets/svgs/cloud-4.svg';
import cloud_5 from '../../assets/svgs/cloud-5.svg';

export const Background = (): JSX.Element => {
    const [layers, setLayers] = useState([]);

    const parallax = (e) => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const centerY = windowHeight / 2;
        const centerX = windowWidth / 2;
        const maxTravel = 50;

        layers.forEach((layer) => {
            console.log(layers);
            const depth = layer.getAttribute('data-depth');

            const x = -(((e.clientX - centerX) / centerX) * 100) * ((depth * maxTravel) / 100);
            const y = -(((e.clientY - centerY) / centerY) * 100) * ((depth * maxTravel) / 100);

            layer.style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0px)';
        });
    };

    useEffect(() => {
        const elems = [];

        document.querySelectorAll<HTMLElement>('.parallax').forEach((elem) => {
            elems.push(elem);
        });

        setLayers(elems);

        document.addEventListener('mousemove', parallax);

        return () => document.removeEventListener('mousemove', parallax);
    }, []);

    return (
        <div className='sky'>
            <div className='sky__container'>
                <section className='sky__stars'>
                    <div className='sky__stars__container'>
                        <div className='stars parallax' data-depth='0.2'>
                            <img src={stars} />
                        </div>
                    </div>
                </section>
                <section className='sky__clouds sky__clouds--background'>
                    <div className='sky__clouds__container'>
                        <div className='cloud--4 parallax' data-depth='0.3'>
                            <img src={cloud_4} />
                        </div>
                        <div className='cloud--5 parallax' data-depth='0.4'>
                            <img src={cloud_5} />
                        </div>
                    </div>
                </section>
                <section className='sky__moon'>
                    <div className='sky__moon__container'>
                        <div className='sky__moon__layer parallax' data-depth='0.5'>
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
                <section className='sky__clouds sky__clouds--foreground'>
                    <div className='sky__clouds__container'>
                        <div className='cloud--1 parallax' data-depth='0.7'>
                            <img src={cloud_1} />
                        </div>
                        <div className='cloud--2 parallax' data-depth='0.6'>
                            <img src={cloud_2} />
                        </div>
                        <div className='cloud--3 parallax' data-depth='0.8'>
                            <img src={cloud_3} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
