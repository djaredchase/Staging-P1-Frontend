import { userReducer } from './user.reducer';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    user: userReducer
});