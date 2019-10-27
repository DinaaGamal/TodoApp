import { combineReducers } from "redux";
import combined from "./combined";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  form: formReducer,
  combined
});
