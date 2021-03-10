
export const declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => {
  return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export const debounce = (fn, delay) => {
  let time;
  return function () {
    const debounced  = () => { fn.apply(this, arguments) }
    clearTimeout(time);
    time = setTimeout(debounced, delay);
  }
};

export const  createImgElement = (alt ='', width = '50', height = '50') => {
  const img = document.createElement('img');
  img.src = '';
  img.alt = alt;
  img.width = width;
  img.height = height;

  return img
}
