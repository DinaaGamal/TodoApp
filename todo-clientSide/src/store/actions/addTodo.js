import { ADD_TODO } from './types';
import axios from 'axios';
import handleErrors from './handleErrors';

export const addTodo = (todo) => async (dispatch) => {
	try {
		const response = await axios.post('/url', { todo });
		dispatch({ type: ADD_TODO, payload: response.data });
	} catch (error) {
		dispatch(handleErrors(error));
	}
};
