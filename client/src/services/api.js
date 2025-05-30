import axios from 'axios';

const api = axios.create({
  baseURL: 'https://trabalho-final-lpi.onrender.com/livros',
});

export default api;
