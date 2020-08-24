import { internalAxios } from './internal.axios';
import { User } from '../models/user';

export const getAllTrainers = async () => {
    const response = internalAxios.get<User[]>('/user/role/trainer');
    return (await response).data;
}