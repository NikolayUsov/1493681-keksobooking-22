const MIN_PRICE_OF_TYPE = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
}

const form = document.querySelector('.ad-form')
const selectType = form.querySelector('#type');
const inputPrice = form.querySelector('#price')
const inputCheckIn = form.querySelector('#timein');
const inputCheckOut = form.querySelector('#timeout');

const selectedOption  = selectType.options[selectType.selectedIndex];

inputPrice.setAttribute('placeholder', MIN_PRICE_OF_TYPE[selectedOption.value]);
inputPrice.setAttribute('min', MIN_PRICE_OF_TYPE[selectedOption.value]);

selectType.addEventListener('change', function () {
  inputPrice.setAttribute('placeholder', MIN_PRICE_OF_TYPE[this.value]);
  inputPrice.setAttribute('min', MIN_PRICE_OF_TYPE[this.value]);
});

inputCheckIn.addEventListener('change', function () {
  inputCheckOut.value = this.value;
})
