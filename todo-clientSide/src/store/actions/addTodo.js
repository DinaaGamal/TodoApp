import { ADD_TODO } from "./types";
import axios from "axios";
import handleErrors from "./handleErrors";

export const addTodo = todo => async (dispatch, getState) => {
  try {
    console.log("todo", todo);
    const response = await axios.post("http://localhost:5000/todoApp/todo", todo);
    dispatch({ type: ADD_TODO, payload: response.data });
  } catch (error) {
    dispatch(handleErrors(error));
  }
};
