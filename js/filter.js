/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import {clearMarkers} from './map.js';
//import { debounce } from './util.js';

/* eslint-disable no-unused-vars */
const filterForm = document.querySelector('.map__filters');
const hostelType = filterForm.querySelector('#housing-type');
const hostelPrice = filterForm.querySelector('#housing-price');
const hostelRooms = filterForm.querySelector('#housing-rooms');
const hostelGuests = filterForm.querySelector('#housing-guests');
const hostelFeatures = filterForm.querySelector('#housing-features');

const MAX_PRICE = 1000000000
const MAX_MARKERS = 10;
const priceRange = {
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

const compareFeatures = (checkboxes, features) => {
  if (checkboxes.length === 0) {
    return true;
  }
  if (checkboxes.length > features.length) {
    return false;
  }

  for(const checkbox of checkboxes) {
    if(!features.includes(checkbox.value)) {
      return false
    }
  }

  return true
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

  const activeFeatures = hostelFeatures.querySelectorAll('.map__checkbox:checked');

  let isFiltered = true;

  if (hostelType.value === 'any' &&
      hostelPrice.value === 'any' &&
      hostelRooms.value === 'any' &&
      hostelGuests.value === 'any' &&
      activeFeatures.length === 0) {
    return true;
  }

  if (hostelType.value !== 'any' && hostelType.value !== type) {
    return false;
  }

  if (hostelRooms.value !== 'any' && +hostelRooms.value !== rooms) {
    return false;
  }

  if (hostelGuests.value !== 'any' && guests !== +hostelGuests.value) {
    return false;
  }

  const priceRangeValue =  hostelPrice.value;
  if (priceRange[priceRangeValue].min >= price || priceRange[priceRangeValue].max < price) {
    return false;
  }

  isFiltered = compareFeatures(activeFeatures, features);
  return isFiltered
}

const filterMarkers = (data) => {
  const filteredArray = [];
  let counterOfFiltredElement = 0 ;

  for (let i = 0; i < data.length; i++) {
    let hostel = data[i];

    if (filterHostel(hostel)) {
      filteredArray.push(hostel);
      counterOfFiltredElement++
    }

    if (counterOfFiltredElement > MAX_MARKERS) {
      return filteredArray
    }
  }

  return filteredArray
}


export const setFilterListener = (cb) => {
  filterForm.addEventListener('change', () => {
    clearMarkers();
    cb();
  })
}

export {filterHostel,filterMarkers};
