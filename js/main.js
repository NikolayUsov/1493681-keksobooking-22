//import { createHostelsData } from './data.js';
import './form.js';
import {renderMarkers} from './map.js'

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    return response.json()
  })
  .then((hostels) => {
    renderMarkers(hostels)
  })

//renderMarkers(createHostelsData())


