const utils = {};

utils.sample = (array) => {
  const res = array[Math.floor(Math.random() * array.length)];
  return res;
};

utils.getNextIndex = (currentIndex, array) => {
  const res = (currentIndex === array.length - 1) ? 0 : currentIndex + 1;
  return res;
};

utils.getPreviousIndex = (currentIndex, array) => {
  const res = (currentIndex === 0) ? array.length - 1 : currentIndex - 1;
  return res;
};


export default utils;
