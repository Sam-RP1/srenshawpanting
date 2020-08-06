import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/header.js';
import Splash from './components/splash.js';
import Contact from './components/pages/contact/contact.js';
import Footer from './components/footer/footer.js';

import logoDark from './assets/logo/logo-dark.png';
import logoLight from './assets/logo/logo.png';

function getContactStatus() {
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('sent');
  let title;
  
  if (status === null) {
      title = "Contact";
  } else if (status === "success") {
    title = "Message Sent!";
  } else if (status === "fail") {
    title = "Error Sending Message!";
  } else {
    title = "Unidentified Error! :0";
  }

  ReactDOM.render(<Splash title={title} />, document.getElementById('splash'));
}

ReactDOM.render(<Header logoDark={logoDark} logoLight={logoLight} />, document.getElementById('global-header'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));

window.addEventListener("load", getContactStatus);
