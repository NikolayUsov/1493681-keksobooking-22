const formDisableSwitcher = (form, status) => {
  const formElements = form.children;
  if (status) {
    form.classList.remove('ad-form--disabled');
    for (let formElement of formElements) {
      formElement.disabled = false;
    }
  } else {
    form.classList.add('ad-form--disabled');
    for (let formElement of formElements) {
      formElement.disabled = true;
    }
  }
}

export const isPageActive = (status) => {
  const form = document.querySelector('.ad-form');
  const formMapFilter = document.querySelector('.map__filters');
  formDisableSwitcher(form, status)
  formDisableSwitcher(formMapFilter, status)
};

