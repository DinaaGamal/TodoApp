import React from 'react';
import TodoForm from './TodoForm';
import { shallow } from 'enzyme';

let wrapped;
beforeEach(() => {
	wrapped = shallow(<TodoForm />);
});
it('has a test that says TodoForm', () => {
	expect(wrapped.find('div').length).toEqual(1);
});

it('has a text that says TodoForm', () => {
	expect(wrapped.find('div').text()).toContain('TodoForm');
});
