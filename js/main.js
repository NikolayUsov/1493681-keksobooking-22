
import './form.js';
import {getData} from './api.js'
import {renderMarkers} from './map.js'
import {showErrorMessage} from './messages.js'

const GET_DATA_ERROR_TEXT = 'Данные не загрузились'
const DATA_URL_DOWNLOAD = 'https://22.javascript.pages.academy/keksobooking/data';

const successHandler = (data) =>  renderMarkers(data);
const errorHandler = () => showErrorMessage(GET_DATA_ERROR_TEXT)

getData(DATA_URL_DOWNLOAD,successHandler,errorHandler)


