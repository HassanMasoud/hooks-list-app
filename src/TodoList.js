import React from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              key={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
