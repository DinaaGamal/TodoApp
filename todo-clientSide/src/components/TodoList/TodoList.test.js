import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<TodoList />);
});
it('has a text that says TodoList', () => {
	expect(wrapped.find('div').length).toEqual(1);
});

it('has a text that says TodoList', () => {
	expect(wrapped.find('div').text()).toContain('todolist');
});
