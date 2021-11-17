import axios from 'axios';

const axiosRequest = axios.create({
  baseURL: 'https://cocktail-calculator-8dbee-default-rtdb.firebaseio.com/',
});

export default axiosRequest;
