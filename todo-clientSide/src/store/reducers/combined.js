import _ from "lodash";
import { FETCH_TODOS, CATCH_ERROR, ADD_TODO, DELETE_TODO, EDIT_TODO } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TODO:
      return _.omit(state, action.payload);
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case CATCH_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
