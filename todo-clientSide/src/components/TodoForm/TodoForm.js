import React from 'react';
import { TextField, Paper, Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo} from '../../store/actions/addTodo';

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
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

function TodoForm(props) {
	const { handleSubmit, pristine, reset, submitting, classes } = props;
	//new redux hooks for dispatch action 
	const dispatch = useDispatch();
	// useEffect(() => {
	// }, []);

	const onFormSubmit = (formValues) => {
		const res = dispatch(addTodo(formValues));
		console.log(res);
	};

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<div>
					<Field name="todo" component={renderTextField} label="Add Todo ..." />
				</div>
				<div>
					<Button variant="contained" color="primary" type="submit" disabled={pristine || submitting}>
						Submit
					</Button>
					<Button
						variant="contained"
						color="default"
						type="button"
						disabled={pristine || submitting}
						onClick={reset}
					>
						Reset
					</Button>
				</div>
			</form>
		</Paper>
	);
}

export default reduxForm({
	form: 'reduxform'
})(TodoForm);
