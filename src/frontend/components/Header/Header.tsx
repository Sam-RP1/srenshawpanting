import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

// Component Imports
import { Container } from '../UI/Container/Container';

// Styles
import './Header.scss';

/**
 * Exports Header component
 * @returns JSX.Element
 */
export const Header = (): JSX.Element => {
    const headerRoot = useRef();

    const closeMenu = () => {
        if (window.innerWidth < 768) {
            headerRoot.current.classList.remove('active');
        }
    };

    const navHandler = () => {
        headerRoot.current.classList.toggle('active');
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
            <Container classes={'header__content'}>
                <>
                    <div className='header__logo'>
                        <NavLink to='/' onClick={() => closeMenu()}>
                            <svg
                                version='1.0'
                                xmlns='http://www.w3.org/2000/svg'
                                width='200.000000pt'
                                height='80.000000pt'
                                viewBox='0 0 200.000000 80.000000'
                                preserveAspectRatio='xMidYMid meet'
                            >
                                <g
                                    transform='translate(0.000000,80.000000) scale(0.100000,-0.100000)'
                                    fill='#000000'
                                    stroke='none'
                                >
                                    <path
                                        d='M160 769 c-53 -10 -86 -33 -118 -79 -46 -69 -55 -67 266 -72 158 -3
441 -3 628 0 l342 5 -8 27 c-14 48 -40 78 -88 102 -47 23 -49 23 -512 25 -256
1 -485 -3 -510 -8z'
                                    />
                                    <path
                                        d='M1403 774 c-9 -4 -13 -30 -13 -80 l0 -74 296 0 296 0 -7 27 c-10 42
-43 82 -88 105 -39 21 -57 23 -257 25 -118 1 -221 0 -227 -3z'
                                    />
                                    <path
                                        d='M10 521 c0 -46 24 -117 48 -144 39 -44 71 -52 227 -57 l150 -5 0 -65
0 -65 -210 -5 -210 -5 0 -75 0 -75 208 -3 c231 -3 269 3 322 49 77 68 87 258
18 340 -46 54 -74 62 -238 68 l-150 6 -3 38 -3 37 -80 0 -79 0 0 -39z'
                                    />
                                    <path
                                        d='M687 553 c-4 -3 -7 -120 -7 -258 0 -205 3 -255 14 -264 9 -7 41 -11
83 -9 l68 3 3 93 3 92 63 0 63 0 58 -95 57 -95 227 2 226 3 3 93 3 92 142 0
c116 0 149 4 182 19 84 38 120 119 113 256 l-3 70 -80 0 -80 0 -5 -90 -5 -90
-132 -3 -133 -3 0 96 0 95 -80 0 -80 0 0 -185 0 -185 -99 0 c-80 0 -101 3
-112 17 -11 12 -11 17 -2 20 29 10 67 49 84 87 14 31 19 65 19 144 l0 102 -80
0 -79 0 -3 -92 -3 -93 -132 -3 -133 -3 0 96 0 95 -78 0 c-43 0 -82 -3 -85 -7z'
                                    />
                                </g>
                            </svg>
                        </NavLink>
                    </div>

                    <div className='header__nav'>
                        <div className='header__nav__btn' onClick={() => navHandler()}>
                            <div className='bar-top'></div>
                            <div className='bar-middle'></div>
                            <div className='bar-bottom'></div>
                        </div>

                        <nav className='header__nav__menu'>
                            <NavLink to='/' exact onClick={() => closeMenu()}>
                                &#60;Home &#47;&#62;
                            </NavLink>
                            <NavLink to='/about' onClick={() => closeMenu()}>
                                &#60;About &#47;&#62;
                            </NavLink>
                            <NavLink to='/portfolio' onClick={() => closeMenu()}>
                                &#60;Portfolio &#47;&#62;
                            </NavLink>
                            <NavLink to='/cv' onClick={() => closeMenu()}>
                                &#60;CV &#47;&#62;
                            </NavLink>
                            <NavLink to='/connect' onClick={() => closeMenu()}>
                                &#60;Connect &#47;&#62;
                            </NavLink>
                        </nav>
                    </div>
                </>
            </Container>
        </header>
    );
};
