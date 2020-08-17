import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/header.js';
import Splash from './components/splash.js';
import RenderPortfolioItem from './components/pages/portfolio/portfolio-view.js'
import Footer from './components/footer/footer.js';

import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo.png';

// Foodlette
const foodletteData = {
  title: "foodlette",
  description: "In development!",
  tech: ["TBC"],
  enableListTwo: false,
  listTwoTitle: "",
  listTwoContents: [""],
  buttons: [
  ],
  media: [
  ]
}

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
  description: "A clean and pure website that takes on the role of a 'PowerPoint' presentation. The website was commissioned by the inventors of the FRED device, a patent-pending Fire Response Early Detection (FRED) device. FRED's inventors wanted a website that would be the 'be-all and end-all' for information, statistics and resources related to the FRED device and their project as a whole. The website needed to clearly present how FRED works, why FRED is needed and the problems FRED can solve to improve current domestic and public fire prevention strategies.\n \nAs a result, the design of the website contains no clutter, is simple to navigate using the horizontal one-page scroll feature and has some 'pages' with vertical parallax scrolling.",
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
      text: "FRED's inventors specifically requested that the website needed to look like, feel like and operate like a 'PowerPoint' presentation when using it. This was because they wanted it to be familiar and intuitive to use.\n \nTo achieve this, the website makes use of a horizontal one-page scroll method. On mobile devices, the website can be navigated by swiping left, right, up and down or by using the dots present at the bottom of the interface. Whereas, on larger devices, the website can be navigated using the dots at the bottom of the interface and a mouse scroll wheel."
    },
    {
      title: "Parallax Scrolling",
      src: fredGif_2,
      alt: "Vertical Parallax Scrolling",
      text: "FRED's inventors intended for the website to contain numerous pieces of information, diagrams and statistics throughout. However, they did not want the website to have too many 'pages' for users to horizontally scroll through when using it.\n \nTo accomplish the goals set out it was decided that the website would make use vertical scrolling on some pages where the extra content was needed.\n \nParallax scrolling was specifically used where it would add value to the content of the page and have a high impact on the user through its added imagery."
    },
  ]
}

