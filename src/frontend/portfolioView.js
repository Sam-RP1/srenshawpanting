import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/Header.js';
import Splash from './components/splash/Splash.js';
import RenderPortfolioItem from './components/portfolio/PortfolioView.js'
import Footer from './components/footer/Footer.js';

import { foodletteData } from './components/portfolio/PortfolioView-data.js';
import { fredData } from './components/portfolio/PortfolioView-data.js';
import { letterDetonatorData } from './components/portfolio/PortfolioView-data.js'
import { prpData } from './components/portfolio/PortfolioView-data.js';
import { roboticsData } from './components/portfolio/PortfolioView-data.js';
import { pudData } from './components/portfolio/PortfolioView-data.js';
import { karensBeautyBox } from './components/portfolio/PortfolioView-data.js';
import { errData } from './components/portfolio/PortfolioView-data.js';

// Functions
function getProjectId() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('projectid');
  return ((projectId !== null) ? projectId : 'error');
}

function renderProject() {
  const projectId = getProjectId();
  let project;

  if (projectId === "peerreviewportal") {
    project = prpData;
  } else if (projectId === 'letterdetonator') {
    project = letterDetonatorData;
  } else if (projectId === "robotics2019") {
    project = roboticsData;
  } else if (projectId === "fred2020") {
    project = fredData;
  } else if (projectId === "pudhub") {
    project = pudData;
  } else if (projectId === "foodlette2020") {
    project = foodletteData;
  } else if (projectId === "karensbeautybox") {
    project = karensBeautyBox;
  } else {
    project = errData;
  }

  ReactDOM.render(<Splash title={project.title} />, document.getElementById('splash'));
  ReactDOM.render(<RenderPortfolioItem data={project} />, document.getElementById('content'));
}

ReactDOM.render(<Header />, document.getElementById('global-header'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));

window.addEventListener("load", renderProject);
