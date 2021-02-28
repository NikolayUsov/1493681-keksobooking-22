import {clearMarkers} from './map.js';

/* eslint-disable no-unused-vars */
const filterForm = document.querySelector('.map__filters');
const houeType = filterForm.querySelector('#housing-type');
const housePrice = filterForm.querySelector('#housing-price');
const houseRooms = filterForm.querySelector('#housing-rooms');
const houseGuests = filterForm.querySelector('#housing-guests');
const houseFeatures = filterForm.querySelector('#housing-features');

const getCheckedCheckBoxesValue = () => {
  const checkedValue = [];
  const checkBoxes = houseFeatures.querySelectorAll('.map__checkbox:checked');
  for(const checkBox of checkBoxes) {
    checkedValue.push(checkBox.value);
  }

  return checkedValue;
}


const compareFeatures = (filter, data) => {
  if (filter.length === 0) {

    return true;

  } else if ( filter.length > data.length) {

    return false;

  } else {
    filter.forEach((elem) => {
      if(data.indexOf(elem) === -1) {

        return false
      }
    })

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
  // описываем условие когда фильтрации нет
  if(houeType.value === 'any' && housePrice.value === 'any' && houseRooms.value === 'any' && houseGuests.value === 'any' && activeFeatures.length === 0) {
    return true
  }
  //если тип жилья не равен типу в фильрах возвращаем ложь
  if (houeType.value === type) {
    return true
  }


  //  количествокомнат должно быть равно
  /*  if (rooms !== houseRooms.value) {
    return false;
  } */
  // кооличество гостей не должно быть больше чем в карточке товара
  /*   if (guests <= houseGuests.value) {
    return false;
  } */

  // сравнить выбранные чекбоксы и карточку
  //compareFeatures(activeFeatures, features)
}



houseFeatures.addEventListener('change',getCheckedCheckBoxesValue)

export const startFilter = (cb) => {
  filterForm.addEventListener('change',() =>{
    clearMarkers()
    cb();
  })
}


export {filterHostel};
