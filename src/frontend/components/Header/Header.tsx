import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import srpLogo from '../../assets/logo/logo-dark.png';

// type HeaderProps = {};

export const Header = (): JSX.Element => {
    const renderCount = useRef(0);
    const navBtn = useRef();
    const navMenu = useRef();

    console.log('Header Renders: ', renderCount.current++);

    const navHandler = () => {
        navBtn.current.classList.toggle('active');
        navMenu.current.classList.toggle('active');
    };

    return (
        <header className='header'>
            <div className='header__logo'>
                <NavLink to='/'>
                    <img src={srpLogo}></img>
                </NavLink>
            </div>

            <section className='header__nav'>
                <div className='nav-menu-btn' onClick={() => navHandler()} ref={navBtn}>
                    <div className='bar-1'></div>
                    <div className='bar-2'></div>
                    <div className='bar-3'></div>
                </div>

                <nav ref={navMenu}>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                    <NavLink to='/cv'>CV</NavLink>
                    <NavLink to='/connect'>Connect</NavLink>
                </nav>
            </section>

            <ul style={{ display: 'none' }}>
                <li>Chess.com</li>
                <li>Instagram</li>
                <li>Github</li>
                <li>Youtube</li>
                <li>Linkedin</li>
            </ul>
        </header>
    );
};
