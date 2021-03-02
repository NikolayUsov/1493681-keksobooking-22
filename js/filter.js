import {clearMarkers} from './map.js';

/* eslint-disable no-unused-vars */
const filterForm = document.querySelector('.map__filters');
const houeType = filterForm.querySelector('#housing-type');
const housePrice = filterForm.querySelector('#housing-price');
const houseRooms = filterForm.querySelector('#housing-rooms');
const houseGuests = filterForm.querySelector('#housing-guests');
const houseFeatures = filterForm.querySelector('#housing-features');

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
    max: 1000000,
  },
  any: {
    min: 0,
    max: 1000000000,
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


const compareFeatures = (filter, data) => {
  // eslint-disable-next-line no-console
  console.log(filter, data)
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
  // eslint-disable-next-line no-console
  console.log(typeof(houeType.value), typeof(type),houeType.value,type )
  // описываем условие когда фильтрации нет
  if(houeType.value === 'any' && housePrice.value === 'any' && houseRooms.value === 'any' && houseGuests.value === 'any' && activeFeatures.length === 0) {
    return true
  }
  //если тип жилья не равен типу в фильрах возвращаем ложь
  if (houeType.value !== 'any' && houeType.value !== type) {
    // eslint-disable-next-line no-console
    //console.log(typeof(houeType.value), typeof(type),houeType.value,type )
    return false
  }

  if (houseRooms.value !== 'any' && +houseRooms.value !== rooms) {
    return false;
  }

  if (houseGuests.value !== 'any' && guests !== +houseGuests.value) {
    return false;
  }
  //сравниваем стоимость
  const priceRangeValue =  housePrice.value;
  if(priseRange[priceRangeValue].min >= price || priseRange[priceRangeValue].max < price) {
    return false
  }

  isFiltred = compareFeatures(activeFeatures, features);

  return isFiltred
}

const filtredMarkers = (data) => {
  return data.filter(filterHostel).slice(0,10);
}


export const startFilter = (cb) => {
  filterForm.addEventListener('change',() =>{
    clearMarkers()
    cb();
  })
}


export {filterHostel,filtredMarkers};
