import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://api.mangadex.org/',
  timeout: 3000,
});

export default apiInstance;
