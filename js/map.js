/* global L:readonly */
import {isPageActive} from './check-status-page.js';
import {createHostelCardElement} from './hostel-card.js'
const defaultLocation = {
  x: 35.68240,
  y: 139.75176,
};

const PATH_TO_MAIN_PIN = '../img/main-pin.svg';
const PATH_TO_MARKER = '../img/pin.svg';

let statusPage = false;
const map = L.map('map-canvas')
  .on('load', () => {
    statusPage = true;
  })

  .setView({
    lat: defaultLocation.x,
    lng: defaultLocation.y,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

export const createSearchMarker = () => {
  const mainIcon = L.icon(
    {
      iconUrl: PATH_TO_MAIN_PIN,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    },
  );

  const marker = L.marker(
    {
      lat: defaultLocation.x,
      lng: defaultLocation.y,
    },
    {
      draggable: true,
      icon: mainIcon,
    },
  );
  marker.addTo(map);

  return marker;
}

export const createMarker = (hostel) => {

  const mainIcon = L.icon(
    {
      iconUrl: PATH_TO_MARKER,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    },
  );

  const marker = L.marker(
    {
      lat: hostel.location.x,
      lng: hostel.location.y,
    },
    {
      icon: mainIcon,
    },
  );
  marker.addTo(map);
  marker.bindPopup (createHostelCardElement(hostel));
}

isPageActive(statusPage)
