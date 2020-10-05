const debounce = (lastEventTime, delay, callback) => {
  const currentTime = Date.now();
  if (currentTime - lastEventTime > delay) {
    callback(currentTime);
    return true;
  }
  return false;
}

export default debounce;
