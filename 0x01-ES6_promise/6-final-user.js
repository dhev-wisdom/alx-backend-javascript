import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(), uploadPhoto()])
  .then((value) => {
    console.log(value);
    return [{ status: value.status, value}];
  })
    .catch((err) => err);
}
