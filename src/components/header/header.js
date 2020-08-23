'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import '../../styles/header.scss';

let prevWindowWidth;
let prevWindowHeight;

/**
* Header - Class for the header component.
*/
class Header extends Component {
  componentDidMount() {
    prevWindowWidth = window.innerWidth;
    prevWindowHeight = window.innerHeight;
    checkWindowSize();
    scrolledWindow();
    document.getElementById('nav-menu-btn').addEventListener("click", navToggle);
    document.getElementById('nav-menu-btn').addEventListener("click", openMenu);
    window.addEventListener('scroll', scrolledWindow);
    window.addEventListener('resize', checkWindowSize);
    if (document.title.substr(0, 7) === "Bespoke") {
      addSmoothScroll();
    }
  }

  render() {
    return (
      <div className="header-content-container container">
      <a href="index.html" id="header-logo-wrapper">
      <img id="header-logo-alt" src={this.props.logoLight}></img>
      <img id="header-logo" src={this.props.logoDark}></img>
      </a>
      <Navigation />
      </div>
    );
  }
}

/**
* Navigation - Contains the Navigation component for the header component.
*/
class Navigation extends Component {
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
* addSmoothScroll() - Adds smooth scrolling to a target element using jQuery.
*/
function addSmoothScroll() {
  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
};

/**
* checkWindowSize() - Checks the clients browser window size and styles the header accordingly.
*/
function checkWindowSize() {
  if (window.innerWidth < 992 && window.innerWidth < prevWindowWidth) {
    document.getElementById("global-header").style.backgroundColor = "#fff";
    document.getElementById("global-header").style.color = "#171717";
    document.getElementById("header-logo-alt").style.display = "none";
    document.getElementById("header-logo").style.display = "block";
  } else if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth >= 992 && window.innerWidth > prevWindowWidth) {
    document.getElementById("global-header").style.backgroundColor = "#fff";
    document.getElementById("global-header").style.color = "#171717";
    document.getElementById("header-logo-alt").style.display = "none";
    document.getElementById("header-logo").style.display = "block";
  } else if (window.innerWidth >= 992 && window.innerWidth > prevWindowWidth) {
    document.getElementById("global-header").style.backgroundColor = "transparent";
    document.getElementById("global-header").style.color = "#fff";
    document.getElementById("header-logo").style.display = "none";
    document.getElementById("header-logo-alt").style.display = "block";
  }
  if (window.innerWidth < 768) {
    document.getElementById('nav-menu-btn').style.display = 'block';
    document.getElementById('nav-menu').classList.add('nav-list');
  } else if (window.innerWidth >= 768) {
    document.getElementById('nav-menu-btn').style.display = 'none';
    document.getElementById('nav-menu').classList.remove('nav-list');
  }
  // Update to current width and height of window
  prevWindowWidth = window.innerWidth;
  prevWindowHeight = window.innerHeight;
};

/**
* scrolledWindow() - Checks if the clients browser window is scrolled and styles the header accordingly.
*/
function scrolledWindow() {
  // Header Colour & Height Handlers for window widths greater than or equal to 992px
  if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth >= 992) {
    if (document.getElementById("header-logo-wrapper").style.height !== "50%") {
      document.getElementById("global-header").style.backgroundColor = "#fff";
      document.getElementById("global-header").style.color = "#171717";
      document.getElementById("global-header").style.height = "100px";
      document.getElementById("header-logo-alt").style.display = "none";
      document.getElementById("header-logo").style.display = "block";
      document.getElementById("header-logo-wrapper").style.height = "50%";
    }
  } else if (window.innerWidth >= 992) {
    document.getElementById("global-header").style.backgroundColor = "transparent";
    document.getElementById("global-header").style.color = "#fff";
    document.getElementById("global-header").style.height = "120px";
    document.getElementById("header-logo").style.display = "none";
    document.getElementById("header-logo-alt").style.display = "block";
    document.getElementById("header-logo-wrapper").style.height = "40%";
  }
  // Header Colour & Height Handlers for window widths less than 992px
  if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth < 992) {
    if (document.getElementById("header-logo-wrapper").style.height !== "50%") {
      document.getElementById("global-header").style.height = "100px";
      document.getElementById("header-logo-wrapper").style.height = "50%";
    }
  } else if (window.innerWidth < 992) {
    document.getElementById("global-header").style.height = "120px";
    document.getElementById("header-logo-wrapper").style.height = "40%";
  }
  // Header Drop Down Menu Handler
  if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth < 768) {
    if (document.getElementById("nav-menu").style.top !== "69px") {
      console.log(document.getElementById("nav-menu").style.top)
      document.getElementById("nav-menu").style.top = "69px";
    }
  } else if (window.innerWidth < 768) {
    document.getElementById("nav-menu").style.top = "79px";
  }
};

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

export default Header;
