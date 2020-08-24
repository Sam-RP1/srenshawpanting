import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/Header.js';
import Splash from './components/splash/Splash.js';
import Footer from './components/footer/Footer.js';

ReactDOM.render(<Header />, document.getElementById('global-header'));
ReactDOM.render(<Splash title={"Sorry, not available!"} />, document.getElementById('splash'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));
