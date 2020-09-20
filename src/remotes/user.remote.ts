import { authAxios } from './internal.axios';
import { User } from '../models/user';

export const getAllTrainers = async () => {
    const response = await authAxios.get<User[]>('/user/role/trainer');
    return response.data;
}