//import { createHostelsData } from './data.js';
import './form.js';
import {getData} from './api.js'
import {renderMarkers,createNoDataMarker} from './map.js'

const DATA_URL_DOWNLOAD = 'https://22.javascript.pages.academy/keksobooking/data';

const successHandler = (data) =>  renderMarkers(data);

getData(DATA_URL_DOWNLOAD,successHandler,createNoDataMarker)



