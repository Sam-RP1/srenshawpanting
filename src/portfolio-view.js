import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/header.js';
import Splash from './components/splash.js';
import RenderPortfolioItem from './components/pages/portfolio/portfolio-view.js'
import Footer from './components/footer/footer.js';

import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo.png';

// FRED
import fredGif_1 from './assets/portfolio/fred-2020/gifs/fred-ops.gif';
import fredGif_2 from './assets/portfolio/fred-2020/gifs/fred-parallax.gif';
import fredPic_1 from './assets/portfolio/fred-2020/img/fred-1.png';
import fredPic_2 from './assets/portfolio/fred-2020/img/fred-2.png';
import fredPic_3 from './assets/portfolio/fred-2020/img/fred-3.png';
import fredPic_5 from './assets/portfolio/fred-2020/img/fred-5.png';
import fredPic_6 from './assets/portfolio/fred-2020/img/fred-6.png';
import fredPic_8 from './assets/portfolio/fred-2020/img/fred-8.png';
const fredData = {
  title: "fred",
  description: "The websites design was done to the clients request so that it takes on the feel of a 'PowerPoint' presentation, beyond this it is simple to navigate and features a number of 'pages' with parallax scrolling.",
  tech: ["HTML", "SCSS", "JSX", "React", "Webpack"],
  enableListTwo: true,
  listTwoTitle: "Features",
  listTwoContents: ["Horizontal One-Page Scrolling", "Parallax Vertical Scrolling"],
  buttons: [
    {
      link: "http://fred.srenshawpanting.co.uk/",
      text: "View Website"
    },
    {
      link: "https://github.com/Sam-RP1/fred-2020",
      text: "View Repository"
    },
  ],
  media: [
    {
      title: "One Page Scrolling",
      src: fredGif_1,
      alt: "Horizontal Scrolling using buttons",
      text: ""
    },
    {
      title: "Parallax Scrolling",
      src: fredGif_2,
      alt: "Vertical Parallax Scrolling",
      text: ""
    },
  ]
}

// Peer Review Portal
import prpGif_1 from './assets/portfolio/peer-review-portal/gifs/prp-join-class-test.gif';
import prpGif_2 from './assets/portfolio/peer-review-portal/gifs/prp-peer-review.gif';
import prpGif_3 from './assets/portfolio/peer-review-portal/gifs/prp-view-details.gif';
import prpGif_4 from './assets/portfolio/peer-review-portal/gifs/prp-results.gif';
import prpFile_1 from './assets/portfolio/peer-review-portal/files/prp.pdf';
const prpData = {
  title: "Peer Review Portal",
  description: "Peer Review Portal is a web application designed and developed to allow both the processes of peer review and meta-review to be conducted comprehensively in an online environment. Peer Review Portal has two user types, students and teachers, which are each provided with a suite of features that allow them to assume their respective roles and carry out their respective processes. As well as, the Peer Review Portal web application operates paperlessly and encompasses the setting, collecting and meta-reviewing of work for assignments by teachers and the submitting, peer-reviewing of work and accessing of feedback for assignments by students.\n \nImportantly, the Peer Review Portal web application provides a more steamlined and improved peer review and meta-review experience as it solves a number of issues identified by students and teachers that partake or have partaken in traditional peer review and meta-review processes.\n \nIssues experienced by students include difficulty interpereting or understanding marking schemes, uncertainty with what feedback to give or how to give critical feedback, losing work due to it being paper-based and the need to physically hand work in. The Peer Review Portal web application solves these student issues outlined by using a simple intuitive standard structure for giving feedback, having readily available guidance on how to give detailed or critical feedback and also removes the chances of losing work or the need to physically hand in work as the entire process is made paperless.\n \nIssues encountered by teachers include inefficiencies with setting assignments, collecting work for assignments, shuffling handed-in work, redistributing work randomly to students for peer reviewing and returning woth that has been peer reviewed to its owner. These teacher specific issues are solved by the Peer Review Portal web application letting students hand-in work online at anytime before the submission deadline set, automatically shuffling then redistributing submitted work to students for peer reviewing online and automatically returning feedback given to submitted work from completed peer reviews or meta-reviews to the works submitor.\n \nAs a whole, the Peer Review Portal web application was the artefact submitted for my individual final year project as an undergraduate studying software engineering. This individual final year project spanned eight months, commencing in the September of 2019 and concluding in the April of 2020. The project also required a report to be submitted alongside the Peer Review Portal artefact developed. The report submitted meticulously covers the projects in its entirety and can be accessed using the button found below.",
  tech: ["HTML", "CSS", "JS/JSX", "React", "Nodejs", "Express 4.X", "MySQL", "& More"],
  enableListTwo: true,
  listTwoTitle: "Features",
  listTwoContents: ["Google Sign In", "Create & Join Classes", "Create Assignments", "PDF File Submissions",
  "Automatic Shuffling & Distribution of Submitted Work for Assignments", "Peer & Meta Review Work", "& Many More"],
  buttons: [
    {
      link: prpFile_1,
      text: "View Report"
    },
  ],
  media: [
    {
      title: "Test One",
      src: prpGif_1,
      alt: "Picture One",
      text: "This is some text to test with."
    },
    {
      title: "Peer & Meta Reviewing",
      src: prpGif_2,
      alt: "Peer Reviewing Work",
      text: "Example of a peer review being completed using the split view user interface design."
    },
    {
      title: "View Assignment Details",
      src: prpGif_3,
      alt: "View Class Details per Assignment",
      text: "Teachers are able to view the details for each assignment set for the classes they create."
    },
    {
      title: "View Results",
      src: prpGif_4,
      alt: "Viewing Results for an Assignment",
      text: "Peer Review Portal allows students and teachers alike to view the results for each assignment all in one place."
    },
  ]
}

