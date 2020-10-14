import { authAxios } from './internal.axios';
import { Post } from '../models/post';

export const getAllPosts = async () => {
    const response = await authAxios.get<Post[]>('/post');
    return response.data;
}