import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/header.js';
import SplashIndex from './components/pages/index/splash.js';

import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo.png';

ReactDOM.render(<Header logoDark={logoDark} logoLight={logoLight} />, document.getElementById('global-header'));
ReactDOM.render(<SplashIndex />, document.getElementById('splash'));
