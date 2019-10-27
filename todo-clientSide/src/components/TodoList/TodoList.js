import React from "react";
import TodoItem from "../../containers/TodoItem/TodoItem";
import { Paper, List } from "@material-ui/core";

function TodoList(props) {
  const { todos, removeTodo, editTodo } = props;
  if (todos.length) {
    console.log("List render");
    return (
      <Paper>
        <List>
          {todos.map(todo => {
            return (
              <React.Fragment key={todo.id}>
                <TodoItem
                  editTodo={editTodo}
                  removeTodo={removeTodo}
                  todo={todo.todo}
                  id={todo.id}
                  date={todo.date}
                />
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default TodoList;
