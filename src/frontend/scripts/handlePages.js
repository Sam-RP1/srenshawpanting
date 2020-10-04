/**
* handlePages(numPages, action, id, callback) -
* Handles the changing of pages and their transitions.
* @param {int} numPages The total number of pages
* @param {int} action Increment or decrement the page (+1 or -1)
* @param {string} animation The name of the transition animation to perform
* @param {string} id The current id of the open page, follows the format NAME-page-X
* @param {callback} callback A passed function that allows the callers states to be updated
*/
const handlePages = (numPages, action, animation, id, callback) => {
  const splitName = id.split("-");
  const currentPageNum = parseInt(splitName[2]);
  const nextPageNum = currentPageNum + action; // Increment or decrement one page
  let leftBtn;
  let rightBtn;

  if (nextPageNum === 0) {
    leftBtn = false;
    rightBtn = true;
  } else if ((nextPageNum + 1) === numPages) {
    leftBtn = true;
    rightBtn = false;
  } else {
    leftBtn = true;
    rightBtn = true;
  }

  const nextPageId = splitName[0] + "-" + splitName[1] + "-" + nextPageNum.toString();

  const currentPage = document.getElementById(id);
  const nextPage = document.getElementById(nextPageId);

  // Transition
  if ((' ' + nextPage.className + ' ').indexOf(' ' + 'end' + ' ') > -1 === true) {
    currentPage.classList.toggle("reverse");
    nextPage.classList.toggle("open");

    setTimeout(() => {
      currentPage.classList.toggle("start");
      currentPage.classList.toggle("reverse");
      nextPage.classList.toggle("end");
      nextPage.classList.toggle("open");
    }, 1310)
  } else {
    nextPage.classList.toggle("open");
    currentPage.classList.toggle("close");

    setTimeout(() => {
      nextPage.classList.toggle("start");
      nextPage.classList.toggle("open");
      currentPage.classList.toggle("end");
      currentPage.classList.toggle("close");
    }, 1310)
  }

  // Update callers state
  callback(nextPageId, leftBtn, rightBtn);
}

export default handlePages;
