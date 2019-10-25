import React from 'react';
import TodoItem from './TodoItem';
import { shallow } from 'enzyme';

let wrapped;
beforeEach(() => {
	wrapped = shallow(<TodoItem />);
});
it('has a test that says TodoItem', () => {
	expect(wrapped.find('div').length).toEqual(1);
});

it('has a text that says TodoList', () => {
	expect(wrapped.find('div').text()).toContain('TodoItem');
});
