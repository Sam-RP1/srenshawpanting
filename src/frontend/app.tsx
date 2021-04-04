import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ScrollToTop } from './hooks/useScrollToTop';
import { Header } from './components/Header/Header';
import { Home } from './containers/Home/Home';
import { About } from './containers/About/About';
import { Portfolio } from './containers/Portfolio/Portfolio';
import { Connect } from './containers/Connect/Connect';
import { Footer } from './components/Footer/Footer';
import { Background } from './components/Background/Background';
// import { UIDesignSystem } from './containers/UIDesignSystem/UIDesignSystem';

import { icons } from './lib/icons';
import { links } from './lib/links';

export const App = (): JSX.Element => {
    return (
        <section className='theme theme-dark' data-test='component-app'>
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Route path='/connect' component={Connect} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/about' component={About} />
                <Route path='/' exact component={Home} />
                <Footer icons={icons} links={links} />
            </BrowserRouter>
            <Background />
        </section>
    );
};
