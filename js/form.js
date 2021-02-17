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

const onSelectChange = (evt) => {
  selectCheckIn.value = evt.target.value;
  selectCheckOut.value = evt.target.value;
}

const setAtributeOfPrice = () => {
  inputPrice.placeholder = MIN_PRICE_OF_TYPE[selectType.value];
  inputPrice.min =  MIN_PRICE_OF_TYPE[selectType.value];
};

selectCheckIn.addEventListener('change', onSelectChange);

selectCheckOut.addEventListener('change', onSelectChange);

setAtributeOfPrice();

selectType.addEventListener('change', setAtributeOfPrice);

