// DSS
import dssFile_1 from '../../assets/portfolio/distributed-systems/files/dss-report.pdf';
const dssData = {
  id: "dss-report",
  title: "distributed systems",
  purpose: "university research",
  description: "A paper in which methods to detect and mitigate DDOS attacks are researched, compared and evaluated for their suitability to be used by IoT temperature sensing devices as a DDOS security mechanism. The paper presents a basic lightweight algorithm that was tested and can be used by IoT temperature sensing devices to detect high volume DDOS attacks and mitigate their effects.",
  url: dssFile_1,
  button: "View Paper",
}

// Foodlette
const foodletteData = {
  id: "foodlette",
  title: "foodlette",
  purpose: "web application",
  description: "A web application that allows users to randomly choose their next meal, snack, confectionery or dessert to eat. Users can select from a range of themed roulette wheels to spin that will randomly determine what they should eat next.",
  url: "/portfolioView.html?projectid=foodlette2020",
  button: "In Development!",
}

// FRED
const fredData = {
  id: "fred-2019",
  title: "fred",
  purpose: "website",
  description: "A clean 'PowerPoint' like website designed, created and deployed for the patent-pending Fire Response Early Detection (FRED) device. FRED's inventors wanted a website that would be the 'be-all and end-all' for information, statistics and resources related to the FRED device and their project as a whole. The website needed to clearly present how FRED works, why FRED is needed and the problems FRED can solve to improve current domestic and public fire prevention strategies.",
  url: "/portfolioView.html?projectid=fred2020",
  button: "View More",
}

// Karensbeautybox
const karensBeautyBox = {
  id: "karensbeautybox",
  title: "Karen's Beauty Box",
  purpose: "website",
  description: "A single-page website with a refined design that features a beautiful centerpiece background alongside bespoke minimalistic icons and a logo. The site, icons and logo were designed and developed for Karens Beauty Box.",
  url: "/portfolioView.html?projectid=karensbeautybox",
  button: "View More",
}

// Letter Detonator
const letterDetonatorData = {
  id: "letter-detonator",
  title: "letter detonator",
  purpose: "web game",
  description: "A straightforward web game where users try to achieve a high score by surviving endless waves of randomly generated letters as long as possible. Users must detonate the approaching letters, causing them to explode, by pressing the corresponding letter key on their keyboard. The purpose of the game is twofold, have fun and help improve typing skills.",
  url: "/portfolioView.html?projectid=letterdetonator",
  button: "View More",
}

// Peer Review Portal
const prpData = {
  id: "peer-review-portal",
  title: "peer review portal",
  purpose: "web application",
  description: "A web application created to allow both peer review and meta-review to be conducted comprehensively in an online environment. The web application has two types of users, students and teachers, both of which are provided with features that enable them to assume their respective role and carry out their respective processes. The web application is also equipped with a number of functions that operate autonomously.",
  url: "/portfolioView.html?projectid=peerreviewportal",
  button: "View More",
}

// PUDHUB
const pudData = {
  id: "pudhub",
  title: "pud hub",
  purpose: "university project",
  description: "The Portsmouth Unattended Displays Hub is a web application built to allow for the creation, customisation and management of unattended displays from a single place. Displays are turned into 'unattended displays' by simply connecting them to the PUDHUB web applications root address where the display will then be provided with the necessary files to maintain itself and communication with the application. The web application has several features and functionalities that include being able to create, edit and save HTML, CSS and JS files using a basic in-browser text editor.",
  url: "/portfolioView.html?projectid=pudhub",
  button: "View More",
}

// Review
import reviewFile_1 from '../../assets/portfolio/literature-review-2017/files/litrev.pdf';
const reviewData = {
  id: "litreview",
  title: "mitigating data exposure",
  purpose: "university literature",
  description: "A literature review exploring the topic of Mitigating Corporate Information Exposure on the Web with a specific focus on Bring Your Own Device. The literature review evaluates some of the risks posed to corporations and the mitigation techniques used or put in place by corporations to prevent the exposure of information on the web.",
  url: reviewFile_1,
  button: "View Paper",
}

// Robotics
const roboticsData = {
  id: "robotics-cw-2019",
  title: "robotics",
  purpose: "university project",
  description: "An individual project with the aim to improve the performance of mobile robots object manipulation and sorting, based on colour, in a simulated scenario of an industrial environment. The mobile robots performance improvements were achieved through designing various procedures and algorithms, along with implementing specific hardware to facilitate and further enhance functionalities.",
  url: "/portfolioView.html?projectid=robotics2019",
  button: "View More",
}

// SENDWI
const sendwiData = {
  id: "sendwi-2019",
  title: "send wi",
  purpose: "website",
  description: "A simplistic and clean single-page website created for the Send Women's Institute to give the group an online presence. The website also serves as a place for interested women or Institute members to go for the latest information.",
  url: "http://www.sendevewi.co.uk/",
  button: "View Website",
}

// Portfolio array
export const portfolioData = {
  portfolio: [karensBeautyBox, letterDetonatorData, fredData, sendwiData],
  personal:[prpData, foodletteData, pudData, roboticsData, dssData, reviewData]
}

// Exports
export default portfolioData;
