import { combineReducers } from 'redux';
import companiesReducer from './companiesReducers';
import dealsReducer from './dealsReducer';
import dashboardReducer from './dashboardReducers';

export default combineReducers({
  companiesReducer,
  dealsReducer,
  dashboardReducer
});