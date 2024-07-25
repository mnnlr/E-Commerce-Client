
import axios from 'axios';

const defaultAxios = axios.create({
    // baseURL: 'http://localhost:3002',
    baseURL: 'https://diwali-e-commerce-backend-n2a2.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export { defaultAxios };