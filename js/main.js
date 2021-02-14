import { createHostelsData } from './data.js';
import { createHostelCardElement } from './hostel-card.js';

let hostels = createHostelsData();

let hostelCard = createHostelCardElement(hostels[0]);

const mapCanvas = document.querySelector('.map__canvas');
mapCanvas.appendChild(hostelCard);

