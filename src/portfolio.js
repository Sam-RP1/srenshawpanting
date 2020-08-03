import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/header.js';
import Splash from './components/splash.js';
import Portfolio from './components/pages/portfolio/portfolio.js';
import Footer from './components/footer/footer.js';

import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo.png';

const dssData = {
  id: "dss-report",
  title: "distributed systems & security",
  purpose: "university research paper",
  description: "A paper in which methods to detect and mitigate DDOS attacks are researched, compared and evaluated for their suitability to be used by IoT temperature sensing devices as a DDOS security mechanism. The paper presents a basic lightweight algorithm that was tested and can be used by IoT temperature sensing devices to detect high volume DDOS attacks and mitigate their effects.",
  url: "assets/portfolio/distributed-systems/files/dss-report.pdf",
  button: "View Paper",
}

const foodletteData = {
  id: "foodlette",
  title: "foodlette",
  purpose: "web application",
  description: "A web application that allows users to randomly choose their next meal or food item to eat. Users can select from a range of themed roulette wheels to spin that when spun will randomly determine what they should eat.",
  url: "assets/portfolio/foodlette/files/___.pdf",
  button: "View Application",
}

const fredData = {
  id: "fred",
  title: "fred",
  purpose: "srp designs",
  description: "",
  url: "http://fred.srenshawpanting.co.uk/",
  button: "View Website",
}

const prpData = {
  id: "peer-review-portal",
  title: "peer review portal",
  purpose: "university individual project",
  description: "A web application created to allow both peer review and meta-review to be conducted comprehensively in an online environment. The web application has two types of users, students and teachers, both of which are provided with features that enable them to assume their respective role and carry out their respective processes. The web application is also equipped with with a number of functions that operate autonomously.",
  url: "/portfolio-view.html?projectid=peerreviewportal",
  button: "View Project",
}

const roboticsData = {
  id: "robotics",
  title: "robotics",
  purpose: "university individual project",
  description: "A individual project with the aim to improve the performance of a mobile robots object manipulation and sorting, based on colour, in a simulated scenario of an industrial environment. The mobile robots performance improvements were achieved through designing various procedures and algorithms, along with implementing specific hardwares to facilitate and enhance functionalities.",
  url: "assets/portfolio/robotics/files/robotics-report.pdf",
  button: "View Paper",
}

const sendwiData = {
  id: "sendwi",
  title: "send wi",
  purpose: "srp designs",
  description: "A simplistic and clean website created for the Send Womens Institute to give the group an online presence. As well as, to be a place for interested women or new members to go for information.",
  url: "http://www.sendevewi.co.uk/",
  button: "View Website",
}

const pudData = {
  id: "pudhub",
  title: "pud hub",
  purpose: "university individual project",
  description: "The Portsmouth Unattended Displays Hub, a web application built to allow for the creation, customisation and management of unattended displays from a single place. In order for a display to be connected as an unattended display it must navigate to the web applications root address where it will be setup as. The web application has a number of features and functionalities like being able to create, edit and save HTML, CSS and JS files using a basic in browser text editor.",
  url: "assets/portfolio/portsmouth-unattended-displays/files/README.md",
  button: "View Project",
}

const reviewData = {
  id: "litreview",
  title: "mitigating corporate information exposure",
  purpose: "university literature review",
  description: "A literature review exploring the topic of Mitigating Corporate Information Exposure on the Web with a specific focus on Bring Your Own Device. The literature review evaluates some of the risks posed to corporations and the mitigation techniques used or put in place by corporations in order to prevent the exposure of information on the web.",
  url: "assets/portfolio/literature-review-2017/files/litrev.pdf",
  button: "View Literature Review",
}

const portfolioArr = [dssData, fredData, prpData, roboticsData, sendwiData, pudData, reviewData];

ReactDOM.render(<Header logoDark={logoDark} logoLight={logoLight} />, document.getElementById('global-header'));
ReactDOM.render(<Splash title={"Portfolio"} />, document.getElementById('splash'));
ReactDOM.render(<Portfolio items={portfolioArr} />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));
