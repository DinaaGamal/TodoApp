import { ADD_TODO, CATCH_ERROR } from '../actions/types';
const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [ ...state ];
		case CATCH_ERROR:
			return { error: action.payload };
		default:
			return state;
	}
};
