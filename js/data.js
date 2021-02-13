import {
  getRandomIntegerInRange,
  getRandomFloatInRange,
  getRandomArrElement,
  getRandomUniqueArr
} from './util.js';

export const TITLE_OF_HOTEL = [
  'Аппарт дворец в Геленджике',
  'Moscow Inn',
  'SpaSun',
  'Красный бермуд',
  'Сочи-парк',
  'Отель Прованс',
  'Holiday inn',
  'Marriot',
  'Blue rooms',
];

const TYPE_OF_HOTEL = ['palace', 'flat', 'house', 'bungalow'];
const TIME_OF_CHECKIN = ['12:00', '13:00','14:00'];
const TIME_OF_CHECKOUT = ['12:00','13:00',' 14:00'];
const FEATURES_OF_HOTEL = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTO_OF_HOTEL = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const INTRO = [
  'Это изумительное ',
  'Это раскошное ',
  'Это потрясающее ',
  'Это бюджетное ',
  ' Это спокойное ',
  'Это элитное ',
  'Это королевское',
];

const FEATURES = [
  'c кондиционером',
  ' с wi-fi',
  'c слифтом',
  'c парковкой',
  'c душем',
];

const TAGLINE = [
  'доведут тебя к мечтам',
  'исполнит твои желания',
  'заставит забыть все невзгоды',
  'подарит любовь',
  'создаст комфорт',
  'наполнит отдых заботой',
  'вознесет тебя до небес',
];


const createRandomDescription = (element = 'место') => {
  return `${getRandomArrElement(INTRO)} ${element} ${getRandomArrElement(FEATURES)} ${getRandomArrElement(TAGLINE)}`;
}

export const createHotel = () => {
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
  for (let i = 1; i <= items; i++) {
    newArr.push(createHotel());
  }

  return newArr;
}
