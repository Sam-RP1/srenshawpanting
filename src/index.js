import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/Header.js';
import SplashIndex from './components/splash/SplashIndex.js';
import About from './components/about/About.js';
import Options from './components/options/Options.js';
import Footer from './components/footer/Footer.js';

ReactDOM.render(<Header />, document.getElementById('global-header'));
ReactDOM.render(<SplashIndex />, document.getElementById('splash'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Options />, document.getElementById('options'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));
