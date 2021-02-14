import {sklonenie} from './util.js'

const typeTranslete =  {
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
  let imgFragment = document.createDocumentFragment();

  arr.forEach((elem) => {
    let picture = img.cloneNode(true);
    picture.src = elem;
    imgFragment.appendChild(picture);
  })

  return imgFragment;
}

export const createHostelCardElement = (hostel) => {

  const hostelCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  let hostelCard = hostelCardTemplate.cloneNode(true);

  hostelCard.querySelector('.popup__avatar').src = hostel.author.avatar
  hostelCard.querySelector('.popup__title').textContent = hostel.offer.title;
  hostelCard.querySelector('.popup__text--address').textContent = hostel.offer.address;
  hostelCard.querySelector('.popup__text--price').innerHTML = `${hostel.offer.price} <span>₽/ночь</span`;
  hostelCard.querySelector('.popup__type').textContent = typeTranslete[hostel.offer.type];
  hostelCard.querySelector('.popup__text--capacity').textContent = `${hostel.offer.rooms} ${sklonenie(hostel.offer.rooms, ['комната', 'комнаты','комнтат'])} для ${hostel.offer.guests} ${sklonenie(hostel.offer.guests, ['гостя', 'гостей','гостей'])}`;
  hostelCard.querySelector('.popup__text--time').textContent = `Заезд после ${hostel.offer.checkin}, выезд до ${hostel.offer.checkout}`;
  hostelCard.querySelector('.popup__description').textContent = hostel.offer.description;

  const featuresList = hostelCard.querySelector('.popup__features');
  featuresList.innerHTML = '';
  const hostelFeaturesItems = createListItem(hostel.offer.features, 'popup__feature');
  featuresList.appendChild(hostelFeaturesItems);

  let photoOfHostel = hostelCard.querySelector('.popup__photo');
  const hostelPhotoContainer = hostelCard.querySelector('.popup__photos');
  hostelPhotoContainer.innerHTML = ''
  hostelPhotoContainer.appendChild(addSrcFromArr(hostel.offer.photos, photoOfHostel));

  return hostelCard
}
