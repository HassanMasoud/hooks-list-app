import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import { v4 as uuid } from "uuid";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Walk the dog", completed: false },
    { id: 2, task: "Grow beard", completed: true },
    { id: 3, task: "Clean room", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODO LIST WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
