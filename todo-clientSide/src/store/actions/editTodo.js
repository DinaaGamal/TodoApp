import { EDIT_TODO } from "./types";

import axios from "axios";
import handleErrors from "./handleErrors";

export const editTodo = (id, value) => async dispatch => {
  try {
    const res = await axios.patch(`http://localhost:5000/todoApp/todo/${id}`, { todo: value });
    dispatch({ type: EDIT_TODO, payload: res.data });
  } catch (error) {
    handleErrors(error);
  }
};
