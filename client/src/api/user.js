import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

export const signupApi = (data) => axios.post('/user', data);

export const loginApi = (data) => axios.post('/user/login', data);

export const infoAPi = (data) => axios.patch('/user/:user_id', data);

export const infoDeleteAPi = () => axios.delete('/user/:user_id');

export const logOutApi = () => axios.get('/user/logout');

export const tokenApi = () => axios.get('/user/token');
