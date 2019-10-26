import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../store/actions/fetchTodos";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const dispatch = useDispatch();

  /////////////useEffect hook/ #component did mountreplacement////////////////
  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = () => {
    dispatch(fetchTodos());
  };
  /////////this expression instead of below one/////////////
  // mapStateToProps = (state) => {
  //  return {todos: state.fetchTodosReducer}
  // }
  const todos = useSelector(state => {
    return state.fetchTodosReducer;
  });

  return todos.map(todo => {
    return <TodoItem />;
  });
}

export default TodoList;
