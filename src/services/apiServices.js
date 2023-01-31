import axios from 'axios';
import {BASE_URL} from '@env';

export const getData = axios.create({
  baseURL: BASE_URL,
  method: 'GET',
  withCredentials: true,
  timeout: 5000,
});

export const postData = axios.create({
  baseURL: BASE_URL,
  method: 'POST',
  withCredentials: true,
  timeout: 5000,
});

export const putData = axios.create({
  baseURL: BASE_URL,
  method: 'PUT',
  withCredentials: true,
  timeout: 5000,
});
