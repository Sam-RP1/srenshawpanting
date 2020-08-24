'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

/**
* HeaderNav - Contains the Navigation component for the Header component.
*/
class HeaderNav extends Component {
  componentDidMount() {
    document.getElementById('nav-menu-btn').addEventListener("click", navToggle);
    document.getElementById('nav-menu-btn').addEventListener("click", openMenu);
  }

  render() {
    return (
      <nav id="nav" className="nav-container">
      <div className="nav-menu-wrapper">
      <ul id="nav-menu">
      <li><a href="index.html#about">About</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="placeholder.html">Services</a></li>
      <li><a href="contact.html">Contact</a></li>
      </ul>
      </div>
      <div id="nav-menu-btn">
      <div id="bar-1"></div>
      <div id="bar-2"></div>
      <div id="bar-3"></div>
      </div>
      </nav>
    )
  }
}


/**
* openMenu() - Styles the navigation menu to be visible.
*/
function openMenu() {
  document.getElementById('nav-menu-btn').removeEventListener('click', openMenu);
  document.getElementById('nav-menu-btn').addEventListener("click", closeMenu);
  if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth < 768) {
    document.getElementById("nav-menu").style.top = "69px";
  } else if (window.innerWidth < 768) {
    document.getElementById("nav-menu").style.top = "79px";
  }
  document.getElementById("nav-menu").style.height = "168px";
};

/**
* closeMenu() - Styles the navigation menu to be hidden.
*/
function closeMenu() {
  document.getElementById('nav-menu-btn').removeEventListener('click', closeMenu);
  document.getElementById('nav-menu-btn').addEventListener("click", openMenu);
  document.getElementById("nav-menu").style.height = "0px";
};

/**
* navToggle(x) - Toggles the menu button between icon and X.
*/
function navToggle() {
  document.getElementById('nav-menu-btn').classList.toggle("change");
};

export default HeaderNav;
