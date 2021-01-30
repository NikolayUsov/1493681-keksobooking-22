// eslint-disable-next-line no-console
console.log('fvf');

let getRandom = function (min, max) {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('отрицательных значений функция не принимает');
    return;
  }
  let factor = Math.random ();
  let randomNumber = min + (max - min) * factor;
  return randomNumber;
}

//Функция целочисленного рандомного числа
let getIntegerRandom = function (min, max) {
  let randomNumber = getRandom(min, max);
  return Math.round(randomNumber);
}
getIntegerRandom(5,1);

//Функция дробного рандомного числа

let getFloatRandom = function (min, max, significand='2') {
  let randomNumber = getRandom(min, max);
  return Number(randomNumber.toFixed(significand));
}
getFloatRandom(1,1,2)
