import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.10:3000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'application/json',
    'Accept': 'application/json'
  }
})

export default api;