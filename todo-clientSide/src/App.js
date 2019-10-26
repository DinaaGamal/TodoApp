import React, { Component } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { fetchTodos } from "./store/actions/fetchTodos";
import { deleteTodo } from "./store/actions/deleteTodo";
class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos.length < this.props.todos.length) {
      this.props.fetchTodos();
    }
  }

  removeTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const { todos } = this.props;
    return (
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
        }}
        elevation={0}>
        <Grid container justify='center' style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm />
            <TodoList removeTodo={this.removeTodo} todos={todos} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.fetchTodosReducer };
};

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(App);
