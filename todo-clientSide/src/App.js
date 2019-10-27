import React, { PureComponent } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { fetchTodos } from "./store/actions/fetchTodos";
import { deleteTodo } from "./store/actions/deleteTodo";
import { addTodo } from "./store/actions/addTodo";
import { editTodo } from "./store/actions/editTodo";
class App extends PureComponent {
  componentDidMount() {
    this.props.fetchTodos();
  }

  removeTodo = id => {
    this.props.deleteTodo(id);
  };

  addTodo = formValues => {
    this.props.addTodo(formValues);
  };

  editTodo = (id, value) => {
    this.props.editTodo(id, value);
  };

  render() {
    console.log("app render");
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
            <TodoForm addTodo={this.addTodo} />
            <TodoList editTodo={this.editTodo} removeTodo={this.removeTodo} todos={todos} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return { todos: Object.values(state.combined) };
};

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo, addTodo, editTodo }
)(App);
