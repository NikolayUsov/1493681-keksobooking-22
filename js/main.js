
//Константы
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

//Функция создающая объявление( тип данных- объект)
const createHotel = () => {
  return {
    author: {
      avatar: 'img/avatars/user{{xx}}.png',
    },
    offer: {
      title: '',
      address: '',
      price: '',
      type: '',
      rooms: '',
      guests: '',
      checkin: '',
      checkout: '',
      features: '',
      description: '',
      photos: '',
    },
    location: {
      x: '',
      y: '',
    },
  }
};
/*
В файле main.js на основе написанных в прошлом задании утилитарных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
offer, объект — содержит информацию об объявлении. Состоит из полей:

title, строка — заголовок предложения. Придумайте самостоятельно.

address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

price, число — стоимость. Любое положительное число.

type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.

rooms, число — количество комнат. Любое положительное число.

guests, число — количество гостей, которое можно разместить. Любое положительное число.

checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

description, строка — описание помещения. Придумайте самостоятельно.

photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000

y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
*/
