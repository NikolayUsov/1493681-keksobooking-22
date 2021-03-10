import {isEscEvent} from './util.js'

const messageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');

const showSuccessMessage = () => {
  const messageSuccess = messageTemplate.cloneNode(true);
  messageSuccess.style.zIndex = '1000';
  main.appendChild(messageSuccess);

  const onEscCloseMessage = (evt) => {
    if (isEscEvent(evt)) {
      messageSuccess.remove();
      document.removeEventListener('keydown', onEscCloseMessage);
    }
  };

  messageSuccess.addEventListener('click', () => {
    messageSuccess.remove();
    document.removeEventListener('keydown', onEscCloseMessage);
  })

  document.addEventListener('keydown', onEscCloseMessage);
}

const showErrorMessage = (errorText) => {
  const messageError = errorTemplate.cloneNode(true);
  messageError.querySelector('.error__message').textContent = errorText;
  messageError.style.zIndex = '1000';
  main.appendChild(messageError);

  const onEscCloseMessage = (evt) => {
    if (isEscEvent(evt)) {
      messageError.remove();
      document.removeEventListener('keydown', onEscCloseMessage);
    }
  };
  messageError.addEventListener('click', () => {
    messageError.remove();
    document.removeEventListener('keydown', onEscCloseMessage);
  })

  document.addEventListener('keydown',onEscCloseMessage);

}

export {showSuccessMessage,showErrorMessage}
