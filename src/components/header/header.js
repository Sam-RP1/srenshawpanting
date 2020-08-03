'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import '../../styles/header.scss';

let prevWindowWidth;
let prevWindowHeight;

/**
* HeaderBar() - Contains the HTML for the header component.
* @return returns the HTML for the header component
*/
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoDark: props.logoDark,
      logoLight: props.logoLight,
    }
  }

  componentDidMount() {
    document.getElementById('nav-menu-btn').addEventListener("click", navToggle);
    document.getElementById('nav-menu-btn').addEventListener("click", openMenu);
    prevWindowWidth = window.innerWidth;
    prevWindowHeight = window.innerHeight;
    window.addEventListener('load', runScripts);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="header-content-container container">
      <a href="index.html" id="header-logo-wrapper">
      <img id="header-logo" src={this.state.logoDark}></img>
      <img id="header-logo-alt" src={this.state.logoLight}></img>
      </a>
      <nav id="nav" className="nav-container">
      <div className="nav-menu-wrapper">
      <ul id="nav-menu">
      <li><a href="index.html#about">About</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="coming-soon.html">Services</a></li>
      <li><a href="contact.html">Contact</a></li>
      </ul>
      </div>
      <div id="nav-menu-btn">
      <div id="bar-1"></div>
      <div id="bar-2"></div>
      <div id="bar-3"></div>
      </div>
      </nav>
      </div>
    );
  }
}

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

async function runScripts() {
  scrolledNav();
  checkSize();
  window.addEventListener('scroll', scrolledNav);
  window.addEventListener('resize', checkSize);
  if (document.title.substr(0, 7) === "Bespoke") {
    addSmoothScroll();
  }
};

function checkSize() {
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
  prevWindowWidth = window.innerWidth;
  prevWindowHeight = window.innerHeight;
};

function scrolledNav() {
  // Header Colour & Height Handlers for window widths greater than or equal to 992px
  if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth >= 992) {
    document.getElementById("global-header").style.backgroundColor = "#fff";
    document.getElementById("global-header").style.color = "#171717";
    document.getElementById("global-header").style.height = "100px";
    document.getElementById("header-logo-alt").style.display = "none";
    document.getElementById("header-logo").style.display = "block";
    document.getElementById("header-logo-wrapper").style.height = "50%";
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
    document.getElementById("global-header").style.height = "100px";
    document.getElementById("header-logo-wrapper").style.height = "50%";
  } else if (window.innerWidth < 992) {
    document.getElementById("global-header").style.height = "120px";
    document.getElementById("header-logo-wrapper").style.height = "40%";
  }
  // Header Drop Down Menu Handler
  let navMenuTop = document.getElementById('nav-menu').style.top;
  if (parseInt(navMenuTop, 10) > 1) {
    if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth < 768) {
      document.getElementById("nav-menu").style.top = "69px";
    } else if (window.innerWidth < 768) {
      document.getElementById("nav-menu").style.top = "79px";
    }
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
  document.getElementById("nav-menu").style.height = "148px";
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
