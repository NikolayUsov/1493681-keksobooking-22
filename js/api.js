const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      onSuccess(jsonData)
    })
}

const sendData = (onSuccess, onError, data) => {
  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess()
      } else { throw new Error()}
    })
    .catch(() => {
      onError()})

}

export {getData, sendData}
