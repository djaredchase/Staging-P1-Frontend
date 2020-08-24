import { Category } from './category';
import { Role } from './role';

export interface User {
    userId?: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    role: Role;
    category: Category;
}