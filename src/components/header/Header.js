'use strict';

import React, { useState, useEffect } from 'react';
import {hot} from 'react-hot-loader';
import '../../styles/root.scss';
import './Header.scss';

import Logo from './Logo';
import Nav from './Nav';

import logoDark from '../../assets/logo/logo-dark.png';
import logoLight from '../../assets/logo/logo.png';

/**
* Header - The header component.
*/
const Header = () => {
  const [isViewportSmall, setViewportState] = useState(undefined);

  useEffect(() => {
    windowSizeHandler();
    scrolledWindow();
    window.addEventListener('scroll', scrolledWindow);
    window.addEventListener('resize', windowSizeHandler);
    if (document.title.substr(0, 7) === "Bespoke") {
      addSmoothScroll();
    }
  }, [])

  const windowSizeHandler = () => {
    const header = document.getElementById("global-header");
    const logo = document.getElementById("header-logo");
    const logoAlt = document.getElementById("header-logo-alt");
    const nav = document.getElementById('nav-menu');
    const navBtn = document.getElementById('nav-menu-btn');

    if (window.innerWidth < 992 && (isViewportSmall === false || isViewportSmall === undefined)) {
      setViewportState(true);
      header.style.backgroundColor = "#fff";
      header.style.color = "#171717";
      logoAlt.style.display = "none";
      logo.style.display = "block";
    } else if (window.innerWidth >= 992 && (isViewportSmall === true || isViewportSmall === undefined)) {
      setViewportState(false);
      if (window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "#fff";
        header.style.color = "#171717";
        logoAlt.style.display = "none";
        logo.style.display = "block";
      } else {
        header.style.backgroundColor = "transparent";
        header.style.color = "#fff";
        logo.style.display = "none";
        logoAlt.style.display = "block";
      }
    }

    if (window.innerWidth < 768) {
      navBtn.style.display = 'block';
      nav.classList.add('nav-list');
    } else if (window.innerWidth >= 768) {
      navBtn.style.display = 'none';
      nav.classList.remove('nav-list');
    }
  };

  const scrolledWindow = () => {
    const header = document.getElementById("global-header");
    const logoWrapper = document.getElementById("logo-wrapper");
    const logo = document.getElementById("header-logo");
    const logoAlt = document.getElementById("header-logo-alt");
    const nav = document.getElementById('nav-menu');

    if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth >= 992) {
      if (logoWrapper.style.height !== "50%") {
        header.style.backgroundColor = "#fff";
        header.style.color = "#171717";
        header.style.height = "100px";
        logoAlt.style.display = "none";
        logo.style.display = "block";
        logoWrapper.style.height = "50%";
      }
    } else if (window.innerWidth >= 992) {
      header.style.backgroundColor = "transparent";
      header.style.color = "#fff";
      header.style.height = "120px";
      logo.style.display = "none";
      logoAlt.style.display = "block";
      logoWrapper.style.height = "40%";
    }

    if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth < 992) {
      if (logoWrapper.style.height !== "50%") {
        header.style.height = "100px";
        logoWrapper.style.height = "50%";
      }
    } else if (window.innerWidth < 992) {
      header.style.height = "120px";
      logoWrapper.style.height = "40%";
    }

    if ((window.scrollY > 50 || document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && window.innerWidth < 768) {
      if (nav.style.top !== "69px") {
        nav.style.top = "69px";
      }
    } else if (window.innerWidth < 768) {
      nav.style.top = "79px";
    }
  };

  const addSmoothScroll = () => {
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

  return (
    <div className="header-content-container container">
    <Logo logo={logoDark} logoAlt={logoLight} />
    <Nav />
    </div>
  );
}

export default Header;
