import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const arr = [];
      let obj = {};
      values.forEach((value) => {
        obj = { status: value.status, value };
        arr.append(obj);
      });

      return arr;
    })
    .catch((err) => {
      console.error(err);
    });
}
