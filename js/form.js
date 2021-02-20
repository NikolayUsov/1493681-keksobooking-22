import {createSearchMarker} from './map.js'

const minPriceOfType = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
};

const form = document.querySelector('.ad-form')
const selectType = form.querySelector('#type');
const inputPrice = form.querySelector('#price')
const selectCheckIn = form.querySelector('#timein');
const selectCheckOut = form.querySelector('#timeout');
const inputAdress = form.querySelector('#address')
const addressMarker = createSearchMarker();

const onMarkerSetProperties = () => {
  const  adress = addressMarker.getLatLng();
  inputAdress.value = `${adress.lat.toFixed(5)} ${adress.lng.toFixed(5)}`;
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

