/* global _:readonly */
import { reRenderMarkers } from './map.js';

const RENDER_DELAY = 500;
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
const ALL = 'any';

const filterForm = document.querySelector('.map__filters');
const hostelType = filterForm.querySelector('#housing-type');
const hostelPrice = filterForm.querySelector('#housing-price');
const hostelRooms = filterForm.querySelector('#housing-rooms');
const hostelGuests = filterForm.querySelector('#housing-guests');
const hostelFeatures = filterForm.querySelector('#housing-features');

const compareFeatures = (checkboxes, features) => {
  if (checkboxes.length === 0) {
    return true;
  }
  if (checkboxes.length > features.length) {
    return false;
  }

  for (const checkbox of checkboxes) {
    if (!features.includes(checkbox.value)) {
      return false
    }
  }

  return true;
}

const filterHostel = (hostel) => {
  const { offer } = hostel;
  const {
    price,
    type,
    rooms,
    guests,
    features,
  } = offer;

  const activeFeatures = hostelFeatures.querySelectorAll('.map__checkbox:checked');

  let isFiltered = true;

  if (hostelType.value === ALL &&
    hostelPrice.value === ALL &&
    hostelRooms.value === ALL &&
    hostelGuests.value === ALL &&
    activeFeatures.length === 0) {
    return true;
  }

  if (hostelType.value !== ALL && hostelType.value !== type) {
    return false;
  }

  if (hostelRooms.value !== ALL && +hostelRooms.value !== rooms) {
    return false;
  }

  if (hostelGuests.value !== ALL && guests !== +hostelGuests.value) {
    return false;
  }

  const priceRangeValue = hostelPrice.value;
  if (priceRange[priceRangeValue].min >= price || priceRange[priceRangeValue].max < price) {
    return false;
  }

  isFiltered = compareFeatures(activeFeatures, features);

  return isFiltered
}

const filterMarkers = (data) => {
  const filteredArray = [];
  let counterOfFilteredElement = 0;

  for (let i = 0; i < data.length; i++) {
    let hostel = data[i];

    if (filterHostel(hostel)) {
      filteredArray.push(hostel);
      counterOfFilteredElement++
    }

    if (counterOfFilteredElement > MAX_MARKERS) {
      return filteredArray;
    }
  }

  return filteredArray;
}

export const setFilterListener = (data) => {
  filterForm.addEventListener('change', _.debounce(() => { reRenderMarkers(data) }, RENDER_DELAY));
}

export { filterHostel, filterMarkers };
