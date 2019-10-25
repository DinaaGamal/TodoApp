import { DELETE_TODO } from './types';
import axios from 'axios';
import handleErrors from './handleErrors';

export const deleteTodo = (id) => async (dispatch) => {
	try {
		const res = await axios.delete('/urk', id);
		dispatch({ type: DELETE_TODO, payload: res.data });
	} catch (error) {
		handleErrors(error);
	}
};
