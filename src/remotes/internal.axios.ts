import Axios from 'axios';

export const internalAxios = Axios.create({
    baseURL: 'http://localhost:8080'
});

export const authAxios = Axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});