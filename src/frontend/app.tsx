import React from 'react';

// Page Components
import { Header } from './containers/Header/Header';
import { Hero } from './containers/Hero/Hero';
import { About } from './containers/About/About';
import { Portfolio } from './containers/Portfolio/Portfolio';
import { Lab } from './containers/Lab/Lab';
import { Connect } from './containers/Connect/Connect';
import { Cursor } from './components/Cursor/Cursor';
import { Footer } from './containers/Footer/Footer';
import { Background } from './components/Background/Background';

/**
 * Exports App
 * @returns JSX.Element
 */
export const App = (): JSX.Element => {
    const headerBtns = ['about', 'portfolio', 'lab', 'connect'];
    const heroTitle = 'Welcome';
    const heroContent = (
        <div className='hero__content__text'>
            <p>Hi, I&apos;m Sam, a Full Stack Web Developer & Software Engineer</p>
        </div>
    );
    const heroNextItemLabel = "Let's get going...";

    return (
        <section data-test='component-app'>
            <Background />
            <Header btns={headerBtns} />
            <Hero title={heroTitle} content={heroContent} nextItemLabel={heroNextItemLabel} />
            <About />
            <Portfolio />
            <Lab />
            <Connect />
            <Footer />
            <Cursor />
        </section>
    );
};
