import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/loginReducer';
import { plantReducer } from '../reducers/plantReducer';

export const allReducers = combineReducers({loginReducer, plantReducer});