import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const VITE_API_URL = process.env.VITE_API_URL;

const API = axios.create({ baseURL: VITE_API_URL});

export const register = (data) => API.post('auth/register', data);
export const login = (data) => API.post('auth/login', data);
    