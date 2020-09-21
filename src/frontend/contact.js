import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header/Header.js';
import Splash from './components/splash/Splash.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';

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

ReactDOM.render(<Header />, document.getElementById('global-header'));
ReactDOM.render(<Contact />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('global-footer'));

window.addEventListener("load", getContactStatus);
