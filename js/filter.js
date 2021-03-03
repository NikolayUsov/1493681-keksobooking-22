import {clearMarkers} from './map.js';

/* eslint-disable no-unused-vars */
const filterForm = document.querySelector('.map__filters');
const hostelType = filterForm.querySelector('#housing-type');
const hostelPrice = filterForm.querySelector('#housing-price');
const hostelRooms = filterForm.querySelector('#housing-rooms');
const hostelGuests = filterForm.querySelector('#housing-guests');
const hostelFeatures = filterForm.querySelector('#housing-features');

const MAX_PRICE = 1000000000
const MAX_MARKERS = 10;
const priсeRange = {
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
  const checkBoxes = hostelFeatures.querySelectorAll('.map__checkbox:checked');
  for(const checkBox of checkBoxes) {
    checkedValue.push(checkBox.value);
  }

  return checkedValue;
}

const compareFeatures = (filter, data) => {
  if (filter.length === 0) {

    return true;
  }
  if (filter.length > data.length) {

    return false;
  }

  for(const elem of filter) {
    if(!data.includes(elem)) {

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

  const activeFeatures = getCheckedCheckBoxesValue()

  let isFiltered = true;

  if (hostelType.value === 'any' &&
      hostelPrice.value === 'any' &&
      hostelRooms.value === 'any' &&
      hostelGuests.value === 'any' &&
      activeFeatures.length === 0) {
    return true
  }

  if (hostelType.value !== 'any' && hostelType.value !== type) {
    return false
  }

  if (hostelRooms.value !== 'any' && +hostelRooms.value !== rooms) {
    return false;
  }

  if (hostelGuests.value !== 'any' && guests !== +hostelGuests.value) {
    return false;
  }

  const priceRangeValue =  hostelPrice.value;
  if(priсeRange[priceRangeValue].min >= price || priсeRange[priceRangeValue].max < price) {
    return false
  }

  isFiltered = compareFeatures(activeFeatures, features);
  return isFiltered
}

const filterMarkers = (data) => {
  return data.filter(filterHostel).slice(0, MAX_MARKERS);
}


export const setFilterListener = (cb) => {
  filterForm.addEventListener('change', () =>{
    clearMarkers();
    cb();
  })
}

export {filterHostel,filterMarkers};
