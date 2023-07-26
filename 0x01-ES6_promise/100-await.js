import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const photo = await uploadPhoto();
  const user = await createUser();
  if (photo && user) {
    return { photo, user };
  }
  return { photo: null, user: null };
};

export default asyncUploadUser;
