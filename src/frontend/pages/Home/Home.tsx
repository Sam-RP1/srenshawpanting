import React from 'react';

import { Header } from '../../containers/Header/Header';
import { Hero } from '../../containers/Hero/Hero';
import { About } from '../../containers/About/About';
import { Portfolio } from '../../containers/Portfolio/Portfolio';
import { Lab } from '../../containers/Lab/Lab';
import { Connect } from '../../containers/Connect/Connect';

export const Home = (): JSX.Element => {
    const headerBtns = ['about', 'portfolio', 'lab', 'connect'];
    const heroTitle = 'Welcome';
    const heroContent = "Hi, I'm Sam, a Full Stack Web Developer & Software Engineer";
    const heroNextItemLabel = "Let's get going...";

    return (
        <>
            <Header btns={headerBtns} />
            <Hero title={heroTitle} content={heroContent} nextItemLabel={heroNextItemLabel} />
            <About />
            <Portfolio />
            <Lab />
            <Connect />
        </>
    );
};
