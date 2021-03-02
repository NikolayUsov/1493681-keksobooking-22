import {clearMarkers} from './map.js';

/* eslint-disable no-unused-vars */
const filterForm = document.querySelector('.map__filters');
const houeType = filterForm.querySelector('#housing-type');
const housePrice = filterForm.querySelector('#housing-price');
const houseRooms = filterForm.querySelector('#housing-rooms');
const houseGuests = filterForm.querySelector('#housing-guests');
const houseFeatures = filterForm.querySelector('#housing-features');

const MAX_PRICE = 1000000000
const MAX_MARKERS = 10;
const priseRange = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: MAX_PRICE,
  },
  any: {
    min: 0,
    max: MAX_PRICE,
  },
}

const getCheckedCheckBoxesValue = () => {
  const checkedValue = [];
  const checkBoxes = houseFeatures.querySelectorAll('.map__checkbox:checked');
  for(const checkBox of checkBoxes) {
    checkedValue.push(checkBox.value);
  }

  return checkedValue;
}

// Ты ругался на эту функцию но ее я не удалю
const compareFeatures = (filter, data) => {
  if (filter.length === 0) {
    return true;

  } else if ( filter.length > data.length) {

    return false;

  } else {

    for(let elem of filter) {
      if(data.indexOf(elem) === -1) {

        return false
      }
    }
    return true
  }

}

const filterHostel = (hostel) => {
  const {offer} = hostel;
  const {
    price,
    type,
    rooms,
    guests,
    features,
  } = offer;

  const activeFeatures = getCheckedCheckBoxesValue()
  let isFiltred = true;

  if (houeType.value === 'any' &&
      housePrice.value === 'any' &&
      houseRooms.value === 'any' &&
      houseGuests.value === 'any' &&
      activeFeatures.length === 0) {

    return true
  }

  if (houeType.value !== 'any' && houeType.value !== type) {

    return false
  }

  if (houseRooms.value !== 'any' && +houseRooms.value !== rooms) {
    return false;
  }

  if (houseGuests.value !== 'any' && guests !== +houseGuests.value) {
    return false;
  }
  // Алексей, вот тут есть сомнения оптимаьно ли было использовать объект, мне показлось что да.
  // ну и еще я решил что пограничные значения должны входить по нижней границе но не уверен что верно
  const priceRangeValue =  housePrice.value;
  if(priseRange[priceRangeValue].min >= price || priseRange[priceRangeValue].max < price) {
    return false
  }

  isFiltred = compareFeatures(activeFeatures, features);

  return isFiltred
}

const filtredMarkers = (data) => {
  return data.filter(filterHostel).slice(0, MAX_MARKERS);
}


export const startFilter = (cb) => {
  filterForm.addEventListener('change',() =>{
    clearMarkers()
    cb();
  })
}


export {filterHostel,filtredMarkers};
