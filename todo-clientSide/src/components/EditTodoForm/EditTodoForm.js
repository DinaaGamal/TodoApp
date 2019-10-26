import React, { Component } from "react";
import { TextField, Paper } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";

class EditTodoForm extends Component {
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
    console.log(this.props.id, formValues.updatedTodo);
    this.props.editTodo(this.props.id, formValues.updatedTodo);
    this.props.reset();
    this.props.toggleEditForm();
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field name='updatedTodo' component={this.renderTextField} label='Edit Todo ...' />
          </div>
        </form>
      </Paper>
    );
  }
}

export default reduxForm({
  form: "editform"
})(EditTodoForm);
