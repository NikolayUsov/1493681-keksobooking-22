import {createSearchMarker} from './map.js';
import {togglePageStatus} from './status-page.js';

const minPriceOfType = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
};

const TitleLength = {
  MIN: 30,
  MAX: 100,
};

const form = document.querySelector('.ad-form')
const selectType = form.querySelector('#type');
const inputPrice = form.querySelector('#price')
const selectCheckIn = form.querySelector('#timein');
const selectCheckOut = form.querySelector('#timeout');
const inputAddress = form.querySelector('#address')
const inputTitle = form.querySelector('#title')
const selectRoomNumber = form.querySelector('#room_number');
const selectGuests = form.querySelector('#capacity');

const onMarkerMove = () => {
  const address = addressMarker.getLatLng();
  inputAddress.value = `${address.lat.toFixed(5)} ${address.lng.toFixed(5)}`;
};

const onInputTitleChange = (evt) => {
  const title = evt.target.value;

  if (title.length < TitleLength.MIN) {
    evt.target.setCustomValidity(`Введите еще  ${TitleLength.MIN - title.length} сим.`)

  } else if (title.length > TitleLength.MAX) {
    evt.target.setCustomValidity(`Слишком длинное название удалите:  ${title.length - TitleLength.MAX} сим.`);
  } else {
    evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();
}

const onInputPriceInput = (evt) => {
  if (evt.target.validity.rangeOverflow) {
    evt.target.setCustomValidity (`Стоимость не должна быть больше ${evt.target.max}`)
  } else if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity (`Стоимость не должна быть меньше ${evt.target.min}`)
  } else {
    evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();
}

const onSelectChange = (evt) => {
  selectCheckIn.value = evt.target.value;
  selectCheckOut.value = evt.target.value;
}

const setPropertiesOfPrice = () => {
  inputPrice.placeholder = minPriceOfType[selectType.value];
  inputPrice.min = minPriceOfType[selectType.value];
};

const onSelectRoomsChange = () => {
  const guestOptions = selectGuests.children;
  const guestElements = selectGuests.children;
  const guestsArray = (Array.from(guestElements));

  +selectRoomNumber.value  === 0 ? selectGuests.value = 100  : selectGuests.value = selectRoomNumber.value;

  for (let guest of guestOptions) {
    guest.style.display = 'block';
  }

  guestsArray.forEach((elem) => {
    if(+selectRoomNumber.value < +elem.value) {
      elem.style.display = 'none';
    }

    if (+selectRoomNumber.value ===0 && + elem.value === 100) {
      elem.style.display = 'block';
    }
  })
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  togglePageStatus(false)
};

inputTitle.addEventListener('change', onInputTitleChange);
inputPrice.addEventListener('input', onInputPriceInput );
selectCheckIn.addEventListener('change', onSelectChange);
selectCheckOut.addEventListener('change', onSelectChange);
selectType.addEventListener('change', setPropertiesOfPrice);
selectRoomNumber.addEventListener('change', onSelectRoomsChange);
form.addEventListener('submit', onFormSubmit);

const addressMarker = createSearchMarker();
addressMarker.on('move', onMarkerMove);
inputAddress.readOnly = true;
onMarkerMove();
setPropertiesOfPrice();
onSelectRoomsChange();

