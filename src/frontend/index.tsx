import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';

import './styles/root.scss';
import './styles/layout/_timeline.scss';

const app = <App />;

ReactDOM.render(app, document.querySelector('#root'));
