const toggleFormStatus = (form, formClass, status) => {
  const formElements = form.children;
  if (status) {
    form.classList.remove(`${formClass}--disabled`);

    for (let formElement of formElements) {
      formElement.disabled = false;
    }

  } else {
    form.classList.add(`${formClass}--disabled`);

    for (let formElement of formElements) {
      formElement.disabled = true;
    }
  }
}

export const togglePageStatus = (status) => {
  const form = document.querySelector('.ad-form');
  const formMapFilter = document.querySelector('.map__filters');
  toggleFormStatus(form, 'ad-form', status);
  toggleFormStatus(formMapFilter,'map__filters', status);
};

