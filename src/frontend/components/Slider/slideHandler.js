/**
* slideHandler(numSlides, action, id, callback) -
* Handles the changing of slides and their transitions.
* @param {int} numSlides The total number of slides
* @param {int} action Increment or decrement the open slide (+1 or -1)
* @param {string} animation The name of the transition animation to perform
* @param {string} id The current id of the open slide, follows the format NAME-slide-X
* @param {callback} callback A passed function that allows the callers states to be updated
*/
const slideHandler = (numSlides, action, animation, id, callback) => {
  const splitName = id.split("-");
  const currentSlideNum = parseInt(splitName[2]);
  const nextSlideNum = currentSlideNum + action; // Increment or decrement one slide
  let leftBtn;
  let rightBtn;

  // Set buttons 
  if (nextSlideNum === 0) {
    leftBtn = false;
    rightBtn = true;
  } else if ((nextSlideNum + 1) === numSlides) {
    leftBtn = true;
    rightBtn = false;
  } else {
    leftBtn = true;
    rightBtn = true;
  }

  const nextSlideId = splitName[0] + "-" + splitName[1] + "-" + nextSlideNum.toString();

  const currentSlide = document.getElementById(id);
  const nextSlide = document.getElementById(nextSlideId);

  // Transition methods or functions need to go here
  if ((' ' + nextSlide.className + ' ').indexOf(' ' + 'end' + ' ') > -1 === true) {
    currentSlide.classList.toggle("reverse");
    nextSlide.classList.toggle("open");

    setTimeout(() => {
      currentSlide.classList.toggle("start");
      currentSlide.classList.toggle("reverse");
      nextSlide.classList.toggle("end");
      nextSlide.classList.toggle("open");
    }, 810)
  } else {
    nextSlide.classList.toggle("open");
    currentSlide.classList.toggle("close");

    setTimeout(() => {
      nextSlide.classList.toggle("start");
      nextSlide.classList.toggle("open");
      currentSlide.classList.toggle("end");
      currentSlide.classList.toggle("close");
    }, 810)
  }

  // Update callers state
  callback(nextSlideId, leftBtn, rightBtn);
}

export default slideHandler;
