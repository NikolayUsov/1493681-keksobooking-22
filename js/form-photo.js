const avatarContainer = document.querySelector('.ad-form-header__preview');
const avataPictutePreview = avatarContainer.querySelector('img');
const avatarPreviewUpLoader = document.querySelector('.ad-form-header__input');
const IMG_FORMAT = ['image/jpg', 'image/png', 'image/svg', 'image/jepg', 'image/svg+xml'];

const onUploadeChange = (upload, preview) => {
  const file = upload.files[0];
  const fileType =file.type;
  const matches = IMG_FORMAT.includes(fileType)

  if (matches) {
    const reader = new FileReader
    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}


avatarPreviewUpLoader.addEventListener('change', () => onUploadeChange(avatarPreviewUpLoader, avataPictutePreview))
