import { FETCH_TODOS } from './types';
import axios from 'axios';
import handleErrors from './handleErrors';

export const fetchTodos = async (dispatch) => {
	try {
		const res = await axios.get('/todoApp/todos');
		dispatch({ type: FETCH_TODOS, payload: res.data });
	} catch (error) {
		handleErrors(error);
	}
};
