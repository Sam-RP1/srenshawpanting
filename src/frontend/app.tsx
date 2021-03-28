import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import { Home } from './containers/Home/Home';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { UIDesignSystem } from './containers/UIDesignSystem/UIDesignSystem';

export const App = (): JSX.Element => {
    return (
        <section className='theme theme-dark' data-test='component-app'>
            <BrowserRouter>
                <Header />
                <Route path='/about' component={About} />
                <Route path='/' exact component={UIDesignSystem} />
            </BrowserRouter>
        </section>
    );
};
