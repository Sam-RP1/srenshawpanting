import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './containers/Home/Home';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
// import { UIDesignSystem } from './containers/UIDesignSystem/UIDesignSystem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const App = (): JSX.Element => {
    const links = [
        {
            id: 'about',
            url: (
                <NavLink key={'about-link'} to='/about'>
                    About
                </NavLink>
            ),
        },
        {
            id: 'portfolio',
            url: (
                <NavLink key={'portfolio-link'} to='/portfolio'>
                    Portfolio
                </NavLink>
            ),
        },
        {
            id: 'cv',
            url: (
                <NavLink key={'cv-link'} to='/cv'>
                    CV
                </NavLink>
            ),
        },
        {
            id: 'connect',
            url: (
                <NavLink key={'connect-link'} to='/connect'>
                    Connect
                </NavLink>
            ),
        },
    ];

    const icons = [
        { id: 'github', url: 'https://github.com/Sam-RP1', icon: <FontAwesomeIcon icon={faGithub} /> },
        {
            id: 'linkedin',
            url: 'https://www.linkedin.com/in/samuel-renshaw-panting/',
            icon: <FontAwesomeIcon icon={faLinkedinIn} />,
        },
        {
            id: 'youtube',
            url: 'https://www.youtube.com/user/TheWarpCentral',
            icon: <FontAwesomeIcon icon={faYoutube} />,
        },
        { id: 'instagram', url: 'https://www.instagram.com/sxm_rp/', icon: <FontAwesomeIcon icon={faInstagram} /> },
        { id: 'chess', url: 'https://www.chess.com/member/samuelr-p', icon: <FontAwesomeIcon icon={faChessKing} /> },
        { id: 'buymeacoffee', url: 'https://www.buymeacoffee.com/samrp', icon: <FontAwesomeIcon icon={faMugHot} /> },
    ];

    return (
        <section className='theme theme-dark' data-test='component-app'>
            <BrowserRouter>
                <Header />
                <Route path='/about' component={About} />
                <Route path='/' exact component={Home} />
                <Footer links={links} icons={icons} />
            </BrowserRouter>
        </section>
    );
};
