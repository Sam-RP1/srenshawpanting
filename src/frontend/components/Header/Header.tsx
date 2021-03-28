import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '../UI/Container/Container';

import './Header.scss';

// type HeaderProps = {};

export const Header = (): JSX.Element => {
    const renderCount = useRef(0);
    const headerRoot = useRef();
    const navBtn = useRef();
    const navMenu = useRef();

    console.log('Header Renders: ', renderCount.current++);

    const navHandler = () => {
        navBtn.current.classList.toggle('active');
        navMenu.current.classList.toggle('active');
    };

    const scrolledWindow = () => {
        if (window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerRoot.current.classList.add('scrolled');
        } else {
            headerRoot.current.classList.remove('scrolled');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrolledWindow);
    }, []);

    return (
        <header className='header' ref={headerRoot}>
            <Container classes={'header__content-container'}>
                <>
                    <div className='header__logo'>
                        <NavLink to='/'>
                            <svg
                                version='1.0'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 135.000000 75.000000'
                                preserveAspectRatio='xMidYMid meet'
                            >
                                <g
                                    transform='translate(-45.000000,79.000000) scale(0.114000,-0.09900000)'
                                    fill='#000000'
                                    stroke='none'
                                >
                                    <path
                                        d='M148 770 c-89 -27 -129 -86 -136 -201 -5 -81 7 -134 40 -182 37 -51
70 -61 233 -67 l150 -5 0 -65 0 -65 -210 -5 -210 -5 0 -75 0 -75 208 -3 c226
-3 268 3 318 45 38 33 55 70 64 144 11 87 -9 166 -54 210 -48 49 -91 59 -242
59 -106 0 -128 3 -133 16 -10 27 -7 99 6 112 14 14 96 15 341 5 l167 -6 2
-291 3 -291 75 0 75 0 3 92 3 93 64 0 64 0 58 -95 58 -95 225 2 225 3 3 92 3
93 132 0 c151 0 194 9 242 51 48 43 60 85 60 224 0 148 -8 186 -47 230 -49 57
-99 66 -339 63 l-204 -3 -3 -292 -2 -293 -97 0 c-78 0 -98 3 -108 17 -11 14
-8 20 18 37 70 48 93 126 84 291 -6 112 -16 147 -55 188 -52 54 -81 57 -591
56 -256 0 -478 -4 -493 -9z m967 -275 l0 -120 -132 -3 -133 -3 0 119 c0 65 3
122 7 126 4 3 63 5 132 4 l126 -3 0 -120z m700 0 l0 -120 -132 -3 -133 -3 0
119 c0 65 3 122 7 126 4 3 63 5 132 4 l126 -3 0 -120z'
                                    />
                                </g>
                            </svg>
                        </NavLink>
                    </div>

                    <div className='header__nav'>
                        <div className='header__nav__btn' onClick={() => navHandler()} ref={navBtn}>
                            <div className='bar-1'></div>
                            <div className='bar-2'></div>
                            <div className='bar-3'></div>
                        </div>

                        <nav className='header__nav__menu' ref={navMenu}>
                            <NavLink to='/about'>About</NavLink>
                            <span>|</span>
                            <NavLink to='/portfolio'>Portfolio</NavLink>
                            <span>|</span>
                            <NavLink to='/cv'>CV</NavLink>
                            <span>|</span>
                            <NavLink to='/connect'>Connect</NavLink>
                        </nav>
                    </div>
                </>
            </Container>

            <ul style={{ display: 'none' }}>
                <li>Chess.com</li>
                <li>Instagram</li>
                <li>Github</li>
                <li>Youtube</li>
                <li>Linkedin</li>
                <li>Spotify</li>
            </ul>
        </header>
    );
};
