import { User } from './user';

export interface Post {
    id?: number;
    postedDate: Date;
    content: string;
    media: string;
    author: User;
    savedBy: User;
}