// Peer Review Portal
import prpGif_1 from './assets/portfolio/peer-review-portal/gifs/prp-create-join-class.gif';
import prpGif_2 from './assets/portfolio/peer-review-portal/gifs/prp-create-assignment.gif';
import prpGif_3 from './assets/portfolio/peer-review-portal/gifs/prp-peer-review.gif';
import prpGif_4 from './assets/portfolio/peer-review-portal/gifs/prp-view-details.gif';
import prpGif_5 from './assets/portfolio/peer-review-portal/gifs/prp-results.gif';
import prpFile_1 from './assets/portfolio/peer-review-portal/files/prp.pdf';
const prpData = {
  title: "Peer Review Portal",
  description: "Peer Review Portal is a web application designed and developed to allow both the processes of peer review and meta-review to be conducted comprehensively in an online environment. Peer Review Portal has two user types, students and teachers, which are each provided with a suite of features that allow them to assume their respective roles and carry out their respective processes. As well as, the Peer Review Portal web application operates paperlessly and encompasses the setting, collecting and meta-reviewing of work for assignments by teachers and the submitting, peer-reviewing of work and accessing of feedback for assignments by students.\n \nImportantly, the Peer Review Portal web application provides a streamlined and improved peer review and meta-review experience as it solves a number of issues identified by students and teachers that partake or have partaken in traditional peer review and meta-review processes.\n \nIssues experienced by students include difficulty interpreting or understanding marking schemes, uncertainty with what feedback to give or how to give critical feedback, losing work due to it being paper-based and the need to physically hand work in. The Peer Review Portal web application solves these student issues outlined by using a simple intuitive standard structure for giving feedback, having readily available guidance on how to give detailed or critical feedback and also removes the chances of losing work or the need to physically hand in work as the entire process is made paperless.\n \nIssues encountered by teachers include inefficiencies with setting assignments, collecting work for assignments, shuffling handed-in work, redistributing work randomly to students for peer reviewing and returning with that has been peer-reviewed to its owner. These teacher-specific issues are solved by the Peer Review Portal web application letting students hand-in work online at any time before the submission deadline set, automatically shuffling then redistributing submitted work to students for peer reviewing online and automatically returning feedback given to submitted work from completed peer reviews or meta-reviews to the works submitter.\n \nAs a whole, the Peer Review Portal web application was the artefact submitted for my individual final year project as an undergraduate studying software engineering. This individual final year project spanned eight months, commencing in the September of 2019 and concluding in the April of 2020. The project also required a report to be submitted alongside the Peer Review Portal artefact developed. The report submitted meticulously covers the projects in its entirety and can be accessed using the button found below.",
  tech: ["HTML", "CSS", "JS/JSX", "Babel", "React", "Nodejs", "Express 4.X", "MySQL"],
  enableListTwo: true,
  listTwoTitle: "Features",
  listTwoContents: ["Google Sign In", "Create & Join Classes", "Create Assignments", "PDF File Submissions",
  "Automatic Shuffling & Distribution of Submitted Work for Assignments", "Peer & Meta Review Work", "& More"],
  buttons: [
    {
      link: prpFile_1,
      text: "View Report"
    },
  ],
  media: [
    {
      title: "Create & Join Classes",
      src: prpGif_1,
      alt: "Create and Join classes",
      text: "Teachers are able to create classes for students to join. When a class is created the Peer Review Portal web application will generate and assign a unique 8 character alphanumeric code to it. This code is the classes join code and is displayed to the teacher so that they can share it with students to allow them to join the class."
    },
    {
      title: "Create Assignments",
      src: prpGif_2,
      alt: "Creating an assignment",
      text: "Teachers are able to create assignments for their classes. When creating an assignment the teacher is provided with a comprehensive form that they will need to complete and submit.\n \nThis form enables teachers to fully customise their assignments by filling in numerous inputs ranging from a description through to separate work and review submissions due dates, link up to three external resources, upload and attach up to three pdf files and create the feedback form that will be used by the class when conducting their peer reviews."
    },
    {
      title: "Peer & Meta Reviewing",
      src: prpGif_3,
      alt: "Peer & Meta reviewing work using a split view user interface",
      text: "Both students and teachers are provided with the same 'split-view' user interface when carrying out a review, one half contains the work to be reviewed and the other half contains the feedback form to be filled in.\n \nThis design was implemented as it is space-efficient, removes the need for multiple tabs, is not cluttered, is understandable and allows users to efficiently review work.\n \nReviews can be saved, edited and submitted by users up until the due date set for the assignment has elapsed."
    },
    {
      title: "View Assignment Details",
      src: prpGif_4,
      alt: "View Class Details per Assignment",
      text: "Teachers can view the details for every assignment they have created, allowing them immediate access to several critical pieces of information.\n \nTeachers can see the total number of students that have submitted their work, the total number of students that have completed all of their assigned peer reviews and how long there is left until the current deadline elapses.\n \nOn top of that, teachers can also view the individual work and peer reviews submitted for each student."
    },
    {
      title: "View Results",
      src: prpGif_5,
      alt: "Viewing Results for an Assignment",
      text: "Students and teachers alike can view the results for an assignment all in one place.\n \nStudents are able to see every piece of peer review feedback they received along with whether it was given by a fellow student or their teacher.\n \nTeachers are provided with extra statistics compared to students. This means teachers have access to the average boundary selection and mark given per criterion, the highest/lowest mark achieved and each student's mark as a percentage.\n \nAs well as, teachers can look at the work submitted, peer reviews given and feedback received for every student in the class."
    },
  ]
}

