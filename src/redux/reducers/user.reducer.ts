import { Role } from '../../models/role';
import { Category } from '../../models/category';
import { User } from '../../models/user';

const initialState: UserState = {
    authenticated: false,
    firstName: '',
    lastName: '',
    email: '',
    role: {
        id: 0,
        role: ''
    },
    category: {
        id: 0,
        category: ''
    }
}

export const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                authenticated: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                role: action.payload.role.role,
                category: action.payload.category.category
            }
        case 'LOGOUT':
            console.log('action dispatched, clearing user in reducer');
            return initialState;
        default:
            return state;
    }
}

interface UserState {
    authenticated: boolean,
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    category: Category;
}

interface UserAction {
    type: string,
    payload: User
}