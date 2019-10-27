import React, { Component } from "react";
import { TextField, Paper } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import Moment from "moment";
import uuid from "uuid/v4";

class TodoForm extends Component {
  // should be functionla component but creates a bug in redux-form
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
    this.props.reset();
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field name='todo' component={this.renderTextField} label='Add Todo ...' />
          </div>
        </form>
      </Paper>
    );
  }
}
// const mapStateToProps = state => {
//   return { addTodo: state.addTodoReducer };
// };
// const withForm =
export default reduxForm({
  form: "reduxform"
})(TodoForm);

// export default connect(
//   mapStateToProps,
//   { addTodo }
// )(withForm);
