/**
* handlePages(numPages, action, id, callback) -
* Handles the changing of pages and their transitions.
* @param {int} numPages The total number of pages
* @param {int} action Increment or decrement the page (+1 or -1)
* @param {string} animation The name of the transition animation to perform
* @param {string} id The current id of the open page, follows the format NAME-page-X
* @param {callback} callback A passed function that allows the callers state to be updated with the newly opened pages id
*/
const handlePages = (numPages, action, animation, id, callback) => {
  const splitName = id.split("-");
  const currentPageNum = parseInt(splitName[2]);
  let nextPageNum;

  if (action === -1 && currentPageNum === 0) {
    nextPageNum = numPages - 1; // Skip to last page
  } else if (action === 1 && (currentPageNum + 1) === numPages) {
    nextPageNum = 0; // Skip to first page
  } else {
    nextPageNum = currentPageNum + action; // Increment or decrement one page
  }

  const nextPageId = splitName[0] + "-" + splitName[1] + "-" + nextPageNum.toString();

  const currentPage = document.getElementById(id);
  const nextPage = document.getElementById(nextPageId);

  // Transition
  nextPage.classList.toggle("open");
  currentPage.classList.toggle("close");

  setTimeout(() => {
    nextPage.classList.toggle("start");
    nextPage.classList.toggle("open");
    currentPage.classList.toggle("start");
    currentPage.classList.toggle("close");
  }, 1310)

  // Update callers state
  callback(nextPageId);
}

export default handlePages;
