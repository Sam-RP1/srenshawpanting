import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/Header.js';
import Splash from './components/splash/Splash.js';
import Services from './components/services/Services.js';
import Footer from './components/footer/Footer.js';

ReactDOM.render(<Header />, document.getElementById('global-header'));
ReactDOM.render(<Splash title={"Services"} />, document.getElementById('splash'));
ReactDOM.render(<Services />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));