// Robotics
import roboticsFile_1 from './assets/portfolio/robotics/files/robotics-report.pdf';
import roboticsGif_1 from './assets/portfolio/robotics/gifs/robo-1.gif';
const roboticsData = {
  title: "robotics",
  description: "An individual university project with the aim to improve the performance of a mobile robot's object manipulation and sorting, based on colour, in a simulated scenario of an industrial environment using the V-REP simulation software.\n \nThe focal point of the project was sorting objects in industrial environments using robotics to automate the process.\n\nTo achieve the aims for the project in an efficient manner the final mobile robot deployed in the simulation scenario needed to be capable of manipulating at least one object at a time, identifying an object's colour so that it can be sorted appropriately, avoiding collisions with nearby obstacles and as a result be able to calculate its navigational path dynamically.\n \nThe Kuka YouBot was the mobile robot selected as it can manipulate objects using its 5 degrees of freedom arm, carry multiple objects on its rear platform and could also be modified to be equipped with proximity sensors along with an RGB sensor. Therefore meaning that the final Kuka YouBot deployed could be capable of achieving the project's aim.\n \nFor the Kuka YouBot to be able to make use of the proximity sensors and RGB sensor attached to it several algorithms were designed and implemented so that it could identify objects colours and sort them appropriately, as well as to detect structures or obstacles and avoid colliding with them by dynamically calculating its navigational path.\n \nThe project report details the approach taken, the mobile robot selected, the procedure designed, the simulation system itself, the results obtained from simulation runs and the conclusions deduced.",
  tech: ["V-REP", "Lua Script", "Kuka YouBot"],
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
      alt: "Kuka YouBot picking up a green object which is then dropped into its corresponding green bucket",
      text: "The RGB sensor integrated into the Kuka YouBot allows for it to detect the colours of objects, these colours are then identified by an algorithm using their RGB values and categorised. Once an object is categorised a second algorithm, for batch processing, then determines if the Kuka YoutBot should 'drop-off' and sort the object(s) it currently posses or if it should continue collecting more objects.\n \nThe RGB sensor integrated has been configured to have a short 'range' and field of view. This prevents the RGB sensor from detecting multiple objects at the same time. Thus avoiding the detection of multiple different RGB values which would break the very simple colour detection algorithm. However, the algorithm could be improved to overcome this."
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
  description: "The Portsmouth Unattended Displays Hub (PUDHUB) is a web application that allows for the creation, customisation and management of a network of unattended displays from a single place. The web application has a number of features and functionalities which include being able to create, edit and save HTML, CSS and JS files using a basic in-browser text editor, the capability to upload media files for use on unattended displays and the option to individually configure the settings for each unattended display connected to the PUDHUB web application.\n \nA display is turned into an unattended display by simply navigating it to the PUDHUB web applications root address. Once the request has been processed by the PUDHUB web application it will then serve the connecting display the necessary files to setup it up as an unattended display. From this point onwards the newly setup unattended display will maintain itself and communication with the PUDHUB web application in intervals. As well as, from this point, the unattended display can be completely customised and configured.",
  tech: ["HTML", "CSS", "JS", "Nodejs", "Express 4.X", "MySQL"],
  enableListTwo: true,
  listTwoTitle: "Features",
  listTwoContents: ["Create & Edit Files In-browser", "Configure & Customise Unattended Displays",  "Upload Media", "Self Updating Unattended Displays"],
  buttons: [
    {
      link: pudFile_1,
      text: "View README",
    },
    {
      link: "https://github.com/Sam-RP1/pudhub",
      text: "View Repository",
    }
  ],
  media: [
    {
      title: "Create & Delete Files",
      src: pudGif_1,
      alt: "Create Files & Delete Files",
      text: "Users can create three different types of files, pages (HTML), styles (CSS) and scripts (JS) and give new files a name. Each file created comes preconfigured with its own default contents, which changes depending on the type of file created. This preconfigured default content provides a framework for the user to build on. Once a file is created it can be immediately selected for use on unattended displays.\n \nUsers can also delete files they no longer want. Before deletion takes place the PUDHUB web application checks if any of the unattended displays are currently using the file selected for deletion if so these unattended displays are automatically updated with a replacement file to ensure they can continue to operate without errors."
    },
    {
      title: "Edit Files",
      src: pudGif_2,
      alt: "Edit Files in browser",
      text: "Users can edit all of the default files that are provided with the PUDHUB web application as well as all of the files they have created themselves. This allows users the ability to maintain, correct, update and edit files as and when needed."
    },
    {
      title: "Configure Displays",
      src: pudGif_3,
      alt: "Configure unattended displays connected to the web application",
      text: "Users can configure and customise every unattended display connected to the PUDHUB web application. This allows users to change the name, refresh interval, page file to be displayed and that page files contents for each unattended display individually."
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
  } else if (projectId === "foodlette2020") {
    project = foodletteData;
  } else {
    project = errData;
  }

  ReactDOM.render(<Splash title={project.title} />, document.getElementById('splash'));
  ReactDOM.render(<RenderPortfolioItem data={project} />, document.getElementById('content'));
}

ReactDOM.render(<Header logoDark={logoDark} logoLight={logoLight} />, document.getElementById('global-header'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));

window.addEventListener("load", renderProject);
