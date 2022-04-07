import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

const signupApi = (data) => axios.post('/user', data);

export default signupApi;
