import { internalAxios } from './internal.axios';
import { User } from '../models/user';
import { Login } from '../models/login';

export const registerUser = async (user: User) => {
    const response = await internalAxios.post<User>('/api/auth/signup', user);
    return response.data;
}

export const loginUser = async (credentials: Login) => {
    const response = await internalAxios.post<Login>('/api/auth/login', credentials);
    return response.data;
}