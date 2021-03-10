import { createSearchMarker, resetMap, DefaultLocation } from './map.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';
import { debounce } from './util.js';
import { clearPhotoPreview } from './form-photo.js';

const MAX_GUESTS_VALUE = 100;
const MAX_ROOMS_VALUE = 0;
const SEND_FORM_ERROR_TEXT = 'Ошибка размещения объявления';
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
const addressMarker = createSearchMarker();
const selectType = form.querySelector('#type');
const inputPrice = form.querySelector('#price')
const selectCheckIn = form.querySelector('#timein');
const selectCheckOut = form.querySelector('#timeout');
const inputAddress = form.querySelector('#address');
const inputTitle = form.querySelector('#title');
const selectRoomNumber = form.querySelector('#room_number');
const selectGuests = form.querySelector('#capacity');
const resetButton = form.querySelector('.ad-form__reset');

const onMarkerMove = () => {
  const address = addressMarker.getLatLng();
  inputAddress.value = `${address.lat.toFixed(5)} ${address.lng.toFixed(5)}`;
};

const resetMarker = () => {
  addressMarker.setLatLng([DefaultLocation.X, DefaultLocation.Y])
}
const onInputTitleChange = (evt) => {
  const title = evt.target.value;

  if (title.length < TitleLength.MIN) {
    evt.target.setCustomValidity(`Введите еще  ${TitleLength.MIN - title.length} сим.`);

  } else if (title.length > TitleLength.MAX) {
    evt.target.setCustomValidity(`Слишком длинное название удалите:  ${title.length - TitleLength.MAX} сим.`);
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
}

const onPriceInput = (evt) => {
  if (evt.target.validity.rangeOverflow) {
    evt.target.setCustomValidity(`Стоимость не должна быть больше ${evt.target.max}`);
  } else if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity(`Стоимость не должна быть меньше ${evt.target.min}`);
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
}

const onSelectChange = (evt) => {
  selectCheckIn.value = evt.target.value;
  selectCheckOut.value = evt.target.value;
}

const onTypeInputChange = () => {
  inputPrice.placeholder = minPriceOfType[selectType.value];
  inputPrice.min = minPriceOfType[selectType.value];
};

const onSelectRoomsChange = () => {
  const guestOptions = selectGuests.children;
  const guestElements = selectGuests.children;
  const guestsArray = Array.from(guestElements);

  +selectRoomNumber.value === MAX_ROOMS_VALUE ? selectGuests.value = MAX_GUESTS_VALUE : selectGuests.value = selectRoomNumber.value;

  for (const guest of guestOptions) {
    guest.style.display = 'block';
  }

  guestsArray.forEach((elem) => {
    if (+selectRoomNumber.value < +elem.value) {
      elem.style.display = 'none';
    }

    if (+selectRoomNumber.value === MAX_ROOMS_VALUE && +elem.value === MAX_GUESTS_VALUE) {
      elem.style.display = 'block';
    }
  })
};

const sendFormSuccess = () => {
  showSuccessMessage();
  form.reset();
  onMarkerMove();
};

const sendFormError = () => showErrorMessage(SEND_FORM_ERROR_TEXT)

const onFormSubmit = (evt) => {
  evt.preventDefault();
  clearPhotoPreview();
  sendData(sendFormSuccess, sendFormError, new FormData(evt.target))
};

const onFormReset = (evt) => {
  evt.preventDefault();
  form.reset();
  resetMap()
  resetMarker();
  clearPhotoPreview();
}

inputTitle.addEventListener('input', debounce(onInputTitleChange, 500));
inputPrice.addEventListener('input', onPriceInput);
selectCheckIn.addEventListener('change', onSelectChange);
selectCheckOut.addEventListener('change', onSelectChange);
selectType.addEventListener('change', onTypeInputChange);
selectRoomNumber.addEventListener('change', onSelectRoomsChange);
form.addEventListener('submit', onFormSubmit);
resetButton.addEventListener('click', onFormReset);

addressMarker.on('move', onMarkerMove);
inputAddress.readOnly = true;
onMarkerMove();
onTypeInputChange();
onSelectRoomsChange();

