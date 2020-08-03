import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/header.js';
import Splash from './components/splash.js';
import RenderPortfolioItem from './components/pages/portfolio/portfolio-view.js'
import Footer from './components/footer/footer.js';

import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo.png';

//

const fredData = {
  id: "fred",
  title: "fred",
  purpose: "srp designs",
  description: "",
  url: "fred.srenshawpanting.co.uk/",
  button: "View Website",
}

const prpData = {
  title: "Peer Review Portal",
  infoText: "Peer Review Portal is a web application designed and developed to allow the processes of both peer review and meta-review to be conducted comprehensively in an online environment. Peer Review Portal has two levels of users, students and teachers, which are each provided with a suite of features that allow them to assume their respective roles and carry out their respective processes. As well as, the Peer Review Portal web application operates paperlessly and encompasses the setting, collecting and meta-reviewing of work for assignments by teachers and the submitting, peer-reviewing of work and accessing of feedback for assignments by students.\n \nImportantly, the Peer Review Portal web application solves a number of issues identified by students and teachers that partake in traditional peer review and meta-review processes in order to provide an improved experience.\n \nIssues experienced by students include difficulty interpereting or understanding marking schemes, uncertainty with what feedback to give or how to give critical feedback, losing work due to it being paper-based and the need to physically hand work. The Peer Review Portal web application solves the student issues outlined by firstly using a simple informative set structure for giving feedback, having readily available guidance on how to give detailed or critical feedback and removes the chances of losing work or the need to physically hand in work as the entire process is paperless.\n \nIssues encountered by teachers include inefficiencies with setting assignments, collecting work for assignments, shuffling handed-in work, redistributing work randomly to students for peer reviewing and returning peer reviewed work to its owner. These issues are solved by the Peer Review Portal web application by letting students hand-in work online, automatically redistributing shuffled work to students for peer reviewing online and automatically returning feedback from completed peer reviews or meta-reviews on work to students.\n \nAs a whole, the Peer Review Portal web application was the artefact submitted for my individual final year project as an undergraduate studying software engineering. This individual final year project spanned eight months, commencing in the September of 2019 and concluding in the April of 2020. The project also required a report to be submitted alongside the Peer Review Portal artefact developed. The report submitted meticulously covers the projects in its entirety and can be accessed using the button found below.",
  tech: ["HTML", "CSS", "JS/JSX", "React", "Nodejs", "Express 4.X", "MySQL", "& More"],
  listTwoTitle: "Features",
  listTwo: ["Goolge Sign In", "Create & Join Classes", "Create Assignments", "PDF File Submissions",
  "Automatic Shuffling & Distribution of Submitted Work for Assignments", "Peer & Meta Review Work", "& Many More"],
  displayListTwo: true,
  firstBtn: "assets/portfolio/peer-review-portal/files/prp.pdf",
  secondBtn: "#",
  secondBtnText: "",
  displaySecondBtn: false,
  pictures: [{src: "assets/portfolio/peer-review-portal/gifs/prp-join-class-test.gif", alt: "Picture One"},
  {src: "assets/portfolio/peer-review-portal/gifs/prp-peer-review.gif", alt: "Peer Reviewing Work"},
  {src: "assets/portfolio/peer-review-portal/gifs/prp-view-details.gif", alt: "View Class Details per Assignment"},
  {src: "assets/portfolio/peer-review-portal/gifs/prp-results.gif", alt: "Viewing Results for an Assignment"}],
  titles: ["Test One", "Peer & Meta Reviewing", "View Assignment Details", "View Results"],
  texts: ["This is some text to test with.", "Example of a peer review being completed using the split view user interface design.", "Teachers are able to view the details for each assignment set for the classes they create.", "Peer Review Portal allows students and teachers alike to view the results for each assignment all in one place."],
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

const errData = {
  title: "Stop it! Error!",
  infoText: "Oi! Stop playing with my url!",
  tech: ["Fiddling", "Exploring", "Adventure", "Testing"],
  listTwoTitle: "",
  listTwo: [],
  displayListTwo: false,
  firstBtn: "#",
  secondBtn: "#",
  secondBtnText: "",
  displaySecondBtn: false,
  pictures: [],
  titles: [],
  texts: [],
}

//

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
  } else {
    project = errData;
  }

  ReactDOM.render(<Splash title={project.title} />, document.getElementById('splash'));
  ReactDOM.render(<RenderPortfolioItem data={project} />, document.getElementById('content'));
}

ReactDOM.render(<Header logoDark={logoDark} logoLight={logoLight} />, document.getElementById('global-header'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));

window.addEventListener("load", renderProject);
