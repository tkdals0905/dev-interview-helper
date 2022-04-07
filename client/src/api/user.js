import axios from 'axios';

const signupApi = (data) => axios.post('http://localhost:4000/user', data);

export default signupApi;
