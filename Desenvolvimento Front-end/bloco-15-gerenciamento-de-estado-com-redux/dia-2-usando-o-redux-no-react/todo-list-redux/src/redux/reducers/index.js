import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO, STATE_BUTTON } from "../actions";

const TODO_LIST = [];

const todoListReducer = (state = TODO_LIST, action) => {
  switch (action.type) {
    case ADD_TODO: 
      return [...state, action.todo];
    case REMOVE_TODO: 
      return state.filter((todo) => todo !== action.todo);
    default:
      return state;
  }
};

const REMOVE_BUTTON = true;

const removeButtonReducer = (state = REMOVE_BUTTON, action) => {
  switch (action.type) {
    case STATE_BUTTON:
      return !action.state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ todoListReducer, removeButtonReducer });

export default rootReducer;
