import React, { PureComponent } from "react";
import { fetchTodos } from "../../store/actions/fetchTodos";
import TodoItem from "../TodoItem/TodoItem";
import { connect } from "react-redux";

class TodoList extends PureComponent {
  componentDidMount() {
    this.props.fetchTodos();
  }
  renderList = () => {
    console.log(this.props.todos);
    return this.props.todos.length === 0 ? (
      <div>loading</div>
    ) : (
      this.props.todos.map(todo => {
        console.log(todo);
        return <TodoItem todo={todo.todo} id={todo.id} date={todo.date} key={todo.id} />;
      })
    );
  };
  render() {
    return this.renderList();
  }
}
const mapStateToProps = state => {
  return { todos: state.fetchTodosReducer };
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
