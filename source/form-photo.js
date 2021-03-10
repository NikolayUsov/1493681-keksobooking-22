import { createImgElement } from './util.js';

const IMG_FORMAT = ['image/jpg', 'image/png', 'image/svg', 'image/jpeg', 'image/svg+xml'];
const HOSTEL_PHOTO_ALT = 'Фотография вашего объекта';
const DEFAULT_SRC = 'img/muffin-grey.svg';

const avatarPreviewPicture = document.querySelector('.ad-form-header__preview');
const avatarPreviewUpLoader = document.querySelector('.ad-form-header__input');
const hostelPreviewPicture = document.querySelector('.ad-form__photo');
const hostelPreviewUploader = document.querySelector('.ad-form__input');

const onUploadChange = (upload, preview) => {
  const file = upload.files[0];
  const fileType = file.type;
  const matches = IMG_FORMAT.includes(fileType);

  if (preview.children.length === 0 && matches) {
    preview.appendChild(createImgElement(HOSTEL_PHOTO_ALT, 70, 70));
  }

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      preview.children[0].src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}

const clearPhotoPreview = () => {
  const avatarImg = avatarPreviewPicture.querySelector('img');
  avatarImg.src = DEFAULT_SRC;
  hostelPreviewPicture.innerHTML = '';
}

hostelPreviewUploader.addEventListener('change', () => onUploadChange(hostelPreviewUploader, hostelPreviewPicture))
avatarPreviewUpLoader.addEventListener('change', () => onUploadChange(avatarPreviewUpLoader, avatarPreviewPicture))

export { clearPhotoPreview };
