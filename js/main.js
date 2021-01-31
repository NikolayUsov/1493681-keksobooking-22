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
