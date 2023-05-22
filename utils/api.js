import axios from 'axios';

var api = axios.create({
  baseURL: 'https://127.0.0.8000/',
});

export const kakaoApi = {
  sendMessage: (params) => api.post('', params),
};
