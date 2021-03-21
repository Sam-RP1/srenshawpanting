import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import { Home } from './containers/Home/Home';
import { UIDesignSystem } from './containers/UIDesignSystem/UIDesignSystem';

export const App = (): JSX.Element => {
    return (
        <section className='theme theme-dark' data-test='component-app'>
            <BrowserRouter>
                <Route path='/' exact component={UIDesignSystem} />
            </BrowserRouter>
        </section>
    );
};
