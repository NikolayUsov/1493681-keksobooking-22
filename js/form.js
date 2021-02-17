const MIN_PRICE_OF_TYPE = {
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

/* const syncSelectValue = (destination,  source) => {
  source.addEventListener('change', (evt) => {
    destination.value = evt.target.value
  });
}; */

const sync = (destinationt, evt) => destinationt.value = evt.target.value;

selectCheckIn.addEventListener('change', (evt) => {
  sync(selectCheckOut,evt)
});

selectCheckOut.addEventListener('change', (evt) => {
  sync(selectCheckIn,evt)
});

inputPrice.placeholder = MIN_PRICE_OF_TYPE[selectType.value];
inputPrice.setAttribute('min', MIN_PRICE_OF_TYPE[selectType.value]);

selectType.addEventListener('change', (evt) => {
  inputPrice.placeholder = MIN_PRICE_OF_TYPE[selectType.value];
  inputPrice.setAttribute('min', MIN_PRICE_OF_TYPE[evt.target.value]);
});

/* syncSelectValue(selectCheckIn,selectCheckOut);
syncSelectValue(selectCheckOut,selectCheckIn); */

