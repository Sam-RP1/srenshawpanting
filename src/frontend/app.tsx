import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './containers/Home/Home';
import { About } from './components/About/About';
import { Connect } from './containers/Connect/Connect';
import { Footer } from './components/Footer/Footer';
// import { UIDesignSystem } from './containers/UIDesignSystem/UIDesignSystem';

import { icons } from './lib/icons';
import { links } from './lib/links';

export const App = (): JSX.Element => {
    return (
        <section className='theme theme-dark' data-test='component-app'>
            <BrowserRouter>
                <Header />
                <Route path='/connect' component={Connect} />
                <Route path='/about' component={About} />
                <Route path='/' exact component={Home} />
                <Footer icons={icons} links={links} />
            </BrowserRouter>
        </section>
    );
};
