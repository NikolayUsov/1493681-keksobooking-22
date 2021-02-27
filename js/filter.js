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

const filterHostel = (hostel) => {
  const {offer} = hostel;
  const {
    price,
    type,
    rooms,
    guests,
    features,
  } = offer;

  if(price < housePrice.value) {
    return false
  }
}

filterForm.addEventListener('change' )


houseFeatures.addEventListener('change',getCheckedCheckBoxesValue)

export {filterHostel};
