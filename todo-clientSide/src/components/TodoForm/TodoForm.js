import React, { Component } from "react";
import { TextField, Paper } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { addTodo } from "../../store/actions/addTodo";
import Moment from "moment";
import uuid from "uuid/v4";
import { connect } from "react-redux";

class TodoForm extends Component {
  //text field//
  renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      fullWidth
    />
  );
  //submit//
  onFormSubmit = formValues => {
    //req body//
    const todo = {
      id: uuid(),
      todo: formValues.todo,
      date: Moment().format()
    };
    this.props.addTodo(todo);
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field name='todo' component={this.renderTextField} label='Add Todo ...' />
          </div>
          <div></div>
        </form>
      </Paper>
    );
  }
}
const mapStateToProps = state => {
  return { addTodo: state.addTodoReducer };
};
const withForm = reduxForm({
  form: "reduxform"
})(TodoForm);

export default connect(
  mapStateToProps,
  { addTodo }
)(withForm);
