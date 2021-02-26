const API_URL = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      onSuccess(data)
    })
    .catch(() => onError())
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
      } else {throw new Error()}
    })
    .catch(() => {
      onError()})

}

export {getData, sendData}
