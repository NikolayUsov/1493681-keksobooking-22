import {createSearchMarker} from './map.js'
import {togglePageStatus} from './status-page.js'
const minPriceOfType = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
};

const titleLength = {
  min: 30,
  max: 100,
};

const main =document.querySelector('main');
const form = document.querySelector('.ad-form')
const selectType = form.querySelector('#type');
const inputPrice = form.querySelector('#price')
const selectCheckIn = form.querySelector('#timein');
const selectCheckOut = form.querySelector('#timeout');
const inputAdress = form.querySelector('#address')
const inputTitle = form.querySelector('#title')
const selectRoomNumber = form.querySelector('#room_number');
const selectGuests = form.querySelector('#capacity');

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const addressMarker = createSearchMarker();

const onMarkerSetProperties = () => {
  const  address = addressMarker.getLatLng();
  inputAdress.value = `${address.lat.toFixed(5)} ${address.lng.toFixed(5)}`;
};


const onSelectChange = (evt) => {
  selectCheckIn.value = evt.target.value;
  selectCheckOut.value = evt.target.value;
}

const setPropertiesOfPrice = () => {
  inputPrice.placeholder = minPriceOfType[selectType.value];
  inputPrice.min = minPriceOfType[selectType.value];
};

inputAdress.readOnly = true;

addressMarker.on('move', onMarkerSetProperties);
onMarkerSetProperties();

selectCheckIn.addEventListener('change', onSelectChange);
selectCheckOut.addEventListener('change', onSelectChange);
selectType.addEventListener('change', () => setPropertiesOfPrice());


setPropertiesOfPrice();

selectType.addEventListener('change', () => setPropertiesOfPrice());

selectRoomNumber.addEventListener('change', (evt) => {
  const guestOptions = selectGuests.children;

  for (let guest of guestOptions) {
    //guest.disabled = false;
    guest.style.display = 'block';
  }

  const guestElements = selectGuests.children;
  const guestsArray = (Array.from(guestElements));

  guestsArray.forEach((elem) => {
    if(+evt.target.value < +elem.value) {
      //elem.disabled = true;
      elem.style.display = 'none';
    }

    if (evt.target.value == 0 && elem.value == 100) {
      elem.style.display = 'block';
    }
  })
});


//form-validation

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let successMeassge =  successTemplate.cloneNode(true);
  main.appendChild(successMeassge);
  window.addEventListener('click', () => {
    successMeassge.remove();
  })
  togglePageStatus(false)
});

inputTitle.addEventListener('change', (evt) => {
  const evtTitleLength = evt.target.value.length ;

  if (evtTitleLength < titleLength.min) {
    evt.target.setCustomValidity(`Введите еще  ${titleLength.min - evtTitleLength} сим.`)

  } else if (evtTitleLength > titleLength.max) {
    evt.target.setCustomValidity(`Слишком длинное название удалите:  ${evtTitleLength - titleLength.max} сим.`);
  } else {
    evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();
})

inputPrice.addEventListener('input', (evt) => {
  if (evt.target.validity.rangeOverflow) {
    evt.target.setCustomValidity (`Стоимость не должна быть больше ${evt.target.max}`)
  } else if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity (`Стоимость не должна быть меньше ${evt.target.min}`)
  } else {
    evt.target.setCustomValidity('')
  }
  evt.target.reportValidity();
})
