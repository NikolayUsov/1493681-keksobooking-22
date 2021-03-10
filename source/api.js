const API_URL = 'https://22.javascript.pages.academy/keksobooking';
const GET_DATA_ERROR_TEXT = 'Ошибка при загрузке данных';

const getData = (onSuccess, onError) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      onSuccess(data)
    })
    .catch(() => onError(GET_DATA_ERROR_TEXT))
}

const sendData = (onSuccess, onError, data) => {
  fetch(API_URL,
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess()
      } else { throw new Error() }
    })
    .catch(() => {
      onError()
    })

}

export { getData, sendData };
