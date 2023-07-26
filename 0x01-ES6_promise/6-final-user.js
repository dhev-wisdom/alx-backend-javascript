import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  Promise.all([signUpUser(), uploadPhoto()])
  .then((values) => {
    //return [{ status: }];
    console.log(values);
    return values;
  })
    .catch((err) => err);
}
