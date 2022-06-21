/* eslint-disable no-nested-ternary */
/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import {
  REGISTER, LOGIN, REMOVE_CLIENT, ORDER,
} from '../actions';

const LOGIN_STATE = {
  email: '',
  password: '',
};

const reducerLogin = (state = LOGIN_STATE, action) => {
  switch (action?.type) {
    case LOGIN:
      return { ...state, email: action.login.email, password: action.login.password };
    default:
      return state;
  }
};

const REGISTERED = [];

const reducerRegister = (state = REGISTERED, action) => {
  switch (action?.type) {
    case REGISTER:
      return [...state, action.info];
    case REMOVE_CLIENT:
      return state.filter((client) => client.email !== action.client);
    case ORDER:
      return state
        .sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return nameA > nameB ? 1 : nameB > nameA ? -1 : 0;
        });
    default:
      return state;
  }
};

const rootReducer = combineReducers({ reducerLogin, reducerRegister });

export default rootReducer;
