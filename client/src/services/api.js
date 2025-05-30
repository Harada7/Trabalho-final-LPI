import axios from 'axios';

const api = axios.create({
  baseURL: 'https://TRABALHO_FINAL_LPI/livros'
});

export default api;
