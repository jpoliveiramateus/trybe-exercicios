/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import { REGISTER, LOGIN } from '../actions';

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
    default:
      return state;
  }
};

const rootReducer = combineReducers({ reducerLogin, reducerRegister });

export default rootReducer;
