import { setFilterListener } from './filter.js';
import './form.js';
import { getData } from './api.js'
import { renderMarkers } from './map.js'
import { showErrorMessage } from './messages.js'
import './form-photo.js';

const successHandler = (data) => {
  renderMarkers(data);
  setFilterListener(data);
}

const errorHandler = (message) => showErrorMessage(message);
getData(successHandler, errorHandler);


