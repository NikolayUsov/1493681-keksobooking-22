import { createHostelsData } from './data.js';
import { createHostelCardElement } from './hostel-card.js';
import {} from './form.js';

const mapCanvas = document.querySelector('.map__canvas');

let hostels = createHostelsData();

let hostelCard = createHostelCardElement(hostels[0]);

mapCanvas.appendChild(hostelCard);

