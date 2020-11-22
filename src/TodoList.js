import React from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";

function TodoList({ todos, removeTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              key={todo.id}
              removeTodo={removeTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
