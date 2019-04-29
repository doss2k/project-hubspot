import { combineReducers } from 'redux';
import companiesReducer from './companiesReducers';
import dealsReducer from './dealsReducer';

export default combineReducers({
  companiesReducer,
  dealsReducer
});