import { EDIT_TODO, CATCH_ERROR } from "../actions/types";
const INITIAL_STATE = {
  todo: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_TODO:
      return { ...state, todo: action.payload };

    case CATCH_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
