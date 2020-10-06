/**
* debounce(lastEventTime, delay, callback) -
* Decides if an event has been called too recently and should therefore not be called again.
* @param {int} lastEventTime The time the last event took place
* @param {int} delay The delay that needs to be exceeded for the event to take place
* @param {callback} callback An optional parameter containing a passed function that allows the callers state to be updated if necessary
* @return {bool} True or false depending on logic outcome
*/
const debounce = (lastEventTime, delay, callback) => {
  const currentTime = Date.now();
  if (currentTime - lastEventTime > delay) {
    callback(currentTime);
    return true;
  }
  return false;
}

export default debounce;
