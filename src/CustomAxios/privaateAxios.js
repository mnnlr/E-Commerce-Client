import axios from 'axios';

// const BASE_URL = 'http://localhost:8000'
const BASE_URL = 'https://diwali-e-commerce-backend-n2a2.onrender.com'

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

