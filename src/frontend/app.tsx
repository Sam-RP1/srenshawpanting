import React from 'react';

import { Cursor } from './components/Cursor/Cursor';
import { Header } from './containers/Header/Header';
import { Hero } from './containers/Hero/Hero';
import { About } from './containers/About/About';
import { Portfolio } from './containers/Portfolio/Portfolio';
import { Lab } from './containers/Lab/Lab';
import { Connect } from './containers/Connect/Connect';
import { Footer } from './containers/Footer/Footer';
import { Background } from './components/Background/Background';

export const App = (): JSX.Element => {
    return (
        <section data-test='component-app'>
            <Background />
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Lab />
            <Connect />
            <Footer />
            <Cursor />
        </section>
    );
};
