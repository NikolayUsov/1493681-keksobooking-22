//import { createHostelsData } from './data.js';
import './form.js';
import {getData} from './api.js'
import {renderMarkers} from './map.js'

getData((data) => {renderMarkers(data)})

//renderMarkers(createHostelsData())


