import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

export const postCardApi = (data) => axios.post('/card', data);
export const deleteCardApi = () => axios.delete('/card/:id');
export const getCardsApi = () => axios.get('/cards');
