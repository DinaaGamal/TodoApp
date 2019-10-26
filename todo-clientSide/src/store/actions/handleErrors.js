import { CATCH_ERROR } from './types';
const handleError = (err) => ({
	type: CATCH_ERROR,
	payload: err
});
export default handleError;
