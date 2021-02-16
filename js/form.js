const MIN_PRICE_OF_TYPE = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
};

const form = document.querySelector('.ad-form')
const selectType = form.querySelector('#type');
const inputPrice = form.querySelector('#price')
const inputCheckIn = form.querySelector('#timein');
const inputCheckOut = form.querySelector('#timeout');

const selectedOption  = selectType.options[selectType.selectedIndex];

inputPrice.setAttribute('placeholder', MIN_PRICE_OF_TYPE[selectedOption.value]);
inputPrice.setAttribute('min', MIN_PRICE_OF_TYPE[selectedOption.value]);

selectType.addEventListener('change', function (evt) {
  // eslint-disable-next-line no-console
  console.log(evt.target.value);
  inputPrice.setAttribute('placeholder', MIN_PRICE_OF_TYPE[evt.target.value]);
  inputPrice.setAttribute('min', MIN_PRICE_OF_TYPE[evt.target.value]);
});

inputCheckOut.addEventListener('change', function (evt) {
  inputCheckIn.value = evt.target.value;
});

inputCheckIn.addEventListener('change', function (evt) {
  inputCheckOut.value = evt.target.value;
});
