import { combineReducers } from 'redux';
import users from './users';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  users,
  currentUser
});

export default rootReducer;