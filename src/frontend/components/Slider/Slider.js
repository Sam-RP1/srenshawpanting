import React, { useState, useEffect } from 'react';

import '../../styles/root.scss';

import slideHandler from './slideHandler';
import debounce from '../../scripts/debounce';

const Slider = (props) => {
  const [name, setName] = useState("undefined") // default "undefined"
  const [openSlide, setOpenSlide] = useState("undefined-slide-0"); // default undefined name
  const [leftBtnStatus, setLeftBtnStatus] = useState(false); // default false
  const [rightBtnStatus, setRightBtnStatus] = useState(false); // default false
  const [lastClickTime, setLastClickTime] = useState(0); // default 0
  const [slides, setSlides] = useState([]); // default empty
  const [transition, setTransition] = useState(undefined) // default undefined
  const [delay, setDelay] = useState(800); // default 800

  useEffect(() => {
    const itemsPerSlide = props.itemsPerSlide;
    const numSlides = Math.ceil(props.children.length / itemsPerSlide);
    const slideArr = [];
    let currentSlideNum = 0;
    let maxSlideNum = 0 + itemsPerSlide;

    for (let i = 0; i < numSlides; i++) {
      let slideContents = [];
      for (let x = currentSlideNum; x < maxSlideNum; x++) {
        if (x === props.children.length) {
          break;
        } else {
          slideContents.push(props.children[x]);
        }
      }
      slideArr.push(slideContents);
      currentSlideNum += itemsPerSlide;
      maxSlideNum += itemsPerSlide;
    }

    numSlides > 1 ? setRightBtnStatus(true) : setRightBtnStatus(false);
    setTransition(props.transition);
    setDelay(675 + (itemsPerSlide * 50)); // Change to its own method that sets delay based on animation props passed
    setSlides(slideArr);
    setOpenSlide(props.name + "-slide-0");
    setName(props.name);
  }, [props.children, props.name, props.itemsPerSlide, props.transition])

  const updateStates = (slide, leftBtn, rightBtn) => {
    setOpenSlide(slide);
    setLeftBtnStatus(leftBtn);
    setRightBtnStatus(rightBtn);
  }

  return (
    <>
    <div className={name + "-slide-container"}>
    {slides.map((slide, i) =>
      <section key={name + "-slide-" + i} id={name + "-slide-" + i} className={name + "-slide" + (i === 0 ? "" : " start")}>
      {slide.map((item, x) => item )}
      </section>
    )}
    </div>
    <div className={"btn-wrapper" + (slides.length <= 1 ? " disable" : "")}>
    <a className={"previous-btn" + (leftBtnStatus === false ? " disable" : "")} onClick={() => {debounce(lastClickTime, delay, setLastClickTime) ? slideHandler(slides.length, -1, transition, openSlide, updateStates) : null}}>
    <i className="fas fa-chevron-left"></i>
    </a>
    <a className={"next-btn" + (rightBtnStatus === false ? " disable" : "")} onClick={() => {debounce(lastClickTime, delay, setLastClickTime) ? slideHandler(slides.length, 1, transition, openSlide, updateStates) : null}}>
    <i className="fas fa-chevron-right"></i>
    </a>
    </div>
    </>
  )
}

export default Slider;
