//import { createHostelData } from './data.js';
import { createHostelCardElement } from './hostel-card.js';


const testHostel = {
  author: {
    avatar: 'img/avatars/user04.png',
  },
  offer: {
    title: 'Аппарт дворец в Геленджике',
    address: '35.66622 139.71943',
    price: 62125,
    type: 'house',
    rooms: 6,
    guests: 14,
    checkin: '14:00',
    checkout: '13:00',
    features: ['elevator', 'conditioner', 'washer'],
    description: 'Это раскошное  место c кондиционером вознесет тебя до небес',
    photos: [
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg'],
  },
  location: {
    x: 35.66622,
    y: 139.71943,
  },
};

// eslint-disable-next-line no-console
console.log(testHostel.offer.features);


// eslint-disable-next-line no-console
console.log(testHostel)

createHostelCardElement(testHostel);


//let hostelCard = createHostelCardElement(hostel);
// eslint-disable-next-line no-console

//const mapCanvas = document.querySelector('.map__canvas');

//mapCanvas.appendChild(hostelCard);

