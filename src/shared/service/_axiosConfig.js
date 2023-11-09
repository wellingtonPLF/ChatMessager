/* eslint-disable */
import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'http://192.168.0.7:3000/',
  // withCredentials: true,
  // headers: {
  //   'X-CSRF-Token': '{{ csrftoken }}',
  //   'Content-Type': 'application/json'
  // },
});

export default api;
