export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const STATE_BUTTON = 'STATE_BUTTON';

export const addTodo = (todo) => ({ type: ADD_TODO, todo });
export const removeTodo = (todo) => ({ type: REMOVE_TODO, todo });
export const stateButton = (state) => ({ type: STATE_BUTTON, state });
