/* global L:readonly */
import {togglePageStaus} from './status-page.js';
import {createHostelCardElement} from './hostel-card.js';

const DefaultLocation = {
  X: 35.68240,
  Y: 139.75176,
};

const LeafletProperties = {
  PATH_TO_MAIN_PIN: '../img/main-pin.svg',
  PATH_TO_MARKER: '../img/pin.svg',
  ICON_SIZE: 40,
  TITLE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const MAP_ZOOM = 13;

togglePageStaus(false);

const map = L.map('map-canvas')
  .on('load', () => {
    togglePageStaus(true);
  })

  .setView({
    lat: DefaultLocation.X,
    lng: DefaultLocation.Y,
  }, MAP_ZOOM);

L.tileLayer(
  LeafletProperties.TITLE_LAYER,
  {
    attribution: LeafletProperties.ATTRIBUTION,
  },
).addTo(map);

export const createSearchMarker = () => {
  const mainIcon = L.icon(
    {
      iconUrl: LeafletProperties.PATH_TO_MAIN_PIN,
      iconSize: [LeafletProperties.ICON_SIZE, LeafletProperties.ICON_SIZE],
      iconAnchor: [LeafletProperties.ICON_SIZE/2, LeafletProperties.ICON_SIZE],
    },
  );

  const marker = L.marker(
    {
      lat: DefaultLocation.X,
      lng: DefaultLocation.Y,
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
      iconUrl: LeafletProperties.PATH_TO_MARKER,
      iconSize: [LeafletProperties.ICON_SIZE, LeafletProperties.ICON_SIZE],
      iconAnchor: [LeafletProperties.ICON_SIZE/2, LeafletProperties.ICON_SIZE],
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
  marker.bindPopup(createHostelCardElement(hostel));
}

export const renderMarkers = (data) => {
  data.forEach((elem) => {
    createMarker(elem);
  })
}
