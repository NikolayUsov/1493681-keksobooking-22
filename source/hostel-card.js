import { declination } from './util.js';

const WORD_DECLINATION = {
  room: ['комната', 'комнаты', 'комнат'],
  guest: ['гостя', 'гостей', 'гостей'],
};
const typeTranslate = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
}

const createListItem = (arr, basicClass) => {
  const itemsFragment = document.createDocumentFragment();

  arr.forEach((elem) => {
    const modifyClass = `${basicClass}--${elem}`;
    const newElement = document.createElement('li');
    newElement.classList.add(basicClass, modifyClass);
    itemsFragment.appendChild(newElement);
  })

  return itemsFragment;
}

const addSrcFromArr = (arr, img) => {
  const imgFragment = document.createDocumentFragment();

  arr.forEach((elem) => {
    const picture = img.cloneNode(true);
    picture.src = elem;
    imgFragment.appendChild(picture);
  })

  return imgFragment;
}

const clearEmptyElement = (parentNode) => {
  const child = parentNode.children;

  for (let elem of child) {
    if (!elem.hasChildNodes() && elem.tagName !== 'IMG') {
      elem.remove();
    }
  }

  return parentNode;
}

export const createHostelCardElement = (hostel) => {
  const { offer, author } = hostel;
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
  } = offer;
  const { avatar } = author;

  const hostelCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const hostelCard = hostelCardTemplate.cloneNode(true);
  const avataImg = hostelCard.querySelector('.popup__avatar');
  avatar === '' ? avataImg.remove() : avataImg.src = avatar;
  hostelCard.querySelector('.popup__title').textContent = title;
  hostelCard.querySelector('.popup__text--address').textContent = address;
  hostelCard.querySelector('.popup__text--price').innerHTML = `${price} <span>₽/ночь</span`;
  hostelCard.querySelector('.popup__type').textContent = typeTranslate[type];
  hostelCard.querySelector('.popup__text--capacity').textContent = `${rooms} ${declination(rooms, WORD_DECLINATION.room)} для ${guests} ${declination(guests, WORD_DECLINATION.guest)}`;
  hostelCard.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  hostelCard.querySelector('.popup__description').textContent = description;

  const featuresList = hostelCard.querySelector('.popup__features');
  featuresList.innerHTML = '';
  const hostelFeaturesItems = createListItem(features, 'popup__feature');
  featuresList.appendChild(hostelFeaturesItems);

  const photoOfHostel = hostelCard.querySelector('.popup__photo');
  const hostelPhotoContainer = hostelCard.querySelector('.popup__photos');
  hostelPhotoContainer.innerHTML = ''
  hostelPhotoContainer.appendChild(addSrcFromArr(photos, photoOfHostel));

  return clearEmptyElement(hostelCard);
}
