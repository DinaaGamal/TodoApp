import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { connect } from "react-redux";
import { editTodo } from "../../store/actions/editTodo";
class TodoItem extends Component {
  state = { isEditing: false, completed: false };
  toggle = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  toggleTodo = () => {
    this.setState({ completed: !this.state.completed });
  };
  editTodoItem = (id, value) => {
    this.props.editTodo(id, value);
  };
  render() {
    const { todo, id, removeTodo } = this.props;
    const { completed, isEditing } = this.state;
    return (
      <ListItem style={{ height: "64px" }}>
        {isEditing ? (
          <EditTodoForm editTodo={this.editTodoItem} id={id} todo={todo} toggleEditForm={this.toggle} />
        ) : (
          <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => this.toggleTodo()} />
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
              {todo}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label='Edit' onClick={this.toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    );
  }
}
const mapStateToProps = state => {
  return { editTodo: state.editTodoReducer };
};
export default connect(
  mapStateToProps,
  { editTodo }
)(TodoItem);
