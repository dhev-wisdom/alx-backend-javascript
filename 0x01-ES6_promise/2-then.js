/*export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  })
    .catch((err) => err);
}*/

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return { status: 200, body: 'success'}
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
