import {BASE_URL} from '@env';

export const endPoints = {
  getActivities: () => BASE_URL + '/api/v1/activities',
  createPost: () => BASE_URL + '/api/v1/post',
  signUpUser: () => BASE_URL + '/api/v1/signup',
  loginUser: () => BASE_URL + '/api/v1/login',
  otpVerification: () => BASE_URL + '/api/v1/verify_otp',
  getWeight: () => BASE_URL + '/api/v1/weightage',
  getProfile: () => BASE_URL + '/api/v1/profiles/:id',

  //Question Answers
  questionAnswers: () => BASE_URL + '/api/v1/question',

  //Photos Endpoints
  addPhoto: () => BASE_URL + '/api/v1/gallery_images',
  updatePhotos: id => BASE_URL + `/api/v1/gallery_images/${id}`,
  updateIntimatePrefs: id => BASE_URL + `/api/v1/profiles/${id}`,
  userInformation: () => BASE_URL + '/api/v1/confirm_user',

};
