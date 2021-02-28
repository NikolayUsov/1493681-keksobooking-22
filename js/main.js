
import {startFilter} from './filter.js';
import './form.js';
import {getData} from './api.js'
import {renderMarkers} from './map.js'
import {showErrorMessage} from './messages.js'


const successHandler = (data) =>  {
  renderMarkers(data);
  startFilter(() => renderMarkers(data))
}
const errorHandler = (message) => showErrorMessage(message)

getData(successHandler,errorHandler)


