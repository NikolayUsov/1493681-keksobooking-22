
const translateType = (elem) => {

  switch (elem) {
    case 'palace':
      elem = 'Дворец';
      break;
    case 'flat':
      elem = 'Квартира';
      break;
    case 'house':
      elem = 'Дом';
      break;
    case 'bungalow':
      elem = 'Бунгало'
  }
  return elem;
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

export const createHostelCardElement = (hostel) => {
  const mapCanvas = document.querySelector('.map__canvas');
  const hostelCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  let hostelCard = hostelCardTemplate.cloneNode(true);

  hostelCard.querySelector('.popup__avatar').src = hostel.author.avatar
  hostelCard.querySelector('.popup__title').textContent = hostel.offer.title;
  hostelCard.querySelector('.popup__text--address').textContent = hostel.offer.address;
  hostelCard.querySelector('.popup__text--price').innerHTML = `${hostel.offer.price} <span>₽/ночь</span`;
  hostelCard.querySelector('.popup__type').textContent = translateType(hostel.offer.type);
  hostelCard.querySelector('.popup__text--capacity').textContent = `${hostel.offer.rooms} комнаты для ${hostel.offer.guests} гостей`;
  hostelCard.querySelector('.popup__text--time').textContent = `Заезд после ${hostel.offer.checkin}, выезд до ${hostel.offer.checkout}`;
  hostelCard.querySelector('.popup__description').textContent = hostel.offer.description;

  const featuresList = hostelCard.querySelector('.popup__features');
  featuresList.innerHTML = '';
  const hostelFeaturesItems = createListItem(hostel.offer.features, 'popup__feature');
  featuresList.appendChild(hostelFeaturesItems);


  let photoOfHostel = hostelCard.querySelector('.popup__photo').cloneNode();
  const hostelPhotoContainer = hostelCard.querySelector('.popup__photos');
  hostelPhotoContainer.innerHTML = ''
  hostel.offer.photos.forEach((elem) => {
    photoOfHostel.src = elem;
    hostelPhotoContainer.appendChild(photoOfHostel);

    mapCanvas.append(hostelCard);
  })


}
