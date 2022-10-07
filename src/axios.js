import axios from 'axios'

axios.defaults.baseURL = 'http://photo-service/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
