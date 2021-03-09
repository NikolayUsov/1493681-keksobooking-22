export const getRandomRange = (min, max) => {
  if (min < 0 || max < 0) {

    return;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return min + (max - min) * Math.random ();
}

export const getRandomIntegerInRange = (min, max) => {
  const randomNumber = getRandomRange(min, max);

  return Math.round(randomNumber);
}

export const getRandomFloatInRange = (min, max, significand = 2) => {
  const randomNumber = getRandomRange(min, max);

  return Number(randomNumber.toFixed(significand));
}

export const getRandomArrElement = (arr) => arr[getRandomIntegerInRange(0, arr.length - 1)];

export const getRandomUniqueArr = (arr) => {
  const uniqueArr = [];
  const uniqueLength = getRandomIntegerInRange(0, arr.length-1);

  for (let i = 0; i < uniqueLength; i++) {
    let elem = arr[getRandomIntegerInRange(0, arr.length - 1)];

    if (!uniqueArr.includes(elem)){
      uniqueArr.push(elem);
    }
  }

  return uniqueArr;
}

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
    time = setTimeout(debounced, delay)
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
