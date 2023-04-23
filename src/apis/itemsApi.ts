import axios from 'axios';

const itemsApi = axios.create({
  baseURL: 'https://64410437fadc69b8e0787d07.mockapi.io/api/',
});

export default itemsApi;
