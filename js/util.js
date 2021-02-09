export const getRandomRange = (min, max) => {
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
  const uniqueLength = getRandomIntegerInRange(1, arr.length - 1);

  for(let i = 0; i < uniqueLength; i++) {
    let elem = arr[getRandomIntegerInRange(0, arr.length - 1)];

    if(!uniqueArr.includes(elem)){
      uniqueArr.push(elem);
    }
  }

  return uniqueArr;
}

export const getRandomArr = (arr) => {
  const randomLength = getRandomIntegerInRange(1, 10);
  const newArr = [];

  for(let i = 0; i < randomLength; i++) {
    newArr.push(getRandomArrElement(arr))
  }

  return newArr;
}
