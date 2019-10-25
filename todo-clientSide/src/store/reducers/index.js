import { combineReducers } from 'redux';

import addTodoReducer from './addTodo';
import editTodoReducer from './editTodo';
import deleteTodoReducer from './deleteTodo';
import fetchTodosReducer from './fetchTodos';

import { reducer as formReducer } from 'redux-form';
export default combineReducers({
	form: formReducer,
	addTodoReducer,
	deleteTodoReducer,
	editTodoReducer,
	fetchTodosReducer
});
