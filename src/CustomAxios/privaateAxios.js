import axios from 'axios';

// const BASE_URL = 'http://localhost:3500'
const BASE_URL = 'https://diwali-e-commerce-backend.onrender.com'

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

