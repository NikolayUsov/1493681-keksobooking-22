/* global L:readonly */
import {isPageActive} from './check-status-page.js';
import {createHostelCardElement} from './hostel-card.js'

let statusPage = false;

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

export const createSearchMarker = () =>{
  const mainIcon = L.icon(
    {
      iconUrl: '../img/main-pin.svg',
      iconSize: [40,40],
      iconAnchor: [20, 40],
    },
  );

  const marker = L.marker(
    {
      lat: 35.65000,
      lng: 139.70000,
    },
    {
      draggable:true,
      icon: mainIcon,
    },
  );
  marker.addTo(map);

  return marker;
}

export const createMarker = (hostel) =>{

  const mainIcon = L.icon(
    {
      iconUrl: '../img/pin.svg',
      iconSize: [40,40],
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
  marker.bindPopup (createHostelCardElement(hostel))
}

isPageActive(statusPage)
