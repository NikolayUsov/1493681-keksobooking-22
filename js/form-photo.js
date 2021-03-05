import {createImgElement} from './util.js'

const avatarPreviewPicture = document.querySelector('.ad-form-header__preview');
const avatarPreviewUpLoader = document.querySelector('.ad-form-header__input');
const hostelPreviewPicture = document.querySelector('.ad-form__photo');
const hostelPreviewUploader = document.querySelector('.ad-form__input');
const IMG_FORMAT = ['image/jpg', 'image/png', 'image/svg', 'image/jepg', 'image/svg+xml'];
const HOSTEL_PHOTO_ALT = 'Фотография вашего объекта';

const onUploadeChange = (upload, preview) => {
  const file = upload.files[0];
  const fileType = file.type;
  const matches = IMG_FORMAT.includes(fileType)

  if (preview.children.length === 0 && matches) {
    preview.appendChild(createImgElement(HOSTEL_PHOTO_ALT, 70, 70))
  }

  if (matches) {
    const reader = new FileReader
    reader.addEventListener('load', () => {
      // до этого тут было написано  preview.firstChild.src не понял почему с первой картинкой не работало
      preview.children[0].src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}

hostelPreviewUploader.addEventListener('change', () => onUploadeChange(hostelPreviewUploader, hostelPreviewPicture))
avatarPreviewUpLoader.addEventListener('change', () => onUploadeChange(avatarPreviewUpLoader, avatarPreviewPicture))
