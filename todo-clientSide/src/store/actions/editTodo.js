import { EDIT_TODO } from './types';
import axios from 'axios';
import handleErrors from './handleErrors';

export const editTodo = (id) => async (dispatch) => {
	try {
		const res = await axios.patch('/urk', id);
		dispatch({ type: EDIT_TODO, payload: res.data });
	} catch (error) {
		handleErrors(error);
	}
};
