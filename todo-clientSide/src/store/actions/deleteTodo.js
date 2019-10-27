import { DELETE_TODO } from "./types";
import axios from "axios";
import handleErrors from "./handleErrors";

export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/todoApp/todo/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
  } catch (error) {
    handleErrors(error);
  }
};
