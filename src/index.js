import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/header.js';
import SplashIndex from './components/pages/index/splash.js';
import About from './components/pages/index/about.js';
import Options from './components/pages/index/options.js';
import Footer from './components/footer/footer.js';

import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo.png';

ReactDOM.render(<Header logoDark={logoDark} logoLight={logoLight} />, document.getElementById('global-header'));
ReactDOM.render(<SplashIndex />, document.getElementById('splash'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Options />, document.getElementById('options'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));
