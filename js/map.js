/* global L:readonly */
import {togglePageStatus} from './status-page.js';
import {createHostelCardElement} from './hostel-card.js';

const DefaultLocation = {
  X: 35.68240,
  Y: 139.75176,
};
const DefaultNoDataLocation = {
  X: 35.68672,
  Y: 139.73751,
};

const LeafletProperties = {
  PATH_TO_MAIN_PIN: '../img/main-pin.svg',
  PATH_TO_MARKER: '../img/pin.svg',
  PATH_TO_NO_DATA_MARKER: '../img/no-data-pin.svg',
  ICON_SIZE: 40,
  ICON_NO_DATA_SIZE: 80,
  TITLE_LAYER: 'http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png',
  ATTRIBUTION: 'Map data: © <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL | Tiles: © <a href="http://maps.sputnik.ru/" target="_blank">Спутник</a>',
};

const MAP_ZOOM = 13;

togglePageStatus(false);

const map = L.map('map-canvas')
  .on('load', () => {
    togglePageStatus(true);
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

export const createNoDataMarker = () => {
  const noDataIcon = L.icon(
    {
      iconUrl: LeafletProperties.PATH_TO_NO_DATA_MARKER,
      iconSize: [LeafletProperties.ICON_NO_DATA_SIZE, LeafletProperties.ICON_NO_DATA_SIZE],
      iconAnchor: [LeafletProperties.ICON_NO_DATA_SIZE/2, LeafletProperties.ICON_NO_DATA_SIZE],
    },
  );

  const marker = L.marker(
    {
      lat: DefaultNoDataLocation.X,
      lng: DefaultNoDataLocation.Y,
    },
    {
      icon: noDataIcon,
    },
  );

  marker.addTo(map);
  marker.bindPopup('Данные не загрузились');
}

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
      lat: hostel.location.lat,
      lng: hostel.location.lng,
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
