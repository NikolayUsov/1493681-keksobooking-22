import {isPageActive} from './check-status-page.js';

let statusPage = false;
/* eslint-disable no-undef */
const map = L.map('map-canvas')
  .on('load', () => {
    statusPage = true;
  })
  .setView({
    lat: 35.65000,
    lng: 139.70000,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon(
  {
    iConUrl: './images/pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);
// eslint-disable-next-line no-console
console.log(mainIcon);
const marker = L.marker(
  {
    lat: 35.65000,
    lng: 139.70000,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  // eslint-disable-next-line no-console
  console.log(evt.target.getLatLng())
})

isPageActive(statusPage)
