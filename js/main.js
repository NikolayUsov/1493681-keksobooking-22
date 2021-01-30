const getRandomRange = (min, max) => {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('Отрицательных значений функция не принимает');

    return;
  }

  if (min > max) {
    let tmp = max;
    max = min;
    min = tmp;
  }

  return min + (max - min) * Math.random ();
}

//Функция целочисленного рандомного числа
const getIntegerRandomRange = (min, max) => {
  const randomNumber = getRandomRange(min, max);

  return Math.round(randomNumber);
}

getIntegerRandomRange(5, 1);

//Функция дробного рандомного числа
const getFloatRandomRange = (min, max, significand=2) => {
  const randomNumber = getRandomRange(min, max);

  return Number(randomNumber.toFixed(significand));
}

getFloatRandomRange(1, 1, 2)
