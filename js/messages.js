import {isEscEvent} from './util.js'

const main = document.querySelector('main');

const showSuccessMessage = () => {
  const messageTemplate = document.querySelector('#success').content.querySelector('.success');
  const messageSuccess = messageTemplate.cloneNode(true);
  messageSuccess.style.zIndex = '1000';
  main.appendChild(messageSuccess);

  messageSuccess.addEventListener('click', () => {
    messageSuccess.remove();
  })

  messageSuccess.removeEventListener('click', () => {
    messageSuccess.remove();
  })

  document.addEventListener('keydown', (evt) => {

    if (isEscEvent(evt)) {
      messageSuccess.remove()
    }
  })


  document.removeEventListener('keydown', (evt) => {

    if (isEscEvent(evt)) {
      messageSuccess.remove()
    }
  })
}

const showErrorMessage = (errorText) => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageError = errorTemplate.cloneNode(true);
  messageError.querySelector('.error__message').textContent = errorText;
  messageError.style.zIndex = '1000';
  main.appendChild(messageError);

  messageError.addEventListener('click', () => messageError.remove())

  messageError.removeEventListener('click', () => messageError.remove())

  document.addEventListener('keydown', (evt) => {

    if (isEscEvent(evt)) {
      messageError.remove()
    }
  })

  document.removeEventListener('keydown', (evt) => {

    if (isEscEvent(evt)) {
      messageError.remove()
    }
  })
}



export {showSuccessMessage,showErrorMessage}
