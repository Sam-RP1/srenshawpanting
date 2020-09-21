import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/Header.js';
import Splash from './components/splash/Splash.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Footer from './components/footer/Footer.js';

ReactDOM.render(<Header />, document.getElementById('global-header'));
ReactDOM.render(<Splash title={"Portfolio"} />, document.getElementById('splash'));
ReactDOM.render(<Portfolio />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));
