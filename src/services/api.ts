import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-seven-khaki.vercel.app/',
});

export default api;
