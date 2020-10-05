import React, { useState } from 'react';

import '../../styles/root.scss';

import slideHandler from './slideHandler';
import debounce from '../../scripts/debounce';

const Slider = (props) => {
  const [openSlide, setOpenSlide] = useState("repo-slide-0");
  const [leftBtnStatus, setLeftBtnStatus] = useState(false);
  const [rightBtnStatus, setRightBtnStatus] = useState(true);
  const [lastClickTime, setLastClickTime] = useState(0);
  const { sliderData } = props;
  const slides = [];
  const itemsPerSlide = props.itemsPerSlide;
  const numSlides = Math.ceil(sliderData.length / itemsPerSlide);
  const transition = props.transition;
  const delay = 700 + (itemsPerSlide * 50); // Change to its own method that sets delay based on animation props passed

  const updateStates = (slide, leftBtn, rightBtn) => {
    setOpenSlide(slide);
    setLeftBtnStatus(leftBtn);
    setRightBtnStatus(rightBtn);
  }

  let currentSlideNum = 0;
  let maxSlideNum = currentSlideNum + itemsPerSlide;
  for (let i = 0; i < numSlides; i++) {
    let slideContents = [];
    for (let x = currentSlideNum; x < maxSlideNum; x++) {
      if (x === sliderData.length) {
        break;
      } else {
        slideContents.push(sliderData[x]);
      }
    }
    slides.push(slideContents);
    currentSlideNum += itemsPerSlide;
    maxSlideNum += itemsPerSlide;
  }

  return (
    <>
    <div className="repo-slide-container">
    {slides.map((slide, i) =>
      <section key={"repo-slide-" + i} id={"repo-slide-" + i} className={"repo-slide" + (i === 0 ? "" : " start")}>
      {slide.map((item, x) =>
        <div key={item.id} className="repo">
        <h2>{item.title}</h2>
        <div className="repo-content">
        <div className="info-wrapper">
        <div>
        <p>Created:</p>
        <p>{item.created}</p>
        </div>
        <div>
        <p>Last Commit:</p>
        <p>{item.updated}</p>
        </div>
        </div>
        <div className="icons-wrapper">
        <a href={item.webUrl} target="_blank" style={{display: (item.webUrl === null ? "none" : "")}}><i className="fas fa-link"></i></a>
        <a href={item.repoUrl} target="_blank"><i className="fab fa-github"></i></a>
        </div>
        </div>
        </div>
      )}
      </section>
    )}
    </div>
    <div className={"btn-wrapper" + (numSlides <= 1 ? " disable" : "")}>
    <a className={"previous-btn" + (leftBtnStatus === false ? " disable" : "")} onClick={() => {debounce(lastClickTime, delay, setLastClickTime) ? slideHandler(numSlides, -1, "slide-in-out", openSlide, updateStates) : null}}>
    <i className="fas fa-chevron-left"></i>
    </a>
    <a className={"next-btn" + (rightBtnStatus === false ? " disable" : "")} onClick={() => {debounce(lastClickTime, delay, setLastClickTime) ? slideHandler(numSlides, 1, "slide-in-out", openSlide, updateStates) : null}}>
    <i className="fas fa-chevron-right"></i>
    </a>
    </div>
    </>
  )
}

export default Slider;
