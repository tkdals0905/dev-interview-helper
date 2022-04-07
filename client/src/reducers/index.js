import { combineReducers } from 'redux';
import user from './user';
import card from './card';

const rootReducer = combineReducers({
  card,
  user,
});

export default rootReducer;
