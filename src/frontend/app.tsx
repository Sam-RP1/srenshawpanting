import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import { Home } from './pages/Home/Home';
import { Showcase } from './pages/Showcase/Showcase';

// Page Components
import { Cursor } from './components/Cursor/Cursor';
import { Footer } from './containers/Footer/Footer';
import { Background } from './components/Background/Background';

// Showcase data
import { deductionData } from './assets/projects/deduction/deduction';

/**
 * Exports App
 * @returns JSX.Element
 */
export const App = (): JSX.Element => {
    return (
        <section data-test='component-app'>
            <Background />
            <BrowserRouter>
                <Route path='/thedeductiongame' exact render={() => <Showcase data={deductionData} />} />
                <Route path='/' exact component={Home} />
            </BrowserRouter>
            <Footer />
            <Cursor />
        </section>
    );
};

// Need an error route
