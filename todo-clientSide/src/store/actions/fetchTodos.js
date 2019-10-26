import { FETCH_TODOS } from "./types";
import axios from "axios";
import handleErrors from "./handleErrors";

export const fetchTodos = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/todoApp/todos");
    console.log(res.data);
    dispatch({ type: FETCH_TODOS, payload: res.data });
  } catch (error) {
    handleErrors(error);
  }
};
