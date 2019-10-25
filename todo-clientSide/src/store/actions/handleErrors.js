import { CATCH_ERROR } from './types';

export default (handleError = (err) => ({
	type: CATCH_ERROR,
	payload: err
}));
