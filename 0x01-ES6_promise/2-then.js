export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
