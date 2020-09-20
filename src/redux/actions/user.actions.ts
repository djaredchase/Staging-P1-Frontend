import { User } from "../../models/user"

export const login = (credentials: User) => {
    return {
        type: 'LOGIN',
        payload: credentials
    }
}

export const clearUser = () => {
    return {
        type: 'LOGOUT'
    }
}