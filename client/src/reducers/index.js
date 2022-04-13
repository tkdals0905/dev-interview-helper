import { combineReducers } from 'redux';
import user, { LOG_IN_SUCCESS, LOG_OUT_SUCCESS } from './user';
import card, { UNSELECT_ALL_CARDS } from './card';

export const logoutThunk = () => (dispatch) => {
  dispatch({
    type: LOG_OUT_SUCCESS,
  });
  dispatch({
    type: UNSELECT_ALL_CARDS,
  });
};

export const loginThunk = (data) => (dispatch) => {
  dispatch({
    type: LOG_IN_SUCCESS,
    data,
  });
  dispatch({
    type: UNSELECT_ALL_CARDS,
  });
};
const rootReducer = combineReducers({
  card,
  user,
});

export default rootReducer;
