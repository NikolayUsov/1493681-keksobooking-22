import { createHostelsData } from './data.js';
//import { createHostelCardElement } from './hostel-card.js';
import './form.js';
import './map.js';
import {createMarker} from './map.js'

// eslint-disable-next-line no-unused-vars
export let hostels = createHostelsData();

hostels.forEach((hostel) => createMarker(hostel));
// eslint-disable-next-line no-console
console.log(hostels);

