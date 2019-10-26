import React, { Component } from "react";
// import { fetchTodos } from "../../store/actions/fetchTodos";
// import { deleteTodo } from "../../store/actions/deleteTodo";
import TodoItem from "../TodoItem/TodoItem";
// import { connect } from "react-redux";
import { Paper, List } from "@material-ui/core";

class TodoList extends Component {
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

  // removeTodo = id => {
  //   this.props.deleteTodo(id);
  // };

  render() {
    const { todos, removeTodo } = this.props;
    if (todos.length) {
      return (
        <Paper>
          <List>
            {todos.map(todo => {
              return (
                <React.Fragment key={todo.id}>
                  <TodoItem removeTodo={removeTodo} todo={todo.todo} id={todo.id} date={todo.date} />
                </React.Fragment>
              );
            })}
          </List>
        </Paper>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default TodoList;
// export default connect(
//   mapStateToProps,
//   { fetchTodos, deleteTodo }
// )(TodoList);
