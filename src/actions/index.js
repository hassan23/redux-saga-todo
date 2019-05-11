import {
  ADD_TODO,
  ADD_TODO_INIT,
  TOGGLE_INIT,
  TOGGLE_TODO,
  FETCH_TODO,
  CLEAR_COMPLETE,
  FETCH_ASYNC,
  CANCEL_ASYNC
} from '../const';

const addTodo = todo => ({ type: ADD_TODO, todo });

const addTodoInit = todo => ({ type: ADD_TODO_INIT, todo });

const toggleInit = id => ({ type: TOGGLE_INIT, id });

const toggleTodo = id => ({ type: TOGGLE_TODO, id });

const fetchTodo = () => ({ type: FETCH_TODO });

const clearComplete = () => ({ type: CLEAR_COMPLETE });

const fetchAsync = () => ({ type: FETCH_ASYNC, value: 5 });

const cancelAsync = () => ({ type: CANCEL_ASYNC });
export {
  addTodo,
  addTodoInit,
  toggleInit,
  toggleTodo,
  fetchTodo,
  clearComplete,
  fetchAsync,
  cancelAsync
};
