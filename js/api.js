const SERVER_URL = 'https://22.javascript.pages.academy/keksobooking';

const getData = (url,onSuccess, onError) => {
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      onSuccess(data)
    })
    .catch(() => onError())
}

const sendData = (onSuccess, onError, data) => {
  fetch(SERVER_URL,
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
