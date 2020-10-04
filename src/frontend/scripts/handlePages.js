/**
* handlePages(numPages, action, id, callback) -
* Handles the changing of pages and their transitions.
* @param {int} numPages The total number of pages
* @param {int} action Increment or decrement the page (+1 or -1)
* @param {string} id The current id of the open page, follows the format NAME-page-X
* @param {callback} callback A passed function that allows the callers state to be updated with the newly opened pages id
*/
const handlePages = (numPages, action, id, callback) => {
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
  currentPage.classList.toggle("open");
  setTimeout(() => {
    nextPage.classList.toggle("open");
  }, 350)

  // Update callers state
  callback(nextPageId);
}

export default handlePages;
