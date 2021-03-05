/* eslint-disable no-undef */

import {setFilterListener} from './filter.js';
import './form.js';
import {getData} from './api.js'
import {renderMarkers} from './map.js'
import {showErrorMessage} from './messages.js'
import './form-photo.js';

//не понимаю почему дебоунс так работает
const successHandler = (data) =>  {
  renderMarkers(data);
  setFilterListener(_.debounce(() => renderMarkers(data),500))
}
const errorHandler = (message) => showErrorMessage(message)

getData(successHandler,errorHandler)


