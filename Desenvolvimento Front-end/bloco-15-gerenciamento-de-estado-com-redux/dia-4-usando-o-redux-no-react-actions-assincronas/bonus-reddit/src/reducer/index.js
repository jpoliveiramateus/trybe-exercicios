import { combineReducers } from 'redux';
import { ERROR_REDDIT, FETCH_REDDIT, REQUEST_REDDIT } from '../actions';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: null,
};

const reducerReddit = (state = INITIAL_STATE, action) => {
  switch(action?.type) {
    case REQUEST_REDDIT:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_REDDIT:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case ERROR_REDDIT:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ reddit: reducerReddit })

export default rootReducer;