// Robotics
import roboticsFile_1 from './assets/portfolio/robotics/files/robotics-report.pdf';
import roboticsGif_1 from './assets/portfolio/robotics/gifs/robo-1.gif';
const roboticsData = {
  title: "robotics",
  description: "An individual university project with the aim to improve the performance of a mobile robot's object manipulation and sorting, based on colour, in a simulated scenario of an industrial environment using the V-REP simulation software.\n \nThe focal point of the project was sorting objects in industrial environments using robotics to automate the process.\n\nTo achieve the aims for the project in an efficient manner the final mobile robot deployed in the simulation scenario needed to be capable of manipulating at least one object at a time, identifying an object's colour so that it can be sorted appropriately, avoiding collisions with nearby structures and as a result be able to calculate its navigational path dynamically.\n \nThe Kuka YouBot was the mobile robot selected as it can manipulate objects using its 5 degrees of freedom arm, carry multiple objects on its rear platform and could also be modified to be equipped with proximity sensors along with an RGB sensor. Therefore meaning that the final Kuka YouBot deployed could be capable of achieving the project's aim.\n \nFor the Kuka YouBot to be able to make use of the proximity sensors and RGB sensor attached to it a number of algorithms were designed and implemented so that it could identify objects colours and sort them appropriately, as well as to detect structures and avoid collisions by dynamically calculating its navigational path.\n \nThe Project report details the approach taken, the mobile robot selected, the procedure designed, the simulation system itself, the results obtained from simulation runs and the conclusions deduced.",
  tech: ["Lua Script", "V-REP", "Kuka YouBot"],
  enableListTwo: true,
  listTwoTitle: "Features",
  listTwoContents: ["Proximity Sensors", "Collision Detection", "RGB Vision Sensor", "Colour Sorting"],
  buttons: [
    {
      link: roboticsFile_1,
      text: "View Report"
    },
    {
      link: "https://github.com/Sam-RP1/robotics-cw-2019",
      text: "View Repository"
    },
  ],
  media: [
    {
      title: "Colour Detection & Sorting",
      src: roboticsGif_1,
      alt: "",
      text: ""
    },
  ]
}

// SENDWI
const sendwiData = {
  id: "sendwi",
  title: "send wi",
  purpose: "srp designs",
  description: "A simplistic and clean website created for the Send Womens Institute to give the group an online presence. As well as, to be a place for interested women or new members to go for information.",
  url: "http://www.sendevewi.co.uk/",
  button: "View Website",
}

// PUDHUB
import pudGif_1 from './assets/portfolio/portsmouth-unattended-displays/gifs/pudhub-1.gif';
import pudGif_2 from './assets/portfolio/portsmouth-unattended-displays/gifs/pudhub-2.gif';
import pudGif_3 from './assets/portfolio/portsmouth-unattended-displays/gifs/pudhub-3.gif';
import pudFile_1 from './assets/portfolio/portsmouth-unattended-displays/files/README.md';
const pudData = {
  title: "pud hub",
  description: "The Portsmouth Unattended Displays Hub, a web application built to allow for the creation, customisation and management of unattended displays from a single place. In order for a display to be connected as an unattended display it must navigate to the web applications root address where it will be setup as. The web application has a number of features and functionalities like being able to create, edit and save HTML, CSS and JS files using a basic in browser text editor.",
  tech: [""],
  enableListTwo: true,
  listTwoTitle: "Features",
  listTwoContents: ["", "", "", ""],
  buttons: [
    {
      link: pudFile_1,
      text: "View README",
    },
    {
      link: "",
      text: "View Repository",
    }
  ],
  media: [
    {
      title: "Create & Delete Files",
      src: pudGif_1,
      alt: "Create Files & Delete Files",
      text: ""
    },
    {
      title: "Edit Files",
      src: pudGif_2,
      alt: "Edit Files in browser",
      text: ""
    },
    {
      title: "Configure Displays",
      src: pudGif_3,
      alt: "Configure unattended displays connected to the web application",
      text: ""
    },
  ]
}

// ERR MSG
const errData = {
  title: "Stop it! Error!",
  description: "Oi! Stop playing with my url!",
  tech: ["Fiddling", "Exploring", "Adventure", "Testing", "Experimenting"],
  enableListTwo: false,
  listTwoTitle: "",
  listTwoContents: [],
  buttons: [
    {
      link: "http://srenshawpanting.co.uk/",
      text: "Go Home",
    },
  ],
  media: [
    {
      title: "",
      src: "",
      alt: "",
      text: ""
    },
  ],
}

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
  } else if (projectId === "robotics2019") {
    project = roboticsData;
  } else if (projectId === "fred2020") {
    project = fredData;
  } else if (projectId === "pudhub") {
    project = pudData;
  } else {
    project = errData;
  }

  ReactDOM.render(<Splash title={project.title} />, document.getElementById('splash'));
  ReactDOM.render(<RenderPortfolioItem data={project} />, document.getElementById('content'));
}

ReactDOM.render(<Header logoDark={logoDark} logoLight={logoLight} />, document.getElementById('global-header'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));

window.addEventListener("load", renderProject);
