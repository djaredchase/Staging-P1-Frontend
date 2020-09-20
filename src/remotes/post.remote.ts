import { internalAxios } from './internal.axios';
import { Post } from '../models/post';

export const getAllPosts = async () => {
    const response = await internalAxios.get<Post[]>('/post');
    return response.data;
}