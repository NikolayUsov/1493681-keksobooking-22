import {
  TITLE_OF_HOTEL,
  TYPE_OF_HOTEL,
  TIME_OF_CHECKIN,
  TIME_OF_CHECKOUT,
  FEATURES_OF_HOTEL,
  PHOTO_OF_HOTEL,
  INTRO,
  FEATURES,
  TAGLINE
} from './data.js';

import {
  getRandomIntegerInRange,
  getRandomFloatInRange,
  getRandomArrElement,
  getRandomUniqueArr
} from './util.js';

const createRandomDescription = (element = 'место') => {
  return `${getRandomArrElement(INTRO)} ${element} ${getRandomArrElement(FEATURES)} ${getRandomArrElement(TAGLINE)}`;
}

const createHotel = () => {
  const locationX = getRandomFloatInRange(35.65000, 35.70000, 5);
  const locationY = getRandomFloatInRange(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntegerInRange(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrElement(TITLE_OF_HOTEL),
      address: `${locationX} ${locationY}`,
      price: getRandomIntegerInRange(0, 100000),
      type: getRandomArrElement(TYPE_OF_HOTEL),
      rooms: getRandomIntegerInRange(1, 10),
      guests: getRandomIntegerInRange(1, 24),
      checkin: getRandomArrElement(TIME_OF_CHECKIN),
      checkout: getRandomArrElement(TIME_OF_CHECKOUT),
      features: getRandomUniqueArr(FEATURES_OF_HOTEL),
      description: createRandomDescription(),
      photos: getRandomUniqueArr(PHOTO_OF_HOTEL),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
}

export const createHostelsData = (items = 10) => {
  const  newArr = [];
  for (let i = 1; i<=items; i++) {
    newArr.push(createHotel());
  }

  return newArr;
}
