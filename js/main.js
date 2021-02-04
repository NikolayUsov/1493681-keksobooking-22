
//Константы
const TITLE_OF_HOTEL =
['Аппарт дворец в Геленджике',
  'Moscow Inn',
  'SpaSun',
  'Красный бермуд',
  'Сочи-парк',
  'Отель Прованс',
  'Holiday inn',
  'Marriot',
  'Blue rooms'];

const TYPE_OF_HOTEL = ['palace', 'flat', 'house', 'bungalow'];
const TIME_OF_CHECKIN = ['12:00', '13:00','14:00'];
const TIME_OF_CHECKOUT = ['12:00','13:00',' 14:00'];
const FEATURES_OF_HOTEL = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTO_OF_HOTEL = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
// Получение селекторов
// Обработчики событий
// Вспомогательные Функции
const getRandomRange = (min, max) => {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('Отрицательных значений функция не принимает');

    return;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return min + (max - min) * Math.random ();
}

//Функция целочисленного рандомного числа
const getRandomIntegerInRange = (min, max) => {
  const randomNumber = getRandomRange(min, max);

  return Math.round(randomNumber);
}

getRandomIntegerInRange(5, 1);

//Функция дробного рандомного числа
const getRandomFloatInRange = (min, max, significand = 2) => {
  const randomNumber = getRandomRange(min, max);

  return Number(randomNumber.toFixed(significand));
}

getRandomFloatInRange(1, 1, 2)

// Функция выдающая случайный элемент из массива

const getRandomArrElement = (arr) => arr[getRandomIntegerInRange(0, arr.length-1)];

// Функция уникальных произвольных элементов из массива
const getRandomUniqueArr = (arr) => {
  let uniqueArr = [];
  const uniqueLength = getRandomIntegerInRange(1, arr.length-1);
  for(let i = 0; i < uniqueLength; i++) {
    let elem = arr[getRandomIntegerInRange(0, arr.length-1)];

    if(!uniqueArr.includes(elem)){
      uniqueArr.push(elem);
    }
  }

  return uniqueArr;
}

// Функция создающая массив случайной длинны
const getRandomArr = (arr) => {
  let randomLength = getRandomIntegerInRange(1, 10);
  let newArr = [];
  for(let i = 0; i < randomLength; i++) {
    newArr.push(getRandomArrElement(arr))
  }

  return newArr
}

//Функция генератор предложения
const createRandomDescription = (element='место') => {
  const into = ['Это изумительное ','Это раскошное ','Это потрясающее ','Это бюджетное ',' Это спокойное ','Это элитное ','Это королевское'];
  const features = ['c кондиционером',' с wi-fi','c слифтом','c парковкой','c душем'];
  const tagline = ['доведут тебя к мечтам','исполнит твои желания','заставит забыть все невзгоды','подарит любовь','создаст комфорт','наполнит отдых заботой','вознесет тебя до небес'];
  let phrase = getRandomArrElement(into) + element+ ' ' + getRandomArrElement(features) + ' ' + getRandomArrElement(tagline);

  return phrase
}

//Функция создающая объявление( тип данных- объект)

function createHotel() {
  const locationX = getRandomFloatInRange(35.65000, 35.70000, 5);
  const locationY = getRandomFloatInRange(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomIntegerInRange(0, 8) + '.png',
    },
    offer: {
      title: getRandomArrElement(TITLE_OF_HOTEL),
      address: locationX+' ,'+locationY,
      price: getRandomIntegerInRange(0, 100000),
      type: getRandomArrElement(TYPE_OF_HOTEL),
      rooms: getRandomIntegerInRange(1, 10),
      guests: getRandomIntegerInRange(1, 100),
      checkin: getRandomArrElement(TIME_OF_CHECKIN),
      checkout: getRandomArrElement(TIME_OF_CHECKOUT),
      features: getRandomUniqueArr(FEATURES_OF_HOTEL),
      description: createRandomDescription(),
      photos: getRandomArr(PHOTO_OF_HOTEL),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
}

const hostelsData = (items) => {
  let  newArr = [];
  for (let i = 1; i<=items; i++) {
    newArr.push(createHotel());
  }

  return newArr;
}
hostelsData(10);
