import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '../UI/Container/Container';

import './Header.scss';
import srpLogo from '../../assets/logo/logo-dark.png';

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
                            <img src={srpLogo}></img>
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
