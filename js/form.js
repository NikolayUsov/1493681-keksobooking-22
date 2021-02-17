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

const onSelectChange = (evt) => {
  selectCheckIn.value = evt.target.value;
  selectCheckOut.value = evt.target.value;
}

const setPropertiesOfPrice = () => {
  inputPrice.placeholder = minPriceOfType[selectType.value];
  inputPrice.min =  minPriceOfType[selectType.value];
};

selectCheckIn.addEventListener('change', onSelectChange);

selectCheckOut.addEventListener('change', onSelectChange);

setPropertiesOfPrice();

selectType.addEventListener('change', setPropertiesOfPrice);

