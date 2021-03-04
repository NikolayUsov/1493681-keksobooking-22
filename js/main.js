
import {setFilterListener} from './filter.js';
import './form.js';
import {getData} from './api.js'
import {renderMarkers} from './map.js'
import {showErrorMessage} from './messages.js'
import { debounce } from './util.js';


const successHandler = (data) =>  {
  renderMarkers(data);
  setFilterListener(debounce(
    () => renderMarkers(data),
    500,
  ));
}
const errorHandler = (message) => showErrorMessage(message)

getData(successHandler,errorHandler)


