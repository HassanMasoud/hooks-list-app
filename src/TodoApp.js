import React, { useState } from "react";
import TodoList from "./TodoList";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Walk the dog", completed: false },
    { id: 2, task: "Grow beard", completed: true },
    { id: 3, task: "Clean room", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
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
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
