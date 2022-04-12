import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

export const signupApi = (data) => axios.post('/user', data);

export const loginApi = (data) => axios.post('/user/login', data);

export const editNameApi = (data) => axios.patch('/user/username', data);

export const deleteUserApi = () => axios.delete('/user');

export const changePWDApi = (data) => axios.patch('/user/password', data);

export const logOutApi = () => axios.get('/user/logout');

export const tokenApi = () => axios.get('/user/token');